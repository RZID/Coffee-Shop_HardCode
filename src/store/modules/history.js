import Axios from 'axios'
const history = {
    namespaced: true,
    actions: {
        addHistory (context, data) {
            return new Promise((resolve, reject) => {
                Axios.post(`${process.env.VUE_APP_BACKEND}/api/history`, data, {
                    headers: {
                        'token': context.getters.getToken
                    }
                }).then((res) => resolve(res)).catch((err) => reject(err))
            })
        }
    },
    getters: {
        getToken (state, getters, rootState, rootGetters) {
            return rootGetters['auth/getToken']
        }
    }
}
export default history