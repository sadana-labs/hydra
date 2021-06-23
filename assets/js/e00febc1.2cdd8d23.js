(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5198],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return s},kt:function(){return m}});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=t.createContext({}),c=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},s=function(e){var r=c(e.components);return t.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||o;return n?t.createElement(f,a(a({ref:r},s),{},{components:n})):t.createElement(f,a({ref:r},s))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var u={};for(var l in r)hasOwnProperty.call(r,l)&&(u[l]=r[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2870:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return u},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var t=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],u={id:"intro",title:"Overview",sidebar_label:"Introduction"},l=void 0,c={unversionedId:"configure_hydra/intro",id:"version-0.11/configure_hydra/intro",isDocsHomePage:!1,title:"Overview",description:"Many things in Hydra can be customized, this includes:",source:"@site/versioned_docs/version-0.11/configure_hydra/Intro.md",sourceDirName:"configure_hydra",slug:"/configure_hydra/intro",permalink:"/docs/0.11/configure_hydra/intro",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/versioned_docs/version-0.11/configure_hydra/Intro.md",version:"0.11",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1624411590,formattedLastUpdatedAt:"6/23/2021",frontMatter:{id:"intro",title:"Overview",sidebar_label:"Introduction"},sidebar:"version-0.11/docs",previous:{title:"Specializing configuration",permalink:"/docs/0.11/patterns/specializing_config"},next:{title:"Customizing logging",permalink:"/docs/0.11/configure_hydra/logging"}},s=[{value:"Runtime variables",id:"runtime-variables",children:[]}],d={toc:s};function p(e){var r=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Many things in Hydra can be customized, this includes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Logging configuration"),(0,o.kt)("li",{parentName:"ul"},"Run and Multirun output directory patterns"),(0,o.kt)("li",{parentName:"ul"},"Application help (--help and --hydra-help)")),(0,o.kt)("p",null,"Hydra can be customized using the same methods you are already familiar with from the tutorial.\nYou can include some Hydra config snippet in your own config to override it directly, or compose in different\nconfigurations provided by plugins or by your own code. You can also override everything in Hydra from the command\nline just like with your own configuration."),(0,o.kt)("p",null,"The Hydra configuration actually lives in the same config object as your configuration, but is removed prior to running\nyour function to reduce confusion.\nYou can view the configuration with ",(0,o.kt)("inlineCode",{parentName:"p"},"--cfg hydra|job|all")),(0,o.kt)("p",null,"The Hydra configuration itself is composed from multiple config files. here is a partial list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"defaults:\n  - hydra/job_logging : default     # Job's logging config\n  - hydra/launcher: basic           # Launcher config\n  - hydra/sweeper: basic            # Sweeper config\n  - hydra/output: default           # Output directory\n")),(0,o.kt)("p",null,"You can view the Hydra config structure ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/facebookresearch/hydra/tree/0.11_branch/hydra/conf"},"here"),"."),(0,o.kt)("p",null,"This is a subset of the composed Hydra configuration node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"hydra:\n  run:\n    # Output directory for normal runs\n    dir: ./outputs/${now:%Y-%m-%d_%H-%M-%S}\n  sweep:\n    # Output directory for sweep runs\n    dir: /checkpoint/${env:USER}/outputs/${now:%Y-%m-%d_%H-%M-%S}\n    # Output sub directory for sweep runs.\n    subdir: ${hydra.job.num}_${hydra.job.id}\n")),(0,o.kt)("h2",{id:"runtime-variables"},"Runtime variables"),(0,o.kt)("p",null,"The following variables are populated at runtime.\nYou can access them as config variables."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra.job"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.name")," : Job name, defaults to python file name without suffix. can be overridden."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.override_dirname")," : Pathname derived from the overrides for this job"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.num")," : job serial number in sweep"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.job.id")," : Job ID in the underlying jobs system (Slurm etc) ")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"hydra.runtime"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.runtime.version"),": Hydra's version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("em",{parentName:"li"},"hydra.runtime.cwd"),": Original working directory the app was executed from")))}p.isMDXComponent=!0}}]);