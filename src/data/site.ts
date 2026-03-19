export const siteContent = {
  metadata: {
    lang: 'en',
    title: 'Structural Prominence in a Joint Emotion-Cognition Network - Paper Website',
    description:
      'A systems-level study of stress, sleep, and cognitive performance in adolescents and young adults with affective disorders.',
  },
  nav: {
    brandMark: 'EC',
    brandText: 'Study page · Nanjing Brain Hospital',
    links: [
      { href: '#summary', label: 'Summary' },
      { href: '#phases', label: 'Modules' },
      { href: '#backbone', label: 'Findings' },
      { href: '#methods', label: 'Methods' },
      { href: '#robustness', label: 'Results' },
      { href: '#significance', label: 'Implications' },
      { href: '#resources', label: 'Resources' },
    ],
  },
  hero: {
    overline: 'Research Paper Website',
    titleLead: 'Structural Prominence',
    titleAccent: 'in a Joint Emotion-Cognition Network',
    summary:
      'A systems-level study of stress, sleep, and cognitive performance in adolescents and young adults with affective disorders.',
    ctas: [
      { kind: 'manuscript', label: 'Manuscript PDF' },
      { kind: 'site', label: 'Project Page' },
    ],
    stats: [
      { value: 1027, label: 'cross-sectional sample' },
      { value: 1056, label: 'paired analytic cohort' },
      { value: 49, label: 'observed indicators' },
      { value: 6, label: 'network modules' },
    ],
    domains: [
      { colorVar: 'var(--emo)', label: 'Depressive & Anxiety Symptoms' },
      { colorVar: 'var(--str)', label: 'Perceived Stress' },
      { colorVar: 'var(--phy)', label: 'Insomnia' },
      { colorVar: 'var(--csf)', label: 'Cognitive Performance' },
    ],
  },
  summary: {
    label: 'Summary',
    title: 'Core findings at a glance.',
    subtitle:
      'This study examined how depressive symptoms, anxiety, perceived stress, insomnia, and cognitive performance are organised within a joint emotion-cognition association network in adolescents and young adults with affective disorders.',
    cards: [
      {
        number: '01',
        title: 'System level',
        body:
          'Across the full-sample network, stress appraisal and sleep disturbance occupied relatively prominent cross-domain structural positions.',
      },
      {
        number: '02',
        title: 'Cross-sectional level',
        body:
          'Better cognitive performance was associated most consistently with lower depressive and anxiety symptom burden.',
      },
      {
        number: '03',
        title: 'Longitudinal level',
        body:
          'Better baseline cognitive performance showed its clearest association with lower subsequent perceived stress severity, whereas prospective associations with other outcomes were limited.',
      },
      {
        number: '04',
        title: 'Interpretive boundary',
        body:
          'These findings are hypothesis-generating and should not be interpreted as evidence of causal control or intervention efficacy.',
      },
    ],
    figureCaption:
      'Figure 1. Full-sample network architecture and node-level structural positioning extracted from the manuscript PDF.',
  },
  phases: {
    label: 'Module Overview',
    title: 'Six modules define the joint network structure.',
    subtitle:
      'Community detection identified six modules aligned with anxiety, depression, cognition, negative stress, positive stress, and sleep-related domains.',
    legendTitle: 'Module legend',
    legendItems: [
      { colorVar: 'var(--emo)', short: 'ARM', label: 'Anxiety Related Module' },
      { colorVar: 'var(--str)', short: 'DRM', label: 'Depression Related Module' },
      { colorVar: 'var(--csf)', short: 'CRM', label: 'Cognition Related Module' },
      { colorVar: 'var(--phy)', short: 'NSM', label: 'Negative Stress Module' },
      { colorVar: 'var(--spf)', short: 'PSM', label: 'Positive Stress Module' },
      { colorVar: 'var(--accent)', short: 'SRM', label: 'Sleep Related Module' },
    ],
    legendNote:
      'These six modules are the communities reported in the manuscript network figure.',
  },
  backbone: {
    label: 'Key Findings',
    title: 'Stress and sleep as structurally prominent cross-domain components.',
    subtitle:
      'Dominance-based analyses indicated that negative stress and sleep occupied the most prominent cross-domain structural positions in the estimated network.',
    listTitle: 'Core interpretation points',
    listNote:
      'These points are stated to match the manuscript framing of structural prominence within an estimated association network.',
    detailTags: ['System level', 'Hypothesis-generating'],
    figureCaption:
      'Figure 2. Macro-level cross-module structural coverage architecture extracted from the manuscript PDF.',
    macroCards: [
      {
        colorVar: 'var(--str)',
        title: 'Stress and sleep as structurally prominent cross-domain components',
        body:
          'Dominance-based analyses indicated that negative stress and sleep occupied the most prominent cross-domain structural positions in the estimated network, appearing repeatedly in minimal coverage configurations and module-level coverage summaries.',
      },
      {
        colorVar: 'var(--csf)',
        title: 'Cognitive performance as a continuous clinical dimension',
        body:
          'When modelled continuously rather than as a subgroup label, better RBANS Total Scale performance was associated most consistently with lower concurrent depressive and anxiety symptom burden.',
      },
      {
        colorVar: 'var(--phy)',
        title: 'Selective short-term longitudinal association with perceived stress',
        body:
          'In baseline-adjusted longitudinal models, higher baseline RBANS Total Scale scores predicted lower follow-up perceived stress severity. Prospective associations with other follow-up outcomes were weaker or not significant after correction.',
      },
    ],
    macroDisclaimer:
      'These findings should be interpreted as describing structural prominence within an estimated association network, not as evidence of causal control or intervention efficacy.',
  },
  methods: {
    label: 'Methods',
    title: 'From joint association network to structural-positioning metrics.',
    subtitle:
      'The study combines a cross-sectional partial-correlation network with domination-based structural-positioning metrics and baseline-adjusted longitudinal regression analyses.',
    steps: [
      {
        number: '1',
        title: 'Analytic samples',
        body:
          'The cross-sectional analytic sample included 1,027 participants. Longitudinal analyses were conducted in a paired analytic cohort of 1,056 participants, derived from a broader repeated-assessment source dataset and analysed using outcome-specific complete-case models.',
      },
      {
        number: '2',
        title: 'Multi-domain measurement',
        body:
          'The analytic framework included PHQ-9, GAD-7, PSS-14, ISI, and 12 RBANS cognitive indicators, yielding 49 observed indicators in total.',
      },
      {
        number: '3',
        title: 'Network estimation',
        body:
          'A Graphical LASSO model with EBIC-guided hyperparameter selection was used to estimate a sparse partial-correlation network across all indicators.',
      },
      {
        number: '4',
        title: 'Structural-positioning metrics',
        body:
          'Minimum Dominating Sets, Control Frequency, and Average Module Control Strength were used as descriptive structural-coverage metrics to quantify cross-module structural positioning.',
      },
      {
        number: '5',
        title: 'Outcome-specific models',
        body:
          'Longitudinal analyses were estimated using outcome-specific complete-case models adjusted for baseline outcome severity, age, sex, education, diagnosis, and follow-up interval.',
      },
    ],
  },
  robustness: {
    label: 'Results',
    title: 'Network architecture and selective cognitive associations.',
    subtitle:
      'The joint network was modular but interconnected, and the clearest longitudinal association of baseline cognitive performance was with later perceived stress severity.',
    figureCaption:
      'Figure 3. Adjusted associations of cognitive performance with cross-sectional symptom burden and longitudinal outcomes extracted from the manuscript PDF.',
    notes: [
      {
        title: 'The network was compact and traversable',
        body:
          'The estimated 49-node network had 354 edges, density of 0.301, global efficiency of 0.638, diameter of 3, and average shortest path length of 1.774.',
      },
      {
        title: 'Six modules organised the joint system',
        body:
          'Community detection identified Anxiety Related, Depression Related, Cognition Related, Negative Stress, Positive Stress, and Sleep Related modules.',
      },
      {
        title: 'Cross-sectional associations were strongest for depression and anxiety',
        body:
          'Higher RBANS Total Scale scores were associated most consistently with lower PHQ-9 and GAD-7 total scores after adjustment.',
      },
      {
        title: 'The clearest prospective association was with perceived stress',
        body:
          'In baseline-adjusted longitudinal models, higher baseline RBANS Total Scale scores predicted lower follow-up PSS total scores, while other prospective associations were weaker or not significant after correction.',
      },
    ],
  },
  significance: {
    label: 'Implications',
    title: 'Why this paper matters.',
    cards: [
      {
        category: 'Systems',
        title: 'A joint emotion-cognition architecture',
        body:
          'The study frames affective disorders in youth as a multi-domain system spanning depressive symptoms, anxiety, stress, insomnia, and cognition.',
      },
      {
        category: 'Method',
        title: 'Structural prominence beyond standard topology summaries',
        body:
          'It uses structural positioning and structural coverage metrics to describe how components recur in minimal coverage configurations across domains.',
      },
      {
        category: 'Clinical',
        title: 'Hypothesis-generating rather than intervention-prescriptive',
        body:
          'The findings support focused hypotheses about stress, sleep, and cognition, but should not be interpreted as evidence of causal control or intervention priority.',
      },
    ],
    limits: [
      {
        title: 'Association, not causation',
        body:
          'These findings should be interpreted as describing structural prominence within an estimated association network, not as evidence of causal control or intervention efficacy.',
      },
      {
        title: 'Cross-sectional structural positioning',
        body:
          'The network-based findings are derived from a cross-sectional estimated association network rather than a within-person dynamic model.',
      },
      {
        title: 'Outcome-specific longitudinal sample sizes',
        body:
          'Although the paired analytic cohort included 1,056 participants, individual longitudinal models were estimated with outcome-specific complete-case sample sizes.',
      },
      {
        title: 'PDF-extracted figure assets',
        body:
          'The site uses figures extracted from the manuscript PDF, which preserves the reported results but not the original standalone source graphics.',
      },
    ],
  },
  glossary: {
    label: 'Glossary',
    items: [
      {
        term: 'Minimum Dominating Set',
        tag: 'MDS',
        body:
          'The smallest set of nodes that provides minimal structural coverage of the network through direct membership or adjacency.',
      },
      {
        term: 'Control Frequency',
        tag: 'CF',
        body:
          'The proportion of minimum dominating set solutions in which a node appears, used here as a descriptive structural-positioning summary rather than evidence of causal control.',
      },
      {
        term: 'Average Module Control Strength',
        tag: 'AMCS',
        body:
          'A directed module-level summary describing structural coverage between modules within the estimated association network.',
      },
      {
        term: 'Structural prominence',
        body:
          "The paper's preferred interpretive term for components that occupy relatively prominent cross-domain positions in the estimated network.",
      },
      {
        term: 'Continuous cognitive performance',
        body:
          'The manuscript models RBANS performance as a continuous clinical dimension rather than as a dichotomised subgroup label.',
      },
    ],
  },
  resources: {
    label: 'Resources',
    items: [
      { kind: 'manuscript', icon: 'PDF', title: 'Manuscript PDF', body: 'Main paper file used to build this site' },
      { kind: 'site', icon: 'SRC', title: 'Project page', body: 'Current website source in this workspace' },
    ],
    citation:
      'Structural Prominence in a Joint Emotion-Cognition Network of Affective Disorders in Adolescents and Young Adults: Stress, Sleep, and Cognitive Performance.',
  },
  links: {
    siteRepoUrl: '#',
  },
  assetPaths: {
    manuscriptPdf: 'pdfs/main.pdf',
    summaryCoreFigure: 'figs/figure1-real.png',
    backboneFigure: 'figs/figure2-real.png',
    robustnessFigure: 'figs/figure3-real.png',
  },
} as const;
