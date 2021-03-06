import Axios from 'axios'
const auth = {
    namespaced: true,
    state: () => {
        return {
            token: localStorage.getItem('token') || null,
            access: localStorage.getItem('access') || null,
            name: localStorage.getItem('name') || null,
            uid: localStorage.getItem('uid') || null
        }
    },
    getters: {
        getToken (state) {
            return state.token
        },
        getUserData (state) {
            return {
                access: state.access,
                name: state.name,
                uid: state.uid
            }
        }
    },
    mutations: {
        setState (state, payload) {
            state.token = payload.token
            state.access = payload.access
            state.name = payload.name
            state.uid = payload.uid
        },
        deleteState (state) {
            state.token = ''
            state.access = ''
            state.name = ''
            state.uid = ''
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
                    localStorage.setItem('uid', res.data.data.id)
                    commit('setState', {
                        token: res.data.data.token,
                        access: res.data.data.access,
                        name: res.data.data.display_name,
                        uid: res.data.data.id
                    })
                    resolve(true)
                }).catch((err) => {
                    if (err.response) {
                        reject(err.response.data.message)
                    } else {
                        reject('Something wrong')
                    }
                })
            })
        },
        logOut ({ commit }) {
            return new Promise((resolve) => {
                localStorage.removeItem('token')
                localStorage.removeItem('access')
                localStorage.removeItem('name')
                localStorage.removeItem('uid')
                commit('deleteState')
                resolve(true)
            })
        }
    }
}
export default auth