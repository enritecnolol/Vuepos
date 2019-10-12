<template>
  <div class="row" style="min-height: 730px;margin-top: 20px">
    <div class="col-md-7 col-sm-12 col-xs-12">
      <card :loading="loading">
        <template v-slot:card-header>
          <div class="row">
            <div class="row-horizon">
              <span class="categories" :class="categorySelected =='' ? 'selectedGat' : ''" @click="changeCategorySelected('')"><i class="icon-home2"></i></span>
              <categorytab  v-for="(category, index) in categories" @changeCategorySelected="changeCategorySelected" :categorySelected="categorySelected" :category="category" :key="index"/>
            </div>
          </div>
        </template>
        <template v-slot:card-body>
          <div class="container-fluid">
            <div class="row">
              <div class="col" style="margin-bottom: 20px" v-for="(product, index) in products" :key="index">
                <product-card :product="product" />
              </div>
              <div class="col-md-12 col-sm-12" v-if="products.length == 0" style="margin-top: 40px">
                <div class="text-center">
                  <h3><i class="icon-info22" style="color: orange;font-size: 30px"></i> No hemos encontrado datos !!</h3>
                </div>
              </div>
            </div>
          </div>
        </template>
      </card>
    </div>
    <div class="col-md-5 col-sm-12 col-xs-12">
      <card>
        <template v-slot:card-header>
          <div class="row">
            <div class="col-md-12 text-center">
              Factura
            </div>
          </div>
        </template>
        <template v-slot:card-body>
          <productSearch />
          <SaleTable />
          <saleTotal />
          <div class="row" style="margin-top: 10px">
            <div class="col-md-6 col-sm-12 col-xs-12" :style="[Mobile ? {'margin-bottom':'10px'} : '']">
              <button
                      type="button"
                      class="btn btn-danger btn-lg"
                      @click="cancelOrder" style="width: 100%;height: 60px">Cancel<i class="icon-cross2 ml-2"></i></button>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <button
                      type="button"
                      class="btn btn-success btn-lg"
                      data-toggle="modal"
                      data-target="#modal" style="width: 100%;height: 60px">Payment<i class="icon-checkmark2 ml-2"></i></button>
            </div>
          </div>
        </template>
      </card>
    </div>
    <modalInvoice />
  </div>
</template>

<script>
  import { isMobile } from 'mobile-device-detect';
  import "../assets/css/bootstrap_horizon.css"
  import productCard from "../components/ProductCard/productCard";
  import categorytab from "../components/CategoriesTabs/categorytab";
  import card from "../components/card";
  import { mapState } from 'vuex'
  import standardTable from "../components/table/standardTable";
  import saleTotal from "../components/SaleTotal/saleTotal";
  import SaleTable from "../components/table/SaleTable";
  import productCardMobile from "../components/ProductCard/productCardMobile";
  import productSearch from "../components/search/productSearch";
  import modalInvoice from "../components/modals/modalInvoice";

  export default {
    name: "home",
    components: {
      productCard,
      categorytab,
      card,
      standardTable,
      saleTotal,
      SaleTable,
      productCardMobile,
      productSearch,
      modalInvoice
    },
    data(){
      return {
        loading:false,
      }
    },
    methods:{
      formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",")
      {
        try {
          decimalCount = Math.abs(decimalCount);
          decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

          const negativeSign = amount < 0 ? "-" : "";

          let i = parseInt(
                  (amount = Math.abs(Number(amount) || 0).toFixed(decimalCount))
          ).toString();
          let j = i.length > 3 ? i.length % 3 : 0;

          return (
                  negativeSign +
                  (j ? i.substr(0, j) + thousands : "") +
                  i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) +
                  (decimalCount
                          ? decimal +
                          Math.abs(amount - i)
                                  .toFixed(decimalCount)
                                  .slice(2)
                          : "")
          );
        } catch (e) {
          console.log(e);
        }
      },
      changeCategorySelected(category)
      {
        this.$store.dispatch('categories/changeCategorySelected',category);
        this.getProducts();
      },
      cancelOrder()
      {
        const options = {title: "Eliminar Orden", cancelLabel: "No", okLabel: "Si"};
        this.$dialogs.confirm('Esta seguro que quiere eliminar los productos que estan en la factura ?', options)
                .then(res => {
                  if(res.ok)
                  {
                    this.$store.dispatch('cart/removeAllItems')
                  }
                })
      },
      getProducts()
      {
        this.loading = true;
        this.$store.dispatch('products/getProducts', {
          category: this.categorySelected.id
        })
                .catch(err => {
                  this.$notify({
                    group: 'foo',
                    title: 'Lista de products',
                    text: err.response.data.message,
                    type: 'warn ',
                  });
                })
                .finally(()=> {
                  this.loading = false;
                });
      }
    },
    computed:{
      ...mapState({
        categories: state => state.categories.categories,
        products: state => state.products.products,
        CartItems: state => state.cart.cartItems,
        categorySelected: state => state.categories.categorySelected
      }),
      Mobile()
      {
        return isMobile;
      }
    },
    beforeCreate() {
      this.$store.dispatch('categories/getCategories')
    },
    created() {
      this.getProducts();
    }
  };
</script>
<style>
  .hover-product:hover{
    background-color: #2dba50;
    color: white !important;
  }
  .categories {
    box-shadow: 0px 0px 1px 0px rgba(0,0,0,0.75);
    cursor: pointer;
    text-align:center;
    margin:5px 0;
    margin-left: 6px;
    padding: 15px 25px;
    background-color: #f6f6f6;
    border-radius:3px;
    color:#6B6B6B;
    text-transform:uppercase;
    display:inline-block;
    font-weight:500;
    padding-bottom: 7px;
    border-bottom: 3px solid #6EC89B;
  }
  .selectedGat{
    background-color:#293a50;
    color:#f2f4f4;
    border-bottom: 3px solid #ec407a;
  }

</style>
