 
  const siteImages = document.getElementsByTagName('img');
  
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log(request, sender, sendResponse);
  
    if (request.task === 'changeImages') {
      for (let i = 0; i < siteImages.length; i++) {
        const r = Math.floor(Math.random() * 25);
        console.log('r',r)
        let file = `images/bai-${r+1}.gif`
        let url = chrome.runtime.getURL(file)
        siteImages[i].src = url;
      }
    }
  
    const response = { status: 'done' };
    sendResponse(response);
  });
  