module.exports = {
  siteMetadata: {
    title: `portfolio`,
    name: `Parkhyejung`,
    siteUrl: `https://novela.narative.co`,
    description: `박혜정 포트폴리오`,
    hero: {
      heading: `Park hyejung Portfolio`,
      maxWidth: 652,
    },
    social: [
      // {
      //   name: `twitter`,
      //   url: `https://twitter.com/narative`,
      // },
      {
        name: `github`,
        url: `https://github.com/kookou`,
      },
      // {
      //   name: `instagram`,
      //   url: `https://instagram.com/narative.co`,
      // },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/in/kookou`,
      },
      // {
      //   name: `dribbble`,
      //   url: `https://dribbble.com/narativestudio`,
      // },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kookou`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
