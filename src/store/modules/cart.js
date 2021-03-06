const cart = {
    namespaced: true,
    state: () => {
        return {
            currentCart: []
        }
    },
    mutations: {
        sendToCurrent (state, payload) {
            state.currentCart.push(payload)
        },
        deletingItemCart (state, payload) {
            const getIndex = state.currentCart.map(el => el.id).indexOf(payload)
            if (getIndex > -1) {
                state.currentCart.splice(getIndex, 1)
            }
        },
        addItemQty (state, payload) {
            state.currentCart.indexOf(payload.id)
        },
        deleteAllCart (state) {
            state.currentCart = []
        }
    },
    actions: {
        addToCart (context, data) {
            if (context.getters.getCart.filter(el => el.id == data.id).length > 0) {
                context.getters.getCart.map(el => {
                    if (el.id === data.id) {
                        el.qty = data.qty
                    }
                })
            } else {
                context.commit('sendToCurrent', data)
            }
        },
        deleteItemCart ({ commit }, id) {
            commit('deletingItemCart', id)
        },
        removeCart ({ commit }) {
            commit('deleteAllCart')
        }
    },
    getters: {
        getCart (state) {
            return state.currentCart
        }
    }
}
export default cart