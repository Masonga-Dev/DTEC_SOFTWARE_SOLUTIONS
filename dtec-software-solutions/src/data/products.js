// Centralized product catalog with stable slugs for routing
export const products = [
  {
    slug: 'dtec-crm',
    name: 'CRM',
    img: 'https://images.unsplash.com/photo-1753351055117-f24d8baa682e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031',
    desc: `CRM
Empower your sales and support teams with a powerful CRM designed for growing businesses.
Track leads, manage clients, and build stronger customer relationships through data-driven insights.
Simplify workflows and enhance collaboration across your organization.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-hrm',
    name: 'HRM',
    img: 'https://plus.unsplash.com/premium_photo-1661501701943-bc3742c01830?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    desc: `👥 HRM

A modern HRM solution that simplifies employee management, payroll, and performance tracking.
Empower HR teams with automation, self-service portals, and insightful analytics.
Enhance workplace efficiency and employee satisfaction with ease.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-analytics',
    name: 'Analytics',
    img: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032',
    desc: `📊 Analytics

Transform raw data into powerful insights with our intuitive analytics platform.
Track KPIs, visualize performance trends, and make smarter business decisions.
Drive growth with real-time dashboards and predictive analytics.`,
    demoUrl: 'https://www.tableau.com/',
  },
  {
    slug: 'dtec-pos',
    name: 'POS',
    img: 'https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    desc: ` POS

Streamline in-store and online transactions with our cloud-synced POS system.
Manage inventory, track sales, and access reports anytime, anywhere.
Built for retail success with reliability, speed, and insight at every checkout.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-erp',
    name: 'ERP',
    img: 'https://plus.unsplash.com/premium_photo-1726743809701-67e8600f7670?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    desc: `⚙️ Enterprise Resource Planning

Unify operations across departments with an integrated ERP solution for SMBs.
Manage finance, supply chain, HR, and production from a single platform.
Enhance efficiency, reduce costs, and scale with confidence.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-ecommerce',
    name: 'E‑Commerce',
    img: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    desc: `E-Commerce

Our E-Commerce solution empowers businesses to build scalable online stores with secure payment integration and real-time logistics tracking. Designed for growth, it ensures a seamless shopping experience from browsing to delivery. Simplify operations and maximize sales with powerful automation and analytics.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-chatbot',
    name: 'Chatbot',
    img: 'https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032',
    desc: `Deliver instant support and engagement with an intelligent AI chatbot.
Automate customer service, lead capture, and personalized recommendations.
Enhance satisfaction and reduce response times effortlessly.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-helpdesk',
    name: 'Helpdesk',
    img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80',
    desc: `Centralize all support requests with our smart helpdesk solution.
Prioritize, assign, and resolve tickets faster with real-time updates and automation.
Deliver exceptional customer service through efficiency and transparency.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-finance',
    name: 'Finance',
    img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    desc: `💰 Finance

Simplify your financial operations with automated accounting and invoicing tools.
Gain clarity on cash flow, expenses, and reports with intuitive dashboards.
Stay compliant and make informed financial decisions with confidence.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-inventory',
    name: 'Inventory',
    img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80',
    desc: `📦 Inventory

Track inventory in real time and never miss a restock again.
Monitor product performance, receive alerts, and manage multiple locations seamlessly.
Optimize supply chain operations with intelligent insights and automation.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-booking',
    name: 'Booking',
    img: 'https://images.unsplash.com/photo-1653213096328-9482182f9f80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    desc: `📅 Booking

Simplify service scheduling with an online appointment management platform.
Enable customers to book anytime, anywhere, with automated reminders.
Ideal for salons, healthcare, and service-based businesses.`,
    demoUrl: null,
  },
  {
    slug: 'dtec-cms',
    name: 'CMS',
    img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    desc: `📰 CMS — Headless Content Management

Create, manage, and deliver content seamlessly across platforms.
Empower your marketing and development teams with a headless CMS built for speed.
Flexible, scalable, and designed for modern digital experiences.`,
    demoUrl: null,
  },
];

export const productBySlug = new Map(products.map((p) => [p.slug, p]));


