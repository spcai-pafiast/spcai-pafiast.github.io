import { Faculty } from "../types";

export default [
  {
    name: "Dr. Xian-He Sun",
    title: "Distinguished Professor",
    email: "sun@iit.edu",
    website: "https://www.cs.iit.edu/~scs/sun",
    bio: "Dr. Xian-He Sun is the Director of the Gnosis Research Center and an IEEE fellow. He is a University Distinguished Professor and the Ron Hochsprung Endowed Chair of Computer Science at Illinois Institute of Technology. His current research interests include parallel and distributed processing, memory and I/O systems, software system for Big Data applications, and performance evaluation and optimization.",
    image: require("@site/static/img/faculty/sun.jpg").default,
  },
  {
    name: "Dr. Anthony Kougkas",
    title: "Assistant Professor",
    email: "akougkas@iit.edu",
    website: "",
    bio: "Dr. Anthony Kougkas is the director of I/O research development within the Gnosis Research Center and the Lead Researcher on the multi-million collaborative NSF-funded project Hermes. He received his PhD under Dr. Sun and he is an expert in Parallel and Distributed Systems, Parallel I/O Optimizations, HPC Systems, I/O Convergence, and I/O Advanced Buffering.",
    image: require("@site/static/img/faculty/kougkas.jpg").default,
  },
] as Faculty[];
