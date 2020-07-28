import Vuex from 'vuex'
import Vue from 'vue'
import UserData from './modules/UserData'
import Alerts from './modules/Alerts'
import DarkTheme from './modules/DarkTheme'

import { SendQuery } from "@/components/request.js";

Vue.use(Vuex)

export default new Vuex.Store({ 
    actions:{
        cicleSendQuery({dispatch},data){
            dispatch('sendQuery',data)
            setInterval(() => {   
                dispatch('sendQuery',data)
            }, 30000);
        },
        sendQuery({state, dispatch},{url,body}){            
            return SendQuery(state.domain + url, body)
                .catch((err) => {
                    dispatch('setError',err.error_info)
                }) 
                .then((json) => {
                    return new Promise((resolve,reject)=>{
                        if (json.error) {
                            reject()                    
                            dispatch('setError',json.error_info);
                        }
                        else resolve(json.response)
                    })
                })
        },
    },
    state:{
        domain: "http://journal118",
    },

    modules:{
        UserData,
        Alerts,
        DarkTheme
    }
})
