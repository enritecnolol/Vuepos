<template>
    <div class="row">
        <div class="col-md-8">
            <select class="form-control" style="width: 100px" v-model="size_paginate">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
            </select>
        </div>
        <div class="col-md-4" v-if="search">
            <div class="form-group form-group-feedback form-group-feedback-left">
                <input type="text" class="form-control form-control-lg" autofocus @keypress.enter="searchItem" placeholder="Buscar..." v-model="searchWord">
                <div class="form-control-feedback form-control-feedback-lg">
                    <i class="icon-search4"></i>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="table-responsive">
                <table class="table table-sm">
                    <thead>
                    <tr>
                        <th v-for="(item, index) in header" :key="index">{{item}}</th>
                        <slot name="extra-th"></slot>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-if="loading">
                        <td :colspan="header.length">
                            <div class="text-center">
                                <i class="icon-spinner2 spinner" style="font-size: 50px"></i>
                            </div>
                        </td>
                    </tr>
                    <tr v-else v-for="(row, index) in data" :key="index">
                        <td v-for="(item, key) in row" :key="key" v-if="!editBody">{{item}}</td>
                        <slot name="customization-body" :data="row"></slot>
                        <slot name="extra-td" :data="row"></slot>
                    </tr>
                    <tr v-if="data.length == 0 && !loading">
                        <td :colspan="header.length">
                            <div class="text-center">
                                <h3><i class="icon-info22" style="color: orange;font-size: 30px"></i> No hemos encontrado datos !!</h3>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                </table>

                <nav
                        aria-label="Page navigation example"
                        style="float: right"
                        v-if="makePagination"
                >
                    <ul class="pagination">
                        <li class="page-item">
                            <button class="page-link" aria-label="Previous" @click="changePage({action:'previous',page:''})">
                                <span aria-hidden="true">&laquo;</span>
                            </button>
                        </li>
                        <li class="page-item"
                            @click="changePage({action: pageNumber > pagination.current_page ? 'next':'previous',page:pageNumber})"
                            :class="{active: pagination.current_page === pageNumber}"
                            v-for="(pageNumber, index) in pagination.last_page"
                            v-if="Math.abs(pageNumber-pagination.current_page) < 3 || pageNumber == pagination.last_page - 1 || pageNumber == 1"
                            :key="index">
                            <a class="page-link"
                               style="color:black;"
                               :class="{
              last: (pageNumber == pagination.last_page - 1 && Math.abs(pageNumber - pagination.current_page) > 3),
              first:(pageNumber == 1 && Math.abs(pageNumber - pagination.current_page) > 2)
              }">
                                {{pageNumber}}
                            </a>
                        </li>
                        <li class="page-item">
                            <button class="page-link" aria-label="Next" @click="changePage({action:'next',page:''})">
                                <span aria-hidden="true">&raquo;</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:'standardTable',
        props:{
            makePagination:{
              type:Boolean,
              default:true
            },
            header:{
                type:Array
            },
            data:{
                type:Array
            },
            pagination:{
                type:Object
            },
            loading:{
                type:Boolean
            },
            editBody:{
                type:Boolean,
                default:false
            },
            search:{
                type:Boolean,
                default:false
            }
        },
        data()
        {
            return {
                searchWord:'',
                size_paginate:5,
            }
        },
        watch:{
          size_paginate()
          {
              this.$emit('size_paginateChange', this.size_paginate)
          }
        },
        methods:{
            changePage({action, page}){
                this.$emit("changePage", {
                    action:action,
                    page:page
                })
            },
            searchItem()
            {
                this.$emit('searchItem', this.searchWord)
            },
        }
    }
</script>

<style scoped>

</style>