const replace = require("replace");
const data = require("./json/background.json");
const paths = ["/Users/tom/Sites/website/thumbprint/"];
// const paths = ["./test/"];

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function replaceValues(regex, replacement, include, excludeList) {
  replace({
    regex: regex, // for exact matches
    replacement: replacement,
    paths: paths,
    excludeList: "./config/excludeList.txt",
    include: include,
    recursive: true,
    count: true,
    silent: false
  });
}

data.forEach(function(entry) {
  entry.old.forEach(function(oldValue) {
    let regex = oldValue + "(?!-)";
    const include = "*.html, *.js, *.jsx";

    replaceValues(regex, entry.new, include);
  });
});
