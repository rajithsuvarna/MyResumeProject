var targetTags = document.querySelectorAll(".nav-menu a");
for (var i = 0; i < targetTags.length; i++) {
  targetTags[i].addEventListener("click", function (event) {
    event.preventDefault();
    var targetSectionID = this.textContent.trim().toLowerCase();
    var targetSectionName = document.getElementById(targetSectionID);
    var scrollInterval = setInterval(function () {
      var stopSection = targetSectionName.getBoundingClientRect();
      if (stopSection.top <= 0) {
        clearInterval(scrollInterval);
        return;
      }
      window.scrollBy(0, 50);
    }, 20);
  });
}

var skillContainer = document.querySelectorAll(".skill-progress>div");
for (let j of skillContainer) {
  initialBar(j);
}
window.addEventListener("scroll", checkScroll);
function initialBar(bar) {
  bar.style.width = 0 + "%";
}

function fillBars(bar) {
  let barPercent = bar.getAttribute("data-bar-percent");
  let currentPercent = 0;
  let skillInterval = setInterval(function () {
    if (currentPercent > barPercent) {
      clearInterval(skillInterval);
      return;
    }
    currentPercent++;
    bar.style.width = currentPercent + "%";
  }, 2);
}

function checkScroll() {
  for (var k of skillContainer) {
    let skillCordinates = k.getBoundingClientRect();
    if (k.style.width === "0%" && skillCordinates.top < window.innerHeight) {
      console.log("done");
      fillBars(k);
    } else if (skillCordinates.top > window.innerHeight) {
      initialBar(k);
    }
  }
}
