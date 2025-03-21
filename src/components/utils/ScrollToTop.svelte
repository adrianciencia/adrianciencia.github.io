<script>
  /**
   * ScrollToTop Component
   * 
   * A floating button that appears when scrolling down the page,
   * allowing users to quickly return to the top with one click.
   * 
   * Features:
   * - Appears after scrolling past a threshold
   * - Smooth animation when appearing/disappearing
   * - Accessible button with aria-label
   * - Smooth scroll behavior when clicked
   * 
   * This component improves user experience on long pages by providing
   * an easy way to return to the top without manual scrolling.
   */
  import { onMount } from 'svelte';
  
  let visible = false;
  
  onMount(() => {
    const handleScroll = () => {
      visible = window.scrollY > 300;
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
  
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
</script>

<button
  class="fixed bottom-6 right-6 bg-[var(--apple-blue)] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 {visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}"
  on:click={scrollToTop}
  aria-label="Scroll to top"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>