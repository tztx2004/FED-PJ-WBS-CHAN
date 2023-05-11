const store = new Vuex.Store({
    state:{
        updateNum1:"",
        updateNum2:"",
        updateNum3:"",
        updateNum4:"",
    },
    mutations:{
        initS(state,pm){
            state.updateNum1 = pm.sc1
            state.updateNum2 = pm.sc2
            state.updateNum3 = pm.sc3
            state.updateNum4 = pm.sc4
        }
    },
    actions:{},
})

export default store;