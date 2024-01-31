"use strict";(self.webpackChunkgrc=self.webpackChunkgrc||[]).push([[6238],{7314:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(5893),a=n(1151);const i={},r="Runtime",o={id:"hermes/components/runtime",title:"Runtime",description:"Hermes is built as a plugin to the Hermes Runtime, a distributed task processing framework",source:"@site/docs/03-hermes/06-components/07-runtime.md",sourceDirName:"03-hermes/06-components",slug:"/hermes/components/runtime",permalink:"/docs/hermes/components/runtime",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Data Staging",permalink:"/docs/hermes/components/data-staging"},next:{title:"Distributed Metadata",permalink:"/docs/hermes/components/distributed-metadata"}},l={},c=[{value:"Task Repos and Task Libraries",id:"task-repos-and-task-libraries",level:2},{value:"Bootstrapping a Task Library",id:"bootstrapping-a-task-library",level:2},{value:"Overview of Bootstrapped Code",id:"overview-of-bootstrapped-code",level:3},{value:"CreateTask",id:"createtask",level:3},{value:"Task Struct",id:"task-struct",level:4},{value:"Task Client",id:"task-client",level:4},{value:"Task Server",id:"task-server",level:4},{value:"DestructTask",id:"destructtask",level:3},{value:"Overview of Task Submission and Queueing",id:"overview-of-task-submission-and-queueing",level:2},{value:"Creating Custom Tasks",id:"creating-custom-tasks",level:2},{value:"Modify <code>compress_methods.yaml</code>",id:"modify-compress_methodsyaml",level:3},{value:"Modify <code>compress_tasks.h</code>",id:"modify-compress_tasksh",level:3},{value:"The <code>TaskFlags</code> base class",id:"the-taskflags-base-class",level:4},{value:"Task Constructor",id:"task-constructor",level:4},{value:"Modify <code>compress.cc</code>",id:"modify-compresscc",level:3},{value:"Modify <code>compress.h</code>",id:"modify-compressh",level:3},{value:"Task Methods",id:"task-methods",level:3},{value:"Registering a Task Library",id:"registering-a-task-library",level:2},{value:"Task Grouping, Worker Polling, and Deadlock Prevention",id:"task-grouping-worker-polling-and-deadlock-prevention",level:2},{value:"Building a Replicatable Task",id:"building-a-replicatable-task",level:2},{value:"Building a Data-Intensive, RDMA-Capable Task",id:"building-a-data-intensive-rdma-capable-task",level:2}];function d(e){const s={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.h1,{id:"runtime",children:"Runtime"}),"\n",(0,t.jsx)(s.p,{children:"Hermes is built as a plugin to the Hermes Runtime, a distributed task processing framework\ncapable of scheduling, replicating, distributing, processing, monitoring, and\nload balancing arbitrary tasks. Tasks define various properties which provide\ncontrol over scheduling decisions, memory management, and concurrency.\nThis section will discuss the design of the Hermes Runtime and how to develop\ncustom tasks."}),"\n",(0,t.jsx)(s.h2,{id:"task-repos-and-task-libraries",children:"Task Repos and Task Libraries"}),"\n",(0,t.jsxs)(s.p,{children:["The Hermes Runtime is used for executing arbitrary tasks. Developers can create\nnew tasks and release them using a decentralized package management design,\nsimilar to spack. This is accomplished through ",(0,t.jsx)(s.strong,{children:"task repos"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["A task repo is a directory which contains a set of ",(0,t.jsx)(s.strong,{children:"task libraries"}),". A\ntask library (or lib) provides the functionality to submit and execute tasks.\nTask libs follow the single responsibility principle. Multiple task libs should\nbe created to separate unrelated or loosely related functionality."]}),"\n",(0,t.jsx)(s.p,{children:'For example, the Hermes Runtime has a task repo named "tasks_required" located under the hrun directory of the Hermes repo.'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{children:"tasks_required\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 hrun_admin\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u251c\u2500\u2500 proc_queue\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u251c\u2500\u2500 remote_queue\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u251c\u2500\u2500 small_message\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u251c\u2500\u2500 TASK_NAME\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u251c\u2500\u2500 worch_proc_round_robin\n\u2502\xa0\xa0 \u251c\u2500\u2500 CMakeLists.txt\n\u2502\xa0\xa0 \u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 src\n\u2514\u2500\u2500 worch_queue_round_robin\n    \u251c\u2500\u2500 CMakeLists.txt\n    \u251c\u2500\u2500 include\n    \u2514\u2500\u2500 src\n"})}),"\n",(0,t.jsx)(s.p,{children:"The tasks_required directory contains tasks which are required for the Hermes Runtime to function. These tasks are non-negotiable and will always be registered automatically by the runtime."}),"\n",(0,t.jsx)(s.h2,{id:"bootstrapping-a-task-library",children:"Bootstrapping a Task Library"}),"\n",(0,t.jsx)(s.p,{children:"A Task Library implements the following concepts:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Task"}),": A struct containing the parameters to execute"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Task Server"}),": A class responsible for executing tasks. This is\nreleased as a shared object."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.strong,{children:"Task Client"}),": A class responsible for submitting tasks to the hermes runtime. This is released as a header file, which is included by the client program."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:['To easily bootstrap a task lib, Hermes provides a python-based code generator called make_task. This script assumes a Linux system at this time (Windows has a different pathing system). Let\'s say you want to create a new task lib named "compress" for creating a factory of compression libraries. The task lib is located in the task repo ',(0,t.jsx)(s.code,{children:"${HOME}/my_task_repo"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"codegen/make_task ${HOME}/my_task_repo/compress\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will create a task lib with the following directory structure:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"compress\n\u251c\u2500\u2500 CMakeLists.txt\n\u251c\u2500\u2500 include\n\u2502\xa0\xa0 \u2514\u2500\u2500 compress\n\u2502\xa0\xa0     \u251c\u2500\u2500 compress.h\n\u2502\xa0\xa0     \u251c\u2500\u2500 compress_lib_exec.h\n\u2502\xa0\xa0     \u251c\u2500\u2500 compress_methods.h\n\u2502\xa0\xa0     \u251c\u2500\u2500 compress_methods.yaml\n\u2502\xa0\xa0     \u2514\u2500\u2500 compress_tasks.h\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 CMakeLists.txt\n    \u2514\u2500\u2500 compress.cc\n"})}),"\n",(0,t.jsx)(s.p,{children:"The main files to edit:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"include/compress/compress.h"}),":\nThis is the ",(0,t.jsx)(s.strong,{children:"Task Client"}),". User applications (e.g., VPIC, WRF) include this file and use it to submit tasks to the Hermes Runtime."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"include/compress/compress_methods.yaml"}),":\nDefines the name of all methods that will be implemented in the ",(0,t.jsx)(s.strong,{children:"Task Server"}),". This file will be converted into an enumeration."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"include/compress/compress_tasks.h"}),":\nDefines the ",(0,t.jsx)(s.strong,{children:"Tasks"})," that can be constructed. Tasks are implemented as structs that are compatible with shared memory.\nTasks will only implement methods to serialize and copy the task. The actual function of the task is implemented\nin the Task Server."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"src/compress/compress.cc"}),":\nThis is the ",(0,t.jsx)(s.strong,{children:"Task Server"}),". This file will be compiled into a shared object that can be dynamically loaded by the runtime. The task server must include handlers which take as input a task struct and then run a function over it."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"Files that are automatically generated:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"include/compress/compress_lib_exec.h"}),":\nThis is included in ",(0,t.jsx)(s.code,{children:"compress.cc"})," automatically.\nThis is an internal file not meant to be included anywhere else.\nThis file produces code to route tasks to functions in compress.cc."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"include/compress/compress_methods.h"}),":\nThis defines an enumeration containing all methods defined\nin compress_methods.yaml. It is included automatically by ",(0,t.jsx)(s.code,{children:"compress_tasks.h"})]}),"\n"]}),"\n",(0,t.jsx)(s.h3,{id:"overview-of-bootstrapped-code",children:"Overview of Bootstrapped Code"}),"\n",(0,t.jsx)(s.p,{children:"The bootstrap method will create a task library with the following methods: Create, Destruct, and Custom. Create and Destruct are required\nby all Task Libraries and should not be removed. Custom is optional and provides an overview of the methods available to you for creating custom tasks. The code generated can be compiled immediately by adding it as a subdirectory to the root CMake of the task repo."}),"\n",(0,t.jsx)(s.h3,{id:"createtask",children:"CreateTask"}),"\n",(0,t.jsx)(s.p,{children:"CreateTask is responsible for initially registering a task state in the Hermes Runtime. This is analgous to class constructors."}),"\n",(0,t.jsx)(s.h4,{id:"task-struct",children:"Task Struct"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"include/compress/compress_tasks.h"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:'using hrun::Admin::CreateTaskStateTask;\nstruct ConstructTask : public CreateTaskStateTask {\n  /** SHM default constructor */\n  HSHM_ALWAYS_INLINE explicit\n  ConstructTask(hipc::Allocator *alloc)\n  : CreateTaskStateTask(alloc) {}\n\n  /** Emplace constructor */\n  HSHM_ALWAYS_INLINE explicit\n  ConstructTask(hipc::Allocator *alloc,\n                const TaskNode &task_node,\n                const DomainId &domain_id,\n                const std::string &state_name,\n                const TaskStateId &id,\n                const std::vector<PriorityInfo> &queue_info)\n      : CreateTaskStateTask(alloc, task_node, domain_id, state_name,\n                            "compress", id, queue_info) {\n    // Custom params\n  }\n\n  HSHM_ALWAYS_INLINE\n  ~ConstructTask() {\n    // Custom params\n  }\n};\n'})}),"\n",(0,t.jsx)(s.p,{children:"This file defines the task struct that will be communicated between clients and the runtime. This task must always include a minimum of the above parameters. The order of parameters\nshould not be changed. Any additional parameters should be appended after queue_info."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"alloc"}),": The shared-memory allocator the task was allocated with"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"task_node"}),': Tasks can spawn subtasks. This ability we refer to as Task Graphs. TaskNode stores the root of the Task Graph and the depth of this task in the Task Graph. For "Root" tasks, the TaskNode will be the unique ID of the task with a depth of 0.']}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"domain_id"}),": Tasks can be scheduled or replicated over a domain of nodes. A domain is analogous to an MPI communicator. However, domains theoretically support dynamic node registration, unlike MPI."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"state_name"}),": This is a semantic, unique, user-defined name to give the state. The state can be queried using this name in the future."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"state_id"}),": This is a unique integer ID to give the state. This is an optional parameter that can be equal to null. When null, the state id is allocated automatically by the runtime and returned as the ",(0,t.jsx)(s.code,{children:"id_"})," parameter in the base class CreateTaskStateTask."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"queue_info"}),": Provides control over the queue to spawn to interact with this state. Each task state"]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"task-client",children:"Task Client"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"include/compress/compress.h"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"/** Async create a task state */\nHSHM_ALWAYS_INLINE\nLPointer<ConstructTask> AsyncCreate(const TaskNode &task_node,\n                                    const DomainId &domain_id,\n                                    const std::string &state_name) {\n  id_ = TaskStateId::GetNull();\n  QueueManagerInfo &qm = HRUN_CLIENT->server_config_.queue_manager_;\n  std::vector<PriorityInfo> queue_info = {\n      {1, 1, qm.queue_depth_, 0},\n      {1, 1, qm.queue_depth_, QUEUE_LONG_RUNNING},\n      {qm.max_lanes_, qm.max_lanes_, qm.queue_depth_, QUEUE_LOW_LATENCY}\n  };\n  return HRUN_ADMIN->AsyncCreateTaskState<ConstructTask>(\n      task_node, domain_id, state_name, id_, queue_info);\n}\nHRUN_TASK_NODE_ROOT(AsyncCreate)\ntemplate<typename ...Args>\nHSHM_ALWAYS_INLINE\nvoid CreateRoot(Args&& ...args) {\n  LPointer<ConstructTask> task =\n      AsyncCreateRoot(std::forward<Args>(args)...);\n  task->Wait();\n  id_ = task->id_;\n  queue_id_ = QueueId(id_);\n  HRUN_CLIENT->DelTask(task);\n}\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This code is called in client programs, such as VPIC, HACC, etc. ",(0,t.jsx)(s.code,{children:"CreateRoot"})," calls ",(0,t.jsx)(s.code,{children:"AsyncCreateRoot"}),", which will allocate, construct, and enqueue the CreateTask. ",(0,t.jsx)(s.code,{children:"HRUN_TASK_NODE_ROOT"}),' is a macro that creates the\nAsyncCreateRoot method. The "Root" suffix implies that the method\nis going to spawn a task that represents the root of a Task Graph.\nThis distinction is needed for avoiding potential deadlocks and\nconsistency problems.']}),"\n",(0,t.jsx)(s.h4,{id:"task-server",children:"Task Server"}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"src/compress.cc"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"void Construct(ConstructTask *task, RunContext &rctx) {\n  task->SetModuleComplete();\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"This is the method that the ConstructTask will be routed to."}),"\n",(0,t.jsx)(s.h3,{id:"destructtask",children:"DestructTask"}),"\n",(0,t.jsxs)(s.p,{children:["The destruct task is responsible for releasing the Task State when the runtime is shutting down or when the user intentionally frees it. The DestructTask defined in ",(0,t.jsx)(s.code,{children:"compress_tasks.h"})," should never be modified, and is the same across all tasks. It should not take additional parameters since the runtime shutdown process will fail."]}),"\n",(0,t.jsx)(s.h2,{id:"overview-of-task-submission-and-queueing",children:"Overview of Task Submission and Queueing"}),"\n",(0,t.jsx)(s.p,{children:"Communication with the Hermes Runtime is accomplished through queueing.\nThe data structure is termed MultiQueue. The MultiQueue is a shared-memory, lock-free, concurrent priority queue. For each Task State,\nan associated MultiQueue will be created. MultiQueues are defined\nby a vector of PriorityInfo structs."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"struct PriorityInfo {\n  u32 max_lanes_;       /**< Maximum number of lanes in the queue */\n  u32 num_lanes_;       /**< Current number of lanes in use */\n  u32 depth_;           /**< The maximum depth of individual lanes */\n  bitfield32_t flags_;  /**< Scheduling hints for the queue */\n};\n"})}),"\n",(0,t.jsx)(s.p,{children:"A lane is a multiple-producer, single-consumer lock-free shared memory\nqueue. Each lane is scheduled on workers independently. A lane represents\nthe unit of concurrency in the Hermes Runtime."}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.code,{children:"include/compress/compress.h"}),":"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"/** Async create a task state */\nHSHM_ALWAYS_INLINE\nLPointer<ConstructTask> AsyncCreate(const TaskNode &task_node,\n                                    const DomainId &domain_id,\n                                    const std::string &state_name) {\n  id_ = TaskStateId::GetNull();\n  QueueManagerInfo &qm = HRUN_CLIENT->server_config_.queue_manager_;\n  std::vector<PriorityInfo> queue_info = {\n      {1, 1, qm.queue_depth_, 0},\n      {1, 1, qm.queue_depth_, QUEUE_LONG_RUNNING},\n      {qm.max_lanes_, qm.max_lanes_, qm.queue_depth_, QUEUE_LOW_LATENCY}\n  };\n  return HRUN_ADMIN->AsyncCreateTaskState<ConstructTask>(\n      task_node, domain_id, state_name, id_, queue_info);\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will create a MultiQueue with three priorities. Each element of\nthe vector is a Priority. Priority 0 will contain a single lane with\nthe user-configured default queue depth. Priority 1 will also\nbe a single lane, but with QUEUE_LONG_RUNNING flag. Tasks in these\nlanes will be scheduled on diferent workers for QUEUE_LOW_LATENCY\nlanes for performance reasons."}),"\n",(0,t.jsx)(s.h2,{id:"creating-custom-tasks",children:"Creating Custom Tasks"}),"\n",(0,t.jsx)(s.p,{children:"Now that the task library has been bootstrapped, this section will go over how to add new tasks."}),"\n",(0,t.jsxs)(s.h3,{id:"modify-compress_methodsyaml",children:["Modify ",(0,t.jsx)(s.code,{children:"compress_methods.yaml"})]}),"\n",(0,t.jsx)(s.p,{children:"Initially, the file contains:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"kCustom: 0\n"})}),"\n",(0,t.jsx)(s.p,{children:"For compression, let's say we want to have two methods: Compress and\nDecompress. We would modify this file to contain the following:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:"kCompress: 0\nkDecompress: 1\n"})}),"\n",(0,t.jsx)(s.p,{children:"We then need to refresh the methods in this repo. This will autogenerate\ncode needed by the runtime to route tasks to these functions. This\nis accomplished through the refresh_methods code generator:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"codegen/refresh_methods ${HOME}/my_task_repo\n"})}),"\n",(0,t.jsx)(s.p,{children:"This will refresh all methods in the my_task_repo. This should be\na very fast operation, so it just does it for all tasks in the\ndirectory to avoid specifying a specific task library."}),"\n",(0,t.jsxs)(s.h3,{id:"modify-compress_tasksh",children:["Modify ",(0,t.jsx)(s.code,{children:"compress_tasks.h"})]}),"\n",(0,t.jsx)(s.p,{children:"Let's add the following task for representing the compression method."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"struct CompressTask : public Task, TaskFlags<TF_SRL_SYM> {\n  IN int compress_method_;\n  IN hipc::ShmArchive<hipc::string> data_;\n\n  /** SHM default constructor */\n  HSHM_ALWAYS_INLINE explicit\n  CompressTask(hipc::Allocator *alloc) : Task(alloc) {}\n\n  /** Emplace constructor */\n  HSHM_ALWAYS_INLINE explicit\n  CompressTask(hipc::Allocator *alloc,\n             const TaskNode &task_node,\n             const DomainId &domain_id,\n             const TaskStateId &state_id,\n             int compress_method,\n             const std::string &data) : Task(alloc) {\n    // Initialize task\n    task_node_ = task_node;\n    lane_hash_ = 0;\n    prio_ = TaskPrio::kLowLatency;\n    task_state_ = state_id;\n    method_ = Method::kCustom;\n    task_flags_.SetBits(TASK_UNORDERED | TASK_LANE_ANY);\n    domain_id_ = domain_id;\n\n    // Custom params\n    compress_method_ = compress_method;\n    HSHM_MAKE_AR(data_, alloc, data);\n  }\n\n  /** (De)serialize message call */\n  template<typename Ar>\n  void SerializeStart(Ar &ar) {\n    task_serialize<Ar>(ar);\n    ar(compress_method_, data_);\n  }\n\n  /** (De)serialize message return */\n  template<typename Ar>\n  void SerializeEnd(u32 replica, Ar &ar) {\n  }\n\n  /** Create group */\n  HSHM_ALWAYS_INLINE\n  u32 GetGroup(hshm::charbuf &group) {\n    return TASK_UNORDERED;\n  }\n};\n"})}),"\n",(0,t.jsxs)(s.h4,{id:"the-taskflags-base-class",children:["The ",(0,t.jsx)(s.code,{children:"TaskFlags"})," base class"]}),"\n",(0,t.jsx)(s.p,{children:"The CompressTask inherits from TaskFlags, which defines compile-time\nproperties of the task -- particularly the class methods."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"struct CompressTask : public Task, TaskFlags<TF_SRL_SYM> {\n// };\n"})}),"\n",(0,t.jsx)(s.p,{children:"Here, the TaskFlags has the parameter TF_SRL_SYM. This constant implies\nthe task supports serialization methods. These methods will be called\ninternally when a task gets dispersed to remote nodes."}),"\n",(0,t.jsx)(s.p,{children:"SerializeStart is called when a task is being shipped to a remote\nnode for execution. SerializeEnd is called when returning from\nthe remote node. In this way, the task can store both the input\nand output of the operation performed. This avoids having a separate\ncompletion queue."}),"\n",(0,t.jsx)(s.p,{children:"There are a few kinds of tasks:"}),"\n",(0,t.jsxs)(s.ol,{children:["\n",(0,t.jsx)(s.li,{children:"TF_LOCAL: tasks that execute only on the local node. They cannot\nbe shipped to remote nodes and they cannot be replicated."}),"\n",(0,t.jsx)(s.li,{children:"TF_SRL_SYM: tasks that execute potentially on a remote node. They\ncannot be replicated. Must implement SerializeStart and SerializeEnd."}),"\n",(0,t.jsx)(s.li,{children:"TF_SRL_SYM | TF_REPLICA: tasks that can be shipped to a remote node\nand support replication. Must implement ReplicateStart, ReplicateEnd, Dup, DupEnd."}),"\n",(0,t.jsx)(s.li,{children:"TF_SRL_ASYM_START: task has asymmetric serialization and deserialization methods for input variables (SaveStart, LoadStart instead of SerializeStart)"}),"\n",(0,t.jsx)(s.li,{children:"TF_SRL_ASYM_END: task has asymmetric serialization and deserialization methods for output variables (SaveEnd, LoadEnd instead of SerializeEnd)"}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:"TODO: explain what each candidate method does"}),"\n",(0,t.jsx)(s.h4,{id:"task-constructor",children:"Task Constructor"}),"\n",(0,t.jsx)(s.p,{children:"We will provide a brief overview of an example implementaion of CompressTask. DecompressTask looks similar, so we don't repeat."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"/** Emplace constructor */\nHSHM_ALWAYS_INLINE explicit\nCompressTask(hipc::Allocator *alloc,\n           const TaskNode &task_node,\n           const DomainId &domain_id,\n           const TaskStateId &state_id,\n           int compress_method,\n           const std::string &data) : Task(alloc) {\n  // Initialize task\n  task_node_ = task_node;\n  lane_hash_ = 0;\n  prio_ = TaskPrio::kLowLatency;\n  task_state_ = state_id;\n  method_ = Method::kCustom;\n  task_flags_.SetBits(TASK_UNORDERED | TASK_LANE_ANY);\n  domain_id_ = domain_id;\n\n  // Custom params\n  compress_method_ = compress_method;\n  HSHM_MAKE_AR(data_, alloc, data);\n}\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"lane_hash_"}),": The lane of the MultiQueue a request is keyed to if\nTASK_LANE_ANY is not set under the task flags. This gives concurrency control. Tasks in\nthe same lane will be executed sequentially if necessary."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"prio_"}),": The priority of the task. KLowLatency is priority 2."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"method_"}),": The method the task will be routed to by the runtime"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"task_flags_"}),": Various flags that can improve performance"]}),"\n"]}),"\n",(0,t.jsxs)(s.h3,{id:"modify-compresscc",children:["Modify ",(0,t.jsx)(s.code,{children:"compress.cc"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"void Compress(CompressTask *task, RunContext &rctx) {\n  task->SetModuleComplete();\n}\n\nvoid Decompress(DecompressTask *task, RunContext &rctx) {\n  task->SetModuleComplete();\n}\n"})}),"\n",(0,t.jsx)(s.p,{children:"Create the callback functions in the task server.\ntask->SetModuleComplete() indicates that the task is completely finished.\nLong-running tasks should not use this function."}),"\n",(0,t.jsxs)(s.h3,{id:"modify-compressh",children:["Modify ",(0,t.jsx)(s.code,{children:"compress.h"})]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"HSHM_ALWAYS_INLINE\nvoid AsyncCompressConstruct(CompressTask *task,\n                          const TaskNode &task_node,\n                          const DomainId &domain_id,\n                          int compress_method,\n                          const std::string &data) {\n  HRUN_CLIENT->ConstructTask<CompressTask>>(\n      task, task_node, domain_id, id_, compress_method, data);\n}\nHSHM_ALWAYS_INLINE\nvoid CompressRoot(const DomainId &domain_id,\n                  int compress_method,\n                  const std::string &data) {\n  LPointer<hrunpq::TypedPushTask<CompressTask>> task = AsyncCompressRoot(domain_id);\n  task.ptr_->Wait();\n}\nHRUN_TASK_NODE_PUSH_ROOT(Compress);\n"})}),"\n",(0,t.jsx)(s.p,{children:"CompressRoot will be called by clients directly.\nHRUN_TASK_NODE_PUSH_ROOT will create various helper methods that\neventually call AsyncCompressConstruct. LPointer is a struct that\ncontains a shared-memory pointer to a task and its corresponding\nprivate-memory pointer."}),"\n",(0,t.jsxs)(s.p,{children:["hrunpq::TypedPushTask represents a task that is stored inside of the\n",(0,t.jsx)(s.strong,{children:"process queue"}),". The process queue is a single-priority queue that\nconnects clients to the Hermes runtime. Tasks in this queue are keyed\nto lanes based on standard thread ID. This ensures that all tasks\noriginating from the same thread are in the same lane. This helps\ngive consistency guarantees for I/O operations."]}),"\n",(0,t.jsx)(s.h3,{id:"task-methods",children:"Task Methods"}),"\n",(0,t.jsx)(s.p,{children:"The task methods will be discussed in sections 6, 7, and 8."}),"\n",(0,t.jsx)(s.h2,{id:"registering-a-task-library",children:"Registering a Task Library"}),"\n",(0,t.jsx)(s.p,{children:"After creating a new task library, it must be registered with\nthe Hermes Runtime. This can be done either programmatically or\nthrough configuration."}),"\n",(0,t.jsxs)(s.p,{children:["Through configuration, you must edit the Hermes runtime configuration.\nAn example configuration is stored in ",(0,t.jsx)(s.code,{children:"${HERMES_ROOT}/config/hermes_server_default.yaml"}),"."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-yaml",children:'task_registry:\n  [\n    "hermes_mdm",\n    "hermes_blob_mdm",\n    "hermes_bucket_mdm",\n    "hermes_data_op",\n    "data_stager",\n    "posix_bdev",\n    "ram_bdev",\n    "compress",\n  ]\n'})}),"\n",(0,t.jsx)(s.p,{children:"This can be passed to the Hermes runtime using the HERMES_CONF environment\nvariable."}),"\n",(0,t.jsx)(s.h2,{id:"task-grouping-worker-polling-and-deadlock-prevention",children:"Task Grouping, Worker Polling, and Deadlock Prevention"}),"\n",(0,t.jsx)(s.p,{children:"This section will provide more insight on how queues are polled\nand processed in the Hermes Runtime to provide fine-grained control\nover scheduling and concurrency."}),"\n",(0,t.jsxs)(s.p,{children:["Tasks must all implement a function called ",(0,t.jsx)(s.code,{children:"GetGroup"}),". Task groups are used to enable look-ahead capabilities with safety. A ",(0,t.jsx)(s.strong,{children:"Task Group"})," represents a collection of tasks that modify the same metadata structure and need to be sequentially executed. For example, the Bucket ID is\nused as the group for calling the bucket methods GetSize and UpdateSize.\nThis ensures that GetSize and UpdateSize will be executed in sequence when\nmade to the same bucket. Certain operations do not require any synchronization (e.g., stateless methods) and can return a group of TASK_UNORDERED."]}),"\n",(0,t.jsxs)(s.p,{children:["A ",(0,t.jsx)(s.strong,{children:"Task Node"})," represents the location of a task in the overall\ntask graph. There is no Task Graph data structure, it's a concept.\nWhen a task spawns a subtask, it can be conceptually be considered\nas a task graph. Tasks apart of the same task graph will be executed\nsimultaneously --regardless of group -- to prevent deadlocks in the\ncase where two tasks from the same graph are keyed to the same queue and lane."]}),"\n",(0,t.jsx)(s.h2,{id:"building-a-replicatable-task",children:"Building a Replicatable Task"}),"\n",(0,t.jsx)(s.p,{children:"To make a task support replication, set the TF_REPLICA flag. This\nwill indicate that a task implements the replication methods."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-cpp",children:"struct CompressTask : public Task, TaskFlags<TF_SRL_SYM | TF_REPLICA> {\n  IN compress_type_;\n  IN hipc::ShmArchive<hipc::string> data_;\n  OUT hipc::ShmArchive<hipc::vector<size_t>> sizes_;\n  OUT size_t final_size_;\n\n  /** (De)serialize message call */\n  template<typename Ar>\n  void SerializeStart(Ar &ar) {\n    task_serialize<Ar>(ar);\n    ar(compress_type_, data_);\n  }\n\n  /** (De)serialize message return */\n  template<typename Ar>\n  void SerializeEnd(u32 replica, Ar &ar) {\n    ar(sizes_, final_size_);\n  }\n\n  /** Duplicate message */\n  void Dup(hipc::Allocator *alloc, CustomTask &other) {\n    task_dup(other);\n    compress_type_ = other.compress_type_;\n    HSHM_MAKE_AR(data_, alloc, other.data_);\n  }\n\n  /** Process duplicate message output */\n  void DupEnd(u32 replica, CustomTask &dup_task) {\n    (*sizes_)[repclica] = other.size_;\n  }\n\n  /** Begin replication */\n  void ReplicateStart(u32 count) {\n    size_->resize(count);\n  }\n\n  /** Finalize replication */\n  void ReplicateEnd() {\n    size_t final_size_ = std::numeric_limits<size_t>::min();\n    for (size_t &size : sizes_) {\n      if (final_size_ > size) {\n        final_size_ = size;\n      }\n    }\n  }\n};\n"})}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SerializeStart"}),": Will serialize and deserialize the ",(0,t.jsx)(s.em,{children:"input"})," parameters of the task. So anything labeled IN or INOUT."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"SerializeEnd"}),": Will serialize and deserialize the ",(0,t.jsx)(s.em,{children:"output"}),"\nparameters of the task. So anything labeled OUT or INOUT."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Dup"}),": Analogous to a copy constructor. Will make a local\ncopy of this task (no serialization involved)."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"DupEnd"}),": Will store the output of a replica in the original\ntask the duplicates were spawned from."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ReplicateStart"}),": Used to allocate data structures in the task\nto account for the replication"]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"ReplicateEnd"}),": Called after all replicas have returned. Can\naggregate replica otuput."]}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"building-a-data-intensive-rdma-capable-task",children:"Building a Data-Intensive, RDMA-Capable Task"}),"\n",(0,t.jsx)(s.p,{children:"TODO: Make example based on PutBlob and GetBlob."})]})}function h(e={}){const{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,s,n)=>{n.d(s,{Z:()=>o,a:()=>r});var t=n(7294);const a={},i=t.createContext(a);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);