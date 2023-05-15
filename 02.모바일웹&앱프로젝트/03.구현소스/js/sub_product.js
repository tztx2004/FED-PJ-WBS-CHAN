// Product 탭

import rqData from "./rqData.js";
import store from "./store.js";

let num=0;
// 전역변수
let cnt=0;
let upDet=0;
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
                <div class="item" v-for="(v,i) in chgImg($store.state.updateNum)" :key="i" @click="popDetail(), readItem()">
                    <div class="item_pic">
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+".jpg"' alt="이미지"></img>
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+"_on.jpg"' alt="이미지"></img>
                        <div class="item_copy">
                            <h2>{{chgImg($store.state.updateNum)[i].title}}</h2>
                            <span>{{chgImg($store.state.updateNum)[i].price}}</span>
                            <h4 class="pInfo" v-html="chgImg($store.state.updateNum)[i].detail"></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="detail_area">
            <div class="detail_wrap">
                <button class="closedBtn" @click="closedDetail">X</button>
                <div class="detail_cont">
                    <div class="de_pic">
                    <img src="./img/sub/origin/All/1.jpg" alt="이미지">
                    </div>
                    <div class="de_info">
                        <div class="de_title">
                            <h2>Test Picture</h2>
                        </div>
                        <div class="de_price">
                            <h3>$ 350</h3>
                        </div>
                        <div class="de_payInfo">
                            <h4>Quantity</h4>
                            <input type="text">
                            <label for="1"></label>
                            <button class="addBtn">Add to Cart</button>
                            <div class="picInfo">
                            <h4></h4>
                            </div>
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
        readAttr(x){
            // console.log(x)
            cnt = x;
            this.$store.state.updateNum = x
            return x;
        },
        popDetail(){ // 상세정보창 출력
            $(".detail_wrap").addClass("on");
            $(".top_area, .lnb_area, .cont_area, .top").addClass("fil")
            
        },
        closedDetail(){
            $(".detail_wrap").removeClass("on")
            $(".top_area, .lnb_area, .cont_area, .top").removeClass("fil")
        },
        readItem(e){
            let tg = event.target
            let srcT = $(tg).attr("src")

            let tgTit = $(tg).parent().find(".item_copy>h2")
            let tgT = $(tgTit).html();

            let tgPrice = $(tg).parent().find(".item_copy>span")
            let tgP = $(tgPrice).html();

            let tgPin = $(tg).parent().find(".item_copy>h4")
            let tgPI = $(tgPin).html();

            // 출력
            // 사진 속성변경
            $(".de_pic>img").attr("src",srcT)
            // 그림 제목
            $(".de_title>h2").html(tgT)
            // 그림 가격
            $(".de_price>h3").html(tgP)
            $(".picInfo>h4").html(tgPI)

            
            return tg
        },
    },
    created(){
        store.commit("initS",{
            sc:cnt,
        })

    },
    mounted(){
        $(()=>{
            
        });
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