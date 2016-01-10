/*
 * Regex Description
 *
 * (?:^|\s) # match the start of the string, or any single whitespace character
 *
 * (?!\S)   # negative lookahead to verify the above is the whole classname
 *          # ensures there is no non-space character following
 *          # (i.e. must be end of string or a space)
 */
document.addEventListener("DOMContentLoaded", function (event) {
  // mark document as js enabled
  document.documentElement.className = document.documentElement.className.replace(/(?:^|\s)no-js(?!\S)/g, 'js')
});
