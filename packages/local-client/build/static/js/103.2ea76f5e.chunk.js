(this["webpackJsonp@jsnote-gr/local-client"]=this["webpackJsonp@jsnote-gr/local-client"]||[]).push([[103],{280:function(e,a){!function(e){var a=[/\b(?:async|sync|yield)\*/,/\b(?:abstract|assert|async|await|break|case|catch|class|const|continue|covariant|default|deferred|do|dynamic|else|enum|export|extension|external|extends|factory|final|finally|for|get|hide|if|implements|interface|import|in|library|mixin|new|null|on|operator|part|rethrow|return|set|show|static|super|switch|sync|this|throw|try|typedef|var|void|while|with|yield)\b/],t="(^|[^\\w.])(?:[a-z]\\w*\\s*\\.\\s*)*(?:[A-Z]\\w*\\s*\\.\\s*)*",n={pattern:RegExp(t+"[A-Z](?:[\\d_A-Z]*[a-z]\\w*)?\\b"),lookbehind:!0,inside:{namespace:{pattern:/^[a-z]\w*(?:\s*\.\s*[a-z]\w*)*(?:\s*\.)?/,inside:{punctuation:/\./}}}};e.languages.dart=e.languages.extend("clike",{string:[{pattern:/r?("""|''')[\s\S]*?\1/,greedy:!0},{pattern:/r?(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0}],"class-name":[n,{pattern:RegExp(t+"[A-Z]\\w*(?=\\s+\\w+\\s*[;,=()])"),lookbehind:!0,inside:n.inside}],keyword:a,operator:/\bis!|\b(?:as|is)\b|\+\+|--|&&|\|\||<<=?|>>=?|~(?:\/=?)?|[+\-*\/%&^|=!<>]=?|\?/}),e.languages.insertBefore("dart","function",{metadata:{pattern:/@\w+/,alias:"symbol"}}),e.languages.insertBefore("dart","class-name",{generics:{pattern:/<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,inside:{"class-name":n,keyword:a,punctuation:/[<>(),.:]/,operator:/[?&|]/}}})}(Prism)}}]);
//# sourceMappingURL=103.2ea76f5e.chunk.js.map