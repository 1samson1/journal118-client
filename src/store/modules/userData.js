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
        cicleCheckToken({dispatch,state}){
            dispatch('checkToken')
                .finally(() => state.loadingUserData = false)
            setInterval(() => {
                dispatch('checkToken')
            }, 120000);
        },
        checkToken({commit, dispatch, state}){
            if (state.token) {
                return dispatch('sendQuery',{ url:'/api/confirm.php',body:{token:state.token},},{ root: true })
                    .then(success=> commit('setUserData',success))
                    .catch(()=> commit('removeUserData'))
            }                         
        }, 
        logout({commit,dispatch,state}){
            dispatch('sendQuery',{ url:'/api/logout.php',body:{token:state.token},},{ root: true })
            commit('removeUserData')
            dispatch('setSucccess','Вы вышли из аккаунта')
        },
        logout_all({dispatch,state},{lastly}){
            dispatch('sendQuery',{ url:'/api/logout_all.php',body:{token:state.token},},{ root: true })
                .then(()=> dispatch('setSucccess','Все сеансы кроме текущего завершены!'))
                .catch(()=> {})
                .finally(() => lastly())
        },
        login({dispatch, commit},{body,onlyLogin,done,lastly}) {       
            dispatch('sendQuery',{ url:'/api/login.php', body},{ root: true })
                .then((success)=>{                
                    dispatch('setSucccess','Вы авторизованы')
                    commit('setUserData',success.user)
                    commit('setToken',{token:success.token,onlyLogin})             
                    done()
                })
                .catch(()=>{})
                .finally(() => lastly())
        },
        editProfile({dispatch,state,commit},{body,done,lastly}){            
            dispatch('sendQuery',{ 
                url:'/api/editProfile.php',
                body:{token:state.token,...body},
            },{ root: true })
                .then((success)=> {
                    dispatch('setSucccess','Изменения сохранены!')
                    commit('setUserData',success)
                    done()
                })
                .catch(()=> {})
                .finally(() => lastly())
        },        
    },
    mutations:{
        setUserData(state,data){
            state.userData = data
        },
        setToken(state,{token,onlyLogin}){
            if(onlyLogin)
                sessionStorage.token = token
            else
                localStorage.token = token

            state.token = token
        },
        removeUserData(state){
            localStorage.removeItem('token')
            sessionStorage.removeItem('token')
            state.token = ''
            state.userData = null 
        }
    },
    state:{
        token:localStorage.token || sessionStorage.token || '',
        userData:null,
        loadingUserData:true,
    },
    getters:{
        isAdmin(state){
            return state.userData && (state.userData.group_id === '1')
        },
        logined(state){
            return state.token !== ''
        },
        getUserData(state){
            return state.userData
        },
        getToken(state){
            return state.token
        },
        getloadingUserData(state){
            return state.loadingUserData
        }
    },
}
