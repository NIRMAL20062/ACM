
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


      function startPledge() {
        const pledgeContent = document.getElementById('pledgeContent');
        const pledgeText = "I commit to making a positive impact in my community and the world. I will strive to be a responsible citizen, support those in need, and promote kindness and understanding among all.";
        
        pledgeContent.style.display = 'block'; // Show the paragraph
        pledgeContent.innerHTML = ''; // Clear previous content
      
        let words = pledgeText.split(' ');
        let index = 0;
      
        function displayNextWord() {
          if (index < words.length) {
            pledgeContent.innerHTML += words[index] + ' ';
            index++;
            setTimeout(displayNextWord, 300); // Adjust the speed of word appearance
          }
        }
      
        displayNextWord(); // Start displaying words
      }