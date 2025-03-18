<script>
  import { onMount } from 'svelte';
  
  let darkMode = false;
  let animating = false;
  
  onMount(() => {
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    darkMode = savedTheme === 'dark' || (!savedTheme && prefersDark);
    updateTheme();
  });
  
  function toggleDarkMode() {
    if (animating) return;
    
    animating = true;
    darkMode = !darkMode;
    
    // Add animation class
    document.documentElement.classList.add('theme-transition');
    
    // Update theme after a small delay to allow animation
    setTimeout(() => {
      updateTheme();
      
      // Remove animation class after transition completes
      setTimeout(() => {
        document.documentElement.classList.remove('theme-transition');
        animating = false;
      }, 300);
    }, 50);
  }
  
  function updateTheme() {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
</script>

<style>
  .toggle-button {
    position: relative;
    width: 40px;
    height: 24px;
    border-radius: 12px;
    background-color: var(--toggle-bg, #e8e8ed);
    transition: background-color 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;
    box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  }
  
  .toggle-button.dark {
    --toggle-bg: #424245;
  }
  
  .toggle-thumb {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
  }
  
  .toggle-button.dark .toggle-thumb {
    transform: translateX(16px);
  }
  
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 12px;
    color: #ffcc00;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .icon.sun {
    opacity: var(--sun-opacity, 0);
  }
  
  .icon.moon {
    opacity: var(--moon-opacity, 0);
  }
  
  .toggle-button:not(.dark) {
    --sun-opacity: 0.7;
  }
  
  .toggle-button.dark {
    --moon-opacity: 0.7;
  }
  
  /* Add focus styles for accessibility */
  .toggle-button:focus-visible {
    outline: 2px solid #0071e3;
    outline-offset: 2px;
  }
  
  :global(.theme-transition) {
    transition: background-color 0.3s ease, color 0.3s ease !important;
  }
</style>

<button 
  aria-label="Toggle dark mode"
  class="toggle-button {darkMode ? 'dark' : ''}"
  on:click={toggleDarkMode}
>
  <span class="toggle-thumb">
    <svg class="icon sun" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10zm0 2a7 7 0 1 1 0-14 7 7 0 0 1 0 14zM12 5a1 1 0 0 1-1-1V2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm0 19a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1zm7-10a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2h-2zM3 12a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2H3z"/>
    </svg>
    <svg class="icon moon" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"/>
    </svg>
  </span>
</button>