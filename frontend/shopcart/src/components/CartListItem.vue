<template>
    <li class='CartListItem'>
        <div class='CartListItem__head'>
            <h4 class='CartListItem__header'>{{ cart.title }}</h4>
            <span><i @click='addCart(cart)' class="fa fa-arrow-circle-up cart-item--modify"></i>
                <i @click='removeCart(cart)' class="fa fa-arrow-circle-down cart-item--modify"></i></span>
        </div>
        <div class='CartListItem__foot'>
            <strong class='CartListItem__price'>${{ cart.price}} each</strong>
            <p class='CartListItem__quantity'>Quantity: {{ cart.quantity }}</p>
        </div>
    </li>
</template>


<script>
export default {
    name:'CartListItem',
    props:['cart'],
    methods:{
        addCart(cart){
            this.$store.dispatch('addCart', cart)
            this.$store.dispatch('getCarts')
        },
        removeCart(cart){
            this.$store.dispatch('removeCart', cart)
            this.$store.dispatch('getCarts')
        }
    }
}
</script>

<style scoped>
.CartListItem{
    width: 100%;
    margin: 15px 0;
}
.fa{
    cursor: pointer;
    margin: 0 1px;
}
.CartListItem__head{
    display: flex;
    justify-content: space-between;
    margin: 10px 0;
}
.CartListItem__foot{
    display: flex;
    justify-content: space-between;
}
.CartListItem__header{
    width: fit-content;
    margin: 0;
}
.CartListItem__quantity{
    margin: 0;
}
.CartListItem__price{
    color: #00d1b2;
}
</style>