const low = require("lowdb");
const Fuse = require("fuse.js");
const FileSync = require("lowdb/adapters/FileSync");
const _ = require("lodash");
const adapter = new FileSync("db.json");
const db = low(adapter);
const maxResults = 100;
const { DateTime } = require("luxon");

const epgUtils = (programs, epgFilters) => {
  const modifiedPrograms = programs.map((program) => {
    if (
      program.airTimestamp <= now &&
      now <= program.airTimestamp.plus({ seconds: program.durationInSeconds })
    ) {
      program.isLive = true;
    }
    return program;
  });

  if (epgFilters.now) {
    return modifiedPrograms.filter((program) => program.isLive);
  }

  if (epgFilters.upNext) {
    return modifiedPrograms.filter((program) => now <= program.airTimestamp);
  }

  if (epgFilters.justEnded) {
    return modifiedPrograms
      .filter(
        (program) =>
          program.airTimestamp <= now &&
          now >=
            program.airTimestamp.plus({ seconds: program.durationInSeconds })
      )
      .reverse();
  }

  if (epgFilters.forDay) {
    return modifiedPrograms.filter((program) => {
      return (
        program.airTimestamp.ordinal ==
        DateTime.fromMillis(Number(epgFilters.forDay)).ordinal
      );
    });
  }

  return modifiedPrograms;
};

db._.mixin({
  epgUtils,
  fuse: (items, searchString) => {
    if (searchString) {
      const fuse = new Fuse(items, {
        keys: ["id", "title", "summary"],
      });
      const result = fuse.search(searchString).map(({ item }) => item);
      return result;
    }
    return items;
  },
});

const calculateLimit = (limit) =>
  limit && Number(limit) < maxResults ? Number(limit) : maxResults;

const now = DateTime.local();
const startOfWeek = now.startOf("week");

module.exports.getMediaItems = ({
  filters,
  sorts,
  maxPage,
  perPage,
  page,
  q,
}) => {
  const baseQuery = db.get("media").filter(filters).fuse(q).sortBy(sorts);
  const total = baseQuery.size().value();
  let nextPage;
  const currentPage = _.defaultTo(page, 1);
  currentPerPage = _.defaultTo(perPage, 20);
  currentMaxPage = _.defaultTo(maxPage, 100);
  if (currentPage > currentMaxPage) return { items: [] };

  if (currentMaxPage > currentPage && total > currentPage * currentPerPage) {
    nextPage = Number(currentPage) + 1;
  }
  console.log({ currentPerPage });
  return {
    nextPage,
    items: baseQuery
      .map((item) => {
        if (item.startsOn) {
          item.startsOnTimestamp = startOfWeek.plus(item.startsOn);
        }
        return item;
      })
      .drop((currentPage - 1) * currentPerPage)
      .take(currentPerPage)
      .value(),
  };
};

module.exports.getPrograms = ({ filters, epgFilters, limit }) => {
  return {
    items: db
      .get("programs")
      .filter(filters)
      .map((program) => {
        program.airTimestamp = startOfWeek.plus(program.airTime);
        return program;
      })
      .epgUtils(epgFilters)
      //   .filter(setEpgFilter)
      .take(calculateLimit(limit))
      .value(),
  };
};

module.exports.getCollectionByName = ({ name }) => {
  const collections = {
    homeFeatured: {
      items: db
        .get("media")
        .filter((item) => item.type === "episode" || item.type === "series")
        .shuffle()
        .take(1),
    },

    featuredDrama: {
      items: db
        .get("media")
        .filter((item) => item.type === "series" && item.category === "Drama")
        .shuffle()
        .take(6),
    },

    featuredAction: {
      items: db
        .get("media")
        .filter((item) => item.type === "series" && item.category === "Action")
        .shuffle()
        .take(6),
    },

    genres: {
      items: [{ id: "drama", title: "Drama" }],
    },
  };
  return { items: collections[name].items.value() };
};

module.exports.getUserCollectionByName = ({ name, userToken }) => {
  const getUserIdByToken = (token) => {
    // On a real server you would query your db to find the user
    return "userId1";
  };

  const usersMock = {
    userId1: {
      // randomly pick 4 episodes
      myFavorites: db
        .get("media")
        .filter((item) => item.type === "episode")
        .shuffle()
        .take(4)
        .map(({ id }) => ({ id }))
        .value(),
    },
  };

  const userId = getUserIdByToken(userToken);
  const collections = {
    myFavorites: {
      items: db
        .get("media")
        .intersectionBy(usersMock[userId].myFavorites, "id"),
    },
  };

  return { items: collections[name].items.value() };
};