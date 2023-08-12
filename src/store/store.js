import { createStore } from 'vuex'
import { Posts } from './posts.js'


const delay = () => new Promise(res => setTimeout(res, 1000))

export const store = createStore({
    state(){
        return {
            count: 0,
            posts: [],
            postId: null
        }
    },

    mutations : {
        INCREMENT(state, payload){
            state.count += payload || 1
        },

        SETPOSTS(state, posts){
            state.posts = posts
            //console.log('In setposts')
        },

        setPostId(state, postId){
            state.postId = postId
            //console.log(state.postId)
        }
    },

    actions: {
        async fetchPosts(ctx){
            await delay()
            ctx.commit('SETPOSTS', Posts)
        }
    }
})