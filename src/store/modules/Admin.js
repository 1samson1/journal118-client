export default {  
    actions:{
        fetchDatesWorkToday({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getDatesWorkToday.php',body:null,},{ root: true })
                .then(success=> commit('setDatesWorkToday',success))
                .catch(()=>{})
                .finally(()=> lastly())
        },
        pullDatesWorkToday({dispatch, getters, state },{lastly}){
            dispatch('sendQuery',{ 
                url:'/api/setDatesWork.php',
                body:{
                    token:getters.getToken,
                    datesWorkToday:state.DatesWorkToday,
                },
            },{ root: true })
                .then(() => dispatch('setSucccess','Изменения сохранены!'))
                .catch(()=>{})
                .finally(()=> lastly())
        },
        fetchDutyListToday({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getDutyListToday.php',body:null,},{ root: true })
                .then(success=> commit('setDutyListToday',success))
                .catch(()=>{})
                .finally(()=> lastly())
        },
        genDutyList({commit, dispatch, getters },{count_duty,lastly}){
            dispatch('sendQuery',{ 
                url:'/api/genDutyList.php',
                body:{
                    token:getters.getToken,
                    count_duty
                },
            },{ root: true })
                .then(success=> commit('setDutyListToday',success))
                .catch(()=>{})
                .finally(()=> lastly())
        },
        fetchUsersAdmin({commit, dispatch },{lastly}){
            dispatch('sendQuery',{ url:'/api/getUsersAdmin.php',body:null,},{ root: true })
                .then(success=> commit('setUsersAdmin',success))
                .catch(()=>{})
                .finally(()=> lastly())
        },
        pullUsersAdmin({dispatch, getters, state },{lastly}){
            dispatch('sendQuery',{ 
                url:'/api/setUsersAdmin.php',
                body:{
                    token:getters.getToken,
                    users:state.UsersAdmin,
                },
            },{ root: true })
                .then(() => dispatch('setSucccess','Изменения сохранены!'))
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
        setUserMissLessons(state,data){
            state.DatesWorkToday[data.id].miss_lessons = data.miss_lessons
        },
        setDutyListToday(state,data){
            state.DutyListToday = data
        },
        setUsersAdmin(state,data){
            state.UsersAdmin = data
        },
        setMissUser(state,data){
            state.UsersAdmin[data.id].miss_user = data.miss_user
        },
    },
    state:{
        DatesWorkToday:null,
        DutyListToday:null,
        UsersAdmin:null,
    },
    getters:{
        getDatesWorkToday(state){
            return state.DatesWorkToday
        },
        getDutyListToday(state){
            return state.DutyListToday
        },
        getUsersAdmin(state){
            return state.UsersAdmin
        },
    },
}
