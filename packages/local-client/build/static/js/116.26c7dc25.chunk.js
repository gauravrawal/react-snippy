(this.webpackJsonpsnippy=this.webpackJsonpsnippy||[]).push([[116],{293:function(e,r){!function(e){var r=/\\[\r\n](?:\s|\\[\r\n]|#.*(?!.))*(?![\s#]|\\[\r\n])/.source,n=/(?:[ \t]+(?![ \t])(?:<SP_BS>)?|<SP_BS>)/.source.replace(/<SP_BS>/g,(function(){return r})),t=/"(?:[^"\\\r\n]|\\(?:\r\n|[\s\S]))*"|'(?:[^'\\\r\n]|\\(?:\r\n|[\s\S]))*'/.source,o=/--[\w-]+=(?:<STR>|(?!["'])(?:[^\s\\]|\\.)+)/.source.replace(/<STR>/g,(function(){return t})),i={pattern:RegExp(t),greedy:!0},s={pattern:/(^[ \t]*)#.*/m,lookbehind:!0,greedy:!0};function p(e,r){return e=e.replace(/<OPT>/g,(function(){return o})).replace(/<SP>/g,(function(){return n})),RegExp(e,r)}e.languages.docker={instruction:{pattern:/(^[ \t]*)(?:ADD|ARG|CMD|COPY|ENTRYPOINT|ENV|EXPOSE|FROM|HEALTHCHECK|LABEL|MAINTAINER|ONBUILD|RUN|SHELL|STOPSIGNAL|USER|VOLUME|WORKDIR)(?=\s)(?:\\.|[^\r\n\\])*(?:\\$(?:\s|#.*$)*(?![\s#])(?:\\.|[^\r\n\\])*)*/im,lookbehind:!0,greedy:!0,inside:{options:{pattern:p(/(^(?:ONBUILD<SP>)?\w+<SP>)<OPT>(?:<SP><OPT>)*/.source,"i"),lookbehind:!0,greedy:!0,inside:{property:{pattern:/(^|\s)--[\w-]+/,lookbehind:!0},string:[i,{pattern:/(=)(?!["'])(?:[^\s\\]|\\.)+/,lookbehind:!0}],operator:/\\$/m,punctuation:/=/}},keyword:[{pattern:p(/(^(?:ONBUILD<SP>)?HEALTHCHECK<SP>(?:<OPT><SP>)*)(?:CMD|NONE)\b/.source,"i"),lookbehind:!0,greedy:!0},{pattern:p(/(^(?:ONBUILD<SP>)?FROM<SP>(?:<OPT><SP>)*(?!--)[^ \t\\]+<SP>)AS/.source,"i"),lookbehind:!0,greedy:!0},{pattern:p(/(^ONBUILD<SP>)\w+/.source,"i"),lookbehind:!0,greedy:!0},{pattern:/^\w+/,greedy:!0}],comment:s,string:i,variable:/\$(?:\w+|\{[^{}"'\\]*\})/,operator:/\\$/m}},comment:s},e.languages.dockerfile=e.languages.docker}(Prism)}}]);
//# sourceMappingURL=116.26c7dc25.chunk.js.map