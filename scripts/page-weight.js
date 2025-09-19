window.addEventListener('load', () => {
  setTimeout(() => {
    let totalBytes = 0;
    const resources = performance.getEntriesByType('resource');
    resources.forEach(res => {
      totalBytes += res.transferSize || 0;
    });
    const kb = Math.round(totalBytes / 1024);
    
    const ENERGY_PER_GB = 0.81; // kWh/GB
    const GRID_CARBON_DENSITY = 442 // gCO₂/kWh
    const BYTES_PER_GB = 1024 ** 3;
    const gramsCO2 = totalBytes * (ENERGY_PER_GB * GRID_CARBON_DENSITY / BYTES_PER_GB);
    
    const navEntry = performance.getEntriesByType("navigation");
    const loadTime = (navEntry[0].loadEventEnd - navEntry[0].startTime);
    
    const el = document.getElementById('page-weight');
    if (el) el.textContent = `🌱 Every click has a footprint: ~${(gramsCO2 * 1000 * 1000).toFixed(0)}µg CO₂`;
  }, 1);
});