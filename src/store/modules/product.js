import Axios from 'axios'
const product = {
    namespaced: true,
    state: () => {
        return {
            product: []
        }
    },
    mutations: {

    },
    actions: {
        setProduct (context) {
            return new Promise((resolve, reject) => {
                Axios.get(`${process.env.VUE_APP_BACKEND}/products`, {
                    headers: {
                        'token': context.getters.getToken
                    }
                }).then(res => resolve(res)).catch(err => reject(err))
            })
        }
    },
    getters: {
        getToken (state, getters, rootState, rootGetters) {
            return rootGetters['auth/getToken']
        }
    }
}
export default product