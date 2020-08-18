export default {  
    actions:{
        fetchDatesWorkToday({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getDatesWorkToday.php',body:null,},{ root: true })
                .then(success=> commit('setDatesWorkToday',success))
                .catch(()=>{})
                .finally(()=> lastly())
        },
    },
    mutations:{
        setDatesWorkToday(state,data){
            state.DatesWorkToday = data
        },
        setUserExist(state,data){
            state.DatesWorkToday[data.id].exist = data.exist
        },
        setUserMiss(state,data){
            state.DatesWorkToday[data.id].miss = data.miss
        },
    },
    state:{
        DatesWorkToday:null
    },
    getters:{
        getDatesWorkToday(state){
            return state.DatesWorkToday
        }
    },
}