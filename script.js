function myOpenMenu() {
    var ans;
    if (ans = document.getElementById("openMenu")) {
        ans.innerHTML = "Return";
    }
}

var banner = true;
var click = false;

function noHidden() {
    click = true;
    document.getElementsByClassName("hidden")[0].style.display = "block";

    document.getElementById("noHidden").style.display = "none";

    document.getElementById("arrow").style.display = "none";

    document.getElementsByClassName("nothidden")[0].style.display = "initial";

    var bannerheight = setBannerSize();

    document.getElementsByClassName("Indexbanner1")[0].style["padding-top"] = bannerheight + "px";
}

let bannerheightglobal = 0;

function setBannerSize() {
    if (click == true) {
        const element = document.querySelector('.AHZHONGbanner');
        let cssAHZHONGbanner = document.getElementsByClassName("AHZHONGbanner")[0];
        let bannerheight = 0;
        if (window.innerWidth >= screen.width / 2) {
            bannerheight = (screen.width / 2) / 38 * 11;
            cssAHZHONGbanner.style.width = screen.width / 2 + "px";
            cssAHZHONGbanner.style.height = bannerheight + "px";

            cssAHZHONGbanner.style["padding-left"] = ((window.innerWidth - (screen.width / 2)) / 2) + "px";
            cssAHZHONGbanner.style["padding-right"] = ((window.innerWidth - (screen.width / 2)) / 2) + "px";
        } else if (window.innerWidth < (screen.width / 2)) {
            bannerheight = window.innerWidth / 38 * 11;
            cssAHZHONGbanner.style.width = "100vw";
            cssAHZHONGbanner.style.height = bannerheight + "px";
            cssAHZHONGbanner.style["padding-left"] = "0vw";
            cssAHZHONGbanner.style["padding-right"] = "0vw";
        }
        if (banner == true) {
            document.getElementsByClassName("Indexbanner1")[0].style["padding-top"] = bannerheight + "px";
            document.getElementById("bannerhidden").style.top = bannerheight + "px";
            bannerheightglobal = bannerheight;
        } else {
            document.getElementsByClassName("Indexbanner1")[0].style["padding-top"] = "0px";
            document.getElementById("bannerhidden").style.top = "0px";
            bannerheightglobal = bannerheight;
        }

        return bannerheight;
    } else {
        return 0;
    }

}

function closeBanner() {
    if (banner == true) {
        banner = false;
        document.getElementsByClassName("AHZHONGbanner")[0].style.display = "none";
        document.getElementsByClassName("Indexbanner1")[0].style["padding-top"] = "0px";
        document.getElementById("bannerhidden").style.top = "0px";
        document.getElementById("bannerhidden").innerHTML = "&#8595;";

    } else {
        banner = true;
        document.getElementsByClassName("AHZHONGbanner")[0].style.display = "initial";
        document.getElementsByClassName("Indexbanner1")[0].style["padding-top"] = bannerheightglobal + "px";
        document.getElementById("bannerhidden").style.top = bannerheightglobal + "px";
        document.getElementById("bannerhidden").innerHTML = "&#8593;";
    }
}

window.addEventListener("resize", setBannerSize)

setBannerSize();