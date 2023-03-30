let imgs = document.getElementsByTagName('img')

for(img of imgs) {
    let r = Math.floor(Math.random() * 23)

    let file = `images/bai-${r+1}.gif`
    let url = chrome.runtime.getURL(file)
    img.src = url
}