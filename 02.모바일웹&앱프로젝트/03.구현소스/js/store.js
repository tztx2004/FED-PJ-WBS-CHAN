const store = new Vuex.Store({
    state:{
        updateNum:"",
        updateEle:""
    },
    mutations:{
        initS(state,pm){
            state.updateNum = pm.sc
        },
        updateE(state, pm){
            state.updateEle = pm.upDet
        }
    },
    actions:{},
})

export default store;