<script>
  /**
   * ResponsiveImage Component
   * 
   * A Svelte component for optimized responsive images with srcset support.
   * Helps improve performance by loading appropriately sized images based on viewport.
   * 
   * Features:
   * - Generates srcset for responsive image loading
   * - Configurable image widths for different viewport sizes
   * - Customizable loading behavior (lazy, eager)
   * - Support for CSS classes
   * 
   * @prop {string} src - The source URL of the image
   * @prop {string} alt - Alt text for accessibility
   * @prop {string} sizes - The sizes attribute for responsive images
   * @prop {number[]} widths - Array of widths to generate srcset
   * @prop {string} loading - Image loading strategy ('lazy' or 'eager')
   * @prop {string} className - Additional CSS classes
   */
  
  export let src;
  export let alt = "";
  export let sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw";
  export let widths = [320, 640, 960, 1280];
  export let loading = "lazy";
  export let className = "";
  
  // Generate srcset
  const generateSrcSet = () => {
    return widths
      .map(width => {
        // This assumes you have a way to get different sized images
        // You might need to adjust this based on your image handling
        const resizedSrc = src.replace(/\.(jpg|jpeg|png|webp)/, `_${width}.$1`);
        return `${resizedSrc} ${width}w`;
      })
      .join(", ");
  };
  
  const srcset = generateSrcSet();
</script>

<img 
  src={src} 
  {alt} 
  {srcset} 
  {sizes} 
  {loading} 
  class={className} 
/>