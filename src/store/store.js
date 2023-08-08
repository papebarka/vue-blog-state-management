import { createStore } from 'vuex'

export const store = createStore({
    state(){
        return {
            count: 0
        }
    },

    mutations : {
        INCREMENT(state, payload){
            state.count += payload || 1
        }
    }
})