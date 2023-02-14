import {createStore} from 'vuex'
// import { userStore } from './user.store.js'
import { contactStore } from './contact.store.js'

export const myStore = createStore({
    strict: true,
    state() {
        return {
            count: 10000,
        }
    },
    getters: {
        // Reusable accessing logic
        countForDisplay(state) {
            return state.count.toLocaleString()
        },
    },
    mutations: {
        // changeCount({count}, {diff}) {
        //     count += diff
        // },
        changeCount(state, payload) {
            state.count += payload.by
        },
    },
    actions: {
        incrementAsync(context, payload) {
            // console.log('context', context)
            setTimeout(() => {
                context.commit({ type: 'changeCount', by: payload.by })
            }, 2500)
        },
    },
    modules: {
        // userStore,
        contactStore
    }
})

myStore.subscribe((cmd, state) => {
    console.log('* Store state* Command:', cmd.payload)
    console.log('storeState:\n', state)
})

export default myStore