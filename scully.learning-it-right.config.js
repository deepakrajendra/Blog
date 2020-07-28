exports.config = {
  projectRoot: "./src",
  projectName: "learning-it-right",
  outDir: './dist/static',
  routes: {
    '/html/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./html"
      }
    }
    // ,
    // '/blog/:slug': {
    //   type: 'contentFolder',
    //   slug: {
    //     folder: "./blog"
    //   }
    // },
  }
};