<template>
  <div class="row" style="margin-top: 20px">
    <div class="col-md-12">
      <div class="card">
        <div class="card-header">
          <h3 class="card-title text-center">Productos</h3>
        </div>

        <div class="card-body">
          <div class="row">
            <div class="col-md-12">
              <div class="pull-right">
                <button type="button"
                        class="btn"
                        :class="showForm ? 'btn-danger':'btn-primary'"
                        style="float: right"
                        @click="showForm = !showForm">
                  <i :class="showForm ? 'icon-chevron-down' :'icon-plus22'"></i>
                  {{ showForm ? 'Ocultar':'Nuevo producto' }}
                </button>
                <button
                        type="button"
                        class="btn btn-primary"
                        data-toggle="modal"
                        data-target="#modal"
                        style="float: right; margin-right: 10px"><i class="icon-list"></i> Categorias</button>
              </div>
            </div>
            <div class="col-md-12" style="margin-top: 20px">
              <ProductForm v-if="showForm"></ProductForm>
            </div>
            <div class="col-md-12" style="margin: 10px" v-show="!showForm">
              <div class="table-responsive">
                <table class="table table-bordered">
                  <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <td>1</td>
                    <td>Eugene</td>
                    <td>Kopyov</td>
                    <td>@Kopyov</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Victoria</td>
                    <td>Baker</td>
                    <td>@Vicky</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>James</td>
                    <td>Alexander</td>
                    <td>@Alex</td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>Franklin</td>
                    <td>Morrison</td>
                    <td>@Frank</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Categories></Categories>
  </div>
</template>
<script>
  import ProductForm from "../components/form/ProductForm";
  import Categories from "./Categories";
  export default {
    components:{
      ProductForm,
      Categories
    },
    data(){
      return {
        showForm: false
      }
    },
    methods:{
      openCategoriesModal(){

      }
    }
  }
</script>
