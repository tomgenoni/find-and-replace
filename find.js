const replace = require("replace");

const data = require("./json/find/all.json");
const paths = ["/Users/tom/Sites/website/"];
// const paths = ["./test/"];

function escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
}

function replaceValues(regex, replacement, include) {
    replace({
        regex: regex,
        replacement: replacement,
        paths: paths,
        excludeList: "./config/excludeList.txt",
        include: include,
        recursive: true,
        count: true
    });
}

data.forEach(function(entry) {
    let string = escapeRegExp(entry);
    let regex = string + "(?!-)\\b"; // exact match: foo but not foobar
    const include = "*.html, *.js, *.jsx, *.scss, *.json";

    replaceValues(regex, `DEPRECATED-${entry}`, include);
});
