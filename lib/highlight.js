import highlight from "highlight.js/lib/core";
import lisp from "highlight.js/lib/languages/lisp";
import go from "highlight.js/lib/languages/go";
import 'highlight.js/styles/github.css';

highlight.registerLanguage("lisp", lisp);
highlight.registerLanguage("go", go);

module.exports = highlight;
