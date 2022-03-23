function myOpenMenu() {
    var ans;
    if (ans = document.getElementById("openMenu")) {
        ans.innerHTML = "Return";
    }
}

var click = false;

function noHidden() {
    click = true;
    document.getElementsByClassName("hidden")[0].style.display = "block";

    document.getElementById("noHidden").style.display = "none";

    document.getElementsByClassName("nothidden")[0].style.display = "initial";

    setBannerSize();
}

function setBannerSize() {
    if (click == true) {
        const element = document.querySelector('.AHZHONGbanner');
        let cssAHZHONGbanner = document.getElementsByClassName("AHZHONGbanner")[0];
        if (window.innerWidth >= screen.width / 2) {
            cssAHZHONGbanner.style.width = screen.width / 2 + "px";
            cssAHZHONGbanner.style.height = "calc(" + screen.width / 2 + "px / 38 * 11)";

            cssAHZHONGbanner.style["padding-left"] = ((window.innerWidth - (screen.width / 2)) / 2) + "px";
            cssAHZHONGbanner.style["padding-right"] = ((window.innerWidth - (screen.width / 2)) / 2) + "px";
        } else if (window.innerWidth < (screen.width / 2)) {
            cssAHZHONGbanner.style.width = "100vw";
            cssAHZHONGbanner.style.height = "calc(100vw / 38 * 11)";
            cssAHZHONGbanner.style["padding-left"] = "0vw";
            cssAHZHONGbanner.style["padding-right"] = "0vw";
        } else {

        }
    }
}

window.addEventListener("resize", setBannerSize)

setBannerSize();
