<script>
    import { onMount } from 'svelte';
  
    let isDark = false;
  
    onMount(() => {
      isDark = document.documentElement.classList.contains('dark');
    });
  
    function toggleTheme() {
      isDark = !isDark;
      if (isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  </script>
  
  <button 
    on:click={toggleTheme} 
    class="p-2 rounded border border-gray-300 dark:border-gray-700"
  >
    {#if isDark}
      Light Mode
    {:else}
      Dark Mode
    {/if}
  </button>