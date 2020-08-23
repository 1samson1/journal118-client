export default {
    actions:{  
        reg({dispatch},{body,done,lastly}){            
            dispatch('sendQuery',{ url:'/api/reg.php',body,},{ root: true })
                .then(()=> {
                    dispatch('setSucccess','Вы зарегистрированы')
                    done()
                })
                .catch(()=> {})
                .finally(() => lastly())
        }, 
        cicleCheckToken({dispatch}){
            dispatch('checkToken')
            setInterval(() => {
                dispatch('checkToken')
            }, 30000);
        },
        checkToken({commit, dispatch, state}){
            if (state.token) {
                dispatch('sendQuery',{ url:'/api/confirm.php',body:{token:state.token},},{ root: true })
                    .then(success=> commit('setData',success))
                    .catch(()=> commit('removeData'))
            }                         
        }, 
        logout({commit,dispatch}){
            dispatch('setSucccess','Вы вышли из аккаунта')
            commit('removeData')
        },
        login({dispatch, commit},{body,onlyLogin,done,lastly}) {       
            dispatch('sendQuery',{ url:'/api/login.php', body},{ root: true })
                .then((success)=>{                
                    dispatch('setSucccess','Вы авторизованы')
                    commit('setData',success.user)
                    commit('setToken',{token:success.token,onlyLogin})             
                    done()
                })
                .catch(()=>{})
                .finally(() => lastly())
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
        isAdmin(state){
            return state.data && (state.data.group_id === '1')
        },
        logined(state){
            return state.data === null
        },
        getUserData(state){
            return state.data
        },
        getToken(state){
            return state.token
        }
    },
}
