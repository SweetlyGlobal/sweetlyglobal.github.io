// This is the for the script code for the windows install code -->

    // Register the service worker
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(function(registration) {
           // alert('Service Worker registered with scope:'+ registration.scope);
          console.log('Service Worker registered with scope:', registration.scope);
        })
        .catch(function(error) {
          console.log('Service Worker registration failed:', error);
        });
    }

    // Handle the install prompt
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show your "Install" button if it exists
    const installBtn = document.getElementById('installButton');
    if (installBtn) {
        installBtn.style.display = 'block';
    }
    });

    const installBtn = document.getElementById('installButton');
    if (installBtn) {
        installBtn.addEventListener('click', () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
                console.log('User accepted install');
            } else {
                console.log('User dismissed install');
            }
            deferredPrompt = null;
            });
        }
        });
    }
 

//<!-- JavaScript for Burger Menu Toggle -->


    function toggleMenu() {
        const navbar = document.querySelector('.navbar'); // Get navbar
        const burger = document.querySelector('.burger'); // Get burger

        // Toggle classes to open/close
        navbar.classList.toggle('active');
        burger.classList.toggle('open');
    }
