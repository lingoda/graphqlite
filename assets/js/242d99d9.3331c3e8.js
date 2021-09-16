"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8773],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=o,d=m["".concat(s,".").concat(f)]||m[f]||p[f]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62108:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return m}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},s=void 0,c={unversionedId:"troubleshooting",id:"version-4.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"Error: Maximum function nesting level of '100' reached",source:"@site/versioned_docs/version-4.0/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/docs/4.0/troubleshooting",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/troubleshooting.md",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630412896,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"troubleshooting",title:"Troubleshooting",sidebar_label:"Troubleshooting",original_id:"troubleshooting"},sidebar:"version-4.0/docs",previous:{title:"Internals",permalink:"/docs/4.0/internals"},next:{title:"Migrating",permalink:"/docs/4.0/migrating"}},u=[],p={toc:u};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Error: Maximum function nesting level of '100' reached")),(0,i.kt)("p",null,"Webonyx's GraphQL library tends to use a very deep stack.\nThis error does not necessarily mean your code is going into an infinite loop.\nSimply try to increase the maximum allowed nesting level in your XDebug conf:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"xdebug.max_nesting_level=500\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},'Cannot autowire service "',(0,i.kt)("em",{parentName:"strong"},"[some input type]"),'": argument "$..." of method "..." is type-hinted "...", you should configure its value explicitly.')),(0,i.kt)("p",null,"The message says that Symfony is trying to instantiate an input type as a service. This can happen if you put your\nGraphQLite controllers in the Symfony controller namespace (",(0,i.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default). Symfony will assume that any\nobject type-hinted in a method of a controller is a service (",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/service_container/3.3-di-changes.html#controllers-are-registered-as-services"},'because all controllers are tagged with the "controller.service_arguments" tag'),")"),(0,i.kt)("p",null,"To fix this issue, do not put your GraphQLite controller in the same namespace as the Symfony controllers and\nreconfigure your ",(0,i.kt)("inlineCode",{parentName:"p"},"config/graphqlite.yml")," file to point to your new namespace."))}m.isMDXComponent=!0}}]);