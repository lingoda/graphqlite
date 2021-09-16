"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7991],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),h=c(n),m=a,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||o;return n?r.createElement(d,s(s({ref:t},p),{},{components:n})):r.createElement(d,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,h=e.groupId,m=e.className,d=o(),f=d.tabGroupChoices,b=d.setTabGroupChoices,y=(0,r.useState)(a),v=y[0],g=y[1],k=r.Children.toArray(e.children),T=[];if(null!=h){var P=f[h];null!=P&&P!==v&&u.some((function(e){return e.value===P}))&&g(P)}var w=function(e){var t=e.currentTarget,n=T.indexOf(t),r=u[n].value;g(r),null!=h&&(b(h,r),setTimeout((function(){var e,n,r,a,o,s,i,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case p:var r=T.indexOf(e.target)+1;n=T[r]||T[0];break;case c:var a=T.indexOf(e.target)-1;n=T[a]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":v===t}),key:t,ref:function(e){return T.push(e)},onKeyDown:x,onFocus:w,onClick:w},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},83434:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return h},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),s=n(55064),i=n(58215),l=["components"],c={id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"},p=void 0,u={unversionedId:"prefetch-method",id:"version-3.0/prefetch-method",isDocsHomePage:!1,title:"Prefetching records",description:"The problem",source:"@site/versioned_docs/version-3.0/prefetch_method.mdx",sourceDirName:".",slug:"/prefetch-method",permalink:"/docs/3.0/prefetch-method",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/prefetch_method.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630412896,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"prefetch-method",title:"Prefetching records",sidebar_label:"Prefetching records"}},h=[{value:"The problem",id:"the-problem",children:[]},{value:"The &quot;prefetch&quot; method",id:"the-prefetch-method",children:[]},{value:"Input arguments",id:"input-arguments",children:[]}],m={toc:h};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-problem"},"The problem"),(0,o.kt)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,o.kt)("p",null,"Consider a request where a user attached to a post must be returned:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n    posts {\n        id\n        user {\n            id\n        }\n    }\n}\n")),(0,o.kt)("p",null,"A naive implementation will do this:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1 query to fetch the list of posts"),(0,o.kt)("li",{parentName:"ul"},"1 query per post to fetch the user")),(0,o.kt)("p",null,'Assuming we have "N" posts, we will make "N+1" queries.'),(0,o.kt)("p",null,'There are several ways to fix this problem.\nAssuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "posts" and "users".\nThis method is described in the ',(0,o.kt)("a",{parentName:"p",href:"/docs/3.0/query-plan"},'"analyzing the query plan" documentation'),"."),(0,o.kt)("p",null,"But this can be difficult to implement. This is also only useful for relational databases. If your data comes from a\nNoSQL database or from the cache, this will not help."),(0,o.kt)("p",null,"Instead, GraphQLite offers an easier to implement solution: the ability to fetch all fields from a given type at once."),(0,o.kt)("h2",{id:"the-prefetch-method"},'The "prefetch" method'),(0,o.kt)(s.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    #[Field(prefetchMethod: "prefetchUsers")]\n    public function getUser(Post $post, $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type\n */\nclass PostType {\n    /**\n     * @Field(prefetchMethod="prefetchUsers")\n     * @param Post $post\n     * @param mixed $prefetchedUsers\n     * @return User\n     */\n    public function getUser(Post $post, $prefetchedUsers): User\n    {\n        // This method will receive the $prefetchedUsers as second argument. This is the return value of the "prefetchUsers" method below.\n        // Using this prefetched list, it should be easy to map it to the post\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchUsers(iterable $posts)\n    {\n        // This function is called only once per GraphQL request\n        // with the list of posts. You can fetch the list of users\n        // associated with this posts in a single request,\n        // for instance using a "IN" query in SQL or a multi-fetch\n        // in your cache back-end.\n    }\n}\n')))),(0,o.kt)("p",null,'When the "prefetchMethod" attribute is detected in the "@Field" annotation, the method is called automatically.\nThe first argument of the method is an array of instances of the main type.\nThe "prefetchMethod" can return absolutely anything (mixed). The return value will be passed as the second parameter of the "@Field" annotated method.'),(0,o.kt)("h2",{id:"input-arguments"},"Input arguments"),(0,o.kt)("p",null,"Field arguments can be set either on the @Field annotated method OR/AND on the prefetchMethod."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)(s.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'#[Type]\nclass PostType {\n    /**\n     * @param Post $post\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    #[Field(prefetchMethod: "prefetchComments")]\n    public function getComments(Post $post, $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n'))),(0,o.kt)(i.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type\n */\nclass PostType {\n    /**\n     * @Field(prefetchMethod="prefetchComments")\n     * @param Post $post\n     * @param mixed $prefetchedComments\n     * @return Comment[]\n     */\n    public function getComments(Post $post, $prefetchedComments): array\n    {\n        // ...\n    }\n\n    /**\n     * @param Post[] $posts\n     * @return mixed\n     */\n    public function prefetchComments(iterable $posts, bool $hideSpam, int $filterByScore)\n    {\n        // Parameters passed after the first parameter (hideSpam, filterByScore...) are automatically exposed\n        // as GraphQL arguments for the "comments" field.\n    }\n}\n')))),(0,o.kt)("p",null,"The prefetch method MUST be in the same class as the @Field-annotated method and MUST be public."))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);