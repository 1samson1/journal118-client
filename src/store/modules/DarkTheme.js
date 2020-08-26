export default {  
    actions:{
        changeDarkTheme({commit}){
            commit('toggleDarkTheme')
        }
    },
    mutations:{
        toggleDarkTheme(state){
            state.darkTheme === 'true'?state.darkTheme = 'false': state.darkTheme = 'true'
            localStorage.darkTheme = state.darkTheme
        }
    },
    state:{
        darkTheme:localStorage.darkTheme || 'true'
    },
    getters:{
        onDarkTheme(state){
            return state.darkTheme === 'true'
        }
    },
}