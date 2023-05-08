// Product 탭



Vue.component("product-com",{
    template:`
    <div>
        <!-- 템플릿으로 자를예정 -->
        <div class="top_area">
            <div class="top_bg">
                <img src="./img/main/main_image/0ac04533-58e4-4b73-b05c-4e8c66d5ddc7.jpeg" alt="배경">
            </div>
            <div class="top_title">
                Limited Edition Art Prints
            </div>
        </div>
        <div class="lnb_area">
            <ol class="lnb">
                <li v-for="(items, index) in list_lnb"><a href="#">{{ items }}</a></li>
            </ol>
        </div>
        <div class="cont_area">
            <div class="grid_items">
                <div class="item" v-for="(v,i) in 50">
                    <div class="item_pic">
                        <img src="./img/sub/sub_product/test.jpeg" alt="이미지">
                        <img src="./img/sub/sub_product/test_on.jpeg" alt="이미지">
                        <div class="item_copy">
                            <span>50$</span>
                            <h2>TITLE</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,data(){
        return{
            list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
        }
    },
})

new Vue({
    el:"#app",
    data:{
        list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
    },
    created(){},
    mounted(){},
    methods:{}
}); ////////////////// vue 인스턴스 ////////////////

// new Vue({
//     el:".lnb_area",
//     data:{
//         list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
//     },
//     created(){},
//     mounted(){}
// })

function imgHov(){
    // 이미지 높이값을 .item한테 줌(absolute때문에)
    let item_pic_img = $(".item_pic img");
    let item_picH = item_pic_img.height();
    $(".item").css({
        height: item_picH*1.15 +"px",
    });
    console.log(item_picH)
    // 그림에 호버하면 사진변경
    item_pic_img.hover(
        function(){
            $(this).addClass("on")
        },
        function(){
            $(this).removeClass("on")
        }
    );///////////// hover //////////////
}
imgHov();