import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

// Define Photo type for easier reference throughout the codebase
export type Photo = CollectionEntry<'photography'>;

/**
 * Formats a category string for display
 * @param cat - The category string to format
 * @returns Formatted category with first letter capitalized
 */
// Example of a proper formatCategory function
export function formatCategory(category: string): string {
  if (!category) return '';
  return category
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Retrieves all photos from the photography collection
 * @returns Promise containing array of all photos
 */
export const getAllPhotos = async (): Promise<Photo[]> => {
  return await getCollection('photography');
};

/**
 * Filters photos by a specific category
 * @param category - The category to filter by
 * @returns Promise containing filtered array of photos
 */
export const getCategoryPhotos = async (category: string): Promise<Photo[]> => {
  const photos = await getAllPhotos();
  return photos.filter(photo => photo.data.category === category);
};

/**
 * Gets featured photos for homepage and featured sections
 * @returns Promise containing array of featured photos
 */
export const getFeaturedPhotos = async (): Promise<Photo[]> => {
  const photos = await getAllPhotos();
  
  // Find photos explicitly marked as featured
  const featured = photos.filter(photo => photo.data.featured === true);
  
  // Fallback: If no photos are explicitly marked as featured, return the first 3
  if (featured.length === 0) {
    console.log("No featured photos found, returning first 3 photos");
    return photos.slice(0, 3);
  }
  
  return featured;
};

/**
 * Finds a specific photo by its slug
 * @param slug - The unique identifier for the photo
 * @returns Promise containing the matching photo or undefined if not found
 */
export const getPhotoBySlug = async (slug: string): Promise<Photo | undefined> => {
  const photos = await getAllPhotos();
  return photos.find(photo => photo.id === slug);
};

/**
 * Retrieves related photos based on an array of slugs
 * @param slugs - Array of photo slugs to retrieve
 * @returns Promise containing array of related photos
 */
export const getRelatedPhotos = async (slugs: string[]): Promise<Photo[]> => {
  if (!slugs || slugs.length === 0) return [];
  
  const photos = await getAllPhotos();
  return photos.filter(photo => slugs.includes(photo.id));
};