// Static Mock Data for all Landing website, Dashboards, and Mobile pages

export const websiteData = {
  solutions: [
    {
      id: "cb7",
      title: "Core Banking CB7",
      description: "CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.",
      category: "Core"
    },
    {
      id: "db7",
      title: "Digital Banking N7",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients succeed.",
      category: "Core"
    },
    {
      id: "open",
      title: "Open Banking",
      description: "Our API banking helps you to gain actionable insights, enable account aggregation, streamline customer onboarding, KYC, and payment initiation, offer predictive budgeting tools, and introduce enhanced credit scoring.",
      category: "API"
    },
    {
      id: "los",
      title: "Loan Origination System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
      category: "NBFC"
    },
    {
      id: "lms",
      title: "Loan Management System",
      description: "N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients.",
      category: "NBFC"
    },
    {
      id: "dt",
      title: "Digital Transformation",
      description: "Transform your legacy architecture into modern, scalable banking systems with high efficiency, streamlined modules, automated accounting, and custom integrations.",
      category: "Consulting"
    }
  ],
  brands: ["SHELLS", "SmartFinder", "Zoomerr", "ArtVenue", "kontrastr", "WAVESMARATHON"],
  insights: [
    {
      id: 1,
      category: "GETTING STARTED",
      title: "How to transition from a traditional to a digital bank",
      author: "David Grohl",
      date: "17/06/24",
      excerpt: "Moving from branch-heavy architecture to a digital-first model requires careful alignment of strategy, engineering, and customer workflows."
    },
    {
      id: 2,
      category: "GETTING STARTED",
      title: "Why security by design is essential in cloud core banking",
      author: "David Grohl",
      date: "17/06/24",
      excerpt: "Building software that integrates regulatory requirements directly in the code structure."
    },
    {
      id: 3,
      category: "GETTING STARTED",
      title: "Streamlining loan workflows with modern APIs",
      author: "David Grohl",
      date: "17/06/24",
      excerpt: "API integrations can cut down loan decision cycles from 15 days to under 3 minutes."
    }
  ],
  caseStudies: [
    {
      id: "cs-1",
      category: "GETTING STARTED",
      title: "How we help brand reach out to more people",
      client: "Zoomerr",
      description: "Deploying a digital-only banking wallet app reduced user acquisition costs by 45% and drove massive engagement across younger demographics."
    },
    {
      id: "cs-2",
      category: "NBFC ORIGINATION",
      title: "Automating loan origination for millions",
      client: "SmartFinder",
      description: "By embedding the N7 Loan Origination System, SmartFinder processed over 150k credit checks daily without manual delays."
    }
  ]
};

export const mobileData = {
  user: {
    name: "Toni Kross",
    email: "tonikross@gmail.com",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=100&h=100", // placeholder avatar of someone smiling
    balance: 42295.00,
    statsBalance: 8295.00,
    cards: [
      {
        provider: "PayPal",
        number: "•••• •••• •••• 5789",
        expiry: "09/24",
        balance: 42295.00,
        gradient: "from-blue-900 via-indigo-900 to-slate-900"
      },
      {
        provider: "Visa Black",
        number: "•••• •••• •••• 1024",
        expiry: "12/28",
        balance: 12450.00,
        gradient: "from-purple-900 via-violet-950 to-neutral-900"
      }
    ]
  },
  transactions: [
    {
      id: "t1",
      name: "Dropbox Plan",
      type: "Subscription",
      date: "18 Sept 2019",
      amount: -144.00,
      iconType: "dropbox"
    },
    {
      id: "t2",
      name: "Spotify Subscr.",
      type: "Subscription",
      date: "12 Sept 2019",
      amount: -24.00,
      iconType: "spotify"
    },
    {
      id: "t3",
      name: "Youtube Ads.",
      type: "Income",
      date: "10 Sept 2019",
      amount: 32.00,
      iconType: "youtube"
    },
    {
      id: "t4",
      name: "Freelance Work",
      type: "Income",
      date: "06 Sept 2019",
      amount: 421.00,
      iconType: "work"
    }
  ],
  recentActivity: [
    {
      id: "ra1",
      name: "To Jin - Work",
      date: "12 jun 2022",
      amount: -59.00,
      type: "outgoing"
    },
    {
      id: "ra2",
      name: "From Google - Salary",
      date: "10 jun 2022",
      amount: 859.00,
      type: "incoming"
    },
    {
      id: "ra3",
      name: "To David - Work",
      date: "7 jun 2022",
      amount: -479.00,
      type: "outgoing"
    },
    {
      id: "ra4",
      name: "From Google - Bonus",
      date: "10 jun 2022",
      amount: 859.00,
      type: "incoming"
    }
  ],
  statsChart: [
    { name: "Jan", Spend: 210, Income: 350 },
    { name: "Feb", Spend: 340, Income: 400 },
    { name: "Mar", Spend: 453, Income: 453 }, // Highlighted in design
    { name: "Apr", Spend: 180, Income: 380 },
    { name: "May", Spend: 290, Income: 410 },
    { name: "Jun", Spend: 230, Income: 500 }
  ]
};

export const amlData = {
  summary: {
    strCount: 450,
    pendingDays: 3
  },
  pieChart: [
    { name: "Reason 1", value: 70, fill: "#10b981" },
    { name: "Reason 2", value: 25, fill: "#1e3a8a" },
    { name: "Reason 3", value: 125, fill: "#fbbf24" },
    { name: "Other Suspicions", value: 230, fill: "#ec4899" }
  ],
  barChart: [
    { date: "5 Nov 2021", cleared: 320, reported: 198 },
    { date: "6 Nov 2021", cleared: 520, reported: 240 },
    { date: "7 Nov 2021", cleared: 210, reported: 460 },
    { date: "8 Nov 2021", cleared: 240, reported: 150 },
    { date: "9 Nov 2021", cleared: 380, reported: 480 }
  ],
  reports: [
    { id: "225", branch: "Branch 1", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "70", amount: "70", type: "70", account: "70", customer: "70" },
    { id: "180", branch: "Branch 3", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "160", amount: "160", type: "160", account: "160", customer: "160" },
    { id: "205", branch: "Branch 4", identifiedDate: "02-01-2022", transactionDate: "27-12-2021", mode: "65", amount: "65", type: "65", account: "65", customer: "65" },
    { id: "199", branch: "Branch 5", identifiedDate: "02-01-2022", transactionDate: "28-12-2021", mode: "152", amount: "152", type: "152", account: "152", customer: "152" },
    { id: "057", branch: "Branch 6", identifiedDate: "02-01-2022", transactionDate: "28-12-2021", mode: "152", amount: "65", type: "160", account: "65", customer: "65" },
    { id: "145", branch: "Branch 7", identifiedDate: "02-01-2022", transactionDate: "29-12-2021", mode: "152", amount: "65", type: "160", account: "65", customer: "65" }
  ]
};

export const ckycData = {
  summary: {
    totalCustomer: 2115,
    inProgress: 940,
    kycCompleted: 1050,
    failedRecords: 22
  },
  branchesTable: [
    { branch: "Branch 1", total: 225, inProgress: 125, completed: 75, pending: 25 },
    { branch: "Branch 2", total: 200, inProgress: 22, completed: 150, pending: 150 },
    { branch: "Branch 3", total: 180, inProgress: 40, completed: 160, pending: 160 },
    { branch: "Branch 4", total: 205, inProgress: 16, completed: 65, pending: 65 },
    { branch: "Branch 5", total: 110, inProgress: 16, completed: 65, pending: 65 },
    { branch: "Branch 6", total: 152, inProgress: 16, completed: 65, pending: 65 },
    { branch: "Branch 7", total: 214, inProgress: 16, completed: 65, pending: 65 }
  ],
  periodicChart: [
    { name: "BR 1", pass: 170, failed: 12, total: 225 },
    { name: "BR 2", pass: 160, failed: 15, total: 200 },
    { name: "BR 3", pass: 130, failed: 35, total: 180 },
    { name: "BR 4", pass: 180, failed: 8, total: 205 },
    { name: "BR 5", pass: 90, failed: 10, total: 110 },
    { name: "BR 6", pass: 120, failed: 18, total: 152 }
  ],
  failedRecords: [
    {
      id: "0076541",
      name: "Ajaye Krishna",
      branchNo: "02",
      branchName: "Chandini Chowk",
      reasons: [
        "Aadhar Number not matching",
        "PAN No. missing"
      ]
    },
    {
      id: "0098423",
      name: "Raghu Nandan",
      branchNo: "02",
      branchName: "Chandini Chowk",
      reasons: [
        "Signature mismatch in identity scan",
        "Utility bill proof older than 3 months"
      ]
    },
    {
      id: "0098424",
      name: "Sanjay Singhania",
      branchNo: "02",
      branchName: "Chandini Chowk",
      reasons: [
        "Incorrect DOB compared to passport record",
        "Missing photograph verification"
      ]
    },
    {
      id: "0098425",
      name: "Priyanka Sharma",
      branchNo: "02",
      branchName: "Chandini Chowk",
      reasons: [
        "Permanent Address validation failed",
        "Missing self-declaration form"
      ]
    }
  ]
};

export const weeklyData = {
  account: {
    cardHolder: "Mike Smith",
    cardNumber: "5789 **** **** 2847",
    expiry: "06/21",
    balance: 2850.75,
    income: 1500.50,
    outcome: 350.60,
    limit: 4000.00
  },
  goals: [
    { id: "g1", title: "Holidays", target: 550, date: "12/20/20", icon: "mountain" },
    { id: "g2", title: "Renovation", target: 200, date: "12/20/20", icon: "brush" },
    { id: "g3", title: "Xbox", target: 820, date: "12/20/20", icon: "gamepad" }
  ],
  outcomeStats: {
    shopping: 52,
    electronics: 21,
    travels: 74
  },
  history: [
    { receiver: "Tesco Market", type: "Shopping", date: "13 Dec 2020", amount: 75.67 },
    { receiver: "ElectroMen Market", type: "Shopping", date: "14 Dec 2020", amount: 250.00 },
    { receiver: "Fiorgio Restaurant", type: "Food", date: "07 Dec 2020", amount: 19.50 },
    { receiver: "John Mathew Kc", type: "Transfer", date: "05 Dec 2020", amount: 120.00 },
    { receiver: "Ann Marlin", type: "Transfer", date: "02 Dec 2020", amount: 80.00 }
  ],
  quickContacts: [
    { name: "John", initials: "JM", avatarColor: "bg-blue-500" },
    { name: "Ann", initials: "AM", avatarColor: "bg-pink-500" },
    { name: "David", initials: "DK", avatarColor: "bg-purple-500" },
    { name: "Jin", initials: "JY", avatarColor: "bg-teal-500" },
    { name: "Barly", initials: "BV", avatarColor: "bg-orange-500" }
  ]
};
