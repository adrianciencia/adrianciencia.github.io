<script>
  export let cols = {
    sm: 1,   // Small screens (default: 1 column)
    md: 2,   // Medium screens (default: 2 columns)
    lg: 3,   // Large screens (default: 3 columns)
    xl: 4    // Extra large screens (default: 4 columns)
  };
  
  export let gap = "4"; // Gap size (using Tailwind's spacing scale)
  export let className = "";
  
  // Compute the Tailwind classes based on props
  const gridClass = `grid gap-${gap} grid-cols-${cols.sm} md:grid-cols-${cols.md} lg:grid-cols-${cols.lg} xl:grid-cols-${cols.xl} ${className}`;
</script>

<div class={gridClass}>
  <slot />
</div>