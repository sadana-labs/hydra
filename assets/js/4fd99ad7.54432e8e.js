(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[421],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3899:function(e,t,n){"use strict";n.d(t,{Z:function(){return s},T:function(){return u}});var r=n(2122),a=n(7294),i=n(6742),o=n(2263),l=n(907);function s(e){return a.createElement(i.Z,(0,r.Z)({},e,{to:(t=e.to,s=(0,l.zu)(),(0,o.default)().siteConfig.customFields.githubLinkVersionToBaseUrl[null!=(n=null==s?void 0:s.name)?n:"current"]+t),target:"_blank"}));var t,n,s}function u(e){var t,n=null!=(t=e.text)?t:"Example";return a.createElement(s,e,a.createElement("span",null,"\xa0"),a.createElement("img",{src:"https://img.shields.io/badge/-"+n+"-informational",alt:"Example"}))}},7320:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=n(3899),l=["components"],s={id:"documentation",title:"Documentation",sidebar_label:"Documentation"},u=void 0,c={unversionedId:"development/documentation",id:"development/documentation",isDocsHomePage:!1,title:"Documentation",description:"NEWS Entries",source:"@site/docs/development/documentation.md",sourceDirName:"development",slug:"/development/documentation",permalink:"/docs/next/development/documentation",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/development/documentation.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1624411590,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"documentation",title:"Documentation",sidebar_label:"Documentation"},sidebar:"docs",previous:{title:"Style Guide",permalink:"/docs/next/development/style_guide"},next:{title:"Release process",permalink:"/docs/next/development/release"}},d=[{value:"NEWS Entries",id:"news-entries",children:[{value:"Contents of a NEWS entry",id:"contents-of-a-news-entry",children:[]}]},{value:"Website setup",id:"website-setup",children:[{value:"Install",id:"install",children:[]},{value:"Local Development",id:"local-development",children:[]}]}],p={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"news-entries"},"NEWS Entries"),(0,i.kt)("p",null,"The ",(0,i.kt)(o.Z,{to:"NEWS.md",mdxType:"GithubLink"},"NEWS.md")," file is managed using ",(0,i.kt)("inlineCode",{parentName:"p"},"towncrier")," and all non-trivial changes\nmust be accompanied by a news entry."),(0,i.kt)("p",null,"To add an entry to the news file, first, you need to have created an issue\ndescribing the change you want to make. A Pull Request itself ",(0,i.kt)("em",{parentName:"p"},"may")," function as\nsuch, but it is preferred to have a dedicated issue (for example, in case the\nPR ends up rejected due to code quality reasons)."),(0,i.kt)("p",null,"Once you have an issue or pull request, you take the number, and you create a\nfile inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"news/")," directory (in case the change is directly related to Hydra)\nor in the ",(0,i.kt)("inlineCode",{parentName:"p"},"news/")," directory of the relevant plugin. The file is named after the\nissue number with one of the following extensions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"api_change")," : API Change (Renames, deprecations, and removals)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"feature")," : Addition of a new feature"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bugfix")," : Fixing of a bug"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"docs")," : Addition or updates to documentation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"config")," : Changes or addition to the configuration structure"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"maintenance")," : Changes that improve the maintainability of the code")),(0,i.kt)("p",null,"If your issue or PR number is ",(0,i.kt)("inlineCode",{parentName:"p"},"1234")," and this change is fixing a bug, you would\ncreate a file ",(0,i.kt)("inlineCode",{parentName:"p"},"news/1234.bugfix"),". PRs can span multiple categories by creating\nmultiple files (for instance, if you added a feature and deprecated/removed the\nold feature at the same time, you would create ",(0,i.kt)("inlineCode",{parentName:"p"},"news/NNNN.feature")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"news/NNNN.api_change"),"). Likewise, if a PR touches multiple issues/PRs, you may\ncreate a file for each of them with the exact same contents, and Towncrier will\ndeduplicate them."),(0,i.kt)("h3",{id:"contents-of-a-news-entry"},"Contents of a NEWS entry"),(0,i.kt)("p",null,"The contents of this file are markdown formatted text that will be used\nas the content of the news file entry. You do not need to reference the issue\nor PR numbers here as towncrier will automatically add a reference to all of\nthe affected issues when rendering the news file."),(0,i.kt)("p",null,"To maintain a consistent style in the ",(0,i.kt)("inlineCode",{parentName:"p"},"NEWS.md"),' file, it is\npreferred to keep the news entry to the point, in sentence case, shorter than\n80 characters and in an imperative tone -- an entry should complete the sentence\n"This change will ...". In rare cases, where one line is not enough, use a\nsummary line in an imperative tone followed by a blank line separating it\nfrom a description of the feature/change in one or more paragraphs, each wrapped\nat 80 characters. Remember that a news entry is meant for end users and should\nonly contain details relevant to an end user.'),(0,i.kt)("h2",{id:"website-setup"},"Website setup"),(0,i.kt)("p",null,"The website is built using ",(0,i.kt)("a",{parentName:"p",href:"https://v2.docusaurus.io/"},"Docusaurus 2"),".",(0,i.kt)("br",{parentName:"p"}),"\n","Run the following commands from the ",(0,i.kt)("inlineCode",{parentName:"p"},"website")," directory."),(0,i.kt)("h3",{id:"install"},"Install"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn\n")),(0,i.kt)("h3",{id:"local-development"},"Local Development"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ yarn start\n")),(0,i.kt)("p",null,"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."),(0,i.kt)("p",null,"For more details, refer ",(0,i.kt)(o.Z,{to:"website/README.md",mdxType:"GithubLink"},"here"),"."))}m.isMDXComponent=!0}}]);