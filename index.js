function mobicheck() {
    if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
    return true
} else {
    return false
}
}

switch (mobicheck()) {
    case true:
        $('.container').addClass('mobi')
        $('.overlay-container').addClass('mobi')
        break;

    default:
        console.log("no mobile?")
        break;
}

function goaway(link, docname) {
    console.log('leaving site, preparing.');
    $('.overlay').addClass('go')
    $('.overlay-container').addClass('lapt')
    $('.i-guess').attr('href', link)
    $('.doc-name')
        .text(docname)
    setTimeout(() => {
        window.location.href = `googledocs://${link}`
    }, 1500)
}



function followlink(link, name) {
    
}

const docarray = document.querySelectorAll(".document");

docarray.forEach((e) => {
    let clickable = e.dataset.link
    let docname = $(e).text()
    e.addEventListener('click', () => {
        // followlink(clickable, docname)
        goaway(clickable, docname)
    })
})