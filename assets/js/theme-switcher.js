// Theme switching functionality
(function() {
  // Theme options
  const themeOptions = {
    light: 'light',
    dark: 'dark',
    auto: 'auto'
  };
  
  // Set theme
  function setTheme(themeName) {
    // Save to local storage
    localStorage.setItem('theme', themeName);
    
    // Apply theme
    applyTheme(themeName);
    
    // Update active theme visual display
    updateActiveTheme(themeName);

    // Update theme dropdown button display
    updateDropdownButton(themeName);
  }
  
  // Apply theme
  function applyTheme(themeName) {
    // If auto theme, determine light or dark based on system preference
    if (themeName === themeOptions.auto) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.body.setAttribute('data-theme', prefersDarkScheme ? themeOptions.dark : themeOptions.light);
    } else {
      document.body.setAttribute('data-theme', themeName);
    }
  }
  
  // Update theme dropdown button display
  function updateDropdownButton(themeName) {
    // Get icon and display name
    let icon = '🔆';
    let name = 'Light';
    
    if (themeName === themeOptions.dark) {
      icon = '🌙';
      name = 'Dark';
    } else if (themeName === themeOptions.auto) {
      icon = '🔄';
      name = 'Auto';
    }
    
    // Update button content
    const buttonIcon = document.querySelector('.theme-dropdown-btn .theme-icon');
    const buttonName = document.querySelector('.theme-dropdown-btn .theme-name');
    
    if (buttonIcon) buttonIcon.textContent = icon;
    if (buttonName) buttonName.textContent = name;
  }
  
  // Update active theme visual display
  function updateActiveTheme(themeName) {
    // Remove all active classes
    document.querySelectorAll('.theme-dropdown-item').forEach(option => {
      option.classList.remove('active');
    });
    
    // Add active class to current theme
    const activeOption = document.querySelector(`.theme-dropdown-item[data-theme="${themeName}"]`);
    if (activeOption) {
      activeOption.classList.add('active');
    }
  }
  
  // Initialize theme
  function initTheme() {
    // Check if theme is already set in local storage
    const savedTheme = localStorage.getItem('theme') || themeOptions.light;
    setTheme(savedTheme);
    
    // Listen for system theme changes (only effective in auto mode)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === themeOptions.auto) {
        applyTheme(themeOptions.auto);
      }
    });
    
    // Toggle dropdown menu display
    const themeButton = document.querySelector('.theme-dropdown-btn');
    if (themeButton) {
      themeButton.addEventListener('click', function(e) {
        e.stopPropagation();
        document.querySelector('.theme-dropdown-content').classList.toggle('show');
      });
    }
    
    // Close dropdown menu when clicking outside
    window.addEventListener('click', function() {
      document.querySelector('.theme-dropdown-content').classList.remove('show');
    });
    
    // Add event listeners for theme options
    document.querySelectorAll('.theme-dropdown-item').forEach(option => {
      option.addEventListener('click', function(e) {
        e.stopPropagation();
        const theme = this.getAttribute('data-theme');
        setTheme(theme);
        document.querySelector('.theme-dropdown-content').classList.remove('show');
      });
    });
  }
  
  // Execute initialization after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})(); 