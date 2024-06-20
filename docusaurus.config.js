import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = "warwickbuilds";
const projectName = "scottbonnar.info";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Scott Bonnar Info',
  tagline: 'A public repository of information on Scott Bonnar lawn mowers',
  favicon: 'img/favicon.ico',
  url: 'https://scottbonnarinfo.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrl: '/',
  organizationName: organizationName,
  projectName: projectName,
  deploymentBranch: 'gh-pages',

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
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/' +organizationName+ '/' + projectName + '/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/' +organizationName+ '/' + projectName + '/tree/main/',
        }
        // theme: {
        //   customCss: './src/css/custom.css',
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'My Site',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorial',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'hhttps://github.com/warwickbuilds/scottbonnar.info',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
