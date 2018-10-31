# Replacing deprecated utility classes with Atomic

## find-replace.js

Finds and replaces `tp-` deprecated classes that have Atomic replacements. **Not all `tp-` classes are covered here.** For example `tp-width--50` has no direct replacement, is not surfaced by this script and must be replaced manually. To look for **all** instances of a deprecated `tp-` classes see `find.js`.

### Usage

-   `yarn all` to find and replace all categories of deprecated `tp-` utility classses
-   `node find-replace.js [json-package-name]` e.g., `node find-replace.js flexbox` for specific categories

## find.js

This script will find _any_ instance of a deprecated `tp-` utility class and will prepend `DEPRECATED-` to the class so that it can be resolved manually. This is helpful for locating deprecated classes whether or not it has a 1:1 replacement with an Atomic class.

### Usage

-   `node find.js`
