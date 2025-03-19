export interface Photo {
  slug: string;
  src: string;
  alt: string;
  caption: string;
  title?: string;
  date: string;
  location: string;
  category: string;
  featured?: boolean;
  equipment?: string;
  exposure?: string;
  description?: string;
  related?: string[];
  processing?: string;
}

export const allPhotos: Photo[] = [
  {
    slug: "spiral-galaxy-m51",
    src: "/photography/galaxy1.jpg",
    alt: "Spiral Galaxy M51 in visible spectrum", 
    title: "Spiral Galaxy M51",
    caption: "Spiral Galaxy M51",
    date: "June 2023",
    location: "Atacama Desert, Chile",
    category: "birds",
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
    slug: "zuricatas2",
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
  {
    slug: "bumblebee",
    src: "/photography/DSC02783.jpg",
    alt: "Bumblebee",
    caption: "Abeja grande",
    date: "January 2023",
    location: "La Palma, Spain",
    category: "insects",
    equipment: "Takahashi FSQ-106ED, Sony A7III (modified)",
    exposure: "32 x 5 minutes (2.7 hours total)",
    description: "The giraffe is a large genus of African equid..."
  },
  
];

export const getCategoryPhotos = (category: string): Photo[] =>
  allPhotos.filter(p => p.category === category);

export const formatCategory = (cat: string): string => 
  cat.charAt(0).toUpperCase() + cat.slice(1);

export const getPhotoBySlug = (slug: string): Photo | undefined => 
  allPhotos.find(p => p.slug === slug);

export const getFeaturedPhotos = (): Photo[] => 
  allPhotos.filter(p => p.featured);