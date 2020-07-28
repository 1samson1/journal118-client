

export default {
    actions:{
        cicleCheckToken({dispatch}){
            dispatch('checkToken')
            setInterval(() => {   
                dispatch('checkToken')
            }, 30000);
        },
        checkToken({commit,dispatch,state}){
            if (state.token) {
                dispatch('sendQuery',{
                    url:'/api/confirm.php',
                    body:{
                        token:state.token
                    },
                    success: (success) => {
                        commit('setData',success)
                    },
                    error:() =>{                    
                        commit('removeData')
                    },
                },{ root: true })
            }
        }, 
        login({state}) {       
            state     
           /*  SendQuery(this.domain + "/api/login.php", {
                login: data_login.login,
                pass: data_login.password,
            })
                .then((json) => {                    
                    if (json.error) {
                        return this.setError(json.error_info);
                    }
                    this.dataUser = json.response.user
                    this.dataToken = json.response.token 
                    this.setSucccess("Вы авторизованы")             
                })
                .catch((err) => this.setError(err.error_info)); */
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
            state.token = ''
            state.data = null 
        }
    },
    state:{
        token:'$2y$10$Eetuw0uk9y/avGA7Vr7x5.pLFCHkIz0vl8axm8F3/Mpe9SeYTLNtK',
        data:{},
    },
    getters:{
        getUserData(state){
            return state.data
        },
    },
}