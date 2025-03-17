<script>
    import { onMount } from 'svelte';
  
    let fadeClass = '';
  
    onMount(() => {
      const handleScroll = () => {
        const scrollPos = window.scrollY;
        fadeClass = scrollPos > 50 ? 'opacity-0' : 'opacity-100';
      };
  
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    });
  </script>
  
  <div class="transition-opacity duration-500 {fadeClass}">
    <slot />
  </div>