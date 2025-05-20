// Theme switching functionality
(function() {
  // Theme options
  const themeOptions = {
    light: 'light',
    dark: 'dark',
    auto: 'auto'
  };
  
  // Theme icons
  const themeIcons = {
    light: '☀️',
    dark: '🌙',
    auto: '🔄'
  };
  
  // Set theme
  function setTheme(themeName) {
    // Save to local storage
    localStorage.setItem('theme', themeName);
    
    // Apply theme
    applyTheme(themeName);
    
    // Update dropdown button icon and text
    updateDropdownButton(themeName);
  }
  
  // Apply theme
  function applyTheme(themeName) {
    // If auto theme, determine light or dark based on system preference
    let actualTheme = themeName;
    if (themeName === themeOptions.auto) {
      const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
      actualTheme = prefersDarkScheme ? themeOptions.dark : themeOptions.light;
      document.body.setAttribute('data-theme', actualTheme);
    } else {
      document.body.setAttribute('data-theme', themeName);
    }

    // Special handling for navbar
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      // Keep navbar's original color
      navbar.style.backgroundColor = '';
    }
    
    // Check if on About page
    const isAboutPage = document.body.classList.contains('td-about');
    if (isAboutPage) {
      // Keep original colors on About page (except footer)
      document.querySelectorAll('.td-about *:not(.td-footer):not(.td-footer *)').forEach(element => {
        element.style.backgroundColor = '';
        element.style.color = '';
      });
    }
    
    // Ensure specific elements on home page have correct colors
    if (document.body.classList.contains('td-home')) {
      if (actualTheme === themeOptions.dark) {
        // In dark mode, ensure home page background is specified dark gray-blue
        document.querySelectorAll('.td-home .td-box').forEach(box => {
          box.style.backgroundColor = '#36454F';
          box.style.color = '#ffffff';
        });
      } else {
        // In light mode, restore original colors
        document.querySelectorAll('.td-home .td-box').forEach(box => {
          box.style.backgroundColor = '';
          box.style.color = '';
        });
      }
    }
    
    // Ensure code blocks have correct styles
    if (actualTheme === themeOptions.dark) {
      document.querySelectorAll('pre, code, .highlight, .chroma').forEach(codeBlock => {
        codeBlock.style.backgroundColor = 'var(--code-bg-color)';
        codeBlock.style.color = 'var(--code-text-color)';
        codeBlock.style.textShadow = 'none';
      });
    } else {
      document.querySelectorAll('pre, code, .highlight, .chroma').forEach(codeBlock => {
        codeBlock.style.backgroundColor = '';
        codeBlock.style.color = '';
        codeBlock.style.textShadow = '';
      });
    }
  }
  
  // Update dropdown button
  function updateDropdownButton(themeName) {
    const dropdownBtn = document.querySelector('.theme-dropdown-btn');
    if (dropdownBtn) {
      // Update icon and text
      const themeIcon = themeIcons[themeName] || themeIcons.light;
      const themeText = getThemeLabel(themeName);
      dropdownBtn.innerHTML = `${themeIcon} <span class="theme-name">${themeText}</span>`;
      
      // Set active item
      document.querySelectorAll('.theme-dropdown-item').forEach(item => {
        if (item.getAttribute('data-theme') === themeName) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
    }
  }
  
  // Get theme name label
  function getThemeLabel(themeName) {
    switch(themeName) {
      case themeOptions.light:
        return 'Light';
      case themeOptions.dark:
        return 'Dark';
      case themeOptions.auto:
        return 'Auto';
      default:
        return 'Light';
    }
  }
  
  // Initialize dropdown menu
  function initDropdown() {
    const dropdownContainer = document.querySelector('.theme-dropdown');
    const dropdownButton = document.querySelector('.theme-dropdown-btn');
    const dropdownContent = document.querySelector('.theme-dropdown-content');

    // Toggle dropdown menu display when button is clicked
    if (dropdownButton && dropdownContent) {
      dropdownButton.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('show');
      });
      
      // Close dropdown menu when clicking outside
      document.addEventListener('click', function() {
        dropdownContent.classList.remove('show');
      });
      
      // Prevent menu from closing when clicking menu items
      dropdownContent.addEventListener('click', function(e) {
        e.stopPropagation();
      });
    }
    
    // Add event listeners for dropdown menu items
    document.querySelectorAll('.theme-dropdown-item').forEach(item => {
      item.addEventListener('click', function() {
        const theme = this.getAttribute('data-theme');
        setTheme(theme);
        dropdownContent.classList.remove('show');
      });
    });
  }
  
  // Initialize theme
  function initTheme() {
    // Check if theme is already set in local storage
    const savedTheme = localStorage.getItem('theme') || themeOptions.light;
    setTheme(savedTheme);
    
    // Initialize dropdown menu
    initDropdown();
    
    // Listen for system theme changes (only effective in auto mode)
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      if (localStorage.getItem('theme') === themeOptions.auto) {
        applyTheme(themeOptions.auto);
      }
    });
  }
  
  // Execute initialization after DOM is loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTheme);
  } else {
    initTheme();
  }
})(); 