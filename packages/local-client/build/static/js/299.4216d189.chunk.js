(this.webpackJsonpsnippy=this.webpackJsonpsnippy||[]).push([[299],{476:function(n,e){!function(n){var e=/\{[^\r\n\[\]{}]*\}/,a={"quoted-string":{pattern:/"(?:[^"\\]|\\.)*"/,alias:"operator"},"command-param-id":{pattern:/(\s)\w+:/,lookbehind:!0,alias:"property"},"command-param-value":[{pattern:e,alias:"selector"},{pattern:/([\t ])\S+/,lookbehind:!0,greedy:!0,alias:"operator"},{pattern:/\S(?:.*\S)?/,alias:"operator"}]};function t(n){return"string"==typeof n?n:Array.isArray(n)?n.map(t).join(""):t(n.content)}n.languages.naniscript={comment:{pattern:/^([\t ]*);.*/m,lookbehind:!0},define:{pattern:/^>.+/m,alias:"tag",inside:{value:{pattern:/(^>\w+[\t ]+)(?!\s)[^{}\r\n]+/,lookbehind:!0,alias:"operator"},key:{pattern:/(^>)\w+/,lookbehind:!0}}},label:{pattern:/^([\t ]*)#[\t ]*\w+[\t ]*$/m,lookbehind:!0,alias:"regex"},command:{pattern:/^([\t ]*)@\w+(?=[\t ]|$).*/m,lookbehind:!0,alias:"function",inside:{"command-name":/^@\w+/,expression:{pattern:e,greedy:!0,alias:"selector"},"command-params":{pattern:/\s*\S[\s\S]*/,inside:a}}},"generic-text":{pattern:/(^[ \t]*)[^#@>;\s].*/m,lookbehind:!0,alias:"punctuation",inside:{"escaped-char":/\\[{}\[\]"]/,expression:{pattern:e,greedy:!0,alias:"selector"},"inline-command":{pattern:/\[[\t ]*\w[^\r\n\[\]]*\]/,greedy:!0,alias:"function",inside:{"command-params":{pattern:/(^\[[\t ]*\w+\b)[\s\S]+(?=\]$)/,lookbehind:!0,inside:a},"command-param-name":{pattern:/^(\[[\t ]*)\w+/,lookbehind:!0,alias:"name"},"start-stop-char":/[\[\]]/}}}}},n.languages.nani=n.languages.naniscript,n.hooks.add("after-tokenize",(function(n){n.tokens.forEach((function(n){if("string"!=typeof n&&"generic-text"===n.type){var e=t(n);(function(n){for(var e=[],a=0;a<n.length;a++){var t=n[a],i="[]{}".indexOf(t);if(-1!==i)if(i%2==0)e.push(i+1);else if(e.pop()!==i)return!1}return 0===e.length})(e)||(n.type="bad-line",n.content=e)}}))}))}(Prism)}}]);
//# sourceMappingURL=299.4216d189.chunk.js.map