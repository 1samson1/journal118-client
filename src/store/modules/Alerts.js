export default {
    actions:{
        setError({commit},info = "Что-то пошло не так"){
            commit('setError',info)
        },
        setSucccess({commit},info){
            commit('setSucccess',info)
        },
        removeAlert({commit},id){
            commit('removeAlert',id)
        },
    },
    mutations:{
        setError(state,info){
            state.alerts.push({
                id:Date.now(), info, indicator:'error',
            })
        },
        setSucccess(state,info){
            state.alerts.push({
                id:Date.now(), info, indicator:'success',
            })
        },
        removeAlert(state,id){
            state.alerts = state.alerts.filter(el => el.id !== id)
        },
    },
    state:{
        alerts:[],
    },
    getters:{
        getAlerts(state){
            return state.alerts
        }
    },
}