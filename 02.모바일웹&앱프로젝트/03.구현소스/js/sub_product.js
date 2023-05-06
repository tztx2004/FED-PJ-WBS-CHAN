// Product 탭



Vue.component("product-com",{
    template:``,
})

new Vue({
    el:"#app",
    data:{},
    created(){},
    mounted(){}
}); ////////////////// vue 인스턴스 ////////////////

// let nuSrc;
// let oriSrc = $(".item_pic img").each(function(idx,ele){
//     $(ele).attr("src");
// })
// console.log('오리 전',oriSrc);
// $(".item_pic img").hover(
//     function(){
//         nuSrc = `./img/main/sub_product/0ac04533-58e4-4b73-b05c-4e8c66d5ddc7.jpeg`;
//         $(this).attr("src",nuSrc);
//         console.log("before",$(this).attr("src"))
//     },
//     function(){
//         console.log("origin 후",oriSrc)
//         $(this).attr("src",oriSrc);
//         console.log("after",$(this).attr("src"))
//     }
// );////////////////// hover //////////////////

$(".item_pic img").hover(function(){
    $(this).attr("src", $(this).attr("src").replace(".jpeg", "_on.jpeg")); 
}, function(){ 
    $(this).attr("src", $(this).attr("src").replace("_on.jpeg", ".jpeg")); 
}); 