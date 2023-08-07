import { Publication } from "../types";

export default [
  {
    authors: ["H. Lee", "L. Guo", "M. Tang", "J. Firoz", "N. Tallent", "A. Kougkas", "X.-H. Sun"],
    title: "Data Lifecycles: Optimizing Workflow Task & Data Coordination",
    venue:
      "The International Conference for High Performance Computing, Networking, Storage, and Analysis (SC'23), November 12-17, 2023",
    type: "Conference",
    date: "November 12-17, 2023",
    tags: ["Data Analytics", "Storage", "Performance Measurement", "Modeling", "Tools"],
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/The_Lord_of_the_Rings",
      Amazon: "https://www.amazon.com/Lord-Rings-3-Vol-Set/dp/0345339703",
    },
  },
  {
    authors: ["L. Logan", "J. Lofstead", "A. Kougkas", "X.-H. Sun"],
    title: "An Evaluation of DAOS for Simulation and Deep Learning HPC Workloads",
    venue:
      "The 3rd Workshop on Challenges and Opportunities of Efficient and Performant Storage Systems (CHEOPS'23)",
    type: "Workshop",
    date: "May, 2023",
    tags: [
      "Distributed Storage",
      "Flash Memory",
      "Phase Change Memory",
      "Parallel Computing",
      "Machine Learning",
      "Distributed Computing",
    ],
    links: {
      Wikipedia: "https://en.wikipedia.org/wiki/The_Hobbit",
      Amazon: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X",
    },
  },
] as Publication[];
