(this.webpackJsonpsnippy=this.webpackJsonpsnippy||[]).push([[119],{296:function(e,n){!function(e){var n="(?:"+["[a-zA-Z_\\x80-\\uFFFF][\\w\\x80-\\uFFFF]*","-?(?:\\.\\d+|\\d+(?:\\.\\d*)?)",'"[^"\\\\]*(?:\\\\[^][^"\\\\]*)*"',"<(?:[^<>]|(?!\x3c!--)<(?:[^<>\"']|\"[^\"]*\"|'[^']*')+>|\x3c!--(?:[^-]|-(?!->))*--\x3e)*>"].join("|")+")",a={markup:{pattern:/(^<)[\s\S]+(?=>$)/,lookbehind:!0,alias:["language-markup","language-html","language-xml"],inside:e.languages.markup}};function t(e,a){return RegExp(e.replace(/<ID>/g,(function(){return n})),a)}e.languages.dot={comment:{pattern:/\/\/.*|\/\*[\s\S]*?\*\/|^#.*/m,greedy:!0},"graph-name":{pattern:t("(\\b(?:digraph|graph|subgraph)[ \t\r\n]+)<ID>","i"),lookbehind:!0,greedy:!0,alias:"class-name",inside:a},"attr-value":{pattern:t("(=[ \t\r\n]*)<ID>"),lookbehind:!0,greedy:!0,inside:a},"attr-name":{pattern:t("([\\[;, \t\r\n])<ID>(?=[ \t\r\n]*=)"),lookbehind:!0,greedy:!0,inside:a},keyword:/\b(?:digraph|edge|graph|node|strict|subgraph)\b/i,"compass-point":{pattern:/(:[ \t\r\n]*)(?:[ns][ew]?|[ewc_])(?![\w\x80-\uFFFF])/,lookbehind:!0,alias:"builtin"},node:{pattern:t("(^|[^-.\\w\\x80-\\uFFFF\\\\])<ID>"),lookbehind:!0,greedy:!0,inside:a},operator:/[=:]|-[->]/,punctuation:/[\[\]{};,]/},e.languages.gv=e.languages.dot}(Prism)}}]);
//# sourceMappingURL=119.2bb20f3d.chunk.js.map