const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const remarkMath = require("remark-math");
const rehypeKatex = require("rehype-katex");

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "argumentation.online",
  tagline: "A curated collection of argument reconstructions",
  url: "https://argumentation.online",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "argumentation.online", // Usually your GitHub org/user name.
  projectName: "argumentation.online", // Usually your repo name.
  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          editLocalizedFiles: true,
          // Please change this to your repo.
          path: "./reconstructions",
          routeBasePath: "/reconstructions",
          editUrl:
            "https://github.com/facebook/docusaurus/edit/main/website/blog/",
          remarkPlugins: [remarkMath],
          rehypePlugins: [[rehypeKatex, { strict: false }]],
        },
        theme: {
          customCss: [
            require.resolve("./src/css/custom.css"),
            require.resolve("katex/dist/katex.min.css"),
          ],
        },
      }),
    ],
  ],
  onBrokenLinks: "warn",
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "argumentation.online",
        logo: {
          alt: "argumentation.online Logo",
          src: "img/argumentation-online-logo.svg",
        },
        items: [
          {
            type: "dropdown",
            label: "Reconstructions",
            to: "/reconstructions",
            position: "left",
            items: [
              { to: "/reconstructions", label: "Neueste" },
              { to: "/reconstructions/tags", label: "Tags" },
              { to: "/reconstructions/archive", label: "Archiv" },
            ],
          },
          { to: "/the-project", label: "The Project", position: "left" },
          {
            to: "/about-arguments",
            label: "About Arguments",
            position: "left",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            items: [
              {
                label: "Impressum",
                to: "/impressum",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} argumentation.online`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        apiKey: "YOUR_API_KEY",
        indexName: "YOUR_INDEX_NAME",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: see doc section below
        appId: "YOUR_APP_ID",

        // Optional: Algolia search parameters
        searchParameters: {},

        //... other Algolia params
      },
    }),
};
