const store = new Vuex.Store({
    state:{
        updateNum:"",
        updateEle:"",
        upImg:"",
        cart_pic:"",
        cart_tit:"",
        cart_price:"",
        cart_cnt:"",
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