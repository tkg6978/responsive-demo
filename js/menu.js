window.addEventListener('load', function(){

    /** drawerボタン 押下 */
    document.getElementById("drawer-btn").addEventListener("click", function(){
        switchMenu()
        switchDisplayBackground()
    });

    /** バックグラウンド 押下 */
    document.getElementById("drawer-background").addEventListener("click", function(){
        switchMenu()
        switchDisplayBackground()
    });
})

// バックグラウンド表示/非表示
function switchDisplayBackground() {
    var bg = document.getElementById("drawer-background");

    if (bg.style.display=="block") {
        bg.style.display ="none";
    } else {
        bg.style.display ="block";
    }
}

function switchMenu() {
    var element = document.getElementById("drawer");
    if (element.classList.contains("active")) {
        deactivate("drawer");
    } else {
        activate("drawer");
    }
}

function activate(id) {
    document.getElementById(id).classList.add("active")
}

function deactivate(id) {
    document.getElementById(id).classList.remove("active")
}


