// Centralized product catalog with stable slugs for routing
export const products = [
  { slug: 'dtec-crm', name: 'CRM', img: 'https://images.unsplash.com/photo-1753351055117-f24d8baa682e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031', desc: 'Customer Relationship Management tool for growing businesses.', demoUrl: null },
  { slug: 'dtec-hrm', name: 'HRM', img: 'https://plus.unsplash.com/premium_photo-1661501701943-bc3742c01830?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', desc: 'Human Resource Management solution for modern teams.', demoUrl: null },
  { slug: 'dtec-analytics', name: 'Analytics', img: 'https://images.unsplash.com/photo-1758691736545-5c33b6255dca?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', desc: 'Business analytics platform for actionable insights.', demoUrl: 'https://www.tableau.com/' },
  { slug: 'dtec-pos', name: 'POS', img: 'https://plus.unsplash.com/premium_photo-1683288706548-e8b6bb72fe86?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774', desc: 'Point of Sale system with cloud sync and inventory tracking.', demoUrl: null },
  { slug: 'dtec-erp', name: 'ERP', img: 'https://plus.unsplash.com/premium_photo-1726743809701-67e8600f7670?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', desc: 'End-to-end enterprise resource planning for SMBs.', demoUrl: null },
  { slug: 'dtec-ecommerce', name: 'E‑Commerce', img: 'https://images.unsplash.com/photo-1688561808434-886a6dd97b8c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', desc: 'Scalable online store with integrated payments and logistics.' },
  { slug: 'dtec-chatbot', name: 'Chatbot', img: 'https://plus.unsplash.com/premium_photo-1677094310919-d0361465d3be?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032', desc: 'AI-powered customer support and lead generation chatbot.', demoUrl: null },
  { slug: 'dtec-helpdesk', name: 'Helpdesk', img: 'https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=800&q=80', desc: 'Ticketing system to streamline support operations.', demoUrl: null },
  { slug: 'dtec-finance', name: 'Finance', img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', desc: 'Accounting, invoicing, and financial reporting made simple.', demoUrl: null },
  { slug: 'dtec-inventory', name: 'Inventory', img: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80', desc: 'Real-time stock management with alerts and analytics.', demoUrl: null },
  { slug: 'dtec-booking', name: 'Booking', img: 'https://images.unsplash.com/photo-1653213096328-9482182f9f80?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870', desc: 'Scheduling and appointment platform for services businesses.', demoUrl: null },
  { slug: 'dtec-cms', name: 'CMS', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80', desc: 'Headless content management system for modern sites.', demoUrl: null },
];

export const productBySlug = new Map(products.map(p => [p.slug, p]));


