export default {  
    actions:{
        fetchBlackList({commit, dispatch }){
            dispatch('sendQuery',{ url:'/api/getBlackList.php',body:null,},{ root: true })
                .then(success=>{                        
                    commit('setBlackList',success)
                })
                .catch(()=>{})
        },
        fetchDutyList({commit, dispatch }){
            dispatch('sendQuery',{ url:'/api/getDutyList.php',body:null,},{ root: true })
                .then(success=>{                        
                    commit('setDutyList',success)
                })
                .catch(()=>{})
        },
        fetchDates({commit, dispatch },{callback}){
            dispatch('sendQuery',{ url:'/api/getDates.php',body:null,},{ root: true })
                .then(success=>{
                    commit('setDates',success)
                    callback()                        
                })
                .catch(()=>{})
        },
        fetchDatesWork({commit, dispatch },{date_id}){
            dispatch('sendQuery',{ url:'/api/getDatesWork.php',body:{date_id},},{ root: true })
                .then(success=>{                        
                    commit('setDatesWork',success)
                })
                .catch(()=>{})
        },
    },
    mutations:{
        setBlackList(state,data){
            state.BlackList = data
        },
        setDutyList(state,data){
            state.DutyList = data
        },
        setDates(state,data){
            state.Dates = data || []
        },
        setDatesWork(state,data){
            state.DatesWork = data
        },
    },
    state:{
        DutyList:null,
        BlackList:null,
        Dates:[],
        DatesWork:null,
    },
    getters:{
        getBlackList(state){
            return state.BlackList
        },
        getDutyList(state){
            return state.DutyList
        },
        getDates(state){
            return state.Dates 
        },
        getDatesWork(state){
            return state.DatesWork
        },
    },
}