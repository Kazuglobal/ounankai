// EmailJS Configuration
// デモ用設定 - 実際の運用時は実際のEmailJS認証情報に置き換えてください

export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_ounankai_demo', // EmailJS Service ID
  TEMPLATE_ID: 'template_contact_form', // EmailJS Template ID  
  PUBLIC_KEY: 'demo_public_key_placeholder', // EmailJS Public Key
};

// Email Template Variables (for reference when setting up the template):
// {{to_email}} - ounankai@gmail.com
// {{from_name}} - Contact form name
// {{from_email}} - Contact form email
// {{phone}} - Contact form phone
// {{graduation_year}} - Contact form graduation year
// {{subject}} - Contact form subject
// {{category}} - Contact form category
// {{message}} - Contact form message