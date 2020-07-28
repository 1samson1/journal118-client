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
        checkToken({commit, dispatch, state}){
            if (state.token) {
                dispatch('cicleSendQuery',{
                    url:'/api/confirm.php',
                    body:{token:state.token},
                },{ root: true })
                    .then(success=> commit('setData',success))
                    .catch(()=> commit('removeData'))
            }                         
        }, 
        logout({commit,dispatch}){
            dispatch('setSucccess','Вы вышли из аккаунта')
            commit('removeData')
        },
        login({dispatch, commit},{body,callback}) {       
            dispatch('sendQuery',{ url:'/api/login.php', body},{ root: true })
                .then((success)=>{                
                    callback()
                    dispatch('setSucccess','Вы авторизованы')
                    commit('setData',success.user)
                    commit('setToken',success.token)             
                })
                .catch(()=>{})
        },       
    },
    mutations:{
        setData(state,data){
            state.data = data
        },
        setToken(state,token){
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
