// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
  url: "https://your-docusaurus-test-site.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

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
                to: "/affiliations",
                label: "Affiliations",
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
                to: "/research/partners",
                label: "Partners",
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
          {
            to: "/blog",
            label: "Blog",
            position: "left",
          },
          {
            type: "docSidebar",
            label: "Tutorials",
            sidebarId: "tutorialSidebar",
            position: "right",
          },
          {
            label: "GitHub",
            href: "https://github.com/facebook/docusaurus",
            position: "right",
          },
        ],
      },
      footer: {
        // style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ${GNOSIS_TITLE}. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
