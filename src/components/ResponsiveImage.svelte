<script>
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
        const imgSrc = src.replace(/\.(jpg|jpeg|png|gif)$/, `-${width}w.$1`);
        return `${imgSrc} ${width}w`;
      })
      .join(", ");
  };
  
  const srcset = generateSrcSet();
</script>

<img 
  {src}
  {alt}
  {srcset}
  {sizes}
  {loading}
  class={className}
/>