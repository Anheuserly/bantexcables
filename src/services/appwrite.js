import { Client, Databases, Storage, Query } from 'appwrite';

const client = new Client();

client
  .setEndpoint('https://fra.cloud.appwrite.io/v1')
  .setProject('685d6a0e0033b2451ea4');

// Exported Appwrite SDK interfaces
export const databases = new Databases(client);
export const storage = new Storage(client);

// Main Database ID
export const DATABASE_ID = '685d713c002931f114a0';

// Collection IDs (replace with your actual collection IDs if different)
export const COLLECTIONS = {
  PRODUCTS: '685d733d000b85d804db',
  CATEGORIES: '685d734f003a7f8150e5',
  INQUIRIES: '685d7362000808016911',
  SERVICES: '685d73760019931223bf',
  TESTIMONIALS: '685d738500106e9693c3',
  BANNERS: '685d7393002c17181b48',
  CLIENTS: '685d73a100043870a095',
  PROJECTS: '685d73dc0033e1f7b1a9',
  TEAM: '685d73e8002bb93b6110',
  DOWNLOADS: '685d74020019357e6fe1',
  FAQS: '685d741200186406630f',
  SETTINGS: '685d743800006327638c',
  INSTAGRAM: '684e72a900338c273bb0', // already present
};

export { Query };
export default client;
