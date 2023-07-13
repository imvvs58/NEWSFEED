
function loadSavedNews() {
    window.location.href = 'https://www.inshorts.com/en/read/national';
  }

  function loadNewNews() {
    window.location.href = 'https://www.inshorts.com/en/read/world';
  }

  function highlightButton(button) {
    var buttons = document.querySelectorAll('.nav-links ul li a');

    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });

    button.classList.add('active');
  }