// slide to top
let page_1 = document.getElementById('cta-page-1')
document.getElementById('button').onclick = function () {
    page_1.classList.toggle("-translate-y-56");
    if (/Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        page_1.classList.toggle("pb-20");
    }
}