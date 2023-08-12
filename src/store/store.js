import { createStore } from 'vuex'
import { Posts } from './posts.js'


const delay = () => new Promise(res => setTimeout(res, 1000))

const posts = {
    namespaced: true,
    state(){
        return {
            count: 0,
            all: [],
            postId: null
        }
    },

    mutations : {
        INCREMENT(state, payload){
            state.count += payload || 1
        },

        SETPOSTS(state, posts){
            state.all = posts
            //console.log('In setposts')
        },

        setPostId(state, postId){
            state.postId = postId
            //console.log(state.postId)
        }
    },

    actions: {
        async fetch(ctx){
            await delay()
            ctx.commit('SETPOSTS', Posts)
        }
    },

    getters: {
        currentPost(state){
            return state.all.find(x => {
                return x.id === state.postId
            })
        }
    }
}

export const store = createStore({
    modules: {
        posts
    }
})