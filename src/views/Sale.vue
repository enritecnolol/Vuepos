<template>
    <div class="row" style="min-height: 100%;margin-top: 10px">
        <div class="col-md-12 col-lg-7 col-sm-12 col-xs-12" v-show="!MobileInvoiceView">
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
                    <div class="container-fluid"  style="overflow-y: auto" :class="Mobile || isTablet ? isTablet ? 'container-fluid-tablet': 'container-fluid-mobile' :'container-fluid-normal'">
                        <div class="row">
                            <div class="col-sm col-md-3 col-xs col-lg-2" :class="Mobile ? 'col' : ''" style="margin-bottom: 20px" v-for="(product, index) in products" :key="index">
                                    <product-card :product="product" />
                            </div>
                            <div class="col-md-12 col-sm-12" v-if="products.length == 0" style="margin-top: 40px">
                                <div class="text-center">
                                    <h3><i class="icon-info22" style="color: orange;font-size: 30px"></i> No hemos encontrado datos !!</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row" v-if="Mobile || isTablet" style="margin-top: 10px">
                        <div class="col-md-12">
                            <button
                                    :disabled="Total<=0"
                                    type="button"
                                    class="btn btn-success btn-lg"
                                    @click="MobileInvoiceView = true"
                                    style="width: 100%;height: 60px">Facturar<i class="icon-file-text ml-2"  style="font-size: 30px;"></i></button>
                        </div>
                    </div>
                </template>
            </card>
        </div>
        <div class="col-md-12 col-lg-5 col-sm-12 col-xs-12" v-show="!Mobile || MobileInvoiceView">
            <card>
                <template v-slot:card-header>
                    <div class="row">
                        <div class="col-md-12" v-if="Mobile">
                            <i class="icon-reply" style="font-size: 30px" @click="MobileInvoiceView = false"></i>
                        </div>
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
                        <div class="col-md-5 col-sm-12 col-xs-12" :style="[Mobile ? {'margin-bottom':'10px'} : '']">
                            <button
                                    type="button"
                                    class="btn btn-danger btn-lg"
                                    @click="cancelOrder" style="width: 100%;height: 60px">Cancel<i class="icon-cross2 ml-2"  style="font-size: 30px;"></i></button>
                        </div>
                        <div class="col-md-2 col-sm-12 col-xs-12" :style="[Mobile ? {'margin-bottom':'10px'} : '']">
                            <button
                                    :disabled="Total<=0"
                                    type="button"
                                    class="btn btn-primary btn-lg"
                                    style="width: 100%;height: 60px"
                                    @click="holdCart"
                            >
                                <i class="icon-pause" style="font-size: 30px;"></i>
                                <span class="badge bg-danger-400 badge-pill" style="position: absolute;right: -10px;top:-8px">{{holdCartList.length}}</span>
                            </button>
                        </div>
                        <div class="col-md-5 col-sm-12 col-xs-12">
                            <button
                                    :disabled="Total<=0"
                                    type="button"
                                    class="btn btn-success btn-lg"
                                    data-toggle="modal"
                                    data-target="#modal" style="width: 100%;height: 60px">Payment<i class="icon-checkmark2 ml-2"  style="font-size: 30px;"></i></button>
                        </div>
                    </div>
                </template>
            </card>
        </div>
        <modalInvoice @cardProduct="cardProductView"/>
    </div>
</template>

<script>
    import { dragscroll } from 'vue-dragscroll'
    import { isMobile, isTablet } from 'mobile-device-detect';
    import "../assets/css/bootstrap_horizon.css"
    import productCard from "../components/ProductCard/productCard";
    import categorytab from "../components/CategoriesTabs/categorytab";
    import card from "../components/card";
    import { mapState } from 'vuex'
    import saleTotal from "../components/SaleTotal/saleTotal";
    import SaleTable from "../components/table/SaleTable";
    import productCardMobile from "../components/ProductCard/productCardMobile";
    import productSearch from "../components/search/productSearch";
    import modalInvoice from "../components/modals/modalInvoice";
    import bootbox from 'bootbox'

    export default {
        name: "home",
        directives:{
            dragscroll
        },
        components: {
            productCard,
            categorytab,
            card,
            saleTotal,
            SaleTable,
            productCardMobile,
            productSearch,
            modalInvoice
        },
        data(){
            return {
                loading:false,
                MobileInvoiceView:false
            }
        },
        methods:{
            cardProductView()
            {
                if(this.Mobile)
                {
                    this.MobileInvoiceView = false;
                }
            },
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
            holdCart()
            {
                bootbox.prompt({
                    title: 'Proporcionar nota de pedido',
                    buttons: {
                        confirm: {
                            label: 'OK',
                            className: 'btn-primary'
                        },
                        cancel: {
                            label: 'Cancelar',
                            className: 'btn-link'
                        }
                    },
                    callback: (result) =>  {
                        if (result !== null) {
                            this.$store.dispatch('cart/holdCartSave', result)
                        }
                    }
                });
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
                categorySelected: state => state.categories.categorySelected,
                holdCartList: state => state.cart.holdCart
            }),
            Mobile()
            {
                return isMobile;
            },
            isTablet()
            {
                return isTablet;
            },
            Total()
            {
                return this.$store.getters['cart/Total']
            },
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

    .container-fluid-mobile{
        height: 360px;
    }
    .container-fluid-tablet{
        height: 560px;
    }

    .container-fluid-normal{
        height: 660px;
    }
</style>
