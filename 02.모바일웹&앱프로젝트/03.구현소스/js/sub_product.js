// Product 탭

import rqData from "./rqData.js";

let num=0;
/* 
    경로함수만들기
    lnb에 이벤트 걸기
*/
Vue.component("product-com",{
    template:`
    <div>
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
                <li v-for="(items, index) in this.list_lnb"><a href="#" class="yellow underline" >{{ items }}</a></li>
            </ol>
        </div>
        <div class="cont_area">
            <div class="grid_items">
                <div class="item" v-for="(v,i) in chgImg(1)" :key="i">
                    <div class="item_pic">
                    <img v-bind:src='"./img/sub/origin/ScreenPrints/"+(i+1)+".jpg"' alt="이미지"></img>
                    <img v-bind:src='"./img/sub/origin/ScreenPrints/"+(i+1)+"_on.jpg"' alt="이미지"></img>
                        <div class="item_copy">
                            <h2>{{rqData.pd_imgs[1].sp[i].title}}</h2>
                            <span>{{rqData.pd_imgs[1].sp[i].price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `,
    props:['list_lnb2'],
    data(){
        return{
            list_lnb:["All","Screen Prints","Offset Prints","Risographs"],
            img_tag:{
                이미지1:`./img/sub/origin/all${this.sumNum()}.jpg`,
                이미지2:`./img/sub/origin/all${this.sumNum()+1}.jpg`,
            },
            rqData:rqData,
            dataList:["all","sp","op","rg"],
        }
    },
    methods:{
        sumNum(){
            num++;
            return num
        },
        mer(x,y){
            return rqData.pd_imgs[x].sp[y]
        },
        chgImg(x){
            return rqData.pd_imgs[x].sp
        },
        wayImg(){ // 경로함수
            rqData.pd_imgs[1].sp[i].title
        }
    },
    mounted(){
        console.log()
    }
})

new Vue({
    el:"#app",
    data:{
        list_lnb2:["All","Screen Prints","Offset Prints","Risographs"]
    },
    mounted(){
        $(window).on("load",function(){
            let item_pic_img = $(".item_pic img");

            // 그림에 호버하면 사진변경
            item_pic_img.hover(
                function(){
                    $(this).addClass("on")
                },
                function(){
                    $(this).removeClass("on")
                }
            );///////////// hover //////////////

        });/////////////////// load /////////////////

    },
    methods:{
        
    }
}); ////////////////// vue 인스턴스 ////////////////

// new Vue({
//     el:".lnb_area",
//     data:{
//         list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
//     },
//     created(){},
//     mounted(){}
// })

