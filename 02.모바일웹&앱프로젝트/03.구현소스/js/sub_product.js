// Product 탭



Vue.component("product-com",{
    template:`
    
    `,
})

new Vue({
    el:"#app",
    data:{
        list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
    },
    created(){},
    mounted(){}
}); ////////////////// vue 인스턴스 ////////////////

// 이미지 높이값을 .item한테 줌(absolute때문에)
let item_pic_img = $(".item_pic img");
let item_picH = item_pic_img.height();
$(".item").css({
    height: item_picH*1.15 +"px",
});
// console.log(item_picH)
// 그림에 호버하면 사진변경
item_pic_img.hover(
    function(){
        $(this).addClass("on")
    },
    function(){
        $(this).removeClass("on")
    }
);///////////// hover //////////////
