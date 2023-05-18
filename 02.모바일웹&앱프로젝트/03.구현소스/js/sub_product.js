// Product 탭

import rqData from "./rqData.js";
import store from "./store.js";


let num=0;
// 전역변수
let cnt=0;
let upDet=0;
let prot =0


let upImg='./img/sub/origin/All/1';
Vue.component("product-com",{
    template:`
    <div>
        <div class="top_area">
            <div class="top_bg">
                <img :src="'./img/main/main_image/'+$store.state.updateNum+'.jpeg'" alt="배경">
            </div>
            <div class="top_title">
                Limited Edition Art Prints
            </div>
        </div>
        <div class="lnb_area">
            <ol class="lnb">
                <li v-for="(items, index) in this.dList" :key="index">
                    <a href="#" class="yellow underline" @click.prevent="readAttr(index), lnbClick">
                        {{ items }}
                    </a>
                </li>
            </ol>
        </div>
        <div class="cont_area">
            <div class="grid_items">
                <div class="item" v-for="(v,i) in chgImg($store.state.updateNum)" :key="i" @click="readItem()">
                    <div class="item_pic">
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+".jpg"' @click="popDetail()" alt="이미지"></img>
                        <img v-bind:src='"./img/sub/origin/"+dList[$store.state.updateNum]+"/"+(i+1)+"_on.jpg"' @click="popDetail()" alt="이미지"></img>
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
                <button class="closedBtn" @click="closedDetail(), initSwiper()">X</button>
                <div class="detail_cont">
                
                <div class="de_pic">
                    <swiper-container class="mySwiper" effect="cards" grab-cursor="true">
                        <swiper-slide v-for="val in 3" :key="val">
                            <img :src="$store.state.upImg+'-'+val+'.jpg'" alt="이미지">
                        </swiper-slide>
                    </swiper-container>
                </div>

                    <div class="de_info">
                        <div class="de_title">
                            <h2></h2>
                        </div>
                        <div class="de_price">
                            <h3></h3>
                        </div>
                        <div class="de_payInfo">
                            <h4>Quantity</h4>
                            <input type="number" value="1" min="1" inputmode="numeric">
                            <button class="addBtn" @click="addTocart(), btnClick('.addBtn')">Add to Cart</button>
                            <div class="picInfo">
                            <h4></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="cartBox">
            <div class="cart_top">
                <h2>Cart</h2>
                <span @click="clsBtn()">X</span>
            </div>
            <ul class="cart_main">
                <li class="cart_pic">
                    <img :src="$store.state.cart_pic" alt="이미지">
                </li>
                <li class="cart_tit">
                    {{$store.state.cart_tit}}<br>
                    {{$store.state.cart_price}}
                </li>
                <li class="cart_cnt">
                    {{$store.state.inVal}}
                </li>
                <li class="cart_Mx">x</li>
            </ul>
            <div class="subtotal_part">
                <span>Subtotal</span>
                <span class="cart_price">{{'$'+Number($store.state.cart_price.replace("$",""))*$store.state.inVal}}</span>
            </div>
            <button class="chkout" @click="chkbox">CheckOut</button>
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
            cnt = x;
            this.$store.state.updateNum = x
            $(".lnb li").eq(x).find("a").addClass("on").parent().siblings().find("a").removeClass("on")
            
            $(".item").removeClass("on")
            setTimeout(() => {
                $(".item").addClass("on")
            }, 800);
            return x;
        },
        popDetail(){ // 상세정보창 출력
            $(".detail_wrap").addClass("on");
            $(".top_area, .lnb_area, .cont_area, .top, .info").addClass("fil")
            
        },
        closedDetail(){
            $(".detail_wrap").removeClass("on")
            $(".cartBox").removeClass("open")
            $(".top_area, .lnb_area, .cont_area, .top, .info").removeClass("fil")

            // 초기화
            $(".de_payInfo input").val(1)
            
        },
        readItem(e){
            let tg = event.target
            
            console.log(store.state.tg)
            let srcT = $(tg).attr("src")
            let tgTit = $(tg).parent().find(".item_copy>h2")
            let tgT = $(tgTit).html();
            
            let tgPrice = $(tg).parent().find(".item_copy>span")
            let tgP = $(tgPrice).html();
            
            let tgPin = $(tg).parent().find(".item_copy>h4")
            let tgPI = $(tgPin).html();
            
            
            if(srcT!==undefined){
                store.state.upImg = srcT.split("_on")[0]
            }
            
            console.log(srcT)
            
            // 출력
            // 사진 속성변경
            // $(".de_pic img").attr("src",srcT)

            // 그림 제목
            $(".de_title>h2").html(tgT)
            // 그림 가격
            $(".de_price>h3").html(tgP)
            $(".picInfo>h4").html(tgPI)

            
            return tg
        },
        initSwiper(){
            $(".mySwiper").init()
        },
        addTocart(){
            store.state.cart_pic= $("swiper-slide img").first().attr("src")
            store.state.cart_tit= $(".de_title h2").html()
            store.state.cart_price= $(".de_price h3").html()
            store.state.inVal = $(".de_payInfo input").val()
            $(".cart_Mx").css({opacity:1})

            console.log(Number(store.state.cart_price.replace("$",""))*store.state.inVal)
            if(store.state.cart_tit!=="We're sure you can find something you like."){
                console.log(store.state.cart_tit)
                $(".cart a").addClass("on");
            }
        },
        btnHover(x){
            prot=1
            setTimeout(()=>{
                prot =0
            },100)
            $(x).hover(function(){
                $(this).animate({
                    backgroundColor:'#777#F8CD07 40%'
                },200)
            },function(){
                $(this).animate({
                    backgroundColor:'#f47d00'
                },200)
            })
        },
        btnClick(x){
            $(x).css({
                backgroundColor:'#777#F8CD07 40%'
            })
        },
        clsBtn(){
            console.log($(".cart_tit").text().length)
            $(".cartBox").removeClass("open")
            $(".top_area, .lnb_area, .cont_area, .top, .info").removeClass("fil")
        },
        lnbClick(){
            console.log(this)
        },
        chkbox(){
            alert("Sorry! No Service Yet!")
        },

    },

    created(){
        store.commit("initS",{
            sc:cnt,
        })
        store.commit("updateE",{
            upImg:upImg,
        })
    },
    mounted(){
        this.btnHover(".addBtn")
        this.btnHover(".chkout")
        $(".lnb li").first().find("a").addClass("on")
        
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

