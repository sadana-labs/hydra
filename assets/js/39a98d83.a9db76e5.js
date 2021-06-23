(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[801],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),g=p(a),m=r,u=g["".concat(c,".").concat(m)]||g[m]||s[m]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},7258:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return d},default:function(){return g}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),o=["components"],l={id:"overriding_packages",title:"Overriding packages"},c=void 0,p={unversionedId:"advanced/overriding_packages",id:"version-1.0/advanced/overriding_packages",isDocsHomePage:!1,title:"Overriding packages",description:"Example application",source:"@site/versioned_docs/version-1.0/advanced/overriding_packages.md",sourceDirName:"advanced",slug:"/advanced/overriding_packages",permalink:"/docs/1.0/advanced/overriding_packages",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-1.0/advanced/overriding_packages.md",version:"1.0",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1624411590,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"overriding_packages",title:"Overriding packages"},sidebar:"version-1.0/docs",previous:{title:"Extended Override syntax",permalink:"/docs/1.0/advanced/override_grammar/extended"},next:{title:"Config Search Path",permalink:"/docs/1.0/advanced/search_path"}},d=[{value:"Package specification",id:"package-specification",children:[]},{value:"Overriding the package in a file via a package directive",id:"overriding-the-package-in-a-file-via-a-package-directive",children:[]},{value:"Overriding the package via the defaults list",id:"overriding-the-package-via-the-defaults-list",children:[]},{value:"History and future of the package directive",id:"history-and-future-of-the-package-directive",children:[]}],s={toc:d};function g(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/1.0_branch/examples/advanced/package_overrides"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/-Example%20application-informational",alt:"Example application"}))),(0,i.kt)("p",null,"The contents of a config file can be relocated, or replicated, within the config, via package overrides."),(0,i.kt)("h3",{id:"package-specification"},"Package specification"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Definition of a package"',title:'"Definition',of:!0,a:!0,'package"':!0},"PACKAGE      : _global_ | COMPONENT[.COMPONENT]*\nCOMPONENT    : _group_ | _name_ | \\w+\n\n_global_     : the top level package (equivalent to the empty string).\n_group_      : the config group in dot notation: foo/bar/zoo.yaml -> foo.bar\n_name_       : the config file name: foo/bar/zoo.yaml -> zoo\n")),(0,i.kt)("h3",{id:"overriding-the-package-in-a-file-via-a-package-directive"},"Overriding the package in a file via a package directive"),(0,i.kt)("p",null,"A ",(0,i.kt)("inlineCode",{parentName:"p"},"@package directive")," specifies a common ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.0/terminology#package"},"package")," for all nodes in the config file.\nIt must be placed at the top of each ",(0,i.kt)("inlineCode",{parentName:"p"},"config group file"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Package directive examples"',title:'"Package',directive:!0,'examples"':!0},"# @package foo.bar\n# @package _global_\n# @package _group_\n# @package _group_._name_\n# @package foo._group_._name_\n")),(0,i.kt)("h4",{id:"examples"},"Examples"),(0,i.kt)("h5",{id:"a-package-directive-with-a-literal"},"A package directive with a literal"),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="mysql.yaml" {1-2}',title:'"mysql.yaml"',"{1-2}":!0},"# @package foo.bar\n\ndb:\n  host: localhost\n  port: 3306\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0},"foo:\n  bar:\n    db:\n      host: localhost\n      port: 3306\n")))),(0,i.kt)("h5",{id:"a-package-directive-with-_group_-and-_name_"},"A package directive with ",(0,i.kt)("inlineCode",{parentName:"h5"},"_group_")," and ",(0,i.kt)("inlineCode",{parentName:"h5"},"_name_")),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="db/mysql.yaml" {1-2}',title:'"db/mysql.yaml"',"{1-2}":!0},"# @package _group_._name_\n\nhost: localhost\nport: 3306\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation" {1-2}',title:'"Interpretation"',"{1-2}":!0},"db:\n  mysql:\n    host: localhost\n    port: 3306\n")))),(0,i.kt)("h3",{id:"overriding-the-package-via-the-defaults-list"},"Overriding the package via the defaults list"),(0,i.kt)("p",null,"The following example adds the ",(0,i.kt)("inlineCode",{parentName:"p"},"mysql")," config in the packages ",(0,i.kt)("inlineCode",{parentName:"p"},"db.src")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"db.dst"),"."),(0,i.kt)("div",{className:"row"},(0,i.kt)("div",{className:"col col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"defaults:\n - db@db.src: mysql\n - db@db.dst: mysql\n\n\n\n\n"))),(0,i.kt)("div",{className:"col  col--6"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="Interpretation"',title:'"Interpretation"'},"db:\n  src:\n    host: localhost\n    port: 3306\n  dst:\n    host: localhost\n    port: 3306\n")))),(0,i.kt)("h3",{id:"history-and-future-of-the-package-directive"},"History and future of the package directive"),(0,i.kt)("p",null,"The primary config, named in ",(0,i.kt)("inlineCode",{parentName:"p"},"@hydra.main()")," should not have a package directive."),(0,i.kt)("p",null,"For config files in config groups the default depends on the version:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"Hydra 0.11"),", there was an implicit default of ",(0,i.kt)("inlineCode",{parentName:"li"},"_global_")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Hydra 1.0")," the default is ",(0,i.kt)("inlineCode",{parentName:"li"},"_global_"),(0,i.kt)("br",{parentName:"li"}),"A warning is issued for each ",(0,i.kt)("strong",{parentName:"li"},"config group file")," without a ",(0,i.kt)("inlineCode",{parentName:"li"},"@package")," directive."),(0,i.kt)("li",{parentName:"ul"},"In ",(0,i.kt)("strong",{parentName:"li"},"Hydra 1.1")," the default for ",(0,i.kt)("strong",{parentName:"li"},"config group files")," will become ",(0,i.kt)("inlineCode",{parentName:"li"},"_group_"))),(0,i.kt)("p",null,"By adding an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"@package")," to your configs files, you guarantee that they",(0,i.kt)("br",{parentName:"p"}),"\n","will not break when you upgrade to Hydra 1.1."))}g.isMDXComponent=!0}}]);