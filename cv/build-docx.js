const fs = require('fs');
const { Document, Packer, Paragraph, TextRun, ExternalHyperlink, LevelFormat, AlignmentType,
        TabStopType, BorderStyle } = require('docx');

const FONT = 'Calibri';
const INK = '211913', GOLD = '7E611F', GREY = '4A3F35';

const p = (runs, opts = {}) => new Paragraph({ children: Array.isArray(runs) ? runs : [runs], ...opts });
const t = (text, o = {}) => new TextRun({ text, font: FONT, size: 20, color: INK, ...o });
const h2 = (text) => new Paragraph({
  children: [new TextRun({ text: text.toUpperCase(), font: FONT, size: 20, bold: true, color: GOLD })],
  spacing: { before: 220, after: 80 }, keepNext: true,
  border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: 'D9CDB4', space: 2 } },
});
const bullet = (text) => p(t(text), { numbering: { reference: 'b', level: 0 }, spacing: { after: 40 } });
const job = (title, dates, org) => [
  p([t(title, { bold: true, size: 22 }), t('\t' + dates, { color: GREY })],
    { tabStops: [{ type: TabStopType.RIGHT, position: 10466 }], spacing: { before: 140 }, keepNext: true }),
  ...(org ? [p(t(org, { color: GREY }), { keepNext: true, spacing: { after: 40 } })] : []),
];
const link = (text, url) => new ExternalHyperlink({ link: url, children: [t(text, { color: INK, underline: { color: GOLD } })] });

const children = [
  p(t('Tatiana Papastylianou', { size: 44 })),
  p(t('Senior Product Designer · Design Lead', { size: 26, color: GOLD, italics: true }), { spacing: { after: 60 } }),
  p(t('Cyprus · EU citizen · remote or hybrid', { color: GREY }), { spacing: { after: 40 } }),
  p([t('Portfolio  ', { bold: true, color: GOLD, size: 17 }), link('tatiana-papastylianou-portfolio.netlify.app', 'https://tatiana-papastylianou-portfolio.netlify.app/')]),
  p([t('LinkedIn  ', { bold: true, color: GOLD, size: 17 }), link('linkedin.com/in/tatiana-papastylianou-8b67a5193', 'https://www.linkedin.com/in/tatiana-papastylianou-8b67a5193/')]),
  p([t('Email  ', { bold: true, color: GOLD, size: 17 }), link('tatiana.papastylianou@gmail.com', 'mailto:tatiana.papastylianou@gmail.com'),
     t('     Phone  ', { bold: true, color: GOLD, size: 17 }), link('+357 96 395 552', 'tel:+35796395552')]),

  h2('Summary'),
  ...[
    'I design complex B2B products and the design systems that hold them together.',
    'At Akelius I turned a brief to merge 3 apps into a consolidation of 23 real estate apps into 4 products, used daily by about 200 staff in 7 countries.',
    'Since 2025 I have built 2 learning products from scratch and merged 3 apps into one, Akelius Education, live since October 2026.',
    'Information architecture is my strongest skill. I work close to engineering on tokens, specs and handoff, and I build AI skills that automate design review.',
  ].map(s => p(t(s), { spacing: { after: 40 } })),

  h2('Selected impact'),
  bullet('23 real estate apps consolidated into 4 products, shipped in stages with 4 development teams.'),
  bullet('8 apps to 1: the number of apps a staff member needed to handle one tenancy (estimate).'),
  bullet('8 days to 3: onboarding until new staff work on their own (estimate).'),
  bullet('About 1,000 tenants onboarded to My Pages, the new tenant app, in its first month.'),
  bullet('3 learning apps merged into one, Akelius Education, on web, Android and iOS.'),
  bullet('2 weeks for a full app design review with my AI skills, against 1 to 2 months by hand (estimate).'),
  p(t('Estimates are team estimates without a measured baseline. I am happy to walk through how each one was judged.', { size: 17, italics: true, color: GREY }), { spacing: { before: 40 } }),

  h2('Experience'),
  ...job('Senior Product Designer', 'May 2025 – present', 'Akelius Languages & Math, Cyprus · free learning apps for languages, math and vocational training'),
  bullet('Merged Akelius Languages, Math and Vocational into one app, Akelius Education, live since October 2026 on web, Android and iOS.'),
  bullet('Built Akelius Math and Akelius Vocational from scratch. Turned 3 conflicting directions, from the founder, the board and the content editors, into one minimal product.'),
  bullet('Redesigned teacher mode for web. Tested flows, breakpoints and edge states in prototypes before build, which caught missing QR login and password reset screens before engineering started.'),
  bullet('Own the multi-library design system: 24 core component families shared by web and Android, a dedicated iOS set, a library for the Generator slide editor and an icon library. Brought Storybook to the team, so developers build by component and designers review builds against the Figma library.'),
  bullet('Designed the Akelius handwritten typeface in FontForge, with OpenType substitutions and math size families for MathJax, and extend it as new languages launch.'),
  bullet('Built 7 AI skills that turn our design and writing rules into screen reviews, component specs and developer handoff. Designers, content and marketing staff, Android developers and the CEO of Akelius Languages use them.'),
  bullet('Coordinate illustrators, animators and voice producers for course content.'),

  ...job('Design Lead & Product Owner, Websites', 'Feb 2023 – May 2025', 'Akelius Technology, Cyprus · internal real estate software for property, letting and maintenance teams'),
  bullet('Led a team of 3 designers on a suite of 23 real estate apps used by about 200 staff in Cyprus, Canada, the US, Sweden, Germany, France and the UK.'),
  bullet('The brief was to merge 3 apps. My research reframed it around the tenancy lifecycle, and 23 apps became 4 products: Customer Management, My Pages for tenants, a Maintenance app for technicians and Investment.'),
  bullet('Shipped in stages over 2 years with 4 development teams of 5 to 6 people, starting with a hub app for inspection, inventory, letting and case management.'),
  bullet('Designed a role switch so letting managers and property managers work in one tool, with properties, tenants, tasks and messages shared between roles.'),
  bullet('Redesigned inspections with clearer questions, a progress bar, photos, comments and drafts. Inspections took 45 to 60 minutes and became about 25% faster (estimate).'),
  bullet('Product owner for 10 group websites on Strapi CMS and a booking system.'),
  bullet('Maintained and extended the token-based Technology design system with engineering, adding new components in Figma and Storybook.'),

  ...job('User Interface Designer', 'Dec 2021 – Feb 2023', 'Akelius Technology, Cyprus'),
  bullet('Designed screens for the real estate apps and group websites, and supported user research and usability tests.'),
  bullet('Promoted to Design Lead after 13 months.'),

  ...job('Freelance Designer', '2016 – 2021'),
  bullet('Graphic design, illustration, motion design and web projects for clients in several industries.'),

  h2('Independent work'),
  bullet('3 iOS apps designed and built in SwiftUI, live on the App Store: stePlan, project management for freelance designers; IrisVault, eye exercises; Ludos, games.'),
  bullet("Author of No Water, A Designer's Confession, a 339-page book in English and Russian about becoming a design lead without a design degree."),

  h2('Recommendations on LinkedIn'),
  p([t('"Tatiana was my mentor and team lead at Akelius Technology. She is an extraordinary UX/UI designer and team leader."', { italics: true }), t(' Muhammad Suhaib, designer who reported to Tatiana', { color: GREY })], { spacing: { after: 60 } }),
  p([t('"Though she\u2019s no longer in my team, I would gladly welcome her back anytime."', { italics: true }), t(' Svenja Henrichs, her manager at Akelius Technology, who hired her', { color: GREY })], { spacing: { after: 60 } }),
  p([t('"Tatiana is one of the best hires one can do."', { italics: true }), t(' Andreas Wallén, former CEO, Akelius Technology', { color: GREY })]),

  h2('Skills'),
  p([t('Product design: ', { bold: true }), t('information architecture, complex B2B workflows, multi-app consolidation, interaction design, prototyping, user research, usability testing, accessibility (WCAG), responsive design, iOS and Android patterns')], { spacing: { after: 60 } }),
  p([t('Design systems: ', { bold: true }), t('design tokens and variables, component libraries, Storybook, documentation and handoff specs, typography and type design')], { spacing: { after: 60 } }),
  p([t('Leadership: ', { bold: true }), t('design team lead, product ownership, stakeholder alignment, working with several engineering teams at once, briefing external producers')], { spacing: { after: 60 } }),
  p([t('Tools: ', { bold: true }), t('Figma, Storybook, Strapi, Jira, Confluence, FontForge, Adobe Creative Cloud, HTML, CSS, SwiftUI, Claude and AI workflow automation')]),

  h2('Education'),
  p([t('BA, International Relations', { bold: true }), t(', Ural State University, 2007 – 2011')]),
  p(t('Courses: Google UX Design Foundations, Figma variables and conditionals, UX research')),

  h2('Languages'),
  p(t('English, fluent, daily working language. Russian, native.')),
];

const doc = new Document({
  creator: 'Tatiana Papastylianou',
  title: 'Tatiana Papastylianou, Senior Product Designer and Design Lead, CV',
  styles: { default: { document: { run: { font: FONT, size: 20 } } } },
  numbering: { config: [{ reference: 'b', levels: [{ level: 0, format: LevelFormat.BULLET, text: '–', alignment: AlignmentType.LEFT,
    style: { paragraph: { indent: { left: 300, hanging: 220 } }, run: { color: GOLD } } }] }] },
  sections: [{ properties: { page: { margin: { top: 850, bottom: 850, left: 720, right: 720 } } }, children }],
});
Packer.toBuffer(doc).then(b => fs.writeFileSync('Tatiana-Papastylianou-CV-ATS.docx', b));
