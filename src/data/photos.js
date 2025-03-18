/**
 * @typedef {{
 *  slug: string;
 *  src: string;
 *  alt: string;
 *  caption: string;
 *  date: string;
 *  location: string;
 *  category: string;
 *  featured?: boolean;
 *  equipment?: string;
 *  exposure?: string;
 *  description?: string;
 * }} Photo
 */

/** @type {Photo[]} */
export const allPhotos = [
  {
    slug: "spiral-galaxy-m51",
    src: "/photography/galaxy1.jpg",
    alt: "Spiral Galaxy",
    caption: "Spiral Galaxy M51",
    date: "June 2023",
    location: "Atacama Desert, Chile",
    category: "birds",
    featured: true,
    equipment: "Celestron EdgeHD 1100, ZWO ASI2600MM Pro",
    exposure: "48 x 10 minutes (8 hours total)",
    description: "Also known as the Whirlpool Galaxy..."
  },
  {
    slug: "orion-nebula",
    src: "/photography/DSC01337.jpg",
    alt: "Orion Nebula",
    caption: "Orion Nebula",
    date: "January 2023",
    location: "La Palma, Spain",
    category: "primates",
    equipment: "Takahashi FSQ-106ED, Sony A7III (modified)",
    exposure: "32 x 5 minutes (2.7 hours total)",
    description: "The Orion Nebula (M42)..."
  },
  {
    slug: "giraffe",
    src: "/photography/DSC01552.JPG",
    alt: "Giraffe",
    caption: "Giraffe",
    date: "January 2023",
    location: "La Palma, Spain",
    category: "mammals",
    equipment: "Takahashi FSQ-106ED, Sony A7III (modified)",
    exposure: "32 x 5 minutes (2.7 hours total)",
    description: "The giraffe is a large genus of African equid..."
  },
  {
    slug: "giraffe",
    src: "/photography/DSC01731.jpg",
    alt: "Zuricatas",
    caption: "Giraffe",
    date: "January 2023",
    location: "La Palma, Spain",
    category: "mammals",
    equipment: "Takahashi FSQ-106ED, Sony A7III (modified)",
    exposure: "32 x 5 minutes (2.7 hours total)",
    description: "The giraffe is a large genus of African equid..."
  },
  
];

export const formatCategory = (cat) => 
  cat.charAt(0).toUpperCase() + cat.slice(1);

// Add data helpers
/** 
 * @param {string} category 
 * @returns {Photo[]}
 */
export const getCategoryPhotos = (category) =>
  allPhotos.filter(p => p.category === category);

/**
 * @param {string} slug
 * @returns {Photo | undefined}
 */
export const getPhotoBySlug = (slug) => 
  allPhotos.find(p => p.slug === slug);

export const getFeaturedPhotos = () => 
  allPhotos.filter(p => p.featured);