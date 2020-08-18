export default {  
    actions:{
        fetchBlackList({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getBlackList.php',body:null,},{ root: true })
                .then(success=>{                        
                    commit('setBlackList',success)
                })
                .catch(()=>{})
                .finally(()=> lastly())
        },
        fetchDutyList({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getDutyList.php',body:null,},{ root: true })
                .then(success=>{                        
                    commit('setDutyList',success)
                })
                .catch(()=>{})
                .finally(()=> lastly())
        },
        fetchDates({commit, dispatch },{done,lastly}){
            dispatch('sendQuery',{ url:'/api/getDates.php',body:null,},{ root: true })
                .then(success=>{
                    commit('setDates',success)
                    done()                        
                })
                .catch(()=>{})
                .finally(()=> lastly())
        },
        fetchDatesWork({commit, dispatch },{date_id,lastly}){
            dispatch('sendQuery',{ url:'/api/getDatesWork.php',body:{date_id},},{ root: true })
                .then(success=>{                        
                    commit('setDatesWork',success)
                })
                .catch(()=>{})
                .finally(()=> lastly())
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