import React, { useState, useEffect } from 'react';
import { Code, Zap, Database, Mail, Linkedin, ChevronDown, CheckCircle, ArrowRight, Menu, X } from 'lucide-react';
import './App.css';

const pageMetadata = {
  home: {
    title: "Harry's Automations | Workflow Automation & System Integration Expert",
    description: "Experienced automation specialist offering workflow automation, API integration, and technical documentation services. Save time and money with custom automation solutions.",
    h1: "Automation Solutions That Transform Operations"
  },
  services: {
    title: "Automation Services | Workflow Integration & Technical Documentation",
    description: "Custom workflow automation, system integration, and technical documentation services. Zapier, n8n, API integrations, and more.",
    h1: "Services"
  },
  ai: {
    title: "AI Solutions | Strategic AI Implementation & Custom Development",
    description: "Expert AI integration and development. Custom chatbots, multi-agent systems, LLM integration, and strategic AI consulting. GPT-4, Claude, LangChain, and more.",
    h1: "AI Solutions"
  },
  skills: {
    title: "Skills & Technologies | Automation Platforms & Integration Tools",
    description: "Expert in Zapier, n8n, Stripe, PayPal, Salesforce, PostgreSQL, and more. Full stack of automation and integration technologies.",
    h1: "Skills & Tools"
  },
  experience: {
    title: "Experience | Automation Projects & Professional Background",
    description: "Trilingual operations expert with proven track record at Propexo, Ledgible.io, and Coinbase. Built AI chatbots, automated billing systems, and more.",
    h1: "Experience"
  },
  contact: {
    title: "Contact | Get In Touch for Automation Solutions",
    description: "Ready to automate your workflow? Contact Harry Pethel for custom automation, integration, and documentation services.",
    h1: "Get In Touch"
  }
};

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedCards, setExpandedCards] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  const profileImage = process.env.PUBLIC_URL + "/images/profile.jpeg";

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const translations = {
    en: {
      nav: {
        home: 'home',
        services: 'services',
        ai: 'ai',
        skills: 'skills',
        experience: 'experience',
        contact: 'contact'
      },
      home: {
        badge: 'Available for Freelance Projects',
        title1: 'Automation Solutions That',
        title2: 'Transform Operations',
        subtitle: 'Experienced operations expert specializing in workflow automation, API integration, and building the systems that drive efficiency and growth.',
        cta1: 'Get In Touch',
        cta2: 'View Services',
        section2Title: 'How I Help Your Business',
        card1Title: 'Save Time & Money',
        card1Desc: 'I build custom workflows that eliminate repetitive manual tasks, so you and your team can focus on what actually grows your business. From sales automation to billing systems, I handle the tedious stuff.',
        card2Title: 'Connect Your Tools',
        card2Desc: 'Your business uses multiple platforms - I make them work together seamlessly. Whether it\'s syncing your CRM with payment systems or automating data flows between apps, I create the integrations you need.',
        card3Title: 'Document Everything',
        card3Desc: 'I create clear documentation and training materials that empower your team to understand and use your systems effectively. No more confusion or knowledge silos - just straightforward guides everyone can follow.'
      },
      services: {
        title: 'Services',
        subtitle: 'Comprehensive automation and integration solutions tailored to your business needs',
        service1Title: 'Workflow Automation',
        service1Desc: 'Eliminate repetitive tasks and streamline operations with custom automation solutions',
        service2Title: 'System Integration',
        service2Desc: 'Connect your tools and data sources for seamless information flow',
        service3Title: 'Technical Documentation',
        service3Desc: 'Clear, comprehensive documentation that empowers your team',
        learnMore: 'Learn More',
        showLess: 'Show Less',
        ctaTitle: 'Ready to Get Started?',
        ctaDesc: 'Let\'s discuss how I can help streamline your operations and eliminate manual processes.',
        ctaButton: 'Get In Touch',
        details: [
          [
            'Zapier & n8n workflow design',
            'API integrations (Stripe, PayPal, Auth0, Salesforce)',
            'Sales outreach automation (Clay, La Growth Machine)',
            'Custom billing and operational systems',
            'Custom onboarding flows',
            'Data entry automation',
            'Scheduled task automation',
            'Customer communication workflows'
          ],
          [
            'E-commerce platform integrations (Shopify, WooCommerce)',
            'Webhook configuration and management',
            'Third-party service integration',
            'CRM and payment gateway integrations',
            'Project management tool connections',
            'Database automation (PostgreSQL, SQL)',
            'Data visualization dashboards',
            'Multi-platform data synchronization'
          ],
          [
            'Product documentation & knowledge base',
            'Video tutorials and training materials',
            'API documentation and integration guides',
            'Process documentation for operations',
            'Standard Operating Procedures (SOPs)',
            'Release notes and changelog management',
            'Training program development',
            'Technical writing for non-technical audiences'
          ]
        ]
      },
      ai: {
        title: 'AI Solutions',
        subtitle: 'Strategic AI implementation that drives real business value - not just AI for AI\'s sake',
        intro: 'I don\'t just build with AI - I know when to use it, when not to, and how to architect solutions that actually solve problems. My approach combines deep technical expertise with strategic thinking to deploy AI where it creates genuine impact.',
        philosophy: 'My AI Philosophy',
        approach1Title: 'Strategic Implementation',
        approach1Desc: 'AI isn\'t always the answer. I evaluate whether AI is the right solution or if traditional automation would be more effective, reliable, and cost-efficient. My goal is to build what works, not what\'s trendy.',
        approach2Title: 'Technical Mastery',
        approach2Desc: 'When AI is the right choice, I can build it. From custom GPT integrations to sophisticated multi-agent systems, I architect AI solutions that are robust, scalable, and maintainable.',
        approach3Title: 'Practical Applications',
        approach3Desc: 'I focus on AI implementations that deliver measurable results: automated customer support that actually resolves issues, intelligent data processing that saves hours, and workflow enhancements that eliminate bottlenecks.',
        capabilitiesTitle: 'What I Build',
        capability1: 'Custom AI Chatbots & Agents',
        capability1Desc: 'Intelligent customer support agents, internal knowledge assistants, and specialized AI tools configured for your specific use case and trained on your data.',
        capability2: 'AI-Powered Automation',
        capability2Desc: 'Workflows that leverage AI for document processing, email classification, content generation, and data extraction - automating tasks that previously required human judgment.',
        capability3: 'Multi-Agent Systems',
        capability3Desc: 'Complex AI architectures with multiple specialized agents working together - research agents, writing agents, analysis agents - coordinated to handle sophisticated workflows.',
        capability4: 'LLM Integration & APIs',
        capability4Desc: 'Seamless integration of GPT-4, Claude, and other AI models into your existing systems via API, with proper prompt engineering, error handling, and cost optimization.',
        capability5: 'AI Strategy Consulting',
        capability5Desc: 'Honest assessment of where AI can help your business and where it can\'t. I\'ll tell you when a simple automation script will outperform an expensive AI solution.',
        capability6: 'Custom AI Workflows',
        capability6Desc: 'End-to-end AI pipelines that combine multiple tools, APIs, and models to solve complex problems - from data ingestion to intelligent output.',
        techTitle: 'AI Technologies',
        techIntro: 'I work with the full spectrum of modern AI tools and platforms:',
        techList: [
          'GPT-4, Claude, and other frontier LLMs',
          'OpenAI API, Anthropic API, and model integration',
          'LangChain, LlamaIndex for AI orchestration',
          'Vector databases (Pinecone, Weaviate, Chroma)',
          'Custom GPTs and AI assistants',
          'AI agent frameworks and multi-agent systems',
          'Prompt engineering and optimization',
          'RAG (Retrieval Augmented Generation) systems',
          'AI workflow automation platforms',
          'Custom AI training and fine-tuning'
        ],
        realWorldTitle: 'Real-World Impact',
        realWorld1: '90%+ accuracy AI support agent handling customer inquiries',
        realWorld2: 'Automated document processing saving 20+ hours weekly',
        realWorld3: 'Intelligent lead qualification systems improving conversion rates',
        realWorld4: 'Custom knowledge bases with AI-powered search and retrieval',
        ctaTitle: 'Ready to Build Something Intelligent?',
        ctaDesc: 'Let\'s discuss whether AI is right for your use case - and if it is, how to build it the right way.',
        ctaButton: 'Discuss AI Solutions'
      },
      skills: {
        title: 'Skills & Tools',
        subtitle: 'A comprehensive toolkit for building automation solutions that scale',
        cat1: 'Automation Platforms',
        cat2: 'APIs & Integration',
        cat3: 'Development & Databases',
        cat4: 'Documentation & Training',
        cat5: 'Business Tools',
        stat1: 'Technologies Mastered',
        stat2: 'Automations Built',
        stat3: 'Years Experience'
      },
      experience: {
        title: 'Experience',
        subtitle: 'I\'m a trilingual operations professional who\'s worked across Fortune 500 companies and fast-growing startups. I love building systems that actually work - the kind that save hours of manual work and let teams focus on what matters. Whether it\'s automating billing, setting up AI chatbots, or documenting complex processes, I get excited about turning operational chaos into smooth, efficient workflows.',
        projectsTitle: 'Notable Projects',
        jobsTitle: 'Full-Time Positions',
        technologies: 'Technologies:',
        impact: 'Impact:',
        jobs: [
          {
            role: 'Technical Program Manager',
            company: 'Propexo',
            period: '2025 - Present',
            description: 'Leading client success initiatives and building infrastructure for sustainable growth.',
            highlights: [
              'Built automated billing system eliminating manual payment errors',
              'Deployed AI support agent achieving 90%+ accuracy in handling customer inquiries',
              'Created automated sales workflows with Clay and La Growth Machine',
              'Designed customer-facing feature request dashboard for transparent product development',
              'Developed automated release notes system publishing sprint updates at cycle close'
            ]
          },
          {
            role: 'Support & Operations Manager',
            company: 'Ledgible.io',
            period: '2022 - 2025',
            description: 'Managed customer support operations and built automation systems for a crypto tax software platform.',
            highlights: [
              'Configured Zendesk ticketing system and created comprehensive knowledge base',
              'Automated billing queries with SQL and JavaScript in Retool, removing developer dependencies',
              'Integrated APIs for billing, authentication, and database processes',
              'Built automated learning system for new hire onboarding with TalentLMS',
              'Led QA testing and served as primary Voice of Customer for feature development'
            ]
          },
          {
            role: 'Support Team Lead',
            company: 'Coinbase',
            period: '2021 - 2022',
            description: 'Led customer support operations during high-growth period in cryptocurrency industry.',
            highlights: [
              'Provided frontline chat support for cryptocurrency platform',
              'Implemented content templates (macros) to improve response efficiency',
              'Promoted to team lead, contributing to technical writing and agent training',
              'Created process documentation to improve team performance'
            ]
          }
        ],
        projects: [
          {
            title: 'Automated Billing & Payment System',
            description: 'Built end-to-end automated billing system with custom UI that eliminated manual payment errors and shortened user verification to minutes each day.',
            technologies: ['Stripe API', 'Bill.com API', 'JavaScript', 'Google Sheets'],
            impact: '100% elimination of missed payments due to manual errors'
          },
          {
            title: 'AI Customer Support Agent',
            description: 'Configured, trained, and optimized an AI chatbot to handle preliminary customer inquiries with high accuracy.',
            technologies: ['AI/ML', 'Natural Language Processing'],
            impact: '90%+ accuracy rate, significantly reduced response times'
          },
          {
            title: 'Automated Sales Outreach System',
            description: 'Developed multi-channel sales automation workflow using Clay and La Growth Machine for personalized prospect engagement.',
            technologies: ['Clay', 'La Growth Machine', 'LinkedIn API'],
            impact: 'Streamlined lead generation and conversion'
          },
          {
            title: 'Release Notes Automation',
            description: 'Created automated system to generate and publish sprint release notes at the close of each development cycle.',
            technologies: ['Automation', 'Documentation Tools'],
            impact: 'Consistent, timely product updates with zero manual effort'
          }
        ]
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'Let\'s talk about your project.',
        ctaTitle: 'Ready to Automate Your Workflow?',
        ctaDesc: 'Let\'s discuss how I can help streamline your operations and eliminate manual processes.',
        emailButton: 'Send me an Email',
        linkedinButton: 'Connect on LinkedIn',
        emailLabel: 'Email',
        phoneLabel: 'Phone'
      },
      footer: '© 2025 Harry\'s Automations. All rights reserved.'
    },
    fr: {
      nav: {
        home: 'accueil',
        services: 'services',
        ai: 'ia',
        skills: 'compétences',
        experience: 'expérience',
        contact: 'contact'
      },
      home: {
        badge: 'Disponible pour vos projets',
        title1: 'Solutions d\'Automatisation qui',
        title2: 'Transforment les Opérations',
        subtitle: 'Expert en opérations spécialisé dans l\'automatisation des flux de travail, l\'intégration d\'API et la construction de systèmes qui favorisent l\'efficacité et la croissance.',
        cta1: 'Me Contacter',
        cta2: 'Voir les Services',
        section2Title: 'Comment J\'Aide Votre Entreprise',
        card1Title: 'Économisez Temps & Argent',
        card1Desc: 'Je construis des flux de travail personnalisés qui éliminent les tâches manuelles répétitives, afin que vous et votre équipe puissiez vous concentrer sur ce qui fait vraiment croître votre entreprise. De l\'automatisation des ventes aux systèmes de facturation, je m\'occupe du fastidieux.',
        card2Title: 'Connectez Vos Outils',
        card2Desc: 'Votre entreprise utilise plusieurs plateformes - je les fais fonctionner ensemble de manière transparente. Qu\'il s\'agisse de synchroniser votre CRM avec les systèmes de paiement ou d\'automatiser les flux de données entre les applications, je crée les intégrations dont vous avez besoin.',
        card3Title: 'Documentez Tout',
        card3Desc: 'Je crée une documentation claire et des supports de formation qui permettent à votre équipe de comprendre et d\'utiliser efficacement vos systèmes. Plus de confusion ou de silos de connaissances - juste des guides simples que tout le monde peut suivre.'
      },
      services: {
        title: 'Services',
        subtitle: 'Solutions d\'automatisation et d\'intégration complètes adaptées aux besoins de votre entreprise',
        service1Title: 'Automatisation des Flux de Travail',
        service1Desc: 'Éliminez les tâches répétitives et rationalisez les opérations avec des solutions d\'automatisation personnalisées',
        service2Title: 'Intégration de Systèmes',
        service2Desc: 'Connectez vos outils et sources de données pour un flux d\'informations transparent',
        service3Title: 'Documentation Technique',
        service3Desc: 'Documentation claire et complète qui responsabilise votre équipe',
        learnMore: 'En Savoir Plus',
        showLess: 'Voir Moins',
        ctaTitle: 'Prêt à Commencer?',
        ctaDesc: 'Discutons de la façon dont je peux vous aider à rationaliser vos opérations et éliminer les processus manuels.',
        ctaButton: 'Me Contacter',
        details: [
          [
            'Conception de flux de travail Zapier & n8n',
            'Intégrations API (Stripe, PayPal, Auth0, Salesforce)',
            'Automatisation de prospection commerciale (Clay, La Growth Machine)',
            'Systèmes de facturation et opérations personnalisés',
            'Flux d\'intégration personnalisés',
            'Automatisation de saisie de données',
            'Automatisation de tâches planifiées',
            'Flux de travail de communication client'
          ],
          [
            'Intégrations de plateformes e-commerce (Shopify, WooCommerce)',
            'Configuration et gestion de webhooks',
            'Intégration de services tiers',
            'Intégrations CRM et passerelles de paiement',
            'Connexions d\'outils de gestion de projet',
            'Automatisation de base de données (PostgreSQL, SQL)',
            'Tableaux de bord de visualisation de données',
            'Synchronisation de données multi-plateformes'
          ],
          [
            'Documentation produit & base de connaissances',
            'Tutoriels vidéo et supports de formation',
            'Documentation API et guides d\'intégration',
            'Documentation de processus pour les opérations',
            'Procédures Opérationnelles Standard (POS)',
            'Gestion des notes de version et changelogs',
            'Développement de programmes de formation',
            'Rédaction technique pour public non technique'
          ]
        ]
      },
      ai: {
        title: 'Solutions IA',
        subtitle: 'Implémentation stratégique de l\'IA qui génère une réelle valeur commerciale - pas seulement de l\'IA pour l\'IA',
        intro: 'Je ne construis pas seulement avec l\'IA - je sais quand l\'utiliser, quand ne pas l\'utiliser, et comment architecturer des solutions qui résolvent réellement les problèmes. Mon approche combine une expertise technique approfondie avec une réflexion stratégique pour déployer l\'IA là où elle crée un impact réel.',
        philosophy: 'Ma Philosophie IA',
        approach1Title: 'Implémentation Stratégique',
        approach1Desc: 'L\'IA n\'est pas toujours la réponse. J\'évalue si l\'IA est la bonne solution ou si une automatisation traditionnelle serait plus efficace, fiable et rentable. Mon objectif est de construire ce qui fonctionne, pas ce qui est tendance.',
        approach2Title: 'Maîtrise Technique',
        approach2Desc: 'Lorsque l\'IA est le bon choix, je peux la construire. Des intégrations GPT personnalisées aux systèmes multi-agents sophistiqués, j\'architecture des solutions IA robustes, évolutives et maintenables.',
        approach3Title: 'Applications Pratiques',
        approach3Desc: 'Je me concentre sur les implémentations IA qui produisent des résultats mesurables : support client automatisé qui résout réellement les problèmes, traitement intelligent des données qui économise des heures, et améliorations de flux de travail qui éliminent les goulots d\'étranglement.',
        capabilitiesTitle: 'Ce Que Je Construis',
        capability1: 'Chatbots & Agents IA Personnalisés',
        capability1Desc: 'Agents de support client intelligents, assistants de connaissances internes et outils IA spécialisés configurés pour votre cas d\'usage spécifique et formés sur vos données.',
        capability2: 'Automatisation Alimentée par l\'IA',
        capability2Desc: 'Flux de travail qui exploitent l\'IA pour le traitement de documents, la classification d\'emails, la génération de contenu et l\'extraction de données - automatisant des tâches qui nécessitaient auparavant un jugement humain.',
        capability3: 'Systèmes Multi-Agents',
        capability3Desc: 'Architectures IA complexes avec plusieurs agents spécialisés travaillant ensemble - agents de recherche, agents d\'écriture, agents d\'analyse - coordonnés pour gérer des flux de travail sophistiqués.',
        capability4: 'Intégration LLM & APIs',
        capability4Desc: 'Intégration transparente de GPT-4, Claude et autres modèles IA dans vos systèmes existants via API, avec ingénierie de prompts appropriée, gestion des erreurs et optimisation des coûts.',
        capability5: 'Conseil en Stratégie IA',
        capability5Desc: 'Évaluation honnête de où l\'IA peut aider votre entreprise et où elle ne le peut pas. Je vous dirai quand un simple script d\'automatisation surpassera une solution IA coûteuse.',
        capability6: 'Flux de Travail IA Personnalisés',
        capability6Desc: 'Pipelines IA de bout en bout qui combinent plusieurs outils, APIs et modèles pour résoudre des problèmes complexes - de l\'ingestion de données à la sortie intelligente.',
        techTitle: 'Technologies IA',
        techIntro: 'Je travaille avec tout le spectre des outils et plateformes IA modernes:',
        techList: [
          'GPT-4, Claude et autres LLM de pointe',
          'API OpenAI, API Anthropic et intégration de modèles',
          'LangChain, LlamaIndex pour l\'orchestration IA',
          'Bases de données vectorielles (Pinecone, Weaviate, Chroma)',
          'GPT personnalisés et assistants IA',
          'Frameworks d\'agents IA et systèmes multi-agents',
          'Ingénierie et optimisation de prompts',
          'Systèmes RAG (Génération Augmentée par Récupération)',
          'Plateformes d\'automatisation de flux de travail IA',
          'Formation et fine-tuning IA personnalisés'
        ],
        realWorldTitle: 'Impact Réel',
        realWorld1: 'Agent de support IA avec précision de 90%+ traitant les demandes clients',
        realWorld2: 'Traitement automatisé de documents économisant 20+ heures hebdomadaires',
        realWorld3: 'Systèmes de qualification intelligente de leads améliorant les taux de conversion',
        realWorld4: 'Bases de connaissances personnalisées avec recherche et récupération alimentées par IA',
        ctaTitle: 'Prêt à Construire Quelque Chose d\'Intelligent?',
        ctaDesc: 'Discutons si l\'IA est adaptée à votre cas d\'usage - et si c\'est le cas, comment la construire correctement.',
        ctaButton: 'Discuter Solutions IA'
      },
      skills: {
        title: 'Compétences & Outils',
        subtitle: 'Une boîte à outils complète pour créer des solutions d\'automatisation évolutives',
        cat1: 'Plateformes d\'Automatisation',
        cat2: 'APIs & Intégration',
        cat3: 'Développement & Bases de Données',
        cat4: 'Documentation & Formation',
        cat5: 'Outils Business',
        stat1: 'Technologies Maîtrisées',
        stat2: 'Automatisations Construites',
        stat3: 'Années d\'Expérience'
      },
      experience: {
        title: 'Expérience',
        subtitle: 'Je suis un professionnel des opérations trilingue qui a travaillé dans des entreprises Fortune 500 et des startups en forte croissance. J\'adore construire des systèmes qui fonctionnent réellement - le genre qui économise des heures de travail manuel et permet aux équipes de se concentrer sur ce qui compte. Qu\'il s\'agisse d\'automatiser la facturation, de configurer des chatbots IA ou de documenter des processus complexes, je suis passionné par la transformation du chaos opérationnel en flux de travail fluides et efficaces.',
        projectsTitle: 'Projets Notables',
        jobsTitle: 'Postes à Temps Plein',
        technologies: 'Technologies:',
        impact: 'Impact:',
        jobs: [
          {
            role: 'Directeur de Programme Technique',
            company: 'Propexo',
            period: '2025 - Présent',
            description: 'Direction des initiatives de succès client et construction d\'infrastructure pour une croissance durable.',
            highlights: [
              'Construction d\'un système de facturation automatisé éliminant les erreurs de paiement manuelles',
              'Déploiement d\'un agent de support IA atteignant plus de 90% de précision dans le traitement des demandes clients',
              'Création de flux de travail de vente automatisés avec Clay et La Growth Machine',
              'Conception d\'un tableau de bord de demandes de fonctionnalités orienté client pour un développement produit transparent',
              'Développement d\'un système automatisé de notes de version publiant les mises à jour sprint à la clôture du cycle'
            ]
          },
          {
            role: 'Responsable Support & Opérations',
            company: 'Ledgible.io',
            period: '2022 - 2025',
            description: 'Gestion des opérations de support client et construction de systèmes d\'automatisation pour une plateforme de fiscalité crypto.',
            highlights: [
              'Configuration du système de billetterie Zendesk et création d\'une base de connaissances complète',
              'Automatisation des requêtes de facturation avec SQL et JavaScript dans Retool, supprimant les dépendances développeur',
              'Intégration d\'APIs pour la facturation, l\'authentification et les processus de base de données',
              'Construction d\'un système d\'apprentissage automatisé pour l\'intégration des nouvelles recrues avec TalentLMS',
              'Direction des tests QA et rôle principal de Voix du Client pour le développement de fonctionnalités'
            ]
          },
          {
            role: 'Chef d\'Équipe Support',
            company: 'Coinbase',
            period: '2021 - 2022',
            description: 'Direction des opérations de support client pendant une période de forte croissance dans l\'industrie des cryptomonnaies.',
            highlights: [
              'Fourniture de support chat en première ligne pour la plateforme de cryptomonnaie',
              'Mise en place de modèles de contenu (macros) pour améliorer l\'efficacité des réponses',
              'Promotion au poste de chef d\'équipe, contribution à la rédaction technique et à la formation des agents',
              'Création de documentation de processus pour améliorer les performances de l\'équipe'
            ]
          }
        ],
        projects: [
          {
            title: 'Système Automatisé de Facturation & Paiement',
            description: 'Construction d\'un système de facturation automatisé de bout en bout avec interface utilisateur personnalisée qui a éliminé les erreurs de paiement manuelles et réduit la vérification utilisateur à quelques minutes par jour.',
            technologies: ['Stripe API', 'Bill.com API', 'JavaScript', 'Google Sheets'],
            impact: 'Élimination à 100% des paiements manqués dus aux erreurs manuelles'
          },
          {
            title: 'Agent de Support Client IA',
            description: 'Configuration, formation et optimisation d\'un chatbot IA pour traiter les demandes préliminaires des clients avec une grande précision.',
            technologies: ['IA/ML', 'Traitement du Langage Naturel'],
            impact: 'Taux de précision de plus de 90%, temps de réponse considérablement réduits'
          },
          {
            title: 'Système Automatisé de Prospection Commerciale',
            description: 'Développement d\'un flux de travail d\'automatisation des ventes multicanal utilisant Clay et La Growth Machine pour un engagement personnalisé des prospects.',
            technologies: ['Clay', 'La Growth Machine', 'LinkedIn API'],
            impact: 'Génération et conversion de leads rationalisées'
          },
          {
            title: 'Automatisation des Notes de Version',
            description: 'Création d\'un système automatisé pour générer et publier les notes de version sprint à la clôture de chaque cycle de développement.',
            technologies: ['Automatisation', 'Outils de Documentation'],
            impact: 'Mises à jour produit cohérentes et ponctuelles sans effort manuel'
          }
        ]
      },
      contact: {
        title: 'Me Contacter',
        subtitle: 'Parlons de votre projet.',
        ctaTitle: 'Prêt à Automatiser Votre Flux de Travail?',
        ctaDesc: 'Discutons de la façon dont je peux vous aider à rationaliser vos opérations et éliminer les processus manuels.',
        emailButton: 'Envoyez-moi un Email',
        linkedinButton: 'Connectez-vous sur LinkedIn',
        emailLabel: 'Email',
        phoneLabel: 'Téléphone'
      },
      footer: '© 2025 Harry\'s Automations. Tous droits réservés.'
    }
  };

  const t = translations[language];

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700;900&family=IBM+Plex+Mono:wght@400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const fontAwesome = document.createElement('link');
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    fontAwesome.rel = 'stylesheet';
    document.head.appendChild(fontAwesome);
  }, []);

  useEffect(() => {
    const metadata = pageMetadata[currentPage];
    document.title = metadata.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.name = 'description';
      document.head.appendChild(metaDescription);
    }
    metaDescription.content = metadata.description;

    // Update canonical URL
    const canonicalUrl = `https://harrysautomations.xyz/${currentPage === 'home' ? '' : currentPage}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    const ogTags = {
      'og:title': metadata.title,
      'og:description': metadata.description,
      'og:type': 'website',
      'og:url': `https://harrysautomations.com/${currentPage === 'home' ? '' : currentPage}`
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': metadata.title,
      'twitter:description': metadata.description
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = name;
        document.head.appendChild(tag);
      }
      tag.content = content;
    });
  }, [currentPage]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  }, [currentPage]);

  const services = [
    {
      id: 'automation',
      icon: <Zap className="w-6 h-6" />
    },
    {
      id: 'integration',
      icon: <Database className="w-6 h-6" />
    },
    {
      id: 'documentation',
      icon: <Code className="w-6 h-6" />
    }
  ];

  const Header = () => (
    <header>
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <h1
          className="cursor-pointer transition-all hover:opacity-80"
          onClick={() => setCurrentPage('home')}
        >
          Harry's Automations
        </h1>

        <nav className="hidden md:flex gap-8 items-center">
          {['home', 'services', 'ai', 'skills', 'experience', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`${currentPage === page ? 'active' : ''}`}
              style={{ background: 'none', border: 'none', color: currentPage === page ? 'var(--color-accent-lime)' : 'var(--color-text-muted)' }}
            >
              {t.nav[page]}
            </button>
          ))}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="lang-toggle"
          >
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>

        <button
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ background: 'none', border: 'none', color: '#fff' }}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t px-6 py-4 space-y-3" style={{ borderColor: 'var(--color-border)', background: 'var(--color-bg)' }}>
          {['home', 'services', 'ai', 'skills', 'experience', 'contact'].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`block w-full text-left py-2 px-4 transition-colors`}
              style={{
                background: currentPage === page ? 'var(--color-surface)' : 'transparent',
                color: currentPage === page ? 'var(--color-accent-lime)' : 'var(--color-text-muted)',
                border: 'none',
                textTransform: 'uppercase',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.813rem'
              }}
            >
              {t.nav[page]}
            </button>
          ))}
          <div className="flex gap-3">
            <button
              onClick={toggleTheme}
              className="theme-toggle flex-1"
            >
              {theme === 'dark' ? '☀ Light' : '☾ Dark'}
            </button>
            <button
              onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
              className="lang-toggle flex-1"
            >
              {language === 'en' ? 'Français' : 'English'}
            </button>
          </div>
        </nav>
      )}
    </header>
  );

  const Footer = () => (
    <footer>
      <div className="max-w-7xl mx-auto px-6 py-8 text-center">
        <p>{t.footer}</p>
      </div>
    </footer>
  );

  const HomePage = () => (
    <>
      <section className="hero-section">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left" style={{ position: 'relative', zIndex: 2 }}>
              <div className="hero-badge inline-block mb-6">
                {t.home.badge}
              </div>
              <h1 className="hero-title">
                {t.home.title1}
                <span className="block highlight">
                  {t.home.title2}
                </span>
              </h1>
              <p className="hero-subtitle">
                {t.home.subtitle}
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="btn-primary flex items-center gap-2"
                >
                  {t.home.cta1} <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setCurrentPage('services')}
                  className="btn-secondary"
                >
                  {t.home.cta2}
                </button>
              </div>
            </div>

            <div className="profile-image-wrapper">
              <img
                src={profileImage}
                alt="Harry Pethel - Automation Solutions Expert and Workflow Integration Specialist"
                className="profile-image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="section-heading text-center w-full mb-16">
          {t.home.section2Title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-6 h-6" />,
              title: t.home.card1Title,
              description: t.home.card1Desc
            },
            {
              icon: <Database className="w-6 h-6" />,
              title: t.home.card2Title,
              description: t.home.card2Desc
            },
            {
              icon: <Code className="w-6 h-6" />,
              title: t.home.card3Title,
              description: t.home.card3Desc
            }
          ].map((item, idx) => (
            <article key={idx} className="card">
              <div className="card-icon">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="section-heading" style={{ display: 'inline-block' }}>
          {t.services.title}
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          {t.services.subtitle}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => {
          const isExpanded = expandedCards[service.id];
          const serviceNum = index + 1;
          const serviceDetails = t.services.details[index];
          return (
            <article
              key={service.id}
              className={`card cursor-pointer flex flex-col ${
                isExpanded ? '' : 'md:h-[420px]'
              }`}
              onClick={() => setExpandedCards({ [service.id]: !isExpanded })}
            >
              <div className="card-icon">
                {service.icon}
              </div>
              <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                {t.services[`service${serviceNum}Title`]}
              </h2>
              <p className="mb-6">{t.services[`service${serviceNum}Desc`]}</p>

              {isExpanded && (
                <ul className="space-y-3 mb-6 pt-6" style={{ borderTop: '1px solid var(--color-border)' }}>
                  {serviceDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: 'var(--color-accent-lime)' }} />
                      <span style={{ color: 'var(--color-text-muted)' }}>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}

              <button
                className="flex items-center gap-2 mt-auto pt-4"
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-accent-lime)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.875rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  cursor: 'pointer'
                }}
              >
                {isExpanded ? t.services.showLess : t.services.learnMore}
                <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <div
          className="p-12 max-w-4xl mx-auto"
          style={{
            background: 'var(--color-surface)',
            border: '2px solid var(--color-accent-lime)',
            boxShadow: '0 0 40px rgba(201, 255, 0, 0.2)'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {t.services.ctaTitle}
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
            {t.services.ctaDesc}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="btn-primary inline-flex items-center gap-2"
          >
            {t.services.ctaButton} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );

  const AIPage = () => (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="section-heading" style={{ display: 'inline-block' }}>
          {t.ai.title}
        </h1>
        <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
          {t.ai.subtitle}
        </p>
      </div>

      {/* Intro */}
      <div className="max-w-4xl mx-auto mb-20">
        <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
          {t.ai.intro}
        </p>
      </div>

      {/* Philosophy / Approach */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.ai.philosophy}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: t.ai.approach1Title,
              description: t.ai.approach1Desc
            },
            {
              title: t.ai.approach2Title,
              description: t.ai.approach2Desc
            },
            {
              title: t.ai.approach3Title,
              description: t.ai.approach3Desc
            }
          ].map((item, idx) => (
            <article key={idx} className="card">
              <div
                className="mb-4 font-mono text-xs uppercase tracking-wider"
                style={{ color: 'var(--color-accent-lime)' }}
              >
                0{idx + 1}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)' }}>{item.description}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Capabilities */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.ai.capabilitiesTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            { title: t.ai.capability1, desc: t.ai.capability1Desc },
            { title: t.ai.capability2, desc: t.ai.capability2Desc },
            { title: t.ai.capability3, desc: t.ai.capability3Desc },
            { title: t.ai.capability4, desc: t.ai.capability4Desc },
            { title: t.ai.capability5, desc: t.ai.capability5Desc },
            { title: t.ai.capability6, desc: t.ai.capability6Desc }
          ].map((item, idx) => (
            <article key={idx} className="card">
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.75rem' }}>
                {item.title}
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.938rem' }}>
                {item.desc}
              </p>
            </article>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-8 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.ai.techTitle}
        </h2>
        <p
          className="text-center text-lg mb-8 max-w-2xl mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {t.ai.techIntro}
        </p>
        <div className="tech-grid max-w-5xl mx-auto">
          {t.ai.techList.map((tech, idx) => (
            <div
              key={idx}
              className="tech-tag text-center"
              style={{ padding: '0.75rem 1rem' }}
            >
              {tech}
            </div>
          ))}
        </div>
      </div>

      {/* Real World Impact */}
      <div className="mb-20">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ fontFamily: 'var(--font-heading)' }}>
          {t.ai.realWorldTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            t.ai.realWorld1,
            t.ai.realWorld2,
            t.ai.realWorld3,
            t.ai.realWorld4
          ].map((impact, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-6"
              style={{
                background: 'var(--color-surface)',
                border: '1px solid var(--color-border)'
              }}
            >
              <CheckCircle
                className="w-6 h-6 mt-0.5 flex-shrink-0"
                style={{ color: 'var(--color-accent-cyan)' }}
              />
              <span style={{ color: 'var(--color-text)' }}>{impact}</span>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-20 text-center">
        <div
          className="p-12 max-w-4xl mx-auto"
          style={{
            background: 'var(--color-surface)',
            border: '2px solid var(--color-accent-cyan)',
            boxShadow: '0 0 40px rgba(0, 240, 255, 0.2)'
          }}
        >
          <h2 className="text-3xl font-bold mb-4">
            {t.ai.ctaTitle}
          </h2>
          <p className="text-xl mb-8" style={{ color: 'var(--color-text-muted)' }}>
            {t.ai.ctaDesc}
          </p>
          <button
            onClick={() => setCurrentPage('contact')}
            className="btn-primary inline-flex items-center gap-2"
          >
            {t.ai.ctaButton} <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );

  const SkillsPage = () => {
    const skillCategories = [
      {
        category: t.skills.cat1,
        color: 'from-orange-500 to-red-500',
        skills: [
          { name: 'Zapier', icon: 'fa-solid fa-bolt', size: 'large' },
          { name: 'n8n', icon: 'fa-solid fa-diagram-project', size: 'large' },
          { name: 'Make', icon: 'fa-solid fa-wand-magic-sparkles', size: 'medium' },
          { name: 'Clay', icon: 'fa-solid fa-cubes', size: 'small' },
          { name: 'La Growth Machine', icon: 'fa-solid fa-chart-line', size: 'small' },
          { name: 'Integromat', icon: 'fa-solid fa-gears', size: 'small' },
          { name: 'Power Automate', icon: 'fa-solid fa-plug', size: 'small' },
          { name: 'IFTTT', icon: 'fa-solid fa-link', size: 'small' },
        ]
      },
      {
        category: t.skills.cat2,
        color: 'from-blue-500 to-cyan-500',
        skills: [
          { name: 'REST APIs', icon: 'fa-solid fa-code', size: 'large' },
          { name: 'Stripe', icon: 'fa-brands fa-stripe', size: 'medium' },
          { name: 'PayPal', icon: 'fa-brands fa-paypal', size: 'small' },
          { name: 'Salesforce', icon: 'fa-brands fa-salesforce', size: 'small' },
          { name: 'Auth0', icon: 'fa-solid fa-shield-halved', size: 'small' },
          { name: 'Webhooks', icon: 'fa-solid fa-arrow-right-arrow-left', size: 'small' },
          { name: 'Bill.com', icon: 'fa-solid fa-file-invoice-dollar', size: 'small' },
          { name: 'OAuth', icon: 'fa-solid fa-key', size: 'small' },
        ]
      },
      {
        category: t.skills.cat3,
        color: 'from-green-500 to-emerald-500',
        skills: [
          { name: 'JavaScript', icon: 'fa-brands fa-js', size: 'large' },
          { name: 'PostgreSQL', icon: 'fa-solid fa-database', size: 'medium' },
          { name: 'Airtable', icon: 'fa-solid fa-table-cells', size: 'medium' },
          { name: 'Retool', icon: 'fa-solid fa-wrench', size: 'small' },
          { name: 'Google Sheets', icon: 'fa-solid fa-table', size: 'small' },
          { name: 'HTML/CSS', icon: 'fa-brands fa-html5', size: 'small' },
          { name: 'Python', icon: 'fa-brands fa-python', size: 'small' },
        ]
      },
      {
        category: t.skills.cat4,
        color: 'from-purple-500 to-pink-500',
        skills: [
          { name: 'Technical Writing', icon: 'fa-solid fa-book', size: 'large' },
          { name: 'Video Tutorials', icon: 'fa-solid fa-video', size: 'medium' },
          { name: 'Notion', icon: 'fa-solid fa-note-sticky', size: 'small' },
          { name: 'TalentLMS', icon: 'fa-solid fa-graduation-cap', size: 'small' },
          { name: 'Knowledge Base', icon: 'fa-solid fa-circle-info', size: 'small' },
          { name: 'Process Documentation', icon: 'fa-solid fa-file-lines', size: 'small' },
        ]
      },
      {
        category: t.skills.cat5,
        color: 'from-indigo-500 to-blue-600',
        skills: [
          { name: 'Shopify', icon: 'fa-brands fa-shopify', size: 'medium' },
          { name: 'Slack', icon: 'fa-brands fa-slack', size: 'medium' },
          { name: 'Zendesk', icon: 'fa-solid fa-headset', size: 'small' },
          { name: 'WooCommerce', icon: 'fa-brands fa-wordpress', size: 'small' },
          { name: 'ActiveCollab', icon: 'fa-solid fa-users', size: 'small' },
          { name: 'HubSpot', icon: 'fa-solid fa-bullseye', size: 'small' },
        ]
      },
    ];

    const getBentoClasses = (size) => {
      switch(size) {
        case 'large':
          return 'md:col-span-2 md:row-span-2';
        case 'medium':
          return 'md:col-span-2';
        case 'small':
        default:
          return 'md:col-span-1';
      }
    };

    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="section-heading" style={{ display: 'inline-block' }}>
            {t.skills.title}
          </h1>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            {t.skills.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center mb-8">
                <h2 className="text-3xl font-bold" style={{ fontFamily: 'var(--font-heading)' }}>
                  {category.category}
                </h2>
                <div
                  className="h-0.5 flex-1 ml-4"
                  style={{
                    background: `linear-gradient(90deg, var(--color-accent-lime), transparent)`
                  }}
                ></div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`${getBentoClasses(skill.size)} skill-box overflow-hidden relative`}
                  >
                    <div className="relative h-full flex flex-col justify-center items-center text-center z-10">
                      <div className="skill-icon mb-3">
                        <i className={skill.icon}></i>
                      </div>
                      <h3 className="text-base font-bold" style={{ color: 'var(--color-text)' }}>
                        {skill.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div
            className="p-8 text-center"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="text-4xl font-bold mb-2 text-gradient">20+</div>
            <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              {t.skills.stat1}
            </p>
          </div>
          <div
            className="p-8 text-center"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="text-4xl font-bold mb-2 text-gradient">100+</div>
            <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              {t.skills.stat2}
            </p>
          </div>
          <div
            className="p-8 text-center"
            style={{
              background: 'var(--color-surface)',
              border: '1px solid var(--color-border)'
            }}
          >
            <div className="text-4xl font-bold mb-2 text-gradient">5+</div>
            <p style={{ color: 'var(--color-text-muted)', fontFamily: 'var(--font-mono)', fontSize: '0.875rem', textTransform: 'uppercase' }}>
              {t.skills.stat3}
            </p>
          </div>
        </div>
      </section>
    );
  };

  const ExperiencePage = () => {
    const jobs = language === 'en' ? t.experience.jobs : t.experience.jobs;
    const projects = language === 'en' ? t.experience.projects : t.experience.projects;

    return (
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="section-heading" style={{ display: 'inline-block' }}>
            {t.experience.title}
          </h1>
          <p className="text-xl max-w-4xl mx-auto" style={{ color: 'var(--color-text-muted)' }}>
            {t.experience.subtitle}
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.experience.projectsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <article key={idx} className="card flex flex-col">
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>
                  {project.title}
                </h3>
                <p className="mb-6 flex-grow" style={{ color: 'var(--color-text-muted)' }}>
                  {project.description}
                </p>
                <div className="mb-6">
                  <p
                    className="mb-3"
                    style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--color-accent-lime)',
                      textTransform: 'uppercase'
                    }}
                  >
                    {t.experience.technologies}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4" style={{ borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '0.875rem', fontFamily: 'var(--font-mono)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>{t.experience.impact}</span>{' '}
                    <span style={{ color: 'var(--color-accent-cyan)' }}>{project.impact}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
            {t.experience.jobsTitle}
          </h2>
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <article key={idx} className="card">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{job.role}</h3>
                    <p className="text-lg font-semibold" style={{ color: 'var(--color-accent-lime)' }}>
                      {job.company}
                    </p>
                  </div>
                  <span
                    className="mt-2 md:mt-0"
                    style={{
                      color: 'var(--color-text-muted)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.875rem'
                    }}
                  >
                    {job.period}
                  </span>
                </div>
                <p className="mb-6 italic" style={{ color: 'var(--color-text-muted)' }}>
                  {job.description}
                </p>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle
                        className="w-5 h-5 mt-0.5 flex-shrink-0"
                        style={{ color: 'var(--color-accent-lime)' }}
                      />
                      <span style={{ color: 'var(--color-text-muted)' }}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const ContactPage = () => (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="section-heading" style={{ display: 'inline-block' }}>
          {t.contact.title}
        </h1>
        <p className="text-xl" style={{ color: 'var(--color-text-muted)' }}>
          {t.contact.subtitle}
        </p>
      </div>

      <div
        className="p-12 text-center mb-12"
        style={{
          background: 'var(--color-surface)',
          border: '2px solid var(--color-accent-lime)',
          boxShadow: '0 0 40px rgba(201, 255, 0, 0.2)'
        }}
      >
        <h2 className="text-3xl font-bold mb-4">
          {t.contact.ctaTitle}
        </h2>
        <p className="text-lg mb-8" style={{ color: 'var(--color-text-muted)' }}>
          {t.contact.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="mailto:harrypethel@outlook.fr"
            className="btn-primary flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <Mail className="w-4 h-4" />
            {t.contact.emailButton}
          </a>
          <a
            href="https://www.linkedin.com/in/harry-pethel-566775231/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex items-center gap-2"
            style={{ textDecoration: 'none' }}
          >
            <Linkedin className="w-4 h-4" />
            {t.contact.linkedinButton}
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <article className="card">
          <h3 className="font-bold text-lg mb-3">{t.contact.emailLabel}</h3>
          <a
            href="mailto:harrypethel@outlook.fr"
            className="font-semibold text-lg"
            style={{ color: 'var(--color-accent-lime)', textDecoration: 'none' }}
          >
            harrypethel@outlook.fr
          </a>
        </article>
        <article className="card">
          <h3 className="font-bold text-lg mb-3">{t.contact.phoneLabel}</h3>
          <a
            href="tel:+12407969774"
            className="font-semibold text-lg"
            style={{ color: 'var(--color-accent-lime)', textDecoration: 'none' }}
          >
            (240) 796-9774
          </a>
        </article>
      </div>
    </section>
  );

  // Generate breadcrumb structured data
  const getBreadcrumbData = () => {
    const pageNames = {
      'home': 'Home',
      'services': 'Services',
      'ai': 'AI Solutions',
      'skills': 'Skills',
      'experience': 'Experience',
      'contact': 'Contact'
    };

    const breadcrumb = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://harrysautomations.xyz/"
        }
      ]
    };

    if (currentPage !== 'home') {
      breadcrumb.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pageNames[currentPage] || currentPage,
        "item": `https://harrysautomations.xyz/${currentPage}`
      });
    }

    return breadcrumb;
  };

  return (
    <div className="min-h-screen" style={{ position: 'relative' }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      {/* Technical overlays */}
      <div className="grid-overlay"></div>
      <div className="floating-accents">
        <div className="floating-accent"></div>
        <div className="floating-accent"></div>
        <div className="floating-accent"></div>
      </div>

      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harry Pethel",
          "jobTitle": "AI Integration & Automation Solutions Expert",
          "alternateName": "Harry's Automations",
          "description": "Strategic AI implementation, workflow automation, system integration, and technical documentation specialist with expertise in GPT-4, Claude AI, multi-agent systems, Zapier, n8n, and custom automation solutions",
          "url": "https://harrysautomations.xyz",
          "email": "harrypethel@outlook.fr",
          "telephone": "+12407969774",
          "image": "https://harrysautomations.xyz/images/profile.jpeg",
          "sameAs": [
            "https://www.linkedin.com/in/harry-pethel-566775231/"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Remote",
            "addressRegion": "Worldwide",
            "addressCountry": "US"
          },
          "knowsAbout": [
            "Workflow Automation",
            "API Integration",
            "Technical Documentation",
            "Zapier",
            "n8n",
            "Make",
            "System Integration",
            "Business Process Automation",
            "Artificial Intelligence",
            "AI Integration",
            "GPT-4",
            "Claude AI",
            "LangChain",
            "LlamaIndex",
            "AI Chatbots",
            "Multi-Agent Systems",
            "RAG Systems",
            "Vector Databases",
            "Prompt Engineering",
            "AI Strategy Consulting"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "AI Integration & Automation Specialist",
            "occupationLocation": {
              "@type": "Place",
              "name": "Remote - Worldwide"
            },
            "skills": [
              "AI Development",
              "GPT-4 Integration",
              "Claude AI",
              "LangChain",
              "Multi-Agent Systems",
              "AI Chatbots",
              "Prompt Engineering",
              "RAG Systems",
              "Vector Databases",
              "Zapier",
              "n8n",
              "Make",
              "API Integration",
              "Stripe",
              "PayPal",
              "Salesforce",
              "PostgreSQL",
              "JavaScript",
              "Python",
              "Technical Writing",
              "Workflow Automation",
              "Process Optimization"
            ],
            "estimatedSalary": {
              "@type": "MonetaryAmountDistribution",
              "name": "Freelance Rate",
              "currency": "USD"
            }
          },
          "workLocation": {
            "@type": "VirtualLocation",
            "url": "https://harrysautomations.xyz"
          },
          "worksFor": {
            "@type": "Organization",
            "name": "Harry's Automations"
          },
          "knowsLanguage": [
            {
              "@type": "Language",
              "name": "English"
            },
            {
              "@type": "Language",
              "name": "French"
            }
          ]
        })}
      </script>

      {/* Breadcrumb Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getBreadcrumbData())}
      </script>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <Header />

        {currentPage === 'home' && <HomePage />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'ai' && <AIPage />}
        {currentPage === 'skills' && <SkillsPage />}
        {currentPage === 'experience' && <ExperiencePage />}
        {currentPage === 'contact' && <ContactPage />}

        <Footer />
      </div>
    </div>
  );
}