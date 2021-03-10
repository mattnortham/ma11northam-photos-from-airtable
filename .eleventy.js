const filters = require("./src/_11ty/filters.js");

module.exports =  function(eleventyConfig) {
    Object.keys(filters).forEach((filterName) => {
        eleventyConfig.addFilter(filterName, filters[filterName]);
    });
}