const replace = require("replace");

const category = process.argv[2];
const data = require(`./json/${category}.json`);
//const paths = ["/Users/tom/Sites/website/thumbprint/"];
const paths = ["./test/"];

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
        count: true
    });
}

data.forEach(function(entry) {
    let string = escapeRegExp(entry.old);
    let regex = string + "(?!-)\\b"; // exact match: foo but not foobar
    const include = "*.html, *.js, *.jsx, *.scss";

    replaceValues(regex, entry.new, include);
});
