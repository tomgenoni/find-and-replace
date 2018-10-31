# Replacing deprecated utility classes with Atomic

## find-replace.js

Finds and replaces `tp-` deprecated classes that have Atomic replacements. Note that not all `tp-` classes are covered here. For example `tp-width--50` has no direct replacement, is not surfaced by this script, and must be replaced manually. To look for any instance of a deprecated `tp-` class see `find.js`.

### Usage

-   `yarn all` to look for all categories
-   `node find-replace.js [json-package-name]` e.g., `node find-replace.js flexbox`

## find.js

This script will find _any_ instance of a deprecated `tp-` utility class but does not replace it. This is helpful for locating deprecated classes whether or not it has a 1:1 replacement with an Atomic class.

### Usage

-   `node find.js`
