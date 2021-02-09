import Axios from 'axios'
const auth = {
    namespaced: true,
    state: () => {
        return {
            token: localStorage.getItem('token'),
            role: ''
        }
    },
    getters: {},
    mutations: {
        setState (state) {
            state
        }
    },
    actions: {
        signUp (context, payload) {
            return new Promise((resolve, reject) => {
                Axios.post(`${process.env.VUE_APP_BACKEND}/register`, payload).then(() => {
                    resolve(true)
                }).catch((err) => {
                    reject(err.response.data.message)
                })
            })
        },
        login ({ commit }, payload) {
            return new Promise((resolve, reject) => {
                Axios.post(`${process.env.VUE_APP_BACKEND}/login`, payload).then((res) => {
                    localStorage.setItem('token', res.data.data.token)
                    commit('setState', {
                        token: res.data.data.token
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