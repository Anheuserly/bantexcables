import { databases, DATABASE_ID, COLLECTIONS } from '../appwrite/appwriteConfig';

export const getAllProducts = async () => {
  try {
    const res = await databases.listDocuments(DATABASE_ID, COLLECTIONS.PRODUCTS);
    return res.documents;
  } catch (error) {
    console.error('Failed to fetch products:', error);
    return [];
  }
};