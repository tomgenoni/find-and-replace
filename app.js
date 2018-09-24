const replace = require("replace");

const category = process.argv[2]; // node app.js [json-package-name]
const data = require(`./json/${category}.json`);
const paths = ["/Users/tom/Sites/website/thumbprint/"];

function escapeRegExp(text) {
  return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function replaceValues(regex, replacement, include, excludeList) {
  replace({
    regex: regex,
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
  let regex = entry.old + "(?!-)"; // exact match: foo but not foobar
  const include = "*.html, *.js, *.jsx, *.scss";

  replaceValues(regex, entry.new, include);
});
