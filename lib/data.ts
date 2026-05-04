export const personalInfo = {
  name: "Julian Saputro",
  title: "Backend Developer",
  subtitle: "API Engineer · Microservices Specialist",
  intro:
    "Building scalable backend systems, robust APIs, and high-performance microservices with a focus on reliability, performance, and clean architecture.",
  location: "Yogyakarta, Indonesia",
  education: "D3 Informatics Management",
  experience: "3+ Years",
  currentRole: "Backend Developer @ AssistX Enterprise",
  email: "juliansa9158@gmail.com",
  phone: "0895363055386",
  linkedin: "https://www.linkedin.com/in/julian-saputro-b12373290",
};

export const techStack = {
  Backend: [
    { name: "Golang", icon: "🐹", level: 90 },
    { name: "Python", icon: "🐍", level: 85 },
    { name: "PHP", icon: "🐘", level: 88 },
    { name: "Laravel", icon: "🔴", level: 87 },
    { name: "Gin", icon: "⚡", level: 85 },
    { name: "FastAPI", icon: "🚀", level: 82 },
    { name: "Flask", icon: "🌶️", level: 80 },
  ],
  Frontend: [
    { name: "React", icon: "⚛️", level: 75 },
    { name: "Next.js", icon: "▲", level: 72 },
    { name: "TypeScript", icon: "🔷", level: 74 },
  ],
  Database: [
    { name: "PostgreSQL", icon: "🐘", level: 88 },
    { name: "MongoDB", icon: "🍃", level: 85 },
    { name: "MySQL", icon: "🐬", level: 87 },
    { name: "SQLite", icon: "💾", level: 82 },
  ],
  Tools: [
    { name: "Linux", icon: "🐧", level: 88 },
    { name: "Docker", icon: "🐳", level: 80 },
    { name: "Redis", icon: "🔴", level: 83 },
    { name: "AWS S3", icon: "☁️", level: 76 },
  ],
};

export const experience = [
  {
    company: "AssistX Enterprise",
    role: "Backend Developer",
    period: "2021 — Present",
    duration: "3+ Years",
    description:
      "Engineered and maintained mission-critical backend systems, high-throughput APIs, and distributed microservices for enterprise clients including BRI and BCA. Designed scalable architectures for video streaming platforms, CCTV monitoring systems, and high-volume data pipelines. Applied Agile methodologies throughout the software development lifecycle.",
    highlights: [
      "Architected microservices handling 10M+ records",
      "Built live streaming infrastructure for CCTV systems",
      "Delivered enterprise video-on-demand platforms",
      "Designed scalable API gateways",
    ],
    tech: ["Golang", "PHP", "Python", "Laravel", "MySQL", "MongoDB", "Redis"],
  },
];

export const projects = [
  {
    id: 1,
    title: "Live Streaming Core",
    subtitle: "CCTV Monitoring System",
    description:
      "Engineered a high-performance live CCTV streaming infrastructure with video compression pipelines and secure RTSP stream distribution over VPN for internal monitoring dashboards.",
    tech: ["Python", "MediaMTX", "RTSP", "SQLite", "VPN"],
    highlights: [
      "Video compression optimization",
      "Low latency streaming",
      "Secure VPN distribution",
      "Real-time monitoring",
    ],
    gradient: "from-blue-600/20 to-cyan-600/20",
    accent: "#3B82F6",
    icon: "📡",
  },
  {
    id: 2,
    title: "Admin Dashboard BRI CRM",
    subtitle: "CCTV ATM Monitoring",
    description:
      "Designed and delivered a centralized admin dashboard for real-time ATM CCTV monitoring across BRI's network, featuring notification systems, device management, and role-based access control.",
    tech: ["Laravel", "PHP", "MySQL"],
    highlights: [
      "Real-time CCTV monitoring",
      "Smart notification systems",
      "Role-based access control",
      "Device lifecycle management",
    ],
    gradient: "from-purple-600/20 to-pink-600/20",
    accent: "#8B5CF6",
    icon: "🏦",
  },
  {
    id: 3,
    title: "Video on Demand Platform",
    subtitle: "BCA Internal Enterprise",
    description:
      "Built a secure internal video-on-demand platform for BCA — similar to YouTube — enabling centralized video distribution with SSO authentication, content management, and commenting systems.",
    tech: ["PHP", "MySQL", "AWS S3", "jQuery"],
    highlights: [
      "Video upload & streaming",
      "SSO authentication",
      "Content management system",
      "Comments & role management",
    ],
    gradient: "from-emerald-600/20 to-teal-600/20",
    accent: "#10B981",
    icon: "🎬",
  },
  {
    id: 4,
    title: "High-Volume Data Export",
    subtitle: "Microservice Scheduler",
    description:
      "Architected a distributed microservice capable of exporting 10M+ records with zero downtime using parallel processing, Redis-backed retry mechanisms, and memory-optimized streaming.",
    tech: ["Golang", "Redis", "MongoDB"],
    highlights: [
      "10M+ records export pipeline",
      "Parallel processing engine",
      "Retry mechanisms with backoff",
      "Memory-optimized streaming",
    ],
    gradient: "from-orange-600/20 to-red-600/20",
    accent: "#F97316",
    icon: "⚡",
  },
];
