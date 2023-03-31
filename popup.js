const btn = document.getElementById('btnChangeImages');

btn.addEventListener('click', () => {
  let queryOptions = { active: true, currentWindow: true };

  tabs = chrome.tabs.query(queryOptions, tabs => {
    chrome.tabs.sendMessage(
      tabs[0].id,
      { task: 'changeImages' },
      function (response) {
        console.log(response.status);
      }
    );
  });
});
