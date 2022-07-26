$(".bookmarkbtn, .bookmark-img").click(function(){
    $(".bookmark-img").attr("src",
    $(".bookmark-img").attr("src")!=="images/icon-bookmark-selected.svg"?"images/icon-bookmark-selected.svg":"images/icon-bookmark.svg");
    $(".bookmarkbtn").css("color",$(".bookmarkbtn").css("color")!="rgb(20, 123, 116)"?"rgb(20, 123, 116)": "gray");
});

$(".sub").click(function(){
    let par=$(this).parent().parent().parent();
    let chi=par.children("div.radio-col").children("label.radio-container");
    chi.click();
    loadSubmitModal($(this));
});

$(".radio-col").click(function(){
    let par=$(this).parent().parent();
    $(".card").css("borderColor","#eff1f1");
    $(".card").children("div.row.mt-0").addClass("hidden");
    par.css("borderColor","hsl(176, 50%, 47%)");
    par.children("div.row").removeClass("hidden");
    loadSubmitModal($(this));
});

function loadSubmitModal(clickedele){

}