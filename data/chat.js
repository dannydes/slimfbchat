var sidebar = document.getElementsByClassName("fbChatSidebar")[0];
var dock = document.getElementsByClassName("fbDock")[0];
var search = sidebar.getElementsByClassName("inputsearch")[0];

sidebar.addEventListener("mouseenter", function() {
    dock.classList.add("plugged_out");
    sidebar.classList.add("active");
});

sidebar.addEventListener("mouseleave", function() {
    if (search.classList.contains("DOMControl_placeholder")) {
        dock.classList.remove("plugged_out");
        sidebar.classList.remove("active");
    }
});

//On focus, chat sidebar's search gets the DOMControl_placeholder class.
document.documentElement.addEventListener("click", function() {
    if (!sidebar.classList.contains("hidden_elem")) {
        if (search.classList.contains("DOMControl_placeholder")) {
            sidebar.classList.remove("active");
            dock.classList.remove("plugged_out");
        } else {
            sidebar.classList.add("active");
            dock.classList.add("plugged_out");
        }
    }
});

arrangeDock();
addEventListener("resize", arrangeDock);

function arrangeDock() {
    if (sidebar.classList.contains("hidden_elem")) {
        dock.classList.add("plugged_out");
    } else {
        dock.classList.remove("plugged_out");
    }
}