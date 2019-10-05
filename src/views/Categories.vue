<template>
    <modal>
        <template v-slot:modalHeader>
            <h5 class="modal-title">Categorias</h5>
        </template>
        <template v-slot:modalBody>
            <div class="row">
                <div class="col-md-12">
                    <button type="button"
                            class="btn"
                            :class="showForm ? 'btn-danger':'btn-primary'"
                            style="float: right"
                            @click="showForm = !showForm">
                        <i :class="showForm ? 'icon-chevron-down' :'icon-plus22'"></i>
                        {{ showForm ? 'Ocultar':'Nueva categoria' }}
                    </button>
                    <select class="form-control" style="width: 100px" v-model="size_paginate" v-if="!showForm">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                    </select>
                </div>
            </div>
            <CategoriesForm ref="CategoriesForm"
                            v-show="showForm"
                            :loading="loading"
                            @insert="insertCategory"
                            @edit="editCategory"
            ></CategoriesForm>
            <standardTable
                           v-if="!showForm"
                           :header="header"
                           :data="table_data"
                           :pagination="pagination"
                           style="margin-top: 20px"
                           @changePage="changePage"
            >
                <template v-slot:extra-th>
                    <th></th>
                </template>
                <template v-slot:extra-td="{data}">
                    <td>
                        <Button class="btn btn-warning" @click="EditCategory(data)"><i class="icon-pencil"></i> Editar</Button>
                        <Button class="btn btn-danger" style="margin-left: 10px" @click="deleteCategory(data)"><i class="icon-trash"></i> Eliminar</Button>
                    </td>
                </template>
            </standardTable>
        </template>
    </modal>
</template>

<script>
    import modal from "../components/modals/modal";
    import standardTable from "../components/table/standardTable";
    import CategoriesForm from "../components/form/CategoriesForm";
    import { CategoriesServices } from "../service/CategoriesServices";

    export default {
        components:{modal, standardTable, CategoriesForm},
        data(){
            return {
                size_paginate:5,
                loading:false,
                showForm:false,
                header:[],
                table_data:[],
                pagination:{}
            }
        },
        watch:{
            size_paginate()
            {
                this.getCategoriesPaginate()
            }
        },
        methods:{
            EditCategory(data){
                this.showForm = !this.showForm;
                this.$refs.CategoriesForm.CategoryDataForEdit(data);
            },
            changePage({action, page}){
                if(action == 'next'){
                    this.getCategoriesPaginate(this.pagination.next_page_url)
                }else if (action == 'previous'){
                    this.getCategoriesPaginate(this.pagination.prev_page_url)
                }
            },
            deleteCategory(data){
                this.loading = true;
                CategoriesServices.deleteCategory(data)
                    .then(res => {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación Realizada',
                            text: 'La categoria se elimino con exito',
                            type: 'success ',
                        });
                        this.getCategoriesPaginate();
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Categoria',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                    })
            },
            editCategory(data){
                this.loading = true;
                CategoriesServices.editCategory(data)
                    .then(res=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación Realizada',
                            text: 'La categoria se edito con exito',
                            type: 'success ',
                        });
                        this.getCategoriesPaginate();
                        this.$refs.CategoriesForm.cleanForm();
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Categoria',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                        this.showForm = !this.showForm;
                    })
            },
            insertCategory(data){
                this.loading = true;
                CategoriesServices.insertCategory(data)
                    .then(res=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación Realizada',
                            text: 'La categoria se ingreso con exito',
                            type: 'success ',
                        });
                        this.$refs.CategoriesForm.cleanForm();
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Categoria',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                    })
            },
            getCategoriesPaginate(url){
                this.loading = true;
                CategoriesServices.getCategoriesPaginate({size:this.size_paginate, url:url})
                    .then(res=> {
                        this.table_data =  res.data;
                        this.header = ['Id', 'Nombre'];
                        var pagination = res;
                        delete res['data'];
                        this.pagination = res;
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Categoria',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=> {
                        this.loading = false;
                    })
            }
        },
        created() {
            this.getCategoriesPaginate();
        }
    }
</script>

<style scoped>

</style>