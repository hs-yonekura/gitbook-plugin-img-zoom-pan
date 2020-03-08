require(["gitbook"], function(gitbook) {
  gitbook.events.bind("page.change", function() {
    var viewer = new ViewBigimg()
    console.log("s")

    var wrap = document.querySelectorAll('.wrap')
    wrap.forEach(function(w){
      console.log(w)
      w.onclick = function (e) {
        if (e.target.nodeName === 'IMG') {
          viewer.show(e.target.src)
        }
      }
    })
  });
});

