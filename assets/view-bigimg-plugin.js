require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    var viewer = new ViewBigimg()

    var wrap = document.querySelectorAll('.wrap')
    wrap.forEach(function(w){
      w.onclick = function (e) {
        if (e.target.nodeName === 'IMG') {
          viewer.show(e.target.src)
        }
      }
    })
  });
});

