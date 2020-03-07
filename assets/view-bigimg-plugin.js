var viewer = new ViewBigimg()

var wrap = document.getElementById('wrap')
wrap.onclick = function (e) {
  if (e.target.nodeName === 'IMG') {
    viewer.show(e.target.src)
  }
}
