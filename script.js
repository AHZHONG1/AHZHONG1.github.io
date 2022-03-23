function myOpenMenu() {
    var ans;
    if (ans = document.getElementById("openMenu")) {
        ans.innerHTML = "Return";
    }
}

function noHidden() {
    document.getElementsByClassName("hidden")[0].style.display = "block";

    document.getElementById("noHidden").style.display = "none";

    document.getElementsByClassName("nothidden")[0].style.display = "initial";

    setBannerSize();
}

function setBannerSize() {
    const element = document.querySelector('.AHZHONGbanner');
    let cssAHZHONGbanner = document.getElementsByClassName("AHZHONGbanner")[0];
    if (window.innerWidth > 960) {
        cssAHZHONGbanner.style.width = "50vw";
        cssAHZHONGbanner.style.height = "calc(50vw / 38 * 11)";

        cssAHZHONGbanner.style["padding-left"] = "25vw";
        cssAHZHONGbanner.style["padding-right"] = "25vw";
    } else {
        cssAHZHONGbanner.style.width = "100vw";
        cssAHZHONGbanner.style.height = "calc(100vw / 38 * 11)";
        cssAHZHONGbanner.style["padding-left"] = "0vw";
        cssAHZHONGbanner.style["padding-right"] = "0vw";
    }
}

window.addEventListener("resize", setBannerSize);

setBannerSize();