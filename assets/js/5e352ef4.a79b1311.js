"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7925],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||i;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),r=n(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var u=37,d=39;var p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,c=e.groupId,m=e.className,h=i(),v=h.tabGroupChoices,f=h.setTabGroupChoices,y=(0,a.useState)(r),g=y[0],b=y[1],k=a.Children.toArray(e.children),w=[];if(null!=c){var N=v[c];null!=N&&N!==g&&p.some((function(e){return e.value===N}))&&b(N)}var $=function(e){var t=e.currentTarget,n=w.indexOf(t),a=p[n].value;b(a),null!=c&&(f(c,a),setTimeout((function(){var e,n,a,r,i,o,l,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,u=o.innerWidth,n>=0&&i<=u&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case d:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case u:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:C,onFocus:$,onClick:$},n)}))),t?(0,a.cloneElement)(k.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},61975:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return h}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],u={id:"validation",title:"Validation",sidebar_label:"User input validation"},d=void 0,p={unversionedId:"validation",id:"version-3.0/validation",isDocsHomePage:!1,title:"Validation",description:"GraphQLite does not handle user input validation by itself. It is out of its scope.",source:"@site/versioned_docs/version-3.0/validation.mdx",sourceDirName:".",slug:"/validation",permalink:"/docs/3.0/validation",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/validation.mdx",tags:[],version:"3.0",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1630412896,formattedLastUpdatedAt:"8/31/2021",frontMatter:{id:"validation",title:"Validation",sidebar_label:"User input validation"}},c=[{value:"Validating user input with Laravel",id:"validating-user-input-with-laravel",children:[]},{value:"Validating user input with Symfony validator",id:"validating-user-input-with-symfony-validator",children:[{value:"Using the Symfony validator bridge",id:"using-the-symfony-validator-bridge",children:[]},{value:"Using the validator directly on a query / mutation / factory ...",id:"using-the-validator-directly-on-a-query--mutation--factory-",children:[]}]}],m={toc:c};function h(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"GraphQLite does not handle user input validation by itself. It is out of its scope."),(0,i.kt)("p",null,"However, it can integrate with your favorite framework validation mechanism. The way you validate user input will\ntherefore depend on the framework you are using."),(0,i.kt)("h2",{id:"validating-user-input-with-laravel"},"Validating user input with Laravel"),(0,i.kt)("p",null,"If you are using Laravel, jump directly to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/3.0/laravel-package-advanced#support-for-laravel-validation-rules"},"GraphQLite Laravel package advanced documentation"),"\nto learn how to use the Laravel validation with GraphQLite."),(0,i.kt)("h2",{id:"validating-user-input-with-symfony-validator"},"Validating user input with Symfony validator"),(0,i.kt)("p",null,"GraphQLite provides a bridge to use the ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/validation.html"},"Symfony validator")," directly in your application."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you are using Symfony and the Symfony GraphQLite bundle, the bridge is available out of the box"),(0,i.kt)("li",{parentName:"ul"},'If you are using another framework, the "Symfony validator" component can be used in standalone mode. If you want to\nadd it to your project, you can require the ',(0,i.kt)("em",{parentName:"li"},"thecodingmachine/graphqlite-symfony-validator-bridge")," package:",(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require thecodingmachine/graphqlite-symfony-validator-bridge\n")))),(0,i.kt)("h3",{id:"using-the-symfony-validator-bridge"},"Using the Symfony validator bridge"),(0,i.kt)("p",null,"Usually, when you use the Symfony validator component, you put annotations in your entities and you validate those entities\nusing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Validator")," object."),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UserController.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\Graphqlite\\Validator\\ValidationFailedException\n\nclass UserController\n{\n    private $validator;\n\n    public function __construct(ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n    }\n\n    #[Mutation]\n    public function createUser(string $email, string $password): User\n    {\n        $user = new User($email, $password);\n\n        // Let's validate the user\n        $errors = $this->validator->validate($user);\n\n        // Throw an appropriate GraphQL exception if validation errors are encountered\n        ValidationFailedException::throwException($errors);\n\n        // No errors? Let's continue and save the user\n        // ...\n    }\n}\n"))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"UserController.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\Validator\\Validator\\ValidatorInterface;\nuse TheCodingMachine\\Graphqlite\\Validator\\ValidationFailedException\n\nclass UserController\n{\n    private $validator;\n\n    public function __construct(ValidatorInterface $validator)\n    {\n        $this->validator = $validator;\n    }\n\n    /**\n     * @Mutation\n     */\n    public function createUser(string $email, string $password): User\n    {\n        $user = new User($email, $password);\n\n        // Let's validate the user\n        $errors = $this->validator->validate($user);\n\n        // Throw an appropriate GraphQL exception if validation errors are encountered\n        ValidationFailedException::throwException($errors);\n\n        // No errors? Let's continue and save the user\n        // ...\n    }\n}\n")))),(0,i.kt)("p",null,"Validation rules are added directly to the object in the domain model:"),(0,i.kt)(o.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass User\n{\n    #[Assert\\Email(message: "The email \'{{ value }}\' is not a valid email.", checkMX: true)]\n    private $email;\n\n    /**\n     * The NotCompromisedPassword assertion asks the "HaveIBeenPawned" service if your password has already leaked or not.\n     */\n    #[Assert\\NotCompromisedPassword]\n    private $password;\n\n    public function __construct(string $email, string $password)\n    {\n        $this->email = $email;\n        $this->password = $password;\n    }\n\n    // ...\n}\n'))),(0,i.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"User.php")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\n\nclass User\n{\n    /**\n     * @Assert\\Email(\n     *     message = "The email \'{{ value }}\' is not a valid email.",\n     *     checkMX = true\n     * )\n     */\n    private $email;\n\n    /**\n     * The NotCompromisedPassword assertion asks the "HaveIBeenPawned" service if your password has already leaked or not.\n     * @Assert\\NotCompromisedPassword\n     */\n    private $password;\n\n    public function __construct(string $email, string $password)\n    {\n        $this->email = $email;\n        $this->password = $password;\n    }\n\n    // ...\n}\n')))),(0,i.kt)("p",null,'If a validation fails, GraphQLite will return the failed validations in the "errors" section of the JSON response:'),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "message": "The email \'\\"foo@thisdomaindoesnotexistatall.com\\"\' is not a valid email.",\n      "extensions": {\n        "code": "bf447c1c-0266-4e10-9c6c-573df282e413",\n        "field": "email",\n        "category": "Validate"\n      }\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"using-the-validator-directly-on-a-query--mutation--factory-"},"Using the validator directly on a query / mutation / factory ..."),(0,i.kt)("p",null,'If the data entered by the user is mapped to an object, please use the "validator" instance directly as explained in\nthe last chapter. It is a best practice to put your validation layer as close as possible to your domain model.'),(0,i.kt)("p",null,"If the data entered by the user is ",(0,i.kt)("strong",{parentName:"p"},"not")," mapped to an object, you can directly annotate your query, mutation, factory..."),(0,i.kt)("div",{class:"alert alert--warning"},"You generally don't want to do this. It is a best practice to put your validation constraints on your domain objects. Only use this technique if you want to validate user input and user input will not be stored in a domain object."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Assertion")," annotation to validate directly the user input."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'use Symfony\\Component\\Validator\\Constraints as Assert;\nuse TheCodingMachine\\Graphqlite\\Validator\\Annotations\\Assertion;\n\n/**\n * @Query\n * @Assertion(for="email", constraint=@Assert\\Email())\n */\npublic function findByMail(string $email): User\n{\n    // ...\n}\n')),(0,i.kt)("p",null,'Notice that the "constraint" parameter contains an annotation (it is an annotation wrapped in an annotation).'),(0,i.kt)("p",null,"You can also pass an array to the ",(0,i.kt)("inlineCode",{parentName:"p"},"constraint")," parameter:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Assertion(for="email", constraint={@Assert\\NotBlank(), @Assert\\Email()})\n')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!"),' The "@Assertion" annotation is only available as a ',(0,i.kt)("strong",null,"Doctrine annotations"),". You cannot use it as a PHP 8 attributes"))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);