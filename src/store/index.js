import Vuex from 'vuex'
import UserData from './modules/userData'
import Alerts from './modules/Alerts'
import Admin from './modules/Admin'
import DarkTheme from './modules/DarkTheme'
import Journal from './modules/Journal'

import { SendQuery } from "@/components/request.js";


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
        domain: "http://192.168.0.56:5555", //This server domain
    },

    modules:{
        UserData,
        Alerts,
        Admin,
        DarkTheme,
        Journal
    },    
})
