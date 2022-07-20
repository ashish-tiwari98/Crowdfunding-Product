$(".bookmarkbtn").click(function(){
    $(".bookmark-img").attr("src",
    $(".bookmark-img").attr("src")!=="images/icon-bookmark-selected.svg"?"images/icon-bookmark-selected.svg":"images/icon-bookmark.svg");
    $(".bookmarkbtn").css("color",$(".bookmarkbtn").css("color")!="rgb(20, 123, 116)"?"rgb(20, 123, 116)": "gray");
});