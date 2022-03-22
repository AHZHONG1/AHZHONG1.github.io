function myOpenMenu() {
    var ans;
    if (ans = document.getElementById("openMenu")) {
        ans.innerHTML = "Return";
    }
}

function noHidden() {
    document.getElementsByClassName("hidden")[0].style.display = "initial";

    document.getElementById("noHidden").style.display = "none";

    const element = document.querySelector('.AHZHONGbanner')

    document.getElementsByClassName("nothidden")[0].style.display = "initial";
}