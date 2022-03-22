function myOpenMenu() {
    var ans;
    if (ans = document.getElementById("openMenu")) {
        ans.innerHTML = "Return";
    }
}

function noHidden() {
    document.getElementsByClassName("hidden")[0].style.display = "initial";

    document.getElementById("noHidden").style.display = "none";

    document.getElementsByClassName("nothidden")[0].style.display = "initial";

    // const element = document.querySelector('.AHZHONGbanner')
    if (window.innerWidth > 1000) {
        document.getElementsByClassName("AHZHONGbanner")[0].style.width = "50%";

        document.getElementsByClassName("AHZHONGbanner")[0].style["margin-left"] = "auto";

        document.getElementsByClassName("AHZHONGbanner")[0].style["margin-right"] = "auto";
    }
}