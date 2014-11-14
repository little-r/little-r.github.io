function display(divID) {
    var clickedDiv=document.getElementById(divID);
    clickedDiv.style.color="#000000";
    var pre = clickedDiv.getElementsByTagName('pre');
    if (pre != undefined) {
        for (i in pre) {
            pre[i].style.color="#333";
            pre[i].style.backgroundColor="#f5f5f5";
            pre[i].style.border="1px solid #ccc";
        }
    }

}
