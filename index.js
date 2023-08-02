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

function leave() {
    $('.overlay').removeClass('go')
    $('.overlay-container').removeClass('lapt')
    $('.leave').off('click', leave)
}

function goaway(link, docname) {
    console.log('leaving site, preparing.');
    $('.overlay').addClass('go')
    $('.overlay-container').addClass('lapt')
    $('.doc-name').text(docname)
    $('.leave').on('click', leave)
    setTimeout(() => {
        window.location.href = link
    }, 1500)
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

const remarks = [
    'I WOKE UP IN A NEW BUGATTI',
    'erm what the flip',
    'can i get a yellow baber',
    'WHAT',
    'con yay west',
    "i don't speak italics",
    'made w ❤️ by <img src="assets/MM.svg" style="margin-left:1px;height: 1rem">',
    'my water bottle has my logo on it',
    'gua gua'
]

$('.sub').html(remarks[Math.floor(Math.random() * remarks.length)])