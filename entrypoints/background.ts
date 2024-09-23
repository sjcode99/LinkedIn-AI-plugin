export default defineBackground(() => {
  // console.log('Hello background!', { id: browser.runtime.id });  
  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {    
    if (message.action === 'show_popup' || message.action === 'manual_activation') {
      browser.action.openPopup();
    }
  })
});
