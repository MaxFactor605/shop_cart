import axios from 'axios'

const state = {
    cartItems:[]
}


const mutations = {
    UPDATE_CART_ITEMS(state, payload){
        state.cartItems = payload
    }
}


const actions = {
    getCarts({ commit }){
        axios.get('http://localhost:8000/api/carts').then((response) => {
            commit('UPDATE_CART_ITEMS', response.data)
        })
    },
    addCart({ commit }, cartItem){
        if (state.cartItems.find(cart => cart.title === cartItem.title)){
            if (!cartItem.quantity){
                cartItem = state.cartItems.find(cart => cart.title === cartItem.title)
            }
            cartItem.quantity++
            axios.put(`http://localhost:8000/api/carts/${cartItem.id}/`, cartItem).then((response) => {
                commit('UPDATE_CART_ITEMS', response.data)
        })
        }else{
            axios.post('http://localhost:8000/api/carts/', cartItem).then((response) => {
                commit('UPDATE_CART_ITEMS', response.data)
            })
        }
    },
    removeCart({ commit }, cartItem){
        if (cartItem.quantity === 1){
            axios.delete(`http://localhost:8000/api/carts/${cartItem.id}/`, cartItem).then((response) => {
                commit('UPDATE_CART_ITEMS', response.data)
        })
        }
        else{
            cartItem.quantity--
            axios.put(`http://localhost:8000/api/carts/${cartItem.id}/`, cartItem).then((response) => {
                commit('UPDATE_CART_ITEMS', response.data)
            })
            commit('UPDATE_CART_ITEMS', cartItem)
        }
    },
    removeAll({ commit }){
        state.cartItems.map((cartItem) => {
            axios.delete(`http://localhost:8000/api/carts/${cartItem.id}/`).then((response) => {
                commit('UPDATE_CART_ITEMS', response.data)
            })
        })
    }
}


const getters = {
    cartItems: state => state.cartItems,
    cartTotal: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return (cartItem.quantity * cartItem.price) + acc
        }, 0).toFixed(3)
    },
    cartQuantity: state => {
        return state.cartItems.reduce((acc, cartItem) => {
            return cartItem.quantity + acc
        }, 0)
    }
}


const cartModule = {
    state,
    mutations,
    actions,
    getters
}

export default cartModule

