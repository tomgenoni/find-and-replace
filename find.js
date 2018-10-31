const findInFiles = require("find-in-files");
const data = require(`./json/find/all.json`);
const path = "/Users/tom/Sites/website/thumbprint/";
const filetypes = ".html$";

data.forEach(function(entry) {
    findInFiles
        .find({ term: string + "(?!-)\\b", flags: "ig" }, path, filetypes)
        .then(function(results) {
            for (var result in results) {
                var res = results[result];
                console.log(
                    `found ${res.matches[0]} ${res.count} times in ${result}`
                );
            }
        });
});
