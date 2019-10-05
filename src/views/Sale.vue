<template>
  <div class="row" style="min-height: 730px;margin-top: 20px">
    <div class="col-md-5 col-sm-12 col-xs-12">
      <div class="card" style="height: 100%">
        <div class="card-header text-center">
          <h5 class="card-title">Factura</h5>
        </div>

        <div class="card-body">
          <div class="form-group form-group-feedback form-group-feedback-left">
            <input type="text" class="form-control form-control-lg" autofocus placeholder="Barcode">
            <div class="form-control-feedback form-control-feedback-lg">
              <i class="icon-barcode2"></i>
            </div>
          </div>
          <div class="table-responsive" style="height: 313px;overflow-y:auto">
            <table class="table">
              <thead>
              <tr>
                <th><b>Product</b></th>
                <th><b>Price</b></th>
                <th><b>Quantity</b></th>
                <th><b>Total</b></th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>Popular</td>
                <td>$30</td>
                <td>1</td>
                <td>$30.00</td>
              </tr>
              <tr>
                <td>Economica</td>
                <td>$35</td>
                <td>2</td>
                <td>$70.00</td>
              </tr>
              <tr>
                <td>Burrito Mixto</td>
                <td>$125</td>
                <td>1</td>
                <td>$125.00</td>
              </tr>
              </tbody>
            </table>
          </div>
          <div class="row">
            <div class="col-md-12">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <tbody>
                  <tr>
                    <th><b>SubTotal</b></th>
                    <td>$190.00</td>
                    <td>3 items</td>
                  </tr>
                  <tr>
                    <th><b>Tax</b></th>
                    <td>$0.00</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th><b>Discount</b></th>
                    <td>0%</td>
                    <td></td>
                  </tr>
                  <tr>
                    <th><b>Total</b></th>
                    <td>$125.00</td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 10px">
            <div class="col-md-6 col-sm-12 col-xs-12">
              <button type="button" class="btn btn-danger btn-lg" style="width: 100%;height: 60px">Cancel<i class="icon-cross2 ml-2"></i></button>
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <button type="button" class="btn btn-success btn-lg" style="width: 100%;height: 60px">Payment<i class="icon-checkmark2 ml-2"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-md-7 col-sm-12 col-xs-12">
      <div class="card" style="height: 100%">
        <div class="card-body">
          <ul class="nav nav-tabs nav-tabs-bottom border-bottom-0 nav-justified">
            <li class="nav-item"><a href="#bottom-justified-divided-tab1" class="nav-link active" data-toggle="tab">Hot dog</a></li>
            <li class="nav-item"><a href="#bottom-justified-divided-tab2" class="nav-link" data-toggle="tab">Bebidas</a></li>
          </ul>
          <div class="row">
            <div class="col-xl-3 col-md-6" v-for="(product, index) in products" :key="index">
              <div class="card card-body hover-product" style="cursor: pointer">
                <div class="media">
                  <div class="mr-3">
                      <img src="https://st2.depositphotos.com/3371345/6790/i/950/depositphotos_67906661-stock-photo-ham-and-cheese-toasted-panini.jpg" class="rounded" width="60" height="60" alt="">
                  </div>
                  <div class="media-body">
                    <div class="font-weight-semibold">{{product.name}}</div>
                    <span class="" style="">$10</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
  // @ is an alias to /src
  export default {
    name: "home",
    components: {
    },
    data(){
      return {
        products:[
          {name:'Popular'},
          {name:'Economica'},
          {name:'Pizza'},
          {name:'Burrito'},
          {name:'Hot dog'},
          {name:'Hamburger'},
        ]
      }
    }
  };
</script>
<style>
  .hover-product:hover{
    background-color: #2dba50;
    color: white !important;
  }
</style>
