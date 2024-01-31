"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[8626],{2597:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var n=s(5893),r=s(1151);const l={},t="Buffering Target",c={id:"hermes/components/buffering-target",title:"Buffering Target",description:"A buffering target represents a logical target of data placement, i.e.,",source:"@site/docs/03-hermes/06-components/03-buffering-target.md",sourceDirName:"03-hermes/06-components",slug:"/hermes/components/buffering-target",permalink:"/docs/hermes/components/buffering-target",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buffer Pool",permalink:"/docs/hermes/components/buffer-pool"},next:{title:"Data Placement",permalink:"/docs/hermes/components/data-placement"}},d={},h=[{value:"Terminology",id:"terminology",level:2},{value:"Virtual Device",id:"virtual-device",level:3},{value:"NodeID",id:"nodeid",level:3},{value:"User View",id:"user-view",level:2},{value:"Goals",id:"goals",level:2},{value:"Charateristics",id:"charateristics",level:2},{value:"Example",id:"example",level:2},{value:"Kitchen Sink",id:"kitchen-sink",level:2}];function a(e){const i={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"buffering-target",children:"Buffering Target"}),"\n",(0,n.jsx)(i.p,{children:"A buffering target represents a logical target of data placement, i.e.,\r\nparts of or a full BLOB can be placed there by the DPE. Buffering\r\ntargets are logical constructs that are statically mapped by Hermes to\r\nunderlying physical resources."}),"\n",(0,n.jsx)(i.h2,{id:"terminology",children:"Terminology"}),"\n",(0,n.jsx)(i.p,{children:"A buffering target consists of two components:"}),"\n",(0,n.jsx)(i.h3,{id:"virtual-device",children:"Virtual Device"}),"\n",(0,n.jsx)(i.p,{children:"This represents a way to get to the actual storage. It could be a file handle and an offset, a memory address, a partition of a drive, etc."}),"\n",(0,n.jsx)(i.h3,{id:"nodeid",children:"NodeID"}),"\n",(0,n.jsx)(i.p,{children:"The identifier of the node that is responsible for the virtual device."}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.strong,{children:"Tiers"}),' are the partitions of a partitioned set of targets order by a\r\nscore, which is calculated based on a set of prioritized\r\ncharacteristics. Tier 1 represents the "best" targets according to the\r\nprioritized characteristics, and the tiers get "worse" as the tier\r\nnumber increases. For example, tier 1 might be a local RAM target when\r\nbandwidth is the ordering characteristic, but it might be a burst buffer\r\ntarget when remaining capacity is prioritized.']}),"\n",(0,n.jsx)(i.p,{children:"When the DPE runs, it is given an appropriate list of targets. If a\r\nplacement fails, it can request an extended list of targets\r\n(neighborhood or global)."}),"\n",(0,n.jsxs)(i.p,{children:["For now we map 1 ",(0,n.jsx)(i.code,{children:"TargetID"})," to 1 (NodeID, VirtualDevice) pair, but the\r\noption is open for 1 to ",(0,n.jsx)(i.em,{children:"n"})," and ",(0,n.jsx)(i.em,{children:"n"})," to ",(0,n.jsx)(i.em,{children:"m"}),"."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsxs)(i.p,{children:["The set of targets can be partitioned in the form of ",(0,n.jsx)(i.em,{children:"topologies"}),". In\r\nsome cases, the aggregate characteristics of such partitions can be\r\ndefined based on the characteristics of the underlying targets."]}),"\n",(0,n.jsx)(i.hr,{}),"\n",(0,n.jsx)(i.h2,{id:"user-view",children:"User View"}),"\n",(0,n.jsxs)(i.p,{children:["Buffering targets are exposed in the [[Hermes Configuration]] file as the variables ",(0,n.jsx)(i.code,{children:"num_targets"})," and ",(0,n.jsx)(i.code,{children:"num_devices"}),". Currently, the number of targets must equal the number of devices."]}),"\n",(0,n.jsx)(i.h2,{id:"goals",children:"Goals"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Provide a way for the DPE to operate on a reduced (or custom) set of\r\nresources."}),"\n",(0,n.jsx)(i.li,{children:"Remove certain resources from DPE consideration."}),"\n",(0,n.jsx)(i.li,{children:"Create orderings of resources based on characteristics (i.e., tiered\r\ngroups)."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"charateristics",children:"Charateristics"}),"\n",(0,n.jsx)(i.p,{children:"Each buffering target has the following characteristics."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Targets $",(0,n.jsx)(i.code,{children:"d_i, i=1,\\ldots,D"}),"$","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Target configuration/specs.","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Cap[d_i]"}),"$ - the total capacity of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Wbw[d_i]"}),"$ - the HW max. write bandwidth of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Rbw[d_i]"}),"$ - the HW max. read bandwidth of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Alat[d_i]"}),"$ - the average HW access latency of target\r\n$",(0,n.jsx)(i.code,{children:"d_i"}),"$ (measured as time)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Pwr[d_i]"}),"$ - the energy consumption of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$\r\n(measured in Watts)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Concy[d_i]"}),"$ - the HW concurrency of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$\r\n(measured in lane count)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"End[d_i]"}),"$ - the endurance (wear and tear) of target\r\n$",(0,n.jsx)(i.code,{children:"d_i"}),"$ (measured as percentage of the expected storage\r\ncycles over the life time)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Rrat[d_i]"}),"$ - the reliability rating of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$\r\n(measured as test-retest reliability)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Speed[d_i]"}),"$ - the average I/O speed of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$\r\n(measured as MB/s)"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["Variables","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Avail[d_i]"}),"$ - the availability of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$\r\n(Boolean)"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Rem[d_i]"}),"$ - the remaining capacity of target $",(0,n.jsx)(i.code,{children:"d_i"}),"$"]}),"\n",(0,n.jsxs)(i.li,{children:["$",(0,n.jsx)(i.code,{children:"Load[d_i]"}),"$ - the expected completion time of outstanding\r\nrequests on target $",(0,n.jsx)(i.code,{children:"d_i"}),"$"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(i.p,{children:"Assume a system with 3 nodes, each with three targets (RAM, NVMe, and\r\nburst buffer). Assume a neighborhood is any 2 of the three nodes. This\r\nmeans a local target list will consist of 3 targets, a neighborhood target list of\r\n6, and the global target list of 9."}),"\n",(0,n.jsx)(i.h2,{id:"kitchen-sink",children:"Kitchen Sink"}),"\n",(0,n.jsx)("table",{children:(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{class:"odd",children:[(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:["From the ",(0,n.jsx)("a",{href:"https://www.cut.ac.cy/digitalAssets/122/122275_100sigmod.pdf",children:"OctopusFS paper"}),":"]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Tiers ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"T"}),(0,n.jsx)("sub",{children:"1"}),",\u2006\u2026,\u2006",(0,n.jsx)("em",{children:"T"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"k"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(i.p,{children:["Media ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"T"}),(0,n.jsx)("em",{children:"i"}),(0,n.jsx)("em",{children:"e"}),(0,n.jsx)("em",{children:"r"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the tier of medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"C"}),(0,n.jsx)("em",{children:"a"}),(0,n.jsx)("em",{children:"p"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the total capacity of medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"R"}),(0,n.jsx)("em",{children:"e"}),(0,n.jsx)("em",{children:"m"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the remaining capacity of medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"N"}),(0,n.jsx)("em",{children:"r"}),(0,n.jsx)("em",{children:"C"}),(0,n.jsx)("em",{children:"o"}),(0,n.jsx)("em",{children:"n"}),(0,n.jsx)("em",{children:"n"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the number of active I/O connections to medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"W"}),(0,n.jsx)("em",{children:"T"}),(0,n.jsx)("em",{children:"h"}),(0,n.jsx)("em",{children:"r"}),(0,n.jsx)("em",{children:"u"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the sustained write throughput of medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"R"}),(0,n.jsx)("em",{children:"T"}),(0,n.jsx)("em",{children:"h"}),(0,n.jsx)("em",{children:"r"}),(0,n.jsx)("em",{children:"u"}),"[",(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"]"]})," - the sustained read throughput of medium ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"m"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})})]})]})]})]}),(0,n.jsxs)("li",{children:[(0,n.jsxs)(i.p,{children:["Workers ",(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"W"}),(0,n.jsx)("sub",{children:"1"}),",\u2006\u2026,\u2006",(0,n.jsx)("em",{children:"W"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"n"})})]})]}),(0,n.jsx)("ul",{children:(0,n.jsxs)("li",{children:[(0,n.jsx)(i.p,{children:"Slightly different concept"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Stores and manages file blocks on storage media"}),(0,n.jsx)("li",{children:"Serves read and write requests from clients"}),(0,n.jsx)("li",{children:"Block creation, deletion, replication (instructed by name nodes HDFS...)"})]})]})})]})]})]}),(0,n.jsxs)("td",{children:[(0,n.jsxs)("p",{children:["From ",(0,n.jsx)("a",{href:"https://www.wrike.com/open.htm?id=416733774",children:"Wrike"}),":"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsxs)("span",{class:"math inline",children:[(0,n.jsx)("em",{children:"W"}),(0,n.jsx)("sub",{children:(0,n.jsx)("em",{children:"i"})}),"\u2004=\u2004\u2004<\u2004",(0,n.jsx)("em",{children:"n"}),(0,n.jsx)("em",{children:"o"}),(0,n.jsx)("em",{children:"d"}),(0,n.jsx)("em",{children:"e"}),",\u2006",(0,n.jsx)("em",{children:"t"}),(0,n.jsx)("em",{children:"i"}),(0,n.jsx)("em",{children:"e"}),(0,n.jsx)("em",{children:"r"}),">"]})}),(0,n.jsx)("li",{children:"Workers are a dedicated thread per tier available on the node"}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.p,{children:"Worker characteristics:"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Capacity"}),(0,n.jsx)("li",{children:"BW"}),(0,n.jsx)("li",{children:"Latency"}),(0,n.jsx)("li",{children:"Energy consumption"}),(0,n.jsx)("li",{children:"Concurrency (expressed as the number of lanes of the bus e.g., PCIex8 or SATA)"}),(0,n.jsxs)("li",{children:[(0,n.jsx)(i.p,{children:"Queue pressure (outstanding requests)"}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Aggregate data size in queue"}),(0,n.jsx)("li",{children:"Number of pending requests"})]})]})]})]})]})]})]})})})]})}function o(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,i,s)=>{s.d(i,{Z:()=>c,a:()=>t});var n=s(7294);const r={},l=n.createContext(r);function t(e){const i=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(l.Provider,{value:i},e.children)}}}]);