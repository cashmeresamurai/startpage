let saved_config = JSON.parse(localStorage.getItem("CONFIG"));

const default_config = {
  overrideStorage: true,
  temperature: {
    location: "Hamburg",
    scale: "C",
  },
  clock: {
    format: "h:i p",
    iconColor: "#f38ba8",
  },
  disabled: [],
  fastlink: "https://app.raindrop.io",
  openLastVisitedTab: true,
  tabs: [
    {
      name: "dev",
      background_url: "src/img/banners/cbg-7.gif",
      categories: [
        {
          name: "resources",
          links: [
            {
              name: "sakura",
              url: "https://sakura.pm",
              icon: "binary-tree",
              icon_color: "#ea76cb",
            },
            {
              name: "whoogle",
              url: "https://whoogle.sakura.pm",
              icon: "brand-google",
              icon_color: "#d20f39",
            },
            {
              name: "wttr",
              url: "https://wttr.sakura.pm/reppenstedt?format=3",
              icon: "cloud",
              icon_color: "#04a5e5"
            },
            {
              name: "upload",
              url: "https://upload.sakura.pm",
              icon: "upload",
              icon_color: "#fe640b"
            }
          ],
        },
        {
          name: "workspaces",
          links: [
            {
              name: "github",
              url: "https://github.com",
              icon: "brand-github",
              icon_color: "#6c6f85",
            },
            {
              name: "nextcloud",
              url: "https://nx42784.your-storageshare.de",
              icon: "brand-nextcloud",
              icon_color: "#1e66f5",
            },

          ],
        },
        {
          name: "media",
          links: [
            {
              name: "yt",
              url: "https://youtube.com",
              icon: "brand-youtube",
              icon_color: "#d20f39",
            },
            {
              name: "reddit",
              url: "https://www.reddit.com/r/unixporn",
              icon: "brand-reddit",
              icon_color: "#dc8a78",
            },
          ],
        },
      ],
    },
  ],
};

const CONFIG = new Config(default_config);
