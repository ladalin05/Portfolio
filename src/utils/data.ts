


export const projects = [
  {
    id: 1,
    title: 'POS Management System',
    category: 'Retail & commerce',
    subcategory: 'Point of sale',
    desc: 'A fast and reliable point-of-sale system built for retail businesses handling sales, inventory tracking, receipts, and daily reports in one seamless interface.',
    highlights: [
      'Built a real-time inventory synchronization system',
      'Implemented role-based access control for admin and cashier accounts',
      'Created sales analytics dashboards with daily and monthly reporting',
      'Optimized checkout workflow for faster transaction processing'
    ],
    gitUrl: [
      {title: "POS System", url: "https://github.com/ladalin05/POS-System"},
    ],
    role: 'Solo Full Stack Developer',
    year: '2025',
    techs: ['Laravel', 'CSS', 'jQuery', 'MySQL'],
    imgs: [
      "https://market-resized.envatousercontent.com/previews/files/808863747/02_screen.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a27f2193740b672b475cf3c83dc0a1ea4b138ced0a1cfe54cc7d8a0001534171",
      "https://market-resized.envatousercontent.com/previews/files/808863747/02_screen.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a27f2193740b672b475cf3c83dc0a1ea4b138ced0a1cfe54cc7d8a0001534171",
      "https://market-resized.envatousercontent.com/previews/files/808863747/02_screen.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a27f2193740b672b475cf3c83dc0a1ea4b138ced0a1cfe54cc7d8a0001534171"
    ],
    featured: true,
  },

  {
    id: 2,
    title: 'Pureclean Laundry',
    category: 'Web App',
    subcategory: 'Laundry Loyalty Web App',
    desc: 'A mobile-first loyalty web app for Pureclean Laundry — customers can track wash stamps, redeem free washes, present their personal QR code at checkout, and manage their profile all from their mobile browser.',
    overview: `Pureclean Laundry is a mobile-first web application built to modernize the customer experience for a local laundry service. Instead of paper stamp cards and manual tracking, customers can now manage everything digitally through their phone browser no app download required.
      The core feature is a digital loyalty card system where each wash is recorded and stamped automatically. Once a customer completes 10 washes, they unlock a free wash reward simple, transparent, and satisfying to watch fill up. Every registered user gets their own unique QR code that they simply show to the staff at the counter to log their visit and track their progress.
      On the rewards side, users can view their full redemption history and see exactly where they stand with their loyalty progress. The profile section lets users update their information, switch between languages, and toggle dark mode small touches that make the experience feel polished and personal.
      The app was designed with a clean, minimal UI and smooth bottom navigation to feel native-like on mobile, even though it runs entirely in the browser. Built with Nuxt on the frontend and Laravel powering the backend API, the system is fast, reliable, and easy to scale as the business grows.`,
    highlights: [
      'Built loyalty card system with stamp tracking (Complete 10 Washes, Get 1 Free)',
      'Generated personal QR codes for customers to present at merchant point-of-sale',
      'Implemented reward history tracking and redemption flow',
      'Designed mobile-first responsive UI with bottom navigation (Home, QR, Rewards, Profile)',
      'Added multi-language support and dark mode toggle in user settings',
    ],
    role: 'Frontend Developer',
    year: '2025',
    techs: ['Nuxt', 'Tailwind CSS', 'JQuery'],
    gitUrl: [
      { title: 'Web App', url: 'https://github.com/ladalin05/PureClean-UserLoyalty' },
    ],
    imgs: [
      "../assets/images/pureclean/home.png",
      "../assets/images/pureclean/login.png",
      "../assets/images/pureclean/profile.png",
    ],
    featured: false,
  },

  {
    id: 3,
    title: 'D2D Laundry',
    category: 'Laundry service',
    subcategory: 'Door-to-door laundry app',
    desc: 'Door-to-door laundry app where users request pickup, track order status in real time, and receive clothes delivered back home.',
    highlights: [
      'Implemented real-time order tracking for customers',
      'Built pickup and delivery scheduling functionality',
      'Created responsive customer and driver interfaces',
      'Integrated REST APIs for seamless frontend-backend communication'
    ],
    gitUrl: [
      {title: "Admin-Front-End", url: "https://github.com/mengly-uch-cadt/Bird-Laundry-Admin-Frontend"},
      {title: "Back-End", url: "https://github.com/mengly-uch-cadt/Bird-Laundry-Admin-Backend"},
      {title: "Delivery-Front-End", url: "https://github.com/mengly-uch-cadt/Bird-Laundry-Delivery"},
    ],
    role: 'Frontend & Backend Developer',
    year: '2024',
    techs: ['React', 'Nuxt', 'Nodejs', 'MySQL', 'Tailwind CSS'],
    imgs: [
      "https://market-resized.envatousercontent.com/previews/files/808863747/02_screen.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a27f2193740b672b475cf3c83dc0a1ea4b138ced0a1cfe54cc7d8a0001534171"
    ],
    featured: false,
  },

  {
    id: 4,
    title: 'Real Estate',
    category: 'Property',
    subcategory: 'Property listing platform',
    desc: 'Property listing platform where buyers and renters browse listings, view details, filter by location or price, and connect with agents.',
    highlights: [
      'Developed advanced property search and filtering system',
      'Built responsive property detail and gallery pages',
      'Implemented agent contact and inquiry features',
      'Optimized database queries for faster listing performance'
    ],
    gitUrl: [
      {title: "Front-End", url: "https://github.com/ladalin05/RealEstate"},
      {title: "Back-End", url: "https://github.com/ladalin05/RealEstate-Backend"},
    ],
    role: 'Full Stack Developer',
    year: '2024',
    techs: ['React', 'Laravel', 'JQuery', 'MySQL'],
    imgs: [
      "https://market-resized.envatousercontent.com/previews/files/808863747/02_screen.jpg?w=590&h=300&cf_fit=crop&crop=top&format=auto&q=85&s=a27f2193740b672b475cf3c83dc0a1ea4b138ced0a1cfe54cc7d8a0001534171"
    ],
    featured: false,
  },
]