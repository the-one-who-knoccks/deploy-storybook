var s=Object.defineProperty;var a=(t,e)=>s(t,"name",{value:e,configurable:!0});import{o as C,C as f,a3 as g}from"./iframe.e1b54ddd.js";var m=C,u=f,x=g,h=RangeError,i=String.fromCharCode,v=String.fromCodePoint,l=u([].join),c=!!v&&v.length!=1;m({target:"String",stat:!0,arity:1,forced:c},{fromCodePoint:a(function(e){for(var n=[],d=arguments.length,o=0,r;d>o;){if(r=+arguments[o++],x(r,1114111)!==r)throw h(r+" is not a valid code point");n[o]=r<65536?i(r):i(((r-=65536)>>10)+55296,r%1024+56320)}return l(n,"")},"fromCodePoint")});
//# sourceMappingURL=es.string.from-code-point.bb163e1e.js.map
