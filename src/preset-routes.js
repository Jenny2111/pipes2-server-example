const absoluteReqBasePath = process.env.BASE_URL || "http://localhost:3000/";

module.exports.setup = (app) => {
  app.get("/preset-videos", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 3600,
              "genre": "genre-1",
              "label": "Featured",
            },
            "id": "0c46a14e-64bc-4718-b9f1-e25185305e2c",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured",
            },
            "id": "165eb159-02ff-4431-83ec-9b32041fab49",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "4c77303f-7d65-43c6-b320-2dbd2ef21aa5",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "6da52985-57dd-40d3-970c-cec268e068ad",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "channel": "channel-1",
              "cta": "Start Watching",
              "duration": 2754,
              "genre": "genre-1",
              "label": "Featured"
            },
            "id": "0869f6bb-cc9b-430b-b61b-98c3887a4f74",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/full-16x9.png`
                  },
                  {
                    "key": "thumb_1",
                    "src": `${absoluteReqBasePath}images//half-2x3.png`
                  },
                  {
                    "key": "thumb_2",
                    "src": `${absoluteReqBasePath}images/801138132095/third-1x1.png`
                  },
                  {
                    "key": "v2",
                    "src": `${absoluteReqBasePath}images/channel-1.png`
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Content Description ",
            "title": "Content Title ",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {},
        "id": "94de82db-2c7a-4fd9-b6ac-c99202270d59",
        "title": "Header",
        "type": {
          "value": "feed"
        }
      }
    );
  });

  app.get("/preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "extensions": {
              "button": "Start Watching",
              "channel": "channel-1",
              "cta": "Start Watching",
              "detailButton": "Watch Now",
              "duration": 2754,
              "genre": "Action & Adventure",
              "label": "Featured",
              "meta": "Action & Adventure · 2021 · PG-13 · 2h 43m",
              "short-summary": "Here will be a short description of the item. You can configure the number of shown lines in the cell style."
            },
            "id": "cb0355d4-1642-4892-a170-16ef41d6cc45",
            "link": {
              "href": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": `${absoluteReqBasePath}images/third-1x1.png`
                  },
                ],
                "type": "image"
              }
            ],
            "summary": "Here will be a short description of the item. You can control the number of shown lines.",
            "title": "Content Title",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {},
        "id": "ae7cb4b8-150e-44cd-ae95-322424cbd748",
        "title": "Home Generic Hero",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/preset-tv-screens-example", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "e51a8ff1-d447-411c-884a-3b719d2c4531",
            "title": "show: hero+rails",
            "type": {
              "value": "show-1"
            }
          },
          {
            "extensions": {
              
            },
            "id": "104e1056-1b3c-4b48-ac4f-8b2cdc53ddd6",
            "title": "show: hero+list",
            "type": {
              "value": "show-2"
            }
          },
          {
            "extensions": {
              
            },
            "id": "9e2f2b52-e825-4e35-82d1-efbeeffef75e",
            "summary": "Here will be a short description of the show. You can configure the number of shown lines in the cell style.",
            "title": "show: screen picker",
            "type": {
              "value": "show-3"
            }
          },
          {
            "extensions": {
              
            },
            "id": "ab575784-48d2-46c6-a73e-2975b8ea1537",
            "title": "Movie screen",
            "type": {
              "value": "movie"
            }
          },
          {
            "extensions": {
              
            },
            "id": "c8b4976e-0d61-4e9c-a419-dfe48e4758e5",
            "title": "genres",
            "type": {
              "value": "gen"
            }
          },
          {
            "extensions": {
              
            },
            "id": "bdbf3259-9fda-4c42-b432-63a627daca58",
            "title": "",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "ceacdb3e-9aed-499f-ad87-d1905fea176b",
        "summary": "",
        "title": "tv - screens examples",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/preset-tv-show-screen-tabs", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ca1ccb81-9177-4d83-bdfe-9001832dc846",
            "title": "Season 1 ",
            "type": {
              "value": "season"
            }
          },
          {
            "extensions": {
              
            },
            "id": "adbb957c-fd8a-4974-8337-e4e92a3380b9",
            "title": "Season 2",
            "type": {
              "value": "season"
            }
          },
          {
            "extensions": {
              
            },
            "id": "ddc7a9e3-5ee3-481b-a7a3-2297b0bf8c62",
            "title": "season 3",
            "type": {
              "value": "season"
            }
          },
          {
            "extensions": {
              
            },
            "id": "6aa46789-d1d3-4eac-9789-67407abaa7ee",
            "title": "Season 4",
            "type": {
              "value": "season"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "f5454c9e-9844-445d-81ad-df959f06d25f",
        "title": "Show Screen Preset TV - tabs (origin)\t",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/movie-screen-preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "button": "Start Watching",
              "channel": "channel-1",
              "cta": "Start Watching",
              "detailButton": "Watch Now",
              "duration": 2754,
              "genre": "Action & Adventure",
              "hqme": "true",
              "label": "Featured",
              "meta": "Action & Adventure · 2021 · PG-13 · 2h 43m",
              "short-summary": "Here will be a short description of the item. You can control the number of shown lines."
            },
            "id": "8d2fb09d-6895-4ebd-891a-37e57b22f102",
            "summary": "Here will be a short description of the item. You can configure the number of shown lines in the cell style.",
            "title": "Name of the Movie",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              
            },
            "id": "fb57b6fc-6636-4a65-9155-e65427e0cf43",
            "title": "",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              
            },
            "id": "e44a114d-9937-44bf-9e25-2b780d04eb7f",
            "title": "",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "bd633cd6-8bdd-40ce-8cbe-bcc5ad385d9b",
        "title": "Movie Screen Preset - Hero",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/movie-screen-preset-data", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "9b0cbca9-eaad-4c73-ab8d-21b5bd813643",
            "title": "",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "4054293a-a058-40cb-9f3f-c6c469cbcbbc",
        "title": "Movie Screen Preset - Data \t",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/movie-screen-preset-trailer", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              
            },
            "id": "f7127366-fd2f-4f1d-8244-4b308cee74d9",
            "title": "Watch the Trailer",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "492419aa-0449-416e-a9e9-f6b53f6162aa",
        "title": "Movie Screen Preset - trailer ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/movie-details-preset-origin", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "genre": "Action",
              "meta": "15 · 2h 50m · 2023"
            },
            "id": "918384eb-7dc0-4fef-a69c-b9d7d74c2750",
            "link": {
              "href": "",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/488820213153/2x3.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": null
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Here will be a short description of the movie. You can configure the number of displayed lines in the cell style. ",
            "title": "The Name of the Movie",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              "bg-color": "rgba(254,20,72,1)",
              "bg-color-focus": "rgba(190,14,43,1)"
            },
            "id": "e212e588-1313-4af1-bf2f-28bb5d8ccc91",
            "title": "Play",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              "bg-color": "rgba(46,46,46,1)",
              "bg-color-focus": "rgba(30,30,30,1)"
            },
            "id": "8c19595d-288f-4ebe-8b9f-2a913699850c",
            "title": "Watch Trailer",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              
            },
            "id": "a7c4c2a4-8c9f-42e4-85e4-dc24239b54f3",
            "summary": "Here will be a overview of the movie. You can configure the number of displayed lines in the cell style. Ensure your text remains intact.",
            "title": "Overview",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              "cast": "Cast: John McClane, Katniss Everdeen, Tony Stark, Ellen Ripley, Buffy Sammers, Jack Ryan, Jessica Rabbit,John Wick.",
              "director": "Director: Sarah Connor.",
              "writer": "Writers: Hermione Granger, Scarlett O'Hara."
            },
            "id": "13fae94f-2fd0-4584-a4c8-442b7d8d58c6",
            "title": "Credits",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "f8644455-74ff-4fa8-b88f-2ff11a1685a5",
        "title": "Movie details preset (origin)",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-hero", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              "genre": "Action",
              "trailer": "Trailer"
            },
            "id": "0bfac603-eb56-4c82-8bb8-8050a17c2f74",
            "link": {
              "href": "",
              "type": "link"
            },
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/188449410282/16X9.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": null
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "summary": "Here will be a short description of the show. You can configure the number of displayed lines in the cell style. ",
            "title": "The Name of the Show ",
            "type": {
              "value": "video"
            }
          },
          {
            "extensions": {
              "meta": "15 · 2 Seasons · 2023"
            },
            "id": "d0968397-2365-4841-b8f6-dcb0ed42c491",
            "summary": "Here will be a overview of the movie. You can configure the number of displayed lines in the cell style. Ensure your text remains intact.",
            "title": "meta",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "2a91028c-7e6b-4815-98f3-cf824b8ea9cb",
        "title": "Show Screen Preset  - Hero (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-preset-tabs", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 1 ",
            "type": {
              "value": "season"
            }
          },
          {
            "extensions": {
              
            },
            "id": "7f4ef666-03a8-40ba-97f3-bcdad0a549ca",
            "title": "Season 2 ",
            "type": {
              "value": "season"
            }
          },
          {
            "extensions": {
              
            },
            "id": "f40ef17a-1487-43f5-9e38-b40b1165058b",
            "title": "Details ",
            "type": {
              "value": "details"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-season1", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 1 ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-season2", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 2 ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-season3", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 3 ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-season4", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 4 ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/show-screen-preset-season5", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "Season 5 ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
    app.get("/show-screen-preset-all-episodes", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "ecc7d712-dd3f-4996-ae53-ac909e9abbf5",
            "title": "All Episodes ",
            "type": {
              "value": "season"
            }
          },
        ],
        "extensions": {
          
        },
        "id": "8baf3a3d-32be-4780-b8fc-22de9bf24ccd",
        "title": "Show Preset - Tabs (origin) ",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/settings-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              
            },
            "id": "6d67dc1d-3b85-45ba-8456-70651b66b8c1",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/545217491161/Shape1-Selected.png"
                  },
                  {
                    "key": "",
                    "src": ""
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "title": "Setting Item 1 ",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              
            },
            "id": "b6aa61a3-92ff-46db-b366-29f4075e63a5",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/735361224653/Shape2-Selected.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": ""
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "title": "Setting Item 2",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              
            },
            "id": "55b97df1-b888-4225-a774-cefcdfe9808c",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/128542791695/Shape3-Selected.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": ""
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "title": "Setting Item 3",
            "type": {
              "value": "video"
            }
          },
          {
            "content": {
              "src": "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8",
              "type": "video/hls"
            },
            "extensions": {
              
            },
            "id": "3e7f85a2-0677-4ff7-8241-f6ea83aa8761",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/475934493119/Shape4-Selected.png"
                  },
                  {
                    "key": "icon",
                    "src": ""
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "title": "Setting Item 4",
            "type": {
              "value": "video"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "f826a6a7-6279-46ee-9743-c81a139f9312",
        "title": "Setting (origin)",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/search-preset", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "entry": [
          {
            "extensions": {
              
            },
            "id": "76f06448-e0ad-4f17-80df-e48c94bacd29",
            "media_group": [
              {
                "media_item": [
                  {
                    "key": "image_base",
                    "src": "https://assets-secure.applicaster.com/zapp/assets/app_family/2392/manual_feeds/447417739557/search-icon.png"
                  },
                  {
                    "key": "thumb_1",
                    "src": null
                  },
                  {
                    "key": "thumb_2",
                    "src": null
                  },
                  {
                    "key": "thumb_3",
                    "src": null
                  }
                ],
                "type": "image"
              }
            ],
            "title": "Find something to watch",
            "type": {
              "value": "search"
            }
          }
        ],
        "extensions": {
          
        },
        "id": "79586ff8-8771-4cac-a987-824c55c77bf5",
        "title": "search box (origin)",
        "type": {
          "value": "feed"
        }
      }
    )
  });
  app.get("/preset-epg-channel", (req, res) => {
    res.setHeader("content-type", "application/vnd+applicaster.pipes2+json");
    res.json(
      {
        "id": "channels",
        "type": {
          "value": "epg-channels"
        },
        "entry": [
          {
            "id": "bf32e99730193e2a09b0d00a027c7783",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 1",
            "summary": "This is Channel 1",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-1-V2.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "General",
              "featured": false,
              "channel_id": "bf32e99730193e2a09b0d00a027c7783"
            }
          },
          {
            "id": "5d28e77a3fd5b45497c807424e7b410c",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 2",
            "summary": "This is Channel 2",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-2-V2.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "Documentary",
              "featured": false,
              "channel_id": "5d28e77a3fd5b45497c807424e7b410c"
            }
          },
          {
            "id": "cb44d1ec41eb8738212152082c590923",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 3",
            "summary": "This is Channel 3",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-3-V2.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "News",
              "featured": false,
              "channel_id": "cb44d1ec41eb8738212152082c590923"
            }
          },
          {
            "id": "ca93eb3ebdc5424f7a92d38f558ed098",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 4",
            "summary": "This is Channel 4",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-4-V2.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "official",
              "featured": false,
              "channel_id": "ca93eb3ebdc5424f7a92d38f558ed098"
            }
          },
          {
            "id": "b0f31b2e4a771d622a9b7b138c83e312",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 5",
            "summary": "This is Channel 5",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-5.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "General",
              "featured": false,
              "channel_id": "b0f31b2e4a771d622a9b7b138c83e312"
            }
          },
          {
            "id": "2c5578c1eb2f204e5d000211ecfa53cc",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 6",
            "summary": "This is Channel 6",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-6.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "General",
              "featured": false,
              "channel_id": "2c5578c1eb2f204e5d000211ecfa53cc"
            }
          },
          {
            "id": "4f4a5af9d9f8e823fb41d8bbb2d4e1e5",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 7",
            "summary": "This is Channel 7",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-7.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "General",
              "featured": false,
              "channel_id": "4f4a5af9d9f8e823fb41d8bbb2d4e1e5"
            }
          },
          {
            "id": "e241ce101eb9a6c6118c7852c0bbef19",
            "type": {
              "value": "epg-channel"
            },
            "title": "Channel 8",
            "summary": "This is Channel 8",
            "media_group": [
              {
                "type": "image",
                "media_item": [
                  {
                    "src": "https://pipes2-server-example.herokuapp.com/images/channels/channel-8.png",
                    "key": "image_base"
                  }
                ]
              }
            ],
            "extensions": {
              "genre": "Sports",
              "featured": false,
              "channel_id": "e241ce101eb9a6c6118c7852c0bbef19"
            }
          }
        ]
      }
    )
  })
}
