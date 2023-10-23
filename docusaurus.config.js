// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const GNOSIS_SHORT = "GRC";
const GNOSIS_TITLE = "Gnosis Research Center";
const GNOSIS_DESCRIPTION = `
We conduct research in High-Performance Computing (HPC) memory and storage systems, especially in the design and prototype development of scalable software systems. 
Our current emphasis is on a scalable system software for data management and data access and on having a better understanding of data-centric systems development.
`;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: GNOSIS_TITLE,
  tagline: GNOSIS_DESCRIPTION,
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://grc-iit.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "grc-iit", // Usually your GitHub org/user name.
  projectName: "website", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        style: "dark",
        title: GNOSIS_TITLE,
        logo: {
          alt: GNOSIS_TITLE,
          src: "img/logo.png",
        },
        items: [
          {
            label: "Gnosis",
            position: "left",
            items: [
              {
                to: "/about",
                label: "About",
              },
              {
                to: "/members",
                label: "Members",
              },
              {
                to: "/network",
                label: "Network",
              },
              {
                to: "/contact",
                label: "Contact",
              },
            ],
          },
          {
            label: "Research",
            position: "left",
            items: [
              {
                to: "/research/projects",
                label: "Projects",
              },
              {
                to: "/research/patents",
                label: "Patents",
              },
              {
                to: "/research/resources",
                label: "Resources",
              },
            ],
          },
          {
            to: "/publications",
            label: "Publications",
            position: "left",
          },
          // {
          //   to: "/blog",
          //   label: "Blog",
          //   position: "left",
          // },
          {
            type: "docSidebar",
            label: "Tutorials",
            sidebarId: "tutorialSidebar",
            position: "right",
          },
          {
            label: "GitHub",
            href: "https://github.com/grc-iit",
            position: "right",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: GNOSIS_TITLE,
            items: [
              {
                html: `
                  <p>
                    Stuart Building <br />
                    Room 112i and 010 <br />
                    10 W. 31st Street <br />
                    Chicago, Illinois 60616
                  </p>
                `,
              },
              {
                html: `
                  <p>
                    Email: <a href="mailto:grc@iit.edu">grc@iit.edu</a> <br />
                    Phone: +1 312 567 6885
                  </p>
                `,
              },
            ],
          },
          {
            title: "Featured Projects",
            items: [
              {
                label: "ChronoLog",
                to: "/research/projects/chronolog",
              },
              {
                label: "Coeus",
                to: "/research/projects/coeus",
              },
              {
                label: "Hermes",
                to: "/research/projects/hermes",
              },
            ],
          },
          {
            title: "Tutorials",
            items: [
              {
                label: "Linux Introduction",
                to: "/docs/category/linux-introduction",
              },
              {
                label: "Installing HPC Software",
                to: "/docs/category/installing-hpc-software",
              },
              {
                label: "Important Environment Variables",
                to: "/docs/category/important-environment-variables",
              },
              {
                label: "C++ Introduction",
                to: "/docs/category/c-introduction",
              },
            ],
          },
          {
            title: "Links",
            items: [
              {
                label: "GRC GitHub",
                href: "https://github.com/grc-iit",
              },
              {
                label: "GRC X",
                href: "https://twitter.com/grc-iit",
              },
              {
                label: "Illinois Tech",
                href: "https://www.iit.edu/",
              },
              {
                label: "SCS Lab",
                href: "http://cs.iit.edu/~scs/",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${GNOSIS_TITLE} (${GNOSIS_SHORT}). Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
