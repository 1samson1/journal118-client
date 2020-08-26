import Vuex from 'vuex'
import Vue from 'vue'
import UserData from './modules/UserData'
import Alerts from './modules/Alerts'
import Admin from './modules/Admin'
import DarkTheme from './modules/DarkTheme'
import Journal from './modules/Journal'

import { SendQuery } from "@/components/request.js";

Vue.use(Vuex)

export default new Vuex.Store({ 
    actions:{        
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
        domain: "http://journal118.atwebpages.com",
    },

    modules:{
        UserData,
        Alerts,
        Admin,
        DarkTheme,
        Journal
    },    
})
