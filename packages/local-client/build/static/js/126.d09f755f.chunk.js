(this["webpackJsonp@jsnote-gr/local-client"]=this["webpackJsonp@jsnote-gr/local-client"]||[]).push([[126],{303:function(e,a){!function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(a){e.languages["markup-templating"].buildPlaceholders(a,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(a){e.languages["markup-templating"].tokenizePlaceholders(a,"ejs")})),e.languages.eta=e.languages.ejs}(Prism)}}]);
//# sourceMappingURL=126.d09f755f.chunk.js.map