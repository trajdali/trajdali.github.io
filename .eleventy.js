const { minify } = require("html-minifier-terser");

module.exports = function(eleventyConfig) {

  // All static assets (icons, images, MP3s, etc.) already live at the project root,
  // which is also the output directory — no passthrough copies needed.

  // Minify HTML output including inline <style> and <script> blocks
  eleventyConfig.addTransform("htmlmin", async (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return await minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
        removeRedundantAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        useShortDoctype: true,
      });
    }
    return content;
  });

  // Ignore previously compiled HTML output files so Eleventy never re-processes them
  eleventyConfig.ignores.add("index.html");
  eleventyConfig.ignores.add("contact/index.html");
  eleventyConfig.ignores.add("music/index.html");
  eleventyConfig.ignores.add("mixes/index.html");
  eleventyConfig.ignores.add("new-love/index.html");
  eleventyConfig.ignores.add("til-the-sun-comes-up/index.html");
  eleventyConfig.ignores.add("cant-do-without/index.html");
  eleventyConfig.ignores.add("simple-things/index.html");npm ru
  eleventyConfig.ignores.add("keep-trying/index.html");
  eleventyConfig.ignores.add("mixes/contemporary-alt-mix/index.html");
  eleventyConfig.ignores.add("mixes/made-in-yugoslavia/index.html");
  eleventyConfig.ignores.add("mixes/just-chillin");
  eleventyConfig.ignores.add("release.html");
  eleventyConfig.ignores.add("archive");

  return {
    dir: {
      input: "src",
      output: ".",
      includes: "_includes",
      data: "_data",
    },
    templateFormats: ["njk"],
    htmlTemplateEngine: "njk",
  };
};
