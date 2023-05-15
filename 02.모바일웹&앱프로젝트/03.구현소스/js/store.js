const store = new Vuex.Store({
    state:{
        updateNum:"",
        updateEle:"",
        upImg:"",
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