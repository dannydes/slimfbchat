resizeMessageBox();
addEventListener("resize", resizeMessageBox);

function resizeMessageBox() {
    var messageArea = document.getElementsByClassName("-cx-PRIVATE-webMessengerReadView__messagingScroller")[0];
    var messageWidth = screen.availWidth * 0.48;
    messageArea.style.width = messageWidth + "px";
    document.getElementsByClassName("uiScrollableAreaBody")[0].style.width = messageWidth - 10 + "px";
}