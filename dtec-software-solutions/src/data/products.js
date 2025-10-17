// Centralized product catalog with stable slugs for routing
export const products = [
  { slug: 'dtec-crm', name: 'DTEC CRM', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80', desc: 'Customer Relationship Management tool for growing businesses.', demoUrl: null },
  { slug: 'dtec-hrm', name: 'DTEC HRM', img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80', desc: 'Human Resource Management solution for modern teams.', demoUrl: null },
  { slug: 'dtec-analytics', name: 'DTEC Analytics', img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80', desc: 'Business analytics platform for actionable insights.', demoUrl: 'https://www.tableau.com/' },
  { slug: 'dtec-pos', name: 'DTEC POS', img: 'https://images.unsplash.com/photo-1515165562835-c3b8c8b4ea0f?auto=format&fit=crop&w=800&q=80', desc: 'Point of Sale system with cloud sync and inventory tracking.', demoUrl: null },
  { slug: 'dtec-erp', name: 'DTEC ERP', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80', desc: 'End-to-end enterprise resource planning for SMBs.', demoUrl: null },
  { slug: 'dtec-ecommerce', name: 'DTEC E‑Commerce', img: 'https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=800&q=80', desc: 'Scalable online store with integrated payments and logistics.' },
  { slug: 'dtec-chatbot', name: 'DTEC Chatbot', img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80', desc: 'AI-powered customer support and lead generation chatbot.', demoUrl: null },
  { slug: 'dtec-helpdesk', name: 'DTEC Helpdesk', img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80', desc: 'Ticketing system to streamline support operations.', demoUrl: null },
  { slug: 'dtec-finance', name: 'DTEC Finance', img: 'https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=800&q=80', desc: 'Accounting, invoicing, and financial reporting made simple.', demoUrl: null },
  { slug: 'dtec-inventory', name: 'DTEC Inventory', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80', desc: 'Real-time stock management with alerts and analytics.', demoUrl: null },
  { slug: 'dtec-booking', name: 'DTEC Booking', img: 'https://images.unsplash.com/photo-1522120692213-5c2f5a1b87f1?auto=format&fit=crop&w=800&q=80', desc: 'Scheduling and appointment platform for services businesses.', demoUrl: null },
  { slug: 'dtec-cms', name: 'DTEC CMS', img: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80', desc: 'Headless content management system for modern sites.', demoUrl: null },
];

export const productBySlug = new Map(products.map(p => [p.slug, p]));


