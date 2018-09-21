const replace = require("replace");
const data = require("./json/background.json");

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function replaceValues(regex, replacement, include, excludeList) {
  replace({
    regex: regex, // for exact matches
    replacement: replacement,
    paths: paths,
    excludeList: "excludeList.txt",
    include: include,
    recursive: true,
    count: true,
    silent: false
  });
}

data.forEach(function(entry) {
  console.log(entry);
  // if (entry.html) {
  //   entry.html.old.forEach(function(oldValue) {
  //     var regex = oldValue + "(?!-)";
  //     var replacement = entry.html.new;
  //     var include = "*.html, *.js, *.jsx, *.scss";
  //
  //     replaceValues(regex, replacement, include);
  //   });
  // }
});
