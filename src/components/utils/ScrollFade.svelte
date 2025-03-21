<script>
  /**
   * ScrollFade Component
   * 
   * A Svelte component that fades out content as the user scrolls down the page.
   * Useful for creating subtle scroll-based animations and transitions.
   * 
   * Features:
   * - Customizable fade threshold based on scroll position
   * - Adjustable transition duration
   * - Smooth opacity transitions
   * 
   * @prop {number} threshold - Scroll position in pixels when fade begins (default: 50)
   * @prop {number} duration - Transition duration in milliseconds (default: 500)
   */
  import { onMount } from 'svelte';
  
  export let threshold = 50; // Customizable threshold
  export let duration = 500; // Customizable duration
    
  let fadeClass = '';
  
  onMount(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      fadeClass = scrollPos > threshold ? 'opacity-0' : 'opacity-100';
    };
  
    // Initial check
    handleScroll();
      
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>
  
<div class="transition-opacity duration-{duration} {fadeClass}">
  <slot />
</div>