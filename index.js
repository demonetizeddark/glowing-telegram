if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/webOS/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         || navigator.userAgent.match(/BlackBerry/i)
         || navigator.userAgent.match(/Windows Phone/i)) {
            $('.container').addClass('mobi')
         } else {
            alert(false) ;
         }

function followlink(link) {
    window.location = `googledocs://${link}`;
    setTimeout(function () {
        window.location = link;
    }, 25);
}

const docarray = document.querySelectorAll(".document");

docarray.forEach((e) => {
    let clickable = e.dataset.link
    e.addEventListener('click', () => {
        followlink(clickable)
    })
})