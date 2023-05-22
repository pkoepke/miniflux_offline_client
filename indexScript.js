if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("serviceworker.js").then(
    (registration) => {
      console.log("Service worker registration succeeded:", registration);
      registration.update(); // Go ahead and update the SW every time while testing.
    },
    (error) => {
      console.error(`Service worker registration failed: ${error}`);
    }
  );
} else {
  console.error("Service workers are not supported.");
}
