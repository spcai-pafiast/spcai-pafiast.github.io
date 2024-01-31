"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[8912],{8960:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=s(5893),i=s(1151);const r={},a="Main Scenario",o={id:"hermes/main-scenario",title:"Main Scenario",description:"Hermes 1.1.0 is now available! [Download",source:"@site/docs/03-hermes/01-main-scenario.md",sourceDirName:"03-hermes",slug:"/hermes/main-scenario",permalink:"/docs/hermes/main-scenario",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Hermes",permalink:"/docs/category/hermes"},next:{title:"Building Hermes",permalink:"/docs/hermes/getting-started"}},l={},c=[{value:"How We Do It",id:"how-we-do-it",level:2},{value:"Other Scenarios and Use Cases",id:"other-scenarios-and-use-cases",level:2},{value:"Resources",id:"resources",level:2}];function d(e){const n={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"main-scenario",children:"Main Scenario"}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.p,{children:["Hermes ",(0,t.jsx)(n.strong,{children:"1.1.0"})," is now available! ",(0,t.jsx)(n.a,{href:"https://github.com/HDFGroup/hermes/releases",children:"Download\nnow"})," for the latest features and\nimprovements. For more information, visit the ",(0,t.jsx)(n.a,{href:"/research/projects/hermes",children:"Hermes project\npage"}),"."]})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Deep Memory and Storage Hierarchy (DMSH)",src:s(1972).Z+"",width:"637",height:"408"})}),"\n",(0,t.jsxs)(n.p,{children:["Consider an HPC cluster equipped with a ",(0,t.jsx)(n.a,{href:"components/examples",children:"deep memory and storage\nhierarchy"})," (DMSH), the bottom layer of\nwhich is typically a parallel file system (PFS). DMSH was introduced to\nboost or to at least improve the I/O (POSIX, MPI-IO, HDF5, ...)\nperformance of applications performing poorly otherwise. Unfortunately,\nDMSH is not a turn-key solution and difficult to use from a developer's or user's\nperspective. It seems that users are expected to\ntake control, to learn all the necessary DMSH details, and to make the\nnecessary code changes. Even if successful, this is a distraction from\nsolving domain problems and, worse, it will be harder to maintain and\nport the application to other or future systems."]}),"\n",(0,t.jsxs)(n.p,{children:["The goal of the Hermes project is to provide a ",(0,t.jsx)(n.em,{children:"seamless"})," solution that\nutilizes DMSH none or minimal changes to applications."]}),"\n",(0,t.jsx)(n.p,{children:"(Even without a deep DMSH, determined users have created original\nsolutions to overcome I/O performance challenges. See use cases for an example. Many of them can be\nconsidered custom, i.e., application-specific, I/O buffering systems.)"}),"\n",(0,t.jsx)(n.h2,{id:"how-we-do-it",children:"How We Do It"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Hermes Core",src:s(5022).Z+"",width:"641",height:"593"})}),"\n",(0,t.jsxs)(n.p,{children:["We implement an ",(0,t.jsx)(n.em,{children:"I/O buffering system"}),"\nwith the following characteristics:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Being seamless, it's a go-between for the by-and-large unmodified\napplications and the PFS. Applications will see a hopefully more\nperformant PFS."}),"\n",(0,t.jsx)(n.li,{children:"Users designate certain resources to be used for I/O buffering. Like\nmost buffering systems, it has a finite capacity. When that capacity\nis reached, the buffering system can no longer deliver noticeable\nbenefits and may perform as poorly as (or worse) than the unbuffered\nsystem (going to PFS)."}),"\n",(0,t.jsx)(n.li,{children:"Users express I/O priorities, constraints, and hints via buffering policies."}),"\n",(0,t.jsxs)(n.li,{children:["Given individual or batches of I/O operations (writes and reads),\nthe ",(0,t.jsx)(n.strong,{children:"main challenge"})," for such a buffering system is to determine\nwhere in DMSH a given data item is ",(0,t.jsx)("b",{children:"best/well/optimally-"}),"placed at\nthat point in time."]}),"\n",(0,t.jsxs)(n.li,{children:["To that end, the system consists of the following major components:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"components/data-placement",children:"Strategies and algorithms"})," that\nimplement policies and facilitate\ndata placement decisions. Speculative data\nplacement for read operations is also known as\n",(0,t.jsx)(n.a,{href:"components/prefetcher",children:"Prefetching"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["These strategies work with (dynamic) sets of ",(0,t.jsx)(n.a,{href:"components/buffering-target",children:"buffering\ntarget"}),"s and are applicable more\nbroadly."]}),"\n",(0,t.jsxs)(n.li,{children:["The physical buffering resources are managed in a distributed\n",(0,t.jsx)(n.a,{href:"components/buffer-pool",children:"Buffer Pool"})," (see also Batching\nSystem)."]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"components/buffer-organizer",children:"Buffer Organizer"})}),"\n",(0,t.jsx)(n.li,{children:"Profiler"}),"\n",(0,t.jsxs)(n.li,{children:["To separate concerns and for portability, system buffers are\n",(0,t.jsx)(n.strong,{children:"not"})," directly exposed to applications. There is a set of\nintermediate primitives targeted by\n",(0,t.jsx)(n.a,{href:"adapters",children:"adapters"})," for different I/O libraries. A\ngeneric ",(0,t.jsx)(n.a,{href:"components/distributed-metadata",children:"metadata manager"})," (MDM),\nsupports the bookkeeping needs of the various components."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"The whole system is deployed in a server-less fashion."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note"}),": A buffering system does ",(0,t.jsx)(n.strong,{children:"not"})," provide the same semantics as\nstorage."]}),"\n",(0,t.jsx)(n.h2,{id:"other-scenarios-and-use-cases",children:"Other Scenarios and Use Cases"}),"\n",(0,t.jsxs)(n.p,{children:["Our main scenario, a parallel application running on an HPC system and\nwriting files to a parallel file system, might be referred to as\noperating in Hermes ",(0,t.jsx)(n.strong,{children:"persistent mode."}),' This might be extended to\nmultiple applications "communicating" via the PFS. Another important\nscenario and set of use cases include applications that operate in a\nmore ',(0,t.jsx)(n.strong,{children:"transient mode"}),': they tend to produce massive amounts of\ntemporary data that need not be persisted in a PFS after the application\ncompletes. With DMSH, the use of PFS appears as a matter of last resort\n("out-of-core"), and an I/O buffering system might offer a more\nperformant solution.']}),"\n",(0,t.jsx)(n.p,{children:"DMSH are by no means limited to HPC clusters. Today, cloud-based VMs\nfrom major providers offer half a dozen or more storage options and\nmultiple interconnects. Since customers/users have the ability to\ncustomize the target system, it may seem that good I/O performance might\nbe a little easier to achieve. In practice, the picture is more\ncomplicated. For one, this is no longer just a technical decision, but\neconomic considerations (price and supply) play an important role. To\nwrite applications that perform well across a fleet of instance types\nand storage options is almost more challenging than to target a\nby-comparison stable HPC system. The concepts and techniques behind\nHermes are by no means specific to HPC systems and their suitability\nshould be examined in cloud-based environments."}),"\n",(0,t.jsx)(n.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://par.nsf.gov/servlets/purl/10063843",children:"Hermes: a heterogeneous-aware multi-tiered distributed I/O\nbuffering system"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://drive.google.com/drive/u/0/folders/0ALuH0a_m3nGWUk9PVA",children:"Google\nDrive"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},5022:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Hermes_Core_Lib_internals-75c6dbfaf190b4e42c765bee3c3dd82e.jpg"},1972:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/Hermes_hierachy-a8c0d5e9e044008fd19663a13df5bb02.jpg"},1151:(e,n,s)=>{s.d(n,{Z:()=>o,a:()=>a});var t=s(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);