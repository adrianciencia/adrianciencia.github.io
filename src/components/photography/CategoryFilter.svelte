<script>
  // Define props
  export let categories = [];
  export let currentCategory = '';
  
  // Function to handle category selection
  function selectCategory(category) {
    // Create a custom event that will bubble up
    const event = new CustomEvent('categorySelect', {
      detail: { category },
      bubbles: true
    });
    
    // Dispatch the event
    document.dispatchEvent(event);
  }
</script>

<div class="flex flex-wrap gap-2 justify-center">
  <button 
    class="category-button px-4 py-2 rounded-full text-sm {!currentCategory ? 'active-category' : ''}"
    data-category=""
    on:click|preventDefault={() => selectCategory('')}
  >
    All
  </button>
  
  {#each categories as category}
    <button 
      class="category-button px-4 py-2 rounded-full text-sm {category === currentCategory ? 'active-category' : ''}"
      data-category={category}
      on:click|preventDefault={() => selectCategory(category)}
    >
      {category}
    </button>
  {/each}
</div>