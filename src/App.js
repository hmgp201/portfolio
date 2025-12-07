import React, { useState, useEffect } from 'react';
import { Code, Zap, Database, Mail, Linkedin, ChevronDown, CheckCircle, ArrowRight, Sparkles, Menu, X } from 'lucide-react';

export default function Portfolio() {
  const [currentPage, setCurrentPage] = useState('home');
  const [expandedCards, setExpandedCards] = useState({});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState('en');
  
  const profileImage = "./public/images/profile.jpg";

  const translations = {
    en: {
      nav: {
        home: 'home',
        services: 'services',
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

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap';
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
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 
          className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent cursor-pointer hover:from-indigo-700 hover:to-blue-700 transition-all" 
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          onClick={() => setCurrentPage('home')}
        >
          Harry's Automations
        </h1>
        
        <nav className="hidden md:flex gap-8 items-center">
          {['home', 'services', 'skills', 'experience', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`capitalize font-medium transition-all ${
                currentPage === page 
                  ? 'text-indigo-600 font-bold border-b-2 border-indigo-600' 
                  : 'text-slate-600 hover:text-indigo-600'
              }`}
            >
              {t.nav[page]}
            </button>
          ))}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="ml-4 px-4 py-2 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg font-semibold transition-all flex items-center gap-2"
          >
            <span className="text-lg">{language === 'en' ? '🇫🇷' : '🇬🇧'}</span>
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </nav>

        <button 
          className="md:hidden text-slate-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileMenuOpen && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-6 py-4 space-y-3">
          {['home', 'services', 'skills', 'experience', 'contact'].map((page) => (
            <button 
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`block w-full text-left capitalize py-2 px-4 rounded-lg transition-colors ${
                currentPage === page 
                  ? 'bg-indigo-50 text-indigo-600 font-semibold' 
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              {t.nav[page]}
            </button>
          ))}
          <button
            onClick={() => setLanguage(language === 'en' ? 'fr' : 'en')}
            className="w-full px-4 py-3 bg-indigo-100 hover:bg-indigo-200 text-indigo-700 rounded-lg font-semibold transition-all flex items-center justify-center gap-2"
          >
            <span className="text-lg">{language === 'en' ? '🇫🇷' : '🇬🇧'}</span>
            {language === 'en' ? 'Français' : 'English'}
          </button>
        </nav>
      )}
    </header>
  );

  const Footer = () => (
    <footer className="border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 text-center text-slate-600 text-sm">
        <p>{t.footer}</p>
      </div>
    </footer>
  );

  const HomePage = () => (
    <>
      <section className="max-w-7xl mx-auto px-6 py-20 pb-8">
        <div className="flex flex-col md:flex-row items-center gap-12 mb-8">
          <div className="flex-shrink-0">
            <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-indigo-200 shadow-2xl hover:scale-105 transition-transform duration-300">
              <img 
                src={profileImage} 
                alt="Harry Pethel - Automation Solutions Expert and Workflow Integration Specialist" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <div className="flex-1 text-center md:text-left">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 rounded-full text-indigo-700 text-sm font-semibold pulsate-badge">
              <Sparkles className="w-4 h-4 inline mr-2" />
              {t.home.badge}
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              {t.home.title1}
              <span className="block bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent shimmer-text">
                {t.home.title2}
              </span>
            </h1>
            <p className="text-xl text-slate-700 mb-8 leading-relaxed">
              {t.home.subtitle}
            </p>
            <div className="flex gap-4 justify-center md:justify-start flex-wrap">
              <button 
                onClick={() => setCurrentPage('contact')} 
                className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105"
              >
                {t.home.cta1} <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => setCurrentPage('services')} 
                className="px-8 py-4 bg-white hover:bg-slate-50 text-indigo-600 border-2 border-indigo-300 hover:border-indigo-400 rounded-lg font-semibold transition-all hover:scale-105"
              >
                {t.home.cta2}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {t.home.section2Title}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
              title: t.home.card1Title,
              description: t.home.card1Desc
            },
            {
              icon: <Database className="w-8 h-8" />,
              title: t.home.card2Title,
              description: t.home.card2Desc
            },
            {
              icon: <Code className="w-8 h-8" />,
              title: t.home.card3Title,
              description: t.home.card3Desc
            }
          ].map((item, idx) => (
            <article key={idx} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
              <p className="text-slate-700 leading-relaxed">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );

  const ServicesPage = () => (
    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {t.services.title}
        </h1>
        <p className="text-xl text-slate-700 max-w-3xl mx-auto">
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
              className={`bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all cursor-pointer flex flex-col group ${
                isExpanded ? '' : 'md:h-[420px]'
              }`}
              onClick={() => setExpandedCards({ [service.id]: !isExpanded })}
            >
              <div className="w-14 h-14 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold mb-4 text-slate-900">{t.services[`service${serviceNum}Title`]}</h2>
              <p className="text-slate-700 mb-6 leading-relaxed">{t.services[`service${serviceNum}Desc`]}</p>
              
              {isExpanded && (
                <ul className="space-y-3 mb-6 pt-6 border-t border-slate-200">
                  {serviceDetails.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-slate-800">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              <button className="text-indigo-600 font-semibold flex items-center gap-2 mt-auto pt-4 hover:text-indigo-700 group-hover:gap-3 transition-all">
                {isExpanded ? t.services.showLess : t.services.learnMore}
                <ChevronDown className={`w-5 h-5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-20 text-center">
        <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 max-w-4xl mx-auto shadow-2xl">
          <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.services.ctaTitle}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {t.services.ctaDesc}
          </p>
          <button 
            onClick={() => setCurrentPage('contact')}
            className="px-10 py-4 bg-white text-indigo-600 rounded-lg font-bold transition-all inline-flex items-center gap-2 hover:scale-105 shadow-xl hover:shadow-2xl"
          >
            {t.services.ctaButton} <ArrowRight className="w-5 h-5" />
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
          <h1 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.skills.title}
          </h1>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto">
            {t.skills.subtitle}
          </p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={catIdx}>
              <div className="flex items-center mb-8">
                <div className={`h-1 w-16 bg-gradient-to-r ${category.color} rounded-full mr-4`}></div>
                <h2 className="text-3xl font-bold text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                  {category.category}
                </h2>
                <div className={`h-1 flex-1 bg-gradient-to-r ${category.color} opacity-20 rounded-full ml-4`}></div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[120px]">
                {category.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className={`${getBentoClasses(skill.size)} bg-white border-2 border-slate-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-xl transition-all hover:-translate-y-1 group cursor-pointer overflow-hidden relative`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                    
                    <div className="relative h-full flex flex-col justify-center items-center text-center">
                      <div className={`text-5xl mb-3 bg-gradient-to-br ${category.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform`}>
                        <i className={skill.icon}></i>
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{skill.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-indigo-600 mb-2">20+</div>
            <p className="text-slate-700 font-semibold">{t.skills.stat1}</p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
            <p className="text-slate-700 font-semibold">{t.skills.stat2}</p>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 text-center">
            <div className="text-4xl font-bold text-purple-600 mb-2">5+</div>
            <p className="text-slate-700 font-semibold">{t.skills.stat3}</p>
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
          <h1 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.experience.title}
          </h1>
          <p className="text-xl text-slate-700 max-w-4xl mx-auto">
            {t.experience.subtitle}
          </p>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.experience.projectsTitle}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <article
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all hover:-translate-y-1 flex flex-col"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-700 mb-6 leading-relaxed flex-grow">{project.description}</p>
                <div className="mb-6">
                  <p className="text-sm text-slate-600 font-semibold mb-3">{t.experience.technologies}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200">
                  <p className="text-sm font-semibold text-green-700">
                    <span className="text-slate-600">{t.experience.impact}</span> {project.impact}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-8 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
            {t.experience.jobsTitle}
          </h2>
          <div className="space-y-6">
            {jobs.map((job, idx) => (
              <article
                key={idx}
                className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-xl transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{job.role}</h3>
                    <p className="text-indigo-600 text-lg font-semibold">{job.company}</p>
                  </div>
                  <span className="text-slate-600 font-medium mt-2 md:mt-0">{job.period}</span>
                </div>
                <p className="text-slate-700 mb-6 italic leading-relaxed">{job.description}</p>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-800">
                      <CheckCircle className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>{highlight}</span>
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
        <h1 className="text-5xl font-bold mb-6 text-slate-900" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {t.contact.title}
        </h1>
        <p className="text-xl text-slate-800">
          {t.contact.subtitle}
        </p>
      </div>

      <div className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-2xl p-12 text-center shadow-2xl mb-12">
        <h2 className="text-3xl font-bold mb-4 text-white" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          {t.contact.ctaTitle}
        </h2>
        <p className="text-lg mb-8 text-blue-100">
          {t.contact.ctaDesc}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="mailto:harrypethel@outlook.fr" 
            className="px-8 py-4 bg-white text-blue-600 rounded-lg font-bold hover:bg-blue-50 transition-all flex items-center gap-2 hover:scale-105 shadow-xl"
          >
            <Mail className="w-5 h-5" />
            {t.contact.emailButton}
          </a>
          <a 
            href="https://www.linkedin.com/in/harry-pethel-566775231/" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-blue-800 hover:bg-blue-900 text-white rounded-lg font-bold transition-all flex items-center gap-2 hover:scale-105 shadow-xl"
          >
            <Linkedin className="w-5 h-5" />
            {t.contact.linkedinButton}
          </a>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <article className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
          <h3 className="font-bold text-lg mb-3 text-slate-900">{t.contact.emailLabel}</h3>
          <a href="mailto:harrypethel@outlook.fr" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
            harrypethel@outlook.fr
          </a>
        </article>
        <article className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-indigo-300 hover:shadow-lg transition-all">
          <h3 className="font-bold text-lg mb-3 text-slate-900">{t.contact.phoneLabel}</h3>
          <a href="tel:+12407969774" className="text-indigo-600 hover:text-indigo-700 font-semibold text-lg">
            (240) 796-9774
          </a>
        </article>
      </div>
    </section>
  );

  return (
    <div className="min-h-screen animated-gradient" style={{ fontFamily: "'Inter', sans-serif" }}>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Harry Pethel",
          "jobTitle": "Automation Solutions Expert",
          "description": "Workflow automation, system integration, and technical documentation specialist",
          "url": "https://harrysautomations.com",
          "email": "harrypethel@outlook.fr",
          "telephone": "+12407969774",
          "knowsAbout": [
            "Workflow Automation",
            "API Integration",
            "Technical Documentation",
            "Zapier",
            "n8n",
            "System Integration",
            "Business Process Automation"
          ],
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Technical Program Manager",
            "occupationLocation": {
              "@type": "City",
              "name": "Remote"
            },
            "skills": [
              "Zapier",
              "n8n",
              "API Integration",
              "Stripe",
              "PayPal",
              "Salesforce",
              "PostgreSQL",
              "JavaScript",
              "Technical Writing"
            ]
          }
        })}
      </script>
      
      <Header />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'skills' && <SkillsPage />}
      {currentPage === 'experience' && <ExperiencePage />}
      {currentPage === 'contact' && <ContactPage />}
      
      <Footer />
      
      <style>{`
        @keyframes gradientPan {
          0% {
            background-position: 0% 0%;
          }
          50% {
            background-position: 100% 100%;
          }
          100% {
            background-position: 0% 0%;
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        @keyframes pulsate {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(99, 102, 241, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(99, 102, 241, 0);
          }
        }
        
        .animated-gradient {
          background: linear-gradient(135deg, 
            #dbeafe 0%, 
            #bfdbfe 25%,
            #93c5fd 50%, 
            #bfdbfe 75%,
            #dbeafe 100%
          );
          background-size: 200% 200%;
          animation: gradientPan 25s ease-in-out infinite;
        }
        
        .shimmer-text {
          background-size: 200% auto;
          animation: shimmer 6s linear infinite;
          text-shadow: 0 0 30px rgba(99, 102, 241, 0.5), 
                       0 0 60px rgba(59, 130, 246, 0.3);
        }
        
        .pulsate-badge {
          animation: pulsate 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}