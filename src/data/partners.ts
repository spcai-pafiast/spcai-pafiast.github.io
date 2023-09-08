import { Affiliation } from "../types";

export default [
  {
    name: "National Science Foundation",
    type: "laboratory",
    url: "https://www.nsf.gov/",
    image: require("@site/static/img/partners/nsf.png").default,
  },
  {
    name: "Argonne National Laboratory",
    type: "laboratory",
    url: "https://www.anl.gov/",
    image: require("@site/static/img/partners/argonne.png").default,
  },
  {
    name: "Fermi National Accelerator Laboratory",
    type: "laboratory",
    url: "https://www.fnal.gov/",
    image: require("@site/static/img/partners/fnal.png").default,
  },
] as Affiliation[];
