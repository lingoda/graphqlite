"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1886],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return d}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),p=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(t),d=r,f=m["".concat(o,".").concat(d)]||m[d]||u[d]||i;return t?a.createElement(f,l(l({ref:n},s),{},{components:t})):a.createElement(f,l({ref:n},s))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},64170:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return c},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),l=["components"],c={id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance-interfaces"},o=void 0,p={unversionedId:"inheritance-interfaces",id:"version-4.0/inheritance-interfaces",isDocsHomePage:!1,title:"Inheritance and interfaces",description:"Modeling inheritance",source:"@site/versioned_docs/version-4.0/inheritance-interfaces.mdx",sourceDirName:".",slug:"/inheritance-interfaces",permalink:"/docs/4.0/inheritance-interfaces",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/inheritance-interfaces.mdx",tags:[],version:"4.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630412896,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance-interfaces"},sidebar:"version-4.0/docs",previous:{title:"Input types",permalink:"/docs/4.0/input-types"},next:{title:"Error handling",permalink:"/docs/4.0/error-handling"}},s=[{value:"Modeling inheritance",id:"modeling-inheritance",children:[]},{value:"Mapping interfaces",id:"mapping-interfaces",children:[{value:"Implementing interfaces",id:"implementing-interfaces",children:[]},{value:"Interfaces without an explicit implementing type",id:"interfaces-without-an-explicit-implementing-type",children:[]}]}],u={toc:s};function m(e){var n=e.components,t=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"modeling-inheritance"},"Modeling inheritance"),(0,i.kt)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,i.kt)("p",null,"Let's say you have two classes, ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")),(0,i.kt)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")),(0,i.kt)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," type:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,i.kt)("p",null,"Written in ",(0,i.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types\nwould look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,i.kt)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,i.kt)("p",null,"The GraphQL ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,i.kt)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,i.kt)("inlineCode",{parentName:"p"},"Contact")," type."),(0,i.kt)("h2",{id:"mapping-interfaces"},"Mapping interfaces"),(0,i.kt)("p",null,"If you want to create a pure GraphQL interface, you can also add a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation on a PHP interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\ninterface UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getUserName(): string;\n}\n")),(0,i.kt)("p",null,"This will automatically create a GraphQL interface whose description is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n")),(0,i.kt)("h3",{id:"implementing-interfaces"},"Implementing interfaces"),(0,i.kt)("p",null,'You don\'t have to do anything special to implement an interface in your GraphQL types.\nSimply "implement" the interface in PHP and you are done!'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,i.kt)("p",null,"This will translate in GraphQL schema as:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype User implements UserInterface {\n    userName: String!\n}\n")),(0,i.kt)("p",null,"Please note that you do not need to put the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation again in the implementing class."),(0,i.kt)("h3",{id:"interfaces-without-an-explicit-implementing-type"},"Interfaces without an explicit implementing type"),(0,i.kt)("p",null,"You don't have to explicitly put a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotation on the class implementing the interface (though this\nis usually a good idea)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no @Type annotation\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    /**\n     * @Query()\n     */\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n")),(0,i.kt)("div",{class:"alert alert--info"},'If GraphQLite cannot find a proper GraphQL Object type implementing an interface, it will create an object type "on the fly".'),(0,i.kt)("p",null,"In the example above, because the ",(0,i.kt)("inlineCode",{parentName:"p"},"User")," class has no ",(0,i.kt)("inlineCode",{parentName:"p"},"@Type")," annotations, GraphQLite will\ncreate a ",(0,i.kt)("inlineCode",{parentName:"p"},"UserImpl")," type that implements ",(0,i.kt)("inlineCode",{parentName:"p"},"UserInterface"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype UserImpl implements UserInterface {\n    userName: String!\n}\n")))}m.isMDXComponent=!0}}]);