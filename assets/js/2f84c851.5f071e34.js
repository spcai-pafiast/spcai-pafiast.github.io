"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[6466],{7572:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>a});var i=s(5893),r=s(1151);const l={},o="Frequently Asked Questions",c={id:"hermes/faq",title:"Frequently Asked Questions",description:"What is the minimum version for GCC?",source:"@site/docs/03-hermes/11-faq.md",sourceDirName:"03-hermes",slug:"/hermes/faq",permalink:"/docs/hermes/faq",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Doxygen",permalink:"/docs/hermes/doxygen"},next:{title:"Introduction",permalink:"/docs/chronolog/index"}},t={},a=[{value:"What is the minimum version for GCC?",id:"what-is-the-minimum-version-for-gcc",level:2},{value:"Spack installation fails. What should I do?",id:"spack-installation-fails-what-should-i-do",level:2},{value:"Does Spack install HDF5 VFD for Hermes?",id:"does-spack-install-hdf5-vfd-for-hermes",level:2},{value:"Can I run Hermes on Mac?",id:"can-i-run-hermes-on-mac",level:2},{value:"Does Hermes run on Linux only?",id:"does-hermes-run-on-linux-only",level:2},{value:"Can I run Hermes on Chameleon JupyterLab Server?",id:"can-i-run-hermes-on-chameleon-jupyterlab-server",level:2},{value:"Why do I get <code>mercury-&gt;fatal</code> error when I use <code>rpc_protocol = &quot;ofi+verbs&quot;;</code> in configuration file?",id:"why-do-i-get-mercury-fatal-error-when-i-use-rpc_protocol--ofiverbs-in-configuration-file",level:2},{value:"Why does MPI Adapter fail to compile?",id:"why-does-mpi-adapter-fail-to-compile",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"frequently-asked-questions",children:"Frequently Asked Questions"}),"\n",(0,i.jsx)(n.h2,{id:"what-is-the-minimum-version-for-gcc",children:"What is the minimum version for GCC?"}),"\n",(0,i.jsxs)(n.p,{children:["GCC 11. Hermes requires C++17 features that are only available since GCC 7.3. C++17 support is enabled by default in GCC 11; it can be explicitly selected in earlier versions with the ",(0,i.jsx)(n.code,{children:"-std=c++17"})," command-line flag or ",(0,i.jsx)(n.code,{children:"-std=gnu++17"})," to enable GNU extensions as well. See ",(0,i.jsx)(n.a,{href:"https://gcc.gnu.org/projects/cxx-status.html#cxx17",children:"C++17 Support in GCC"})," for the details. Use ",(0,i.jsx)(n.code,{children:"spack install gcc"})," first if your system has GCC 4. It will install GCC 12.2.0 by default. Then, run ",(0,i.jsx)(n.code,{children:"spack compiler find"})," to use the newly installed gcc."]}),"\n",(0,i.jsx)(n.h2,{id:"spack-installation-fails-what-should-i-do",children:"Spack installation fails. What should I do?"}),"\n",(0,i.jsxs)(n.p,{children:["If Python throws ",(0,i.jsx)(n.code,{children:"AttributeError: 'NoneType' object has no attribute 'version'"})," during spack installation,"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["try add ",(0,i.jsx)(n.code,{children:"-d"})," option for ",(0,i.jsx)(n.code,{children:"spack -d install hermes"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["try to remove these two packages:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mochi-spack-packages/packages/flamestore"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"mochi-spack-packages/packages/py-mochi-tmci"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["try ",(0,i.jsx)(n.code,{children:"spack install or-tools  ^abseil-cpp@20200225.2"})," if OR-Tools installation fails.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"gcc-11.2 can't build abseil-cpp@20200225.2"}),"."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"does-spack-install-hdf5-vfd-for-hermes",children:"Does Spack install HDF5 VFD for Hermes?"}),"\n",(0,i.jsxs)(n.p,{children:["Yes. To build it with Spack, use ",(0,i.jsx)(n.code,{children:"$spack install hermes+vfd"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["To use the latest 1.13 development version of HDF5, add ",(0,i.jsx)(n.code,{children:"^hdf5@develop-1.13"})," (e.g., ",(0,i.jsx)(n.code,{children:"$spack install hermes+vfd ^hdf5@develop-1.13"}),")."]}),"\n",(0,i.jsx)(n.h2,{id:"can-i-run-hermes-on-mac",children:"Can I run Hermes on Mac?"}),"\n",(0,i.jsx)(n.p,{children:"No. macOS lacks several system calls that Hermes components use:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"fopen64"})," / ",(0,i.jsx)(n.code,{children:"fseeko64"})]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"O_DIRECT"})," / ",(0,i.jsx)(n.code,{children:"O_TMPFILE"})]}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"gethostbyname_r"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"_STAT_VER"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"does-hermes-run-on-linux-only",children:"Does Hermes run on Linux only?"}),"\n",(0,i.jsxs)(n.p,{children:["Yes. Hermes uses the fixed ",(0,i.jsx)(n.code,{children:"/proc"})," code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cpp",children:"inline std::string GetFilenameFromFD(int fd) {\n  char proclnk[kMaxPathLen];\n  char filename[kMaxPathLen];\n  snprintf(proclnk, kMaxPathLen, \"/proc/self/fd/%d\", fd);\n  size_t r = readlink(proclnk, filename, kMaxPathLen);\n  filename[r] = '\\0';\n  return filename;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"can-i-run-hermes-on-chameleon-jupyterlab-server",children:"Can I run Hermes on Chameleon JupyterLab Server?"}),"\n",(0,i.jsx)(n.p,{children:"Maybe. However, installation with Spack will fail due to timeout. For older (< 0.8) Hermes, Google OR-Tools installation will fail."}),"\n",(0,i.jsxs)(n.h2,{id:"why-do-i-get-mercury-fatal-error-when-i-use-rpc_protocol--ofiverbs-in-configuration-file",children:["Why do I get ",(0,i.jsx)(n.code,{children:"mercury->fatal"})," error when I use ",(0,i.jsx)(n.code,{children:'rpc_protocol = "ofi+verbs";'})," in configuration file?"]}),"\n",(0,i.jsxs)(n.p,{children:["Such error occurs when ",(0,i.jsx)(n.code,{children:"libfabric"})," is not compiled with ",(0,i.jsx)(n.code,{children:"verbs"})," support. Try ",(0,i.jsx)(n.code,{children:"spack install hermes ^libfabric fabrics=rxm,sockets,tcp,udp,verbs"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"why-does-mpi-adapter-fail-to-compile",children:"Why does MPI Adapter fail to compile?"}),"\n",(0,i.jsxs)(n.p,{children:["The MPI-IO adapter only supports MPICH. Use ",(0,i.jsx)(n.code,{children:"spack install mpi ^mpich"})," to install mpi. Load it with ",(0,i.jsx)(n.code,{children:"spack load mpi"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>o});var i=s(7294);const r={},l=i.createContext(r);function o(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);