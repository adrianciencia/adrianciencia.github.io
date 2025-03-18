<script>
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
  aria-label="Scroll to top"
  class={`fixed bottom-6 right-6 p-3 rounded-full bg-blue-500 text-white shadow-lg transition-opacity duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
  on:click={scrollToTop}
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
  </svg>
</button>