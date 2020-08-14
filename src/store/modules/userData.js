export default {
    actions:{  
        reg({dispatch},{body,callback}){            
            dispatch('sendQuery',{ url:'/api/reg.php',body,},{ root: true })
                .then(()=> {
                    callback()
                    dispatch('setSucccess','Вы зарегистрированы')
                })
                .catch(()=> {})
        }, 
        cicleCheckToken({dispatch},data){
            dispatch('checkToken',data)
            setInterval(() => {
                dispatch('checkToken',data)
            }, 30000);
        },
        checkToken({commit, dispatch, state}){
            if (state.token) {
                dispatch('sendQuery',{ url:'/api/confirm.php',body:{token:state.token},},{ root: true })
                    .then(success=>{                        
                        commit('setData',success)
                    })
                    .catch(()=> commit('removeData'))
            }                         
        }, 
        logout({commit,dispatch}){
            dispatch('setSucccess','Вы вышли из аккаунта')
            commit('removeData')
        },
        login({dispatch, commit},{body,onlyLogin,callback}) {       
            dispatch('sendQuery',{ url:'/api/login.php', body},{ root: true })
                .then((success)=>{                
                    callback()
                    dispatch('setSucccess','Вы авторизованы')
                    commit('setData',success.user)
                    commit('setToken',{token:success.token,onlyLogin})             
                })
                .catch(()=>{})
        },       
    },
    mutations:{
        setData(state,data){
            state.data = data
        },
        setToken(state,{token,onlyLogin}){
            if(onlyLogin)
                sessionStorage.token = token
            else
                localStorage.token = token

            state.token = token
        },
        removeData(state){
            localStorage.removeItem('token')
            sessionStorage.removeItem('token')
            state.token = ''
            state.data = null 
        }
    },
    state:{
        token:localStorage.token || sessionStorage.token || '',
        data:null,
    },
    getters:{
        getUserData(state){
            return state.data
        },
    },
}
