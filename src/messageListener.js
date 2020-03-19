export const customEvents = {};

window.addEventListener('message', event => {
  if (event.data.xkitEvent !== undefined) {
    const x = event.data.xkitEvent;
    if (Object.keys(customEvents).includes(x)) {
      customEvents[x]();
    }
  }
});
