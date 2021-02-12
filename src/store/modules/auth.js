import Axios from 'axios'
const auth = {
    namespaced: true,
    state: () => {
        return {
            token: localStorage.getItem('token') || null,
            access: localStorage.getItem('access') || null,
            name: localStorage.getItem('name') || null
        }
    },
    getters: {
        getToken (state) {
            return state.token
        },
        getUserData (state) {
            return {
                access: state.access,
                name: state.name
            }
        }
    },
    mutations: {
        setState (state) {
            state
        }
    },
    actions: {
        signUp (context, payload) {
            return new Promise((resolve, reject) => {
                Axios.post(`${process.env.VUE_APP_BACKEND}/api/register`, payload).then(() => {
                    resolve(true)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
            })
        },
        login ({ commit }, payload) {
            return new Promise((resolve, reject) => {
                Axios.post(`${process.env.VUE_APP_BACKEND}/api/login`, payload).then((res) => {
                    localStorage.setItem('token', res.data.data.token)
                    localStorage.setItem('access', res.data.data.access)
                    localStorage.setItem('name', res.data.data.display_name)
                    commit('setState', {
                        token: res.data.data.token,
                        access: res.data.data.access,
                        name: res.data.data.display_name
                    })
                    resolve(true)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
            })
        }
    }
}
export default auth