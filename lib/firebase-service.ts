import { db } from './firebase';
import { 
  collection, 
  doc, 
  setDoc, 
  addDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy,
  updateDoc,
  deleteDoc,
  Timestamp,
  serverTimestamp
} from 'firebase/firestore';
import { v4 as uuidv4 } from 'uuid';

// Collection names
const BOOKINGS_COLLECTION = 'bookings';
const USERS_COLLECTION = 'users';
const TESTIMONIALS_COLLECTION = 'testimonials';
const SERVICES_COLLECTION = 'services';
const CONTACTS_COLLECTION = 'contacts';
const PRODUCTS_COLLECTION = 'products';
const ORDERS_COLLECTION = 'orders';

// Save a new booking
export const saveBooking = async (bookingData: any) => {
  try {
    const bookingRef = await addDoc(collection(db, BOOKINGS_COLLECTION), {
      ...bookingData,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'pending'
    });
    return { id: bookingRef.id, ...bookingData };
  } catch (error) {
    console.error("Error saving booking: ", error);
    throw error;
  }
};

// Get all bookings
export const getAllBookings = async () => {
  try {
    const bookingsQuery = query(collection(db, BOOKINGS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(bookingsQuery);
    const bookings: any[] = [];
    
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    
    return bookings;
  } catch (error) {
    console.error("Error getting bookings: ", error);
    throw error;
  }
};

// Get bookings by user ID
export const getBookingsByUser = async (userId: string) => {
  try {
    const bookingsQuery = query(
      collection(db, BOOKINGS_COLLECTION), 
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(bookingsQuery);
    const bookings: any[] = [];
    
    querySnapshot.forEach((doc) => {
      bookings.push({ id: doc.id, ...doc.data() });
    });
    
    return bookings;
  } catch (error) {
    console.error("Error getting user bookings: ", error);
    throw error;
  }
};

// Save user data
export const saveUser = async (userData: any) => {
  try {
    if (!userData.id) {
      throw new Error("User ID is required");
    }
    
    // Check if the document already exists
    const userDoc = await getDoc(doc(db, USERS_COLLECTION, userData.id));
    
    // Prepare user data with timestamps
    const userDataWithTimestamps = {
      ...userData,
      updatedAt: serverTimestamp()
    };
    
    // If user doesn't exist, add created timestamp
    if (!userDoc.exists()) {
      userDataWithTimestamps.createdAt = serverTimestamp();
    }
    
    // Use setDoc with merge option to update or create
    await setDoc(doc(db, USERS_COLLECTION, userData.id), userDataWithTimestamps, { merge: true });
    
    return userData;
  } catch (error) {
    console.error("Error saving user: ", error);
    throw error;
  }
};

// Get user by ID
export const getUserById = async (userId: string) => {
  try {
    const userDoc = await getDoc(doc(db, USERS_COLLECTION, userId));
    if (userDoc.exists()) {
      return { id: userDoc.id, ...userDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting user: ", error);
    throw error;
  }
};

// Save a testimonial
export const saveTestimonial = async (testimonialData: any) => {
  try {
    const testimonialRef = await addDoc(collection(db, TESTIMONIALS_COLLECTION), {
      ...testimonialData,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      approved: false
    });
    return { id: testimonialRef.id, ...testimonialData };
  } catch (error) {
    console.error("Error saving testimonial: ", error);
    throw error;
  }
};

// Get all approved testimonials
export const getApprovedTestimonials = async () => {
  try {
    const testimonialsQuery = query(
      collection(db, TESTIMONIALS_COLLECTION), 
      where('approved', '==', true),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(testimonialsQuery);
    const testimonials: any[] = [];
    
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() });
    });
    
    return testimonials;
  } catch (error) {
    console.error("Error getting testimonials: ", error);
    throw error;
  }
};

// Save contact form submission
export const saveContact = async (contactData: any) => {
  try {
    const contactRef = await addDoc(collection(db, CONTACTS_COLLECTION), {
      ...contactData,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      status: 'new'
    });
    return { id: contactRef.id, ...contactData };
  } catch (error) {
    console.error("Error saving contact: ", error);
    throw error;
  }
};

// Save service data
export const saveService = async (serviceData: any) => {
  try {
    if (serviceData.id) {
      // Update existing service
      await updateDoc(doc(db, SERVICES_COLLECTION, serviceData.id), {
        ...serviceData,
        updatedAt: serverTimestamp()
      });
      return serviceData;
    } else {
      // Add new service
      const serviceRef = await addDoc(collection(db, SERVICES_COLLECTION), {
        ...serviceData,
        id: uuidv4(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { id: serviceRef.id, ...serviceData };
    }
  } catch (error) {
    console.error("Error saving service: ", error);
    throw error;
  }
};

// Get all services
export const getAllServices = async () => {
  try {
    const servicesQuery = query(collection(db, SERVICES_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(servicesQuery);
    const services: any[] = [];
    
    querySnapshot.forEach((doc) => {
      services.push({ id: doc.id, ...doc.data() });
    });
    
    return services;
  } catch (error) {
    console.error("Error getting services: ", error);
    throw error;
  }
};

// Update user data
export const updateUser = async (userId: string, userData: any) => {
  try {
    const userRef = doc(db, USERS_COLLECTION, userId);
    await updateDoc(userRef, {
      ...userData,
      updatedAt: serverTimestamp()
    });
    return { id: userId, ...userData };
  } catch (error) {
    console.error("Error updating user: ", error);
    throw error;
  }
};

// SEO Functions

// Save or update SEO settings
export const saveSeoSettings = async (pageId: string, seoData: any) => {
  try {
    const seoRef = doc(db, 'seo', pageId);
    await setDoc(seoRef, {
      ...seoData,
      updatedAt: serverTimestamp()
    }, { merge: true });
    return { id: pageId, ...seoData };
  } catch (error) {
    console.error("Error saving SEO settings: ", error);
    throw error;
  }
};

// Get SEO settings for a page
export const getSeoSettings = async (pageId: string) => {
  try {
    const seoDoc = await getDoc(doc(db, 'seo', pageId));
    if (seoDoc.exists()) {
      return { id: seoDoc.id, ...seoDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting SEO settings: ", error);
    throw error;
  }
};

// Get all SEO settings
export const getAllSeoSettings = async () => {
  try {
    const seoCollection = collection(db, 'seo');
    const seoSnapshot = await getDocs(seoCollection);
    return seoSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Array<{
      id: string;
      title: string;
      description: string;
      keywords: string;
      ogImage?: string;
      pageTitle?: string;
      pageName?: string;
    }>;
  } catch (error) {
    console.error("Error getting all SEO settings: ", error);
    throw error;
  }
};

// Ecommerce Functions

// Get all products
export const getAllProducts = async () => {
  try {
    const productsQuery = query(collection(db, PRODUCTS_COLLECTION), orderBy('createdAt', 'desc'));
    const querySnapshot = await getDocs(productsQuery);
    const products: any[] = [];
    
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    
    return products;
  } catch (error) {
    console.error("Error getting products: ", error);
    throw error;
  }
};

// Get product by ID
export const getProductById = async (productId: string) => {
  try {
    const productDoc = await getDoc(doc(db, PRODUCTS_COLLECTION, productId));
    if (productDoc.exists()) {
      return { id: productDoc.id, ...productDoc.data() };
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error getting product: ", error);
    throw error;
  }
};

// Save a product
export const saveProduct = async (productData: any) => {
  try {
    if (productData.id) {
      // Update existing product
      await updateDoc(doc(db, PRODUCTS_COLLECTION, productData.id), {
        ...productData,
        updatedAt: serverTimestamp()
      });
      return productData;
    } else {
      // Add new product
      const productRef = await addDoc(collection(db, PRODUCTS_COLLECTION), {
        ...productData,
        id: uuidv4(),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      });
      return { id: productRef.id, ...productData };
    }
  } catch (error) {
    console.error("Error saving product: ", error);
    throw error;
  }
};

// Create a new order
export const createOrder = async (orderData: any) => {
  try {
    const orderRef = await addDoc(collection(db, ORDERS_COLLECTION), {
      ...orderData,
      id: uuidv4(),
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      status: 'pending'
    });
    return { id: orderRef.id, ...orderData };
  } catch (error) {
    console.error("Error creating order: ", error);
    throw error;
  }
};

// Get orders by user ID
export const getOrdersByUser = async (userId: string) => {
  try {
    const ordersQuery = query(
      collection(db, ORDERS_COLLECTION), 
      where('userId', '==', userId),
      orderBy('createdAt', 'desc')
    );
    const querySnapshot = await getDocs(ordersQuery);
    const orders: any[] = [];
    
    querySnapshot.forEach((doc) => {
      orders.push({ id: doc.id, ...doc.data() });
    });
    
    return orders;
  } catch (error) {
    console.error("Error getting user orders: ", error);
    throw error;
  }
};

// Update order status
export const updateOrderStatus = async (orderId: string, status: string) => {
  try {
    const orderRef = doc(db, ORDERS_COLLECTION, orderId);
    await updateDoc(orderRef, {
      status,
      updatedAt: serverTimestamp()
    });
    return { id: orderId, status };
  } catch (error) {
    console.error("Error updating order status: ", error);
    throw error;
  }
}; 