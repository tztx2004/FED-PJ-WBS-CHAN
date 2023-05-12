// Product 탭

import rqData from "./rqData.js";
import store from "./store.js";

let num=0;
// 전역변수
let cnt=0;
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
                <li v-for="(items, index) in this.dList" :key="index">
                    <a href="#" class="yellow underline" @click.prevent="readAttr(index)">
                        {{ items }}
                    </a>
                </li>
            </ol>
        </div>
        <div class="cont_area">
            <div class="grid_items">
                <div class="item" v-for="(v,i) in chgImg($store.state.updateNum)" :key="i">
                    <div class="item_pic">
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+".jpg"' alt="이미지"></img>
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+"_on.jpg"' alt="이미지"></img>
                        <div class="item_copy">
                            <h2>{{chgImg($store.state.updateNum)[i].title}}</h2>
                            <span>{{chgImg($store.state.updateNum)[i].price}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    `,
    data(){
        return{
            dList:["All","ScreenPrints","OffsetPrints","Risographs"],
            img_tag:{
                이미지1:`./img/sub/origin/all${this.sumNum()}.jpg`,
                이미지2:`./img/sub/origin/all${this.sumNum()+1}.jpg`,
            },
            rqData:rqData,
            cnt:cnt,
        }
    },
    computed: {
        readAfter(){
            
        }
    },
    methods:{
        sumNum(){
            num++;
            return num
        },
        chgImg(x){
            return rqData.pd_imgs[x][this.dList[x]]
        },
        wayImg(x,y,z){ // 경로함수

        },
        readAttr(x){
            // console.log(x)
            cnt = x;
            this.$store.state.updateNum = x
            return x;
        },
    },
    created(){
        
        store.commit("initS",{
            sc:cnt,
        })
    },
    mounted(){
        console.log()
    }
}); ///////////////// component(부모) /////////////////




new Vue({
    el:"#app",
    store,
    data:{
        list_lnb:["All","Screen Prints","Offset Prints","Risographs"]
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