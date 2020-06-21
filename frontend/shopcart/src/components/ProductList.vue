<template>
    <div class='ProductList'>
        <div class='ProductList__AccountIcon'><i class="fa fa-2x fa-user-circle"></i></div>
        <ul class='ProductList__main' v-for='productItem in productItems' :key='productItem.id'>
            <ProductListItem :productItem='productItem'/>
        </ul>
        <p class='ProductList__ProductCount'># of product: {{ numOfProducts }}</p>
    </div>
</template>


<script>
import ProductListItem from '@/components/ProductListItem'
import { mapGetters } from 'vuex'

export default {
    name: 'ProductList',
    created(){
        this.$store.dispatch('getProductItems')
    },
    components:{
        ProductListItem
    },
    computed:{
        ...mapGetters(['productItems']),
        numOfProducts(){
            return this.productItems.length
        }
    }
}
</script>


<style scoped>
.ProductList{
    width: 60%;
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #ffffff;
    padding: 50px;
    border: 1px solid #ccc;
    border-radius: 15px;
}
.ProductList__ProductCount{
    text-align: right;
    width: 100%;
}
.ProductList__AccountIcon{
    width:100%;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    padding-bottom: 1rem;
}
.ProductList__main{
    width:100%;
    list-style: none;
    padding-left: 0;
}
</style>