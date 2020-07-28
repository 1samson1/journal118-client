import Vuex from 'vuex'
import Vue from 'vue'
import UserData from './modules/userData'
import Alerts from './modules/Alerts'

import { SendQuery } from "@/components/request.js";

Vue.use(Vuex)

export default new Vuex.Store({ 
    actions:{
        sendQuery({state, dispatch},{url,body,success,error}){
            SendQuery(state.domain + url, body)
            .then((json) => {
                if (json.error) {
                    error()                    
                    dispatch('setError',json.error_info);
                }
                else {
                    success(json.response)
                }
            })
            .catch((err) => {
                dispatch('setError',err.error_info)
            }) 
        },
    },
    state:{
        domain: "http://journal118",
    },

    modules:{
        UserData,
        Alerts
    }
})
