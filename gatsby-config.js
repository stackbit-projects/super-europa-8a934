const path = require('path')

module.exports = {
  siteMetadata: {
    siteUrl: 'https://gatsby-starter-quiz.netlify.com/',
    title: 'Quiz with Gatsby + MDX',
    description: 'Just create beautiful quizzes with Gatsby and MDX!',
    keywords: ['Quiz', 'Gatsby', 'MDX'],
    author: 'raphadeluca',
    social: { twitter: 'https://twitter.com/raphadeluca/' },
  },
  plugins: [
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          `gatsby-remark-emoji`,
          {
            resolve:
            `gatsby-remark-images`,
            options: {
              maxWidth: 200,
              sizeByPixelDensity: true,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `quizzes`,
        path: `quizzes`,
      },
    },
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-128987083-3',
      },
    },
  ],
}
