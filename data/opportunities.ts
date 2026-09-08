import { Opportunity, Category } from '@/types';

export const categories: Category[] = [
  {
    slug: 'microtasks-data-entry',
    name: 'Microtasks & Data Entry',
    description: 'Simple online tasks — categorization, data entry, CAPTCHA solving — that pay per completed unit.',
    icon: 'ClipboardList',
    count: 3,
    color: 'blue',
  },
  {
    slug: 'freelancing-writing-translation',
    name: 'Freelancing, Writing & Translation',
    description: 'Sell your skills or creativity on global platforms. Ideal for writers, translators, and designers.',
    icon: 'PenTool',
    count: 3,
    color: 'purple',
  },
  {
    slug: 'content-creation-social-media',
    name: 'Content Creation & Social Media',
    description: 'Build audiences on YouTube, Facebook, or a blog and monetize through ads and sponsorships.',
    icon: 'Video',
    count: 3,
    color: 'rose',
  },
  {
    slug: 'mobile-apps-development',
    name: 'Mobile Apps & App Development',
    description: 'Earn by completing micro-tasks on apps or build your own apps and monetize with ads.',
    icon: 'Smartphone',
    count: 2,
    color: 'emerald',
  },
  {
    slug: 'ecommerce-affiliate',
    name: 'E-commerce & Affiliate',
    description: 'Sell products or earn commissions by promoting other brands — from Shopify to Daraz.',
    icon: 'ShoppingBag',
    count: 1,
    color: 'amber',
  },
];

export const opportunities: Opportunity[] = [
  // ── Category 1: Microtasks & Data Entry ──────────────────────────────
  {
    id: 'clickworker',
    title: 'Clickworker',
    platform: 'Clickworker',
    categorySlug: 'microtasks-data-entry',
    categoryName: 'Microtasks & Data Entry',
    description:
      'Clickworker is a trusted crowdsourcing platform where you complete small, well-defined online tasks such as data entry, text creation, categorization, and web research. Tasks are short, flexible, and available around the clock.',
    earningsRange: '$0.10 – $2.00 / task',
    earningsMin: 0.1,
    earningsMax: 2,
    paymentMethods: ['Payoneer', 'SEPA Transfer'],
    difficulty: 'Beginner',
    timeToStart: '1–2 days',
    website: 'https://www.clickworker.com',
    websiteLabel: 'clickworker.com',
    tags: ['Data Entry', 'Categorization', 'Text Creation', 'Web Research'],
    featured: true,
    steps: [
      {
        number: 1,
        title: 'Register an Account',
        description:
          'Visit clickworker.com and sign up with your real name and valid email. Personal information must match your payment account.',
      },
      {
        number: 2,
        title: 'Complete Your Profile & Assessments',
        description:
          'Fill in your profile completely. Take the available skill assessments — higher scores unlock better-paying tasks.',
      },
      {
        number: 3,
        title: 'Browse & Accept Tasks',
        description:
          'Navigate to the Workplace section. Browse available tasks sorted by reward. Accept tasks that match your skills.',
      },
      {
        number: 4,
        title: 'Complete Tasks Accurately',
        description:
          'Follow task instructions carefully. Quality scores matter — low-quality submissions can restrict your task access.',
      },
      {
        number: 5,
        title: 'Withdraw Earnings',
        description:
          'Once your balance reaches the minimum threshold ($5), withdraw via Payoneer or SEPA bank transfer.',
      },
    ],
    requirements: [
      'Valid government-issued ID',
      'Real name (must match payment account)',
      'Stable internet connection',
      'Payoneer account for withdrawal',
    ],
    tips: [
      'Complete all available assessments immediately after registering — they significantly increase task availability.',
      'Maintain a high accuracy rate to keep premium tasks unlocked.',
      'Log in daily as tasks are time-sensitive and first-come, first-served.',
      'Download the Clickworker app for mobile task notifications.',
    ],
  },
  {
    id: 'microworkers',
    title: 'Microworkers & RapidWorkers',
    platform: 'Microworkers',
    categorySlug: 'microtasks-data-entry',
    categoryName: 'Microtasks & Data Entry',
    description:
      'Microworkers and RapidWorkers are two of the oldest microtask platforms. They offer short tasks like app testing, website visiting, forum posting, and social media interactions. Payment is released after employers approve your submission.',
    earningsRange: '$0.10 – $1.00 / task',
    earningsMin: 0.1,
    earningsMax: 1,
    paymentMethods: ['Skrill', 'Payoneer', 'PayPal', 'Payeer'],
    difficulty: 'Beginner',
    timeToStart: '1–3 days',
    website: 'https://www.microworkers.com',
    websiteLabel: 'microworkers.com',
    tags: ['Microtasks', 'App Testing', 'Social Media', 'Web Tasks'],
    steps: [
      {
        number: 1,
        title: 'Create Your Account',
        description:
          'Sign up at microworkers.com with your real name. A valid email and phone number are required for verification.',
      },
      {
        number: 2,
        title: 'Verify Your Identity',
        description:
          'Upload a proof of identity document. This is required before you can withdraw earnings and helps protect the platform.',
      },
      {
        number: 3,
        title: 'Complete Starter Tasks',
        description:
          'Begin with simple tasks to build your success rate. A higher success rate unlocks better campaigns.',
      },
      {
        number: 4,
        title: 'Submit Proof of Completion',
        description:
          'Most tasks require proof (screenshot, URL, etc.). Submit accurate proof to ensure employer approval.',
      },
      {
        number: 5,
        title: 'Withdraw Your Balance',
        description:
          'Minimum withdrawal is $9. Choose Skrill, PayPal, Payoneer, or Payeer as your preferred payment method.',
      },
    ],
    requirements: [
      'Real name and valid email',
      'Government-issued ID for verification',
      'Screenshot capability for proof submission',
      'Skrill, PayPal, or Payoneer account',
    ],
    tips: [
      'Focus on tasks with high reward-to-time ratios.',
      'Never submit fake proof — accounts get permanently banned.',
      'Check new tasks multiple times per day as popular ones fill up fast.',
      'Build your success rate above 75% before applying for higher-paying campaigns.',
    ],
  },
  {
    id: '2captcha',
    title: '2Captcha',
    platform: '2Captcha',
    categorySlug: 'microtasks-data-entry',
    categoryName: 'Microtasks & Data Entry',
    description:
      '2Captcha is a human-powered CAPTCHA solving service. Workers solve image CAPTCHAs, text recognition tasks, and reCAPTCHAs in real time. It\'s one of the simplest online earning methods — no special skills required.',
    earningsRange: '$1 – $3 / day',
    earningsMin: 1,
    earningsMax: 3,
    paymentMethods: ['Payeer', 'WebMoney', 'Bitcoin', 'Litecoin'],
    difficulty: 'Beginner',
    timeToStart: 'Same day',
    website: 'https://2captcha.com',
    websiteLabel: '2captcha.com',
    tags: ['CAPTCHA', 'Image Recognition', 'No Skills Required'],
    steps: [
      {
        number: 1,
        title: 'Register at 2Captcha',
        description:
          'Go to 2captcha.com and create a free worker account. No ID verification required to start.',
      },
      {
        number: 2,
        title: 'Pass the Training Test',
        description:
          'Complete the mandatory training test to learn how to solve different CAPTCHA types correctly.',
      },
      {
        number: 3,
        title: 'Start Solving CAPTCHAs',
        description:
          'Log in to the worker interface and begin solving CAPTCHAs. Each correct solution earns a small amount.',
      },
      {
        number: 4,
        title: 'Maintain High Accuracy',
        description:
          'Your earnings rate improves with accuracy. Incorrect solutions reduce your rating and pay per task.',
      },
      {
        number: 5,
        title: 'Withdraw via Crypto or Payeer',
        description:
          'Minimum withdrawal is $0.50. Withdraw via Payeer, Bitcoin, Litecoin, or WebMoney.',
      },
    ],
    requirements: [
      'Basic computer skills',
      'Stable internet connection',
      'Payeer or crypto wallet for withdrawal',
    ],
    tips: [
      'Solve during peak hours (US/EU business hours) for maximum task volume.',
      'Speed and accuracy together determine your hourly rate.',
      'Use keyboard shortcuts in the worker interface to solve faster.',
      'Combine 2Captcha with other microtask platforms for better income.',
    ],
  },

  // ── Category 2: Freelancing, Writing & Translation ───────────────────
  {
    id: 'fiverr-upwork',
    title: 'Fiverr & Upwork',
    platform: 'Fiverr / Upwork',
    categorySlug: 'freelancing-writing-translation',
    categoryName: 'Freelancing, Writing & Translation',
    description:
      'Fiverr and Upwork are the world\'s largest freelancing marketplaces. Offer any skill — translation, graphic design, content writing, SEO, programming — and work with global clients. Earnings scale directly with your skill level and reputation.',
    earningsRange: '$5 – $100+ / project',
    earningsMin: 5,
    earningsMax: 500,
    paymentMethods: ['Payoneer', 'PayPal', 'Direct Wire Transfer'],
    difficulty: 'Intermediate',
    timeToStart: '3–7 days',
    website: 'https://www.fiverr.com',
    websiteLabel: 'fiverr.com',
    tags: ['Freelancing', 'Translation', 'Design', 'SEO', 'Writing'],
    featured: true,
    steps: [
      {
        number: 1,
        title: 'Create a Professional Profile',
        description:
          'Set up your profile with a clear photo, compelling bio, and skills. Highlight specific expertise like Sinhala-to-English translation or local SEO.',
      },
      {
        number: 2,
        title: 'Define Your Services (Fiverr Gigs)',
        description:
          'Create detailed Gig listings with clear pricing tiers, delivery times, and portfolio samples. Use relevant keywords in your title and description.',
      },
      {
        number: 3,
        title: 'Bid on Projects (Upwork)',
        description:
          'On Upwork, browse open projects and submit tailored proposals. Address the client\'s specific needs and show relevant samples.',
      },
      {
        number: 4,
        title: 'Deliver High-Quality Work',
        description:
          'Always deliver before the deadline. Communication and quality are the foundation of 5-star reviews.',
      },
      {
        number: 5,
        title: 'Build Reviews & Scale',
        description:
          'Early reviews are critical. Once you have 5+ positive reviews, you can raise your rates significantly.',
      },
    ],
    requirements: [
      'Marketable skill (translation, writing, design, coding, etc.)',
      'Portfolio samples or past work',
      'Payoneer or PayPal for withdrawal',
      'Professional communication skills',
    ],
    tips: [
      'Specialize — niche gigs convert far better than generic ones.',
      'Offer a competitive entry price to land your first few orders quickly.',
      'Respond to messages within 1 hour to boost your response rate metric.',
      'Add video intros to your Fiverr gigs — they increase conversions by 200%.',
    ],
  },
  {
    id: 'amazon-kdp',
    title: 'Amazon KDP',
    platform: 'Amazon KDP',
    categorySlug: 'freelancing-writing-translation',
    categoryName: 'Freelancing, Writing & Translation',
    description:
      'Amazon Kindle Direct Publishing (KDP) lets you self-publish eBooks and paperbacks and earn royalties of 35%–70%. You keep full rights to your work. Perfect for writers, niche experts, and anyone who can produce valuable written content.',
    earningsRange: '35% – 70% royalty',
    earningsMin: 100,
    earningsMax: 5000,
    paymentMethods: ['Payoneer', 'Bank Wire', 'Check'],
    difficulty: 'Intermediate',
    timeToStart: '7–14 days',
    website: 'https://kdp.amazon.com',
    websiteLabel: 'kdp.amazon.com',
    tags: ['eBooks', 'Publishing', 'Royalties', 'Passive Income'],
    steps: [
      {
        number: 1,
        title: 'Choose Your Niche & Write',
        description:
          'Research profitable niches using Amazon\'s bestseller lists. Write a valuable, well-structured book (even 50 pages is enough for many niches).',
      },
      {
        number: 2,
        title: 'Design a Professional Cover',
        description:
          'Use Canva or hire a designer to create a high-resolution, genre-appropriate cover. Covers drive 80% of purchasing decisions.',
      },
      {
        number: 3,
        title: 'Format Your Manuscript',
        description:
          'Format your book using Kindle Create (free tool) to ensure proper eBook and print formatting.',
      },
      {
        number: 4,
        title: 'Upload & Publish on KDP',
        description:
          'Create a KDP account, upload your manuscript and cover, set pricing, and choose royalty rate (70% for $2.99–$9.99 pricing).',
      },
      {
        number: 5,
        title: 'Promote & Earn Royalties',
        description:
          'Use Amazon ads, social media, and free Kindle days to drive downloads. Royalties are paid monthly via Payoneer.',
      },
    ],
    requirements: [
      'Original written content',
      'Canva or design tool for cover',
      'Payoneer account for international payments',
      'Tax information (W-8BEN form for non-US authors)',
    ],
    tips: [
      'Low-content books (journals, planners, coloring books) are fast to produce and highly profitable.',
      'Use Publisher Rocket to research keywords and competition before writing.',
      'Enroll in KDP Select for Kindle Unlimited royalties — additional passive income.',
      'Publish multiple books to compound your monthly royalty income.',
    ],
  },
  {
    id: 'translation-freelance',
    title: 'Sinhala / Regional Language Translation',
    platform: 'Upwork / Freelancer',
    categorySlug: 'freelancing-writing-translation',
    categoryName: 'Freelancing, Writing & Translation',
    description:
      'Native speakers of Sinhala, Tamil, and other regional languages are in high demand for translation, localization, and transcription projects. This is a significant competitive advantage that commands premium rates on global freelancing platforms.',
    earningsRange: '$10 – $80 / project',
    earningsMin: 10,
    earningsMax: 80,
    paymentMethods: ['Payoneer', 'PayPal', 'Direct Wire'],
    difficulty: 'Beginner',
    timeToStart: '2–5 days',
    website: 'https://www.upwork.com',
    websiteLabel: 'upwork.com',
    tags: ['Translation', 'Localization', 'Sinhala', 'Tamil', 'Transcription'],
    steps: [
      {
        number: 1,
        title: 'Identify Your Language Pairs',
        description:
          'Focus on Sinhala↔English or Tamil↔English pairs. These are underserved on global platforms, giving you a strong competitive edge.',
      },
      {
        number: 2,
        title: 'Create Specialized Profiles',
        description:
          'Build Fiverr gigs and Upwork profiles specifically targeting translation services. Include sample translations in your portfolio.',
      },
      {
        number: 3,
        title: 'Target High-Value Niches',
        description:
          'Legal, medical, and software localization pay the most. Target these niches as you build experience.',
      },
      {
        number: 4,
        title: 'Deliver with Fast Turnaround',
        description:
          'Clients value speed. Offering 24-hour turnaround for short documents will set you apart from competitors.',
      },
      {
        number: 5,
        title: 'Request Reviews & Raise Rates',
        description:
          'After 5 successful projects, raise your rates by 20–30%. Good reviews justify premium pricing.',
      },
    ],
    requirements: [
      'Native or professional-level language fluency',
      'Strong English writing skills',
      'Word processing software (Microsoft Word, Google Docs)',
      'PayPal or Payoneer account',
    ],
    tips: [
      'Specialize in one industry (legal, medical, tech) to command higher rates.',
      'Create sample translations for your portfolio before landing first clients.',
      'Join translation communities on LinkedIn to network with agencies.',
      'Consider getting certified by a recognized translation body to justify premium pricing.',
    ],
  },

  // ── Category 3: Content Creation & Social Media ──────────────────────
  {
    id: 'youtube-partner',
    title: 'YouTube Partner Program',
    platform: 'YouTube',
    categorySlug: 'content-creation-social-media',
    categoryName: 'Content Creation & Social Media',
    description:
      'The YouTube Partner Program lets creators monetize their channels through ads, memberships, and Super Chats. Once you reach the threshold of 1,000 subscribers and 4,000 watch hours, you unlock AdSense revenue that scales with your audience.',
    earningsRange: '$1 – $20+ / 1,000 views',
    earningsMin: 100,
    earningsMax: 10000,
    paymentMethods: ['Google AdSense', 'Direct Bank Wire'],
    difficulty: 'Advanced',
    timeToStart: '3–12 months',
    website: 'https://www.youtube.com/creators',
    websiteLabel: 'youtube.com/creators',
    tags: ['YouTube', 'AdSense', 'Video', 'Passive Income', 'Content Creation'],
    featured: true,
    steps: [
      {
        number: 1,
        title: 'Create & Optimize Your Channel',
        description:
          'Start a YouTube channel in a focused niche. Complete channel art, description, and links. Consistency in branding builds subscriber trust.',
      },
      {
        number: 2,
        title: 'Produce Consistent Content',
        description:
          'Upload at least 1–2 videos per week. Focus on searchable topics using YouTube\'s search suggest feature and tools like TubeBuddy.',
      },
      {
        number: 3,
        title: 'Reach the YPP Threshold',
        description:
          'You need 1,000 subscribers AND 4,000 public watch hours in the last 12 months (or 10M Shorts views) to apply for monetization.',
      },
      {
        number: 4,
        title: 'Link Google AdSense',
        description:
          'Apply for YouTube Partner Program. Once approved, link your AdSense account and enable ad formats on your videos.',
      },
      {
        number: 5,
        title: 'Diversify Revenue Streams',
        description:
          'Add memberships, Super Chats, sponsorships, and affiliate links. Top creators earn 5–10x their AdSense from these sources.',
      },
    ],
    requirements: [
      '1,000+ subscribers',
      '4,000+ public watch hours in past 12 months',
      'Google AdSense account',
      'Local bank account for payout',
      'No Community Guideline strikes',
    ],
    tips: [
      'Tutorials and "how-to" content in Sinhala is extremely underserved — massive opportunity.',
      'Optimize titles and thumbnails for click-through rate first, then retention.',
      'Longer videos (10+ minutes) allow more mid-roll ads — significantly higher RPM.',
      'Post consistently for at least 6 months before judging results.',
    ],
  },
  {
    id: 'facebook-monetization',
    title: 'Facebook Monetization',
    platform: 'Facebook',
    categorySlug: 'content-creation-social-media',
    categoryName: 'Content Creation & Social Media',
    description:
      'Facebook\'s Professional Mode and Creator monetization tools allow you to earn from in-stream ads on videos and Reels. With 5K+ followers and sufficient watch time, you can connect to Meta\'s payout system and receive direct bank payments.',
    earningsRange: '$50 – $500+ / month',
    earningsMin: 50,
    earningsMax: 2000,
    paymentMethods: ['Meta Payouts', 'Local Bank Transfer'],
    difficulty: 'Intermediate',
    timeToStart: '2–6 months',
    website: 'https://www.facebook.com/creator',
    websiteLabel: 'facebook.com/creator',
    tags: ['Facebook', 'Reels', 'In-Stream Ads', 'Content Creation'],
    steps: [
      {
        number: 1,
        title: 'Enable Professional Mode',
        description:
          'Switch your personal Facebook profile to Professional Mode or create a Page. This unlocks creator monetization features.',
      },
      {
        number: 2,
        title: 'Build Your Following',
        description:
          'Post engaging videos and Reels consistently. Use trending audio, local content, and educational topics to grow faster.',
      },
      {
        number: 3,
        title: 'Meet Monetization Requirements',
        description:
          'You need 5,000 followers AND 60,000 total minutes viewed in the last 60 days (for in-stream ads). Reels requirements may differ.',
      },
      {
        number: 4,
        title: 'Apply for In-Stream Ads',
        description:
          'Go to Creator Studio → Monetization → In-Stream Ads. Apply and wait for Meta\'s review (usually 1–2 weeks).',
      },
      {
        number: 5,
        title: 'Connect Bank Account & Earn',
        description:
          'Add your local bank account in Creator Studio. Payouts are processed monthly once your balance exceeds $100.',
      },
    ],
    requirements: [
      '5,000+ followers (for in-stream ads)',
      '60,000 minutes viewed in last 60 days',
      '3-minute+ video content',
      'Local bank account or Meta-supported payment method',
      'Compliance with Facebook\'s monetization policies',
    ],
    tips: [
      'Reels get massive organic reach — prioritize short, engaging clips.',
      'Consistent posting (daily if possible) dramatically accelerates growth.',
      'Local-language content in Sinhala attracts engaged, loyal audiences.',
      'Cross-promote your YouTube and Facebook channels for faster growth on both.',
    ],
  },
  {
    id: 'blogging',
    title: 'Blogging & AdSense',
    platform: 'WordPress / Blogger',
    categorySlug: 'content-creation-social-media',
    categoryName: 'Content Creation & Social Media',
    description:
      'Build a niche blog on WordPress.org or Blogger, grow organic traffic through SEO, and monetize with Google AdSense. A successful blog generates passive income 24/7. Long-form, SEO-optimized content is the key to sustainable traffic.',
    earningsRange: '$50 – $5,000+ / month',
    earningsMin: 50,
    earningsMax: 5000,
    paymentMethods: ['Google AdSense', 'Direct Bank Transfer'],
    difficulty: 'Intermediate',
    timeToStart: '1–6 months',
    website: 'https://wordpress.org',
    websiteLabel: 'wordpress.org',
    tags: ['Blogging', 'SEO', 'AdSense', 'Passive Income', 'Content'],
    steps: [
      {
        number: 1,
        title: 'Choose Your Niche & Domain',
        description:
          'Pick a focused niche with good search volume but manageable competition. Register a .com domain from Namecheap or GoDaddy.',
      },
      {
        number: 2,
        title: 'Set Up WordPress Hosting',
        description:
          'Purchase hosting from Hostinger or SiteGround. Install WordPress. Use a fast, minimal theme (Astra or GeneratePress).',
      },
      {
        number: 3,
        title: 'Create SEO-Optimized Content',
        description:
          'Research keywords using Google Search Console + Ubersuggest. Write comprehensive articles targeting long-tail keywords.',
      },
      {
        number: 4,
        title: 'Apply for Google AdSense',
        description:
          'Once you have 15–20 quality articles, apply for AdSense. Approval usually takes 1–2 weeks.',
      },
      {
        number: 5,
        title: 'Scale & Diversify',
        description:
          'Add affiliate links, sponsored posts, and digital products. These can 5x your income versus AdSense alone.',
      },
    ],
    requirements: [
      'Custom domain ($10–$15/year)',
      'Web hosting ($3–$10/month)',
      'Basic WordPress knowledge',
      'Writing skills and SEO basics',
      'Google AdSense account',
    ],
    tips: [
      'Target "informational" keywords — they rank faster and attract consistent traffic.',
      'Publish at least 2 articles per week for the first 6 months.',
      'Build backlinks by guest posting on related blogs in your niche.',
      'Page speed is critical — use LiteSpeed Cache or WP Rocket for optimization.',
    ],
  },

  // ── Category 4: Mobile Apps & App Development ────────────────────────
  {
    id: 'toloka-sweatcoin',
    title: 'Toloka & Sweatcoin',
    platform: 'Toloka / Sweatcoin',
    categorySlug: 'mobile-apps-development',
    categoryName: 'Mobile Apps & App Development',
    description:
      'Toloka by Yandex is a crowdsourcing platform for mobile micro-tasks like image labeling, geolocation verification, and content moderation. Sweatcoin rewards you with cryptocurrency for physical steps. Both are beginner-friendly apps.',
    earningsRange: '$0.05 – $5 / task',
    earningsMin: 0.05,
    earningsMax: 5,
    paymentMethods: ['Payoneer', 'Skrill', 'PayPal', 'Crypto'],
    difficulty: 'Beginner',
    timeToStart: 'Same day',
    website: 'https://toloka.ai',
    websiteLabel: 'toloka.ai',
    tags: ['Mobile', 'Micro-tasks', 'Walk to Earn', 'AI Training'],
    steps: [
      {
        number: 1,
        title: 'Download Toloka App',
        description:
          'Install the Toloka app from Google Play or App Store. Register with your email or Google account.',
      },
      {
        number: 2,
        title: 'Complete Onboarding Tasks',
        description:
          'Start with training tasks to understand the platform. Your initial accuracy score determines task availability.',
      },
      {
        number: 3,
        title: 'Complete Daily Tasks',
        description:
          'Accept available tasks — these include image classification, text validation, and geolocation checks. Complete as many as possible each day.',
      },
      {
        number: 4,
        title: 'Use Sweatcoin Simultaneously',
        description:
          'Install Sweatcoin and walk daily. Steps are converted to Sweatcoins redeemable for gift cards, crypto, or donations.',
      },
      {
        number: 5,
        title: 'Withdraw Your Earnings',
        description:
          'Toloka pays via Payoneer, Skrill, or PayPal once you reach the minimum balance. Sweatcoin rewards can be redeemed in-app.',
      },
    ],
    requirements: [
      'Android or iOS smartphone',
      'Stable internet connection',
      'Payoneer or Skrill account (for Toloka)',
      'Physical activity (for Sweatcoin)',
    ],
    tips: [
      'Complete Toloka tasks with high accuracy — your score gates premium task access.',
      'Combine Toloka with walking commutes to earn from both platforms simultaneously.',
      'Check the Toloka app multiple times daily as new high-reward tasks appear frequently.',
      'The Sweatcoin Premium plan increases the conversion rate for your steps.',
    ],
  },
  {
    id: 'google-admob',
    title: 'Google AdMob',
    platform: 'Google AdMob',
    categorySlug: 'mobile-apps-development',
    categoryName: 'Mobile Apps & App Development',
    description:
      'Google AdMob is the industry-leading mobile advertising platform. Build Android or iOS apps using Flutter or no-code tools like Kodular/Thunkable, integrate AdMob SDK, and earn revenue every time users view or click ads in your app.',
    earningsRange: '$100 – $5,000+ / month',
    earningsMin: 100,
    earningsMax: 5000,
    paymentMethods: ['Google AdSense', 'Bank Wire'],
    difficulty: 'Advanced',
    timeToStart: '14–30 days',
    website: 'https://admob.google.com',
    websiteLabel: 'admob.google.com',
    tags: ['Mobile Apps', 'Flutter', 'AdMob', 'Passive Income', 'App Development'],
    steps: [
      {
        number: 1,
        title: 'Choose Your App Building Tool',
        description:
          'Beginners: Use Kodular or Thunkable (no-code/low-code). Experienced developers: Use Flutter for higher-quality apps that scale better.',
      },
      {
        number: 2,
        title: 'Build a Useful App',
        description:
          'Create a utility, game, or educational app in a niche with high advertiser demand. Target audiences in high-CPM countries.',
      },
      {
        number: 3,
        title: 'Create & Configure AdMob Account',
        description:
          'Sign up at admob.google.com. Create your app listing and generate ad unit IDs for banner, interstitial, and rewarded ads.',
      },
      {
        number: 4,
        title: 'Integrate AdMob SDK',
        description:
          'Add the AdMob SDK to your app and place ad units in high-visibility, non-intrusive locations for the best user experience and earnings.',
      },
      {
        number: 5,
        title: 'Publish & Grow Downloads',
        description:
          'Publish to Google Play Store. Optimize your Play Store listing (ASO) to drive organic downloads. More users = more ad impressions = more revenue.',
      },
    ],
    requirements: [
      'Google Play Developer account ($25 one-time fee)',
      'App built with Flutter, Kodular, or any Android framework',
      'AdMob account linked to AdSense',
      'Basic programming or no-code tool knowledge',
    ],
    tips: [
      'Rewarded video ads have the highest RPM — implement them where they add value (e.g., "Watch ad to unlock feature").',
      'A single popular app can generate substantial passive income for years.',
      'Use AdMob mediation to serve ads from multiple networks and maximize fill rate.',
      'Target app ideas that solve real problems for a specific community.',
    ],
  },

  // ── Category 5: E-commerce & Affiliate ──────────────────────────────
  {
    id: 'shopify-daraz',
    title: 'Shopify & Daraz E-commerce',
    platform: 'Shopify / Daraz',
    categorySlug: 'ecommerce-affiliate',
    categoryName: 'E-commerce & Affiliate',
    description:
      'Launch an online store on Shopify for global markets or Daraz for the South Asian market. Sell physical products, digital downloads, or dropship items. With the right product selection and marketing, e-commerce can become a full-time business.',
    earningsRange: '$200 – $10,000+ / month',
    earningsMin: 200,
    earningsMax: 10000,
    paymentMethods: ['Stripe', 'PayHere', 'Bank Transfer', 'Payoneer'],
    difficulty: 'Advanced',
    timeToStart: '7–30 days',
    website: 'https://www.shopify.com',
    websiteLabel: 'shopify.com',
    tags: ['E-commerce', 'Dropshipping', 'Shopify', 'Daraz', 'Affiliate'],
    featured: true,
    steps: [
      {
        number: 1,
        title: 'Choose Your Business Model',
        description:
          'Decide: Dropshipping (no inventory), print-on-demand, digital products, or own products. Each has different startup costs and margins.',
      },
      {
        number: 2,
        title: 'Source Products',
        description:
          'For Shopify dropshipping, use DSers/AliExpress. For Daraz, source locally or from wholesale suppliers for competitive pricing.',
      },
      {
        number: 3,
        title: 'Build Your Store',
        description:
          'Create a Shopify store with a professional theme. For Daraz, set up a seller account and optimize your product listings with high-quality photos.',
      },
      {
        number: 4,
        title: 'Set Up Payments',
        description:
          'Shopify: Integrate Stripe or Payoneer. Daraz: Payments are handled via their platform — connect your bank account.',
      },
      {
        number: 5,
        title: 'Drive Traffic & Optimize',
        description:
          'Use Facebook/TikTok ads for Shopify. For Daraz, participate in platform promotions and optimize product SEO to improve rankings.',
      },
    ],
    requirements: [
      'Shopify subscription ($29+/month) or Daraz seller account (free)',
      'Product source or supplier',
      'Stripe or PayHere payment gateway',
      'Basic photography or product image editing skills',
    ],
    tips: [
      'Digital products (templates, courses, software) have 100% profit margins with no inventory.',
      'Start with Daraz if you want lower upfront costs and a familiar South Asian market.',
      'Product photography quality directly impacts conversion rates — invest in good visuals.',
      'Build an email list from day one — it\'s your most valuable long-term marketing asset.',
    ],
  },
];

export function getOpportunityById(id: string): Opportunity | undefined {
  return opportunities.find((o) => o.id === id);
}

export function getOpportunitiesByCategory(slug: string): Opportunity[] {
  return opportunities.filter((o) => o.categorySlug === slug);
}

export function getFeaturedOpportunities(): Opportunity[] {
  return opportunities.filter((o) => o.featured);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export function searchOpportunities(query: string): Opportunity[] {
  const q = query.toLowerCase();
  return opportunities.filter(
    (o) =>
      o.title.toLowerCase().includes(q) ||
      o.description.toLowerCase().includes(q) ||
      o.tags.some((t) => t.toLowerCase().includes(q)) ||
      o.categoryName.toLowerCase().includes(q)
  );
}
