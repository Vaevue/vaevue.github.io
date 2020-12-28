module.exports = {
  "title": "Jian Ying 的个人博客",
  "description": "愿小晶晶开心每一天，健健康康。",
  "dest": "dist",
  "base" : "/dist/",
  "host" : "0.0.0.0",
  "post" : 9527,
  "plugins": [
    ["vuepress-plugin-boxx"]
    ] ,
  "head": [
    ["link", { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css" }],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js"
    }],
    // 引入鼠标点击脚本
    ["script", {
      "language": "javascript",
      "type": "text/javascript",
      "src": "/js/MouseClickEffect.js"
    }],
  ],
  
  "theme": "reco",
  "themeConfig": {
    "nav": [
      {
        "text": "首页",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text" : "音乐",
        "items" : [
          {
            "text" : "晶晶音乐",
            "link" : "http://jianyingblog.top/music/dist/index.html#/find"
          },
          {
            "text" : "晶晶音乐-Two",
            "link" : "https://music.quietguoguo.com/"
          }
        ]
      },
      {
        "text": "时间轴",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "文章",
        "icon": "reco-message",
        "items": [
          {
            "text": "vuepress-reco",
            "link": "/docs/theme-reco/"
          }
        ]
      },
      {
        "text": "关于",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/recoluan",
            "icon": "reco-github"
          }
        ]
      }
    ],
    "sidebar": {
      "/docs/theme-reco/": [
        "",
        "theme",
        "plugin",
        "api"
      ]
    },
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "分类"
      },
      "Tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "lastUpdated": "Last Updated",
    "author": "Jian Ying",
    "authorAvatar": "https://pic1.zhimg.com/80/v2-ae6368f58a8f06d039bc7e290b91680b_720w.jpg?source=1940ef5c",
    "record": "Vae",
    "startYear": "2020"
  },
  "markdown": {
    "lineNumbers": true
  },
}
