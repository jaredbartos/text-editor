const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
let deferredPrompt;
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
  if (!deferredPrompt) {
    return;
  }

  const result = await deferredPrompt.prompt();
  console.log(`Install Prompt was ${result.outcome}`);
  deferredPrompt = null;
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
  event.preventDefault();
  console.log('Thank you for installing our app!');
});
