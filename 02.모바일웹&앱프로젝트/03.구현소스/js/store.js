const store = new Vuex.Store({
    state:{
        updateNum:"",
        updateEle:"",
        upImg:"",
        cart_pic:"./img/sub/origin/000.png",
        cart_tit:"We're sure you can find something you like.",
        cart_price:"",
        cart_cnt:"",
        inVal:"",
    },
    mutations:{
        initS(state,pm){
            state.updateNum = pm.sc
        },
        updateE(state, pm){
            state.upImg = pm.upImg
        },
        
    },
    actions:{},
})

export default store;