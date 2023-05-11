const store = new Vuex.Store({
    state:{
        updateNum:"",
    },
    mutations:{
        initS(state,pm){
            state.updateNum = pm.sc
        }
    },
    actions:{},
})

export default store;