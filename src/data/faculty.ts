import { Member } from "../types";

export default [
  {
    name: "Dr. Xian-He Sun",
    title: "Distinguished Professor",
    bio: "Dr. Xian-He Sun is the Director of the Gnosis Research Center and an IEEE fellow. He is a University Distinguished Professor and the Ron Hochsprung Endowed Chair of Computer Science at Illinois Institute of Technology. His current research interests include parallel and distributed processing, memory and I/O systems, software system for Big Data applications, and performance evaluation and optimization.",
    image: require("@site/static/img/faculty/sun.jpg").default,
    links: {
      email: "sun@iit.edu",
      scholar: "https://scholar.google.com/citations?user=9h3JX7MAAAAJ&hl=en",
      website: "https://www.cs.iit.edu/~scs/sun",
    },
  },
  {
    name: "Dr. Anthony Kougkas",
    title: "Research Assistant Professor",
    email: "akougkas@iit.edu",
    website: "",
    bio: "Dr. Anthony Kougkas is the director of I/O research development within the Gnosis Research Center and the Lead Researcher on the multi-million collaborative NSF-funded project Hermes. He received his PhD under Dr. Sun and he is an expert in Parallel and Distributed Systems, Parallel I/O Optimizations, HPC Systems, I/O Convergence, and I/O Advanced Buffering.",
    image: require("@site/static/img/faculty/kougkas.jpg").default,
    links: {
      email: "akougkas@iit.edu",
      linkedin: "https://www.linkedin.com/in/anthonykougkas/",
      scholar: "https://scholar.google.com/citations?user=hiNO0EEAAAAJ&hl=en",
      twitter: "https://twitter.com/kougkas",
      website: "https://akougkas.com/",
    },
  },
] as Member[];
