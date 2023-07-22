// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NumPower',
  tagline: 'A library for numerical calculations and scientific computing made for PHP',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://numpower.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NumPower', // Usually your GitHub org/user name.
  projectName: 'numpower', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NumPower/numpower-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/NumPower/numpower-docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      (
          {
            id: 'install',
            path: 'install',
            routeBasePath: 'install',
            sidebarPath: require.resolve('./sidebarInstall.js'),
            // ... other options
          }
      ),
    ],
    [
      'content-docs',
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      (
          {
            id: 'api',
            path: 'api',
            routeBasePath: 'api',
            sidebarPath: require.resolve('./sidebarApi.js'),
            // ... other options
          }
      ),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      navbar: {
        title: 'NumPower',
        logo: {
          alt: '',
          src: 'img/numpower.png',
          srcDark: 'img/numpower_white.png',
          width: 32,
          height: 32,
        },
        items: [
          {to: '/install/install', label: 'Getting Started', position: 'left'},
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/api/intro', label: 'API', position: 'left'},
          {
            href: 'https://github.com/NumPower/numpower',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `© ${new Date().getFullYear()} <a href="https://github.com/henrique-borba">Henrique Borba</a>. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['php', 'json'],
        theme: require('prism-react-renderer/themes/dracula')
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
