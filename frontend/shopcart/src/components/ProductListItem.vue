<template>
        <li>
            <div class='ProductItem'>
                <div class='ProductItem__main'>
                    <h4 class='ProductItem__header'>{{ productItem.title }}<span @click='addCart(productItem)' class='ProductItem__but'>Add to card</span></h4>
                    <p class='ProductItem__description'>{{ productItem.description }}</p>
                    <strong class='ProductItem__price'>$ {{ productItem.price }}</strong>
                </div>
            </div>
        </li>
</template>

<script>
export default {
    name: 'ProductListItem',
    props:['productItem'],
    methods:{
        addCart(cart){
            this.$store.dispatch('addCart', cart)
            this.$store.dispatch('getCarts')
        }
    }
}
</script>

<style scoped>
.ProductItem{
    margin: 5px 0;
    display: flex;
    justify-content: space-between;
}
.ProductItem__header{
    margin: 5px 0;
}
.ProductItem__main{
    width: 100%;
}
.ProductItem__but{
    float: right;
    margin: 5px;
    color: #fff;
    background-color: #00d1b2;
    padding: 5px;
    font-size: 10px;
    cursor: pointer;
}
.ProductItem__price{
    color:#00d1b2;
}
.ProductItem__description{
    margin: 10px 0;
}
</style>