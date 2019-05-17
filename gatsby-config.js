module.exports = {
  siteMetadata: {
    title: `Gatsby Theme Dev Blog`,
    description: `Write your dev blog with no graphql!`,
    author: `@swyx`,
    siteUrl: "https://overreacted.io",
    social: {
      twitter: "@swyx",
    },
  },
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-dev-blog",
      options: {
        unusedOptionForNow: 5,
      },
    },
  ],
}
