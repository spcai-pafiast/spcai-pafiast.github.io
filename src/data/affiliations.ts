import { Affiliation } from "../types";

export default [
  {
    name: "University of Chicago",
    type: "university",
    url: "https://computerscience.uchicago.edu/",
    image: require("@site/static/img/affiliations/uchicago.png").default,
  },
  {
    name: "Northwestern University",
    type: "university",
    url: "https://www.mccormick.northwestern.edu/eecs/computer-science/",
    image: require("@site/static/img/affiliations/northwestern.png").default,
  },
  {
    name: "DePaul University",
    type: "university",
    url: "https://www.cdm.depaul.edu/about/Pages/School-of-Computing.aspx",
    image: require("@site/static/img/affiliations/depaul.png").default,
  },
  {
    name: "University of Illinois Urbana-Champaign",
    type: "university",
    url: "https://cs.illinois.edu/",
    image: require("@site/static/img/affiliations/uic.png").default,
  },
  {
    name: "Texas Tech University",
    type: "university",
    url: "http://www.depts.ttu.edu/cs/",
    image: require("@site/static/img/affiliations/texastech.png").default,
  },
  {
    name: "University of California, Santa Cruz",
    type: "university",
    url: "https://admissions.sa.ucsc.edu/majors/cs",
    image: require("@site/static/img/affiliations/ucsc.png").default,
  },
  {
    name: "Argonne National Laboratory",
    type: "laboratory",
    url: "https://www.anl.gov/",
    image: require("@site/static/img/affiliations/argonne.png").default,
  },
  {
    name: "Los Alamos National Laboratory",
    type: "laboratory",
    url: "https://www.lanl.gov/",
    image: require("@site/static/img/affiliations/lanl.png").default,
  },
  {
    name: "Lawrence Berkeley National Laboratory",
    type: "laboratory",
    url: "https://www.lbl.gov/",
    image: require("@site/static/img/affiliations/lbl.jpg").default,
  },
  {
    name: "Sandia National Laboratories",
    type: "laboratory",
    url: "https://www.sandia.gov/",
    image: require("@site/static/img/affiliations/sandia.png").default,
  },
  {
    name: "Lawrence Livermore National Laboratory",
    type: "laboratory",
    url: "https://www.llnl.gov/",
    image: require("@site/static/img/affiliations/llnl.png").default,
  },
  {
    name: "National Energy Research Scientific Computing Center",
    type: "laboratory",
    url: "https://www.nersc.gov/",
    image: require("@site/static/img/affiliations/nersc.jpg").default,
  },
] as Affiliation[];
