/**
 * =========================================================================
 *                   PORTFOLIO CONFIGURATION (content.js)
 * =========================================================================
 * 
 * Edit this single file to customize the entire portfolio for ANYONE!
 * Change your name, titles, images, stats, skills, projects, social links,
 * and contact info here.
 * 
 * NOTE ON EMAIL & KEYS (.env):
 * Sensitive credentials like EmailJS keys can be kept private by creating
 * a local `.env` file (copied from `.env.example`).
 * If you deploy to Vercel, simply add those keys in the Vercel Dashboard
 * under Project Settings -> Environment Variables. It will NOT break auto-deploy!
 * =========================================================================
 */

export const portfolioContent = {
  // Brand & Personal Identity
  brand: {
    name: "Thwaha",
    tagline: "Digital Marketing Analyst & SEO Specialist",
    metaTitle: "Thwaha | Digital Marketing Analyst & SEO Specialist",
    metaDescription: "Digital Marketing Analyst and SEO Specialist helping businesses grow through SEO, Google Ads, Meta Ads, content marketing, technical SEO, and performance marketing.",
    displayWordmark: "thwaha",
    avatar: "/images/thwaha-profile.png",
    logo: "/images/thwaha-logo.png",
    cvUrl: "/Thwaha_Resume.pdf",

    roles: [
      "Digital Marketing Analyst",
      "SEO Specialist",
      "Performance Marketer",
      "Google Ads Specialist",
      "Meta Ads Specialist",
      "Content Strategist"
    ],

    availability: {
      status: "Available for Work",
      isAvailable: true,
    },

    shortBio: "Digital Marketing Analyst and SEO Specialist passionate about SEO, Google Ads, Meta Ads, content marketing, analytics, and business growth through data-driven strategies.",

    timezone: "Asia/Kolkata",
  },

  // Main Navigation Sections
  navigation: [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "work", label: "Work" },
    { id: "services", label: "Services" },
    { id: "tech", label: "Tech Stack" },
    { id: "blog", label: "Milestones" },
    { id: "contact", label: "Contact" },
  ],

  // Home Hero Section
  home: {
    headline: {
      prefix: "I help businesses grow through",
      pill1: "SEO & Digital Marketing",
      pill2: "Performance-Driven Strategies",
      suffix: "that generate measurable results",
    },

    stats: [
      {
        value: 50,
        symbol: "+",
        label: "Blogs Published",
      },
      {
        value: 100,
        symbol: "+",
        label: "Keywords Optimized",
      },
      {
        value: 20,
        symbol: "+",
        label: "SEO Projects",
      },
    ],

    ticker: {
      title: "Core Digital Marketing Skills",
      items: [
        "SEO",
        "Technical SEO",
        "On-Page SEO",
        "Off-Page SEO",
        "Google Ads",
        "Meta Ads",
        "Keyword Research",
        "Content Marketing",
        "GA4",
        "Google Search Console",
        "SEMrush",
        "WordPress",
        "Backlink Building",
        "Competitor Analysis",
        "AEO",
        "GEO",
      ],
    },
  },

  // About Section
  about: {
    badge: "About",
    heading: "Driving business growth through SEO, content strategy, paid advertising, and performance marketing",

    paragraphs: [
      "I am Thwaha, a Digital Marketing Analyst and SEO Specialist with hands-on experience in SEO, Google Ads, Meta Ads, social media management, content creation, and website optimization.",

      "My experience includes technical SEO, on-page optimization, backlink building, keyword research, content strategy, website audits, Google Analytics reporting, Google Search Console monitoring, and performance marketing campaigns."
    ],

    competencies: [
      {
        title: "SEO Specialist",
        organization: "Filumart B2B Marketplace",
        year: "2026",
        image: "/images/filumart.png",
      },
      {
        title: "Digital Marketing Intern",
        organization: "Bisaura Technologies",
        year: "2025",
        image: "/images/bisaura.png",
      },
      {
        title: "SEO Audit Project",
        organization: "Vismaya Amusement Park",
        year: "2025",
        image: "/images/vismaya.png",
      },
      {
        title: "Content Strategy Project",
        organization: "Majlis Restaurant",
        year: "2025",
        image: "/images/majlis.png",
      },
      {
        title: "SEO & WordPress Specialist",
        organization: "Personal Projects",
        year: "2026",
        image: "/images/thwaha.png",
      },
    ],
  },
  // Education & Experience Timeline
  education: {
    badge: "Education & Experience",
    timeline: [
      {
        period: "2026 - Present",
        role: "SEO Specialist",
        company: "Filumart",
        description: "Managing technical SEO, content strategy, programmatic SEO, keyword research, backlink building, analytics tracking, indexing optimization, and search visibility improvements.",
        iconType: "work",
      },
      {
        period: "2025 - 2026",
        role: "Digital Marketing Executive",
        company: "Certivo",
        description: "Worked on SEO, Google Ads, Meta Ads, content marketing, analytics reporting, website optimization, and lead generation campaigns.",
        iconType: "work",
      },
      {
        period: "2025",
        role: "Digital Marketing Intern",
        company: "Bisaura Technologies",
        description: "Worked on SEO, social media management, blog writing, content creation, Google Ads, Meta Ads, and website optimization.",
        iconType: "education",
      },
      {
        period: "2024 - 2025",
        role: "Diploma in Digital Marketing",
        company: "Digital Marketing Training",
        description: "Learned SEO, SEM, SMM, analytics, content marketing, WordPress, Google Ads, Meta Ads, and performance marketing.",
        iconType: "school",
      },
    ],
  },

  // Projects / Work Section
  projects: {
    badge: "Work Highlights",
    heading: "Production & Featured Projects",
    items: [
      {
        id: "filumart-seo",
        title: "Filumart SEO Growth Strategy",
        subtitle: "Implemented technical SEO, content optimization, programmatic SEO, and indexing improvements for a global B2B marketplace.",
        category: "SEO",
        date: "2026",
        role: "SEO Specialist",
        image: "/images/filumart.png",
        liveUrl: "https://filumart.com",
        githubUrl: null,
        tags: ["SEO", "Technical SEO", "Content Marketing", "GSC", "GA4"],
        featured: true,
      },

      {
        id: "vismaya-seo-audit",
        title: "Vismaya Amusement Park SEO Audit",
        subtitle: "Conducted a complete SEO audit including technical SEO analysis, keyword opportunities, indexing review, and content recommendations.",
        category: "SEO Audit",
        date: "2025",
        role: "SEO Analyst",
        image: "/images/vismaya.png",
        liveUrl: "#",
        githubUrl: null,
        tags: ["SEO Audit", "Keyword Research", "Technical SEO", "Analytics"],
        featured: true,
      },

      {
        id: "majlis-content-strategy",
        title: "Majlis Restaurant Content Strategy",
        subtitle: "Created content calendars, social media strategy, audience engagement plans, and monthly reporting dashboards.",
        category: "Content Marketing",
        date: "2025",
        role: "Digital Marketing Executive",
        image: "/images/majlis.png",
        liveUrl: "#",
        githubUrl: null,
        tags: ["Content Marketing", "Social Media", "Brand Strategy"],
        featured: true,
      },

      {
        id: "google-ads-campaign",
        title: "Lead Generation Google Ads Campaign",
        subtitle: "Managed search and display campaigns focused on generating qualified leads while improving ROI and campaign performance.",
        category: "Google Ads",
        date: "2026",
        role: "Performance Marketer",
        image: "/images/google-ads.png",
        liveUrl: "#",
        githubUrl: null,
        tags: ["Google Ads", "PPC", "Lead Generation", "Analytics"],
        featured: true,
      },

      {
        id: "meta-ads-campaign",
        title: "Meta Ads Brand Awareness Campaign",
        subtitle: "Executed Facebook and Instagram advertising campaigns to increase brand reach, engagement, and audience growth.",
        category: "Meta Ads",
        date: "2026",
        role: "Digital Marketing Analyst",
        image: "/images/meta-ads.png",
        liveUrl: "#",
        githubUrl: null,
        tags: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Performance Marketing"],
        featured: true,
      },

      {
        id: "thwaha-personal-brand",
        title: "Thwaha Personal Brand Website",
        subtitle: "Built and optimized a personal branding website focusing on SEO, EEAT, GEO, AEO, and digital marketing services.",
        category: "Personal Branding",
        date: "2026",
        role: "SEO Specialist",
        image: "/images/thwaha-site.png",
        liveUrl: "https://thwaha.com",
        githubUrl: null,
        tags: ["WordPress", "SEO", "Personal Branding", "Content Marketing"],
        featured: true,
      }
    ],
  },

  // Services Offered Section
  services: {
    badge: "Services",
    heading: "Data-driven SEO, performance marketing & digital growth services",
    items: [
      {
        id: "seo-services",
        title: "Search Engine Optimization",
        tags: [
          "Technical SEO",
          "On-Page SEO",
          "Off-Page SEO",
          "Local SEO",
          "Keyword Research",
        ],
        description: "Comprehensive SEO services focused on improving rankings, traffic, visibility, and conversions.",
        images: ["/images/seo1.png", "/images/seo2.png"],
      },

      {
        id: "google-ads",
        title: "Google Ads Management",
        tags: [
          "Search Ads",
          "Display Ads",
          "YouTube Ads",
          "Remarketing",
          "Lead Generation",
        ],
        description: "Strategic Google Ads campaigns designed to increase leads, sales, and ROI.",
        images: ["/images/googleads1.png", "/images/googleads2.png"],
      },

      {
        id: "meta-ads",
        title: "Meta Ads Management",
        tags: [
          "Facebook Ads",
          "Instagram Ads",
          "Audience Targeting",
          "Lead Generation",
          "Performance Marketing",
        ],
        description: "High-performing Meta advertising campaigns for business growth and customer acquisition.",
        images: ["/images/meta1.png", "/images/meta2.png"],
      },
    ],
  },

  // Tech Stack & Tooling Section
  tech: {
    badge: "Tech Stack",
    heading: "Tools & technologies that drive measurable results",
    items: [
      {
        name: "SEO",
        duty: "Search Engine Optimization",
        percent: 95,
        iconSrc: "/icons/seo.svg",
      },
      {
        name: "Google Ads",
        duty: "Search, Display & YouTube Advertising",
        percent: 85,
        iconSrc: "/icons/googleads.svg",
      },
      {
        name: "Meta Ads",
        duty: "Facebook & Instagram Advertising",
        percent: 85,
        iconSrc: "/icons/meta.svg",
      },
      {
        name: "Google Analytics",
        duty: "Traffic & Conversion Tracking",
        percent: 80,
        iconSrc: "/icons/analytics.svg",
      },
      {
        name: "Google Search Console",
        duty: "Indexing & Search Performance",
        percent: 90,
        iconSrc: "/icons/gsc.svg",
      },
      {
        name: "SEMrush",
        duty: "SEO Research & Competitor Analysis",
        percent: 85,
        iconSrc: "/icons/semrush.svg",
      },
      {
        name: "WordPress",
        duty: "Website Management",
        percent: 90,
        iconSrc: "/icons/wordpress.svg",
      },
    ],
  },

  // Thoughts, Milestones & Articles Section
  blog: {
    badge: "Thoughts & Moments",
    heading: "Thoughts &\nMoments",
    posts: [
      {
        id: "technical-seo-guide",
        title: "Technical SEO: The Foundation of Better Rankings",
        date: "Sep 2026",
        category: "SEO",
        readTime: "7 min read",
        image: "/images/blog-tech-seo.jpg",
        summary: "A practical guide to understanding crawlability, indexing, site performance, schema markup, and technical SEO best practices.",
        url: "#",
        platform: "Website",
      },

      {
        id: "programmatic-seo",
        title: "How Programmatic SEO Can Scale Organic Growth",
        date: "Aug 2026",
        category: "SEO Strategy",
        readTime: "8 min read",
        image: "/images/blog-programmatic.jpg",
        summary: "Exploring how programmatic SEO creates thousands of optimized landing pages and improves search visibility at scale.",
        url: "#",
        platform: "Website",
      },

      {
        id: "google-ads-optimization",
        title: "5 Ways to Improve Google Ads Performance",
        date: "Jul 2026",
        category: "Google Ads",
        readTime: "6 min read",
        image: "/images/blog-google-ads.jpg",
        summary: "Actionable techniques for improving Quality Score, reducing CPC, increasing CTR, and generating more qualified leads.",
        url: "#",
        platform: "Website",
      },

      {
        id: "meta-ads-growth",
        title: "Meta Ads Strategies for Business Growth",
        date: "Jun 2026",
        category: "Meta Ads",
        readTime: "5 min read",
        image: "/images/blog-meta-ads.jpg",
        summary: "Learn how audience targeting, creative testing, and campaign optimization can improve advertising performance.",
        url: "#",
        platform: "Website",
      },

      {
        id: "filumart-seo-lessons",
        title: "SEO Lessons Learned from a B2B Marketplace",
        date: "May 2026",
        category: "Case Study",
        readTime: "9 min read",
        image: "/images/blog-filumart.jpg",
        summary: "Insights gained while working on technical SEO, content strategy, indexing, and visibility improvements for a B2B marketplace.",
        url: "#",
        platform: "Website",
      },

      {
        id: "future-of-search",
        title: "The Future of Search: GEO, AEO & AI Search",
        date: "Apr 2026",
        category: "AI SEO",
        readTime: "8 min read",
        image: "/images/blog-geo.jpg",
        summary: "Understanding how Generative Engine Optimization, Answer Engine Optimization, and AI search are changing digital marketing.",
        url: "#",
        platform: "Website",
      }
    ],
  },

  // Contact Details
  contact: {
    badge: "CONTACT",
    heading: "Let's discuss your next SEO or digital marketing project.",

    email: "hello@thwaha.com",

    location: "Kannur, Kerala, India",

    quote: {
      text: "Marketing is no longer about the stuff you make, but about the stories you tell.",
      author: "Seth Godin",
    },
  },

  // Social Profiles
  socialLinks: [
    {
      platform: "LinkedIn",
      username: "thwaha",
      url: "https://linkedin.com/in/thwaha",
    },
    {
      platform: "Instagram",
      username: "@thwaha",
      url: "https://instagram.com/thwaha",
    },
    {
      platform: "Medium",
      username: "@thwaha",
      url: "https://medium.com/@thwaha",
    },
  ],

  // Footer Metadata
  footer: {
    brandTitle: "Thwaha",
    tagline: "Digital Marketing Analyst & SEO Specialist",
    displayWordmark: "thwaha",
    copyright: `© ${new Date().getFullYear()} Thwaha • Digital Marketing Analyst & SEO Specialist`,
  },
};

// Aliases for backward compatibility
export const content = portfolioContent;
export default portfolioContent;
