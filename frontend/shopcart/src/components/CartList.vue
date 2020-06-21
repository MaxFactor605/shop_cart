<template>
    <div class='CartList'>
        <div class='CartList__CartIcon'><i class="fa fa-2x fa-shopping-cart"></i></div>
        <ul class='CartList__list' v-for='cart in cartItems' :key='cart.id'>
            <CartListItem :cart='cart'/>
        </ul>
        <div class='CartList__inner'>
            <div class='CartList__info'>
                <div>Total Quality: {{ cartQuantity }} </div>
                <div class='CartList__deletebut' @click='removeAll'><i class="fa fa-trash"></i>Remove all</div>
            </div>
            <button class='CartList__but'>
                Checkout( $ {{ cartTotal }} )
            </button>
        </div>  
    </div>
</template>


<script>
import CartListItem from '@/components/CartListItem'
import { mapGetters } from 'vuex'


export default {
    name:'CartList',
    components:{
        CartListItem
    },
    created(){
        this.$store.dispatch('getCarts')
    },
    computed:{
        ...mapGetters(['cartItems', 'cartTotal', 'cartQuantity'])
    },
    methods:{
        removeAll(){
            this.$store.dispatch('removeAll')
            this.$store.dispatch('getCarts')
        }
    }
    
}
</script>

<style scoped>
.CartList{
    display: flex;
    flex-direction: column;
    width: 20%;
    height: 75%;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
}
.fa{
    cursor: pointer;
    margin: 0 5px;
}
.CartList__CartIcon{
    display: flex;
    justify-content: center;
    width: 100%;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
}
.CartList__but{
    width: 100%;
    color: #fff;
    background-color: #00d1b2;
    border: none;
    padding: 5px;
    font-size: 1rem;
    cursor: pointer;
}
.CartList__inner{
    width: 100%;
    margin: 5px;
}
.CartList__info{
    margin: 15px 0;
    font-size: 12px;
    display: flex;
    justify-content: space-around;
    width: 100%;
}
.CartList__list{
    list-style:none;
    padding-left: 0;
    width: 100%;
}
.CartList__deletebut{
    cursor: pointer;
}
</style>