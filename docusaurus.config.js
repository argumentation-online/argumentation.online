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
  baseUrl: "/argumentation.online/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "debatelab", // Usually your GitHub org/user name.
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
          routeBasePath: "/",
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
      colorMode: {
        defaultMode: "light",
        disableSwitch: false,
        respectPrefersColorScheme: false,
        switchConfig: {
          darkIcon: "🌙",
          darkIconStyle: {
            marginLeft: "2px",
            color: "transparent",
            textShadow: "0 0 0 #258ac2",
          },
          // Unicode icons such as '\u2600' will work
          // Unicode with 5 chars require brackets: '\u{1F602}'
          lightIcon: "\u2600",
          lightIconStyle: {
            marginLeft: "1px",
            color: "transparent",
            textShadow: "0 0 0 #258ac2",
          },
        },
      },
      navbar: {
        title: "argumentation.online",
        logo: {
          alt: "argumentation.online Logo",
          src: "img/argumentation-online-logo.svg",
        },
        items: [
          { to: "/tags", label: "Tags", position: "left" },
          { to: "/archive", label: "Archiv", position: "left" },
          { to: "/about", label: "About", position: "left" },
          { to: "/faq", label: "FAQ", position: "left" },
          {
            type: "localeDropdown",
            position: "left",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
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
                to: "/",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
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
