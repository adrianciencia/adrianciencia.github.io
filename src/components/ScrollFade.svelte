<script>
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