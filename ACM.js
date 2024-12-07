
  window.onscroll = function() {
    var scrollTop = document.documentElement.scrollTop;
    var scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrollPercent = (scrollTop / scrollHeight) * 100;
    document.querySelector('.progress-bar').style.width = scrollPercent + '%';
  };

  document.addEventListener('DOMContentLoaded', function() {
      const cardGrid = document.querySelector('.card-grid');
  
      function adjustCardGrid() {
        const viewportWidth = window.innerWidth;
        const cards = document.querySelectorAll('.card');
  
        // Adjust the number of columns based on viewport width
        if (viewportWidth < 600) {
          cardGrid.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 column
        } else if (viewportWidth < 900) {
          cardGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns
        } else {
          cardGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))'; // Default
        }
      }
  
      // Initial adjustment
      adjustCardGrid();
  
      // Add event listener for window resize
      window.addEventListener('resize', adjustCardGrid);
    });

    document.addEventListener('DOMContentLoaded', function() {
        const cardGrid = document.querySelector('.card-grid');
    
        function adjustCardGrid() {
          const viewportWidth = window.innerWidth;
          const cards = document.querySelectorAll('.card');
    
          // Adjust the number of columns based on viewport width
          if (viewportWidth < 600) {
            cardGrid.style.gridTemplateColumns = 'repeat(1, 1fr)'; // 1 column
          } else if (viewportWidth < 900) {
            cardGrid.style.gridTemplateColumns = 'repeat(2, 1fr)'; // 2 columns
          } else {
            cardGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))'; // Default
          }
        }
    
        // Initial adjustment
        adjustCardGrid();
    
        // Add event listener for window resize
        window.addEventListener('resize', adjustCardGrid);
      });