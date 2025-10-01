const fs = require('fs');

module.exports = function(eleventyConfig) {
  
  // Passthrough copy for entire assets directory from project root
  eleventyConfig.addPassthroughCopy({ "assets": "assets" });
  
  // BrowserSync configuration for dev server
  eleventyConfig.setBrowserSyncConfig({
    files: ['_site/**/*'],
    open: true,
    server: {
      baseDir: "_site"
    },
    callbacks: {
      ready: function(err, bs) {
        bs.addMiddleware("*", (req, res) => {
          try {
            const content_404 = fs.readFileSync('_site/404.html');
            res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
            res.write(content_404);
            res.end();
          } catch (e) {
            res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
            res.write("404 Not Found");
            res.end();
          }
        });
      }
    }
  });
  
  // Set Liquid as the default templating engine
  eleventyConfig.setLiquidOptions({
    dynamicPartials: true,
    strictFilters: false
  });
  
  return {
    // Input directory
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    
    // Template formats
    templateFormats: ["html", "liquid", "md"],
    
    // Set Liquid as default for markdown files
    markdownTemplateEngine: "liquid",
    htmlTemplateEngine: "liquid",
    
    // Maintain .html extensions for compatibility
    htmlOutputSuffix: ".html",
    
    // Enable directory data files
    dataTemplateEngine: "liquid"
  };
};
