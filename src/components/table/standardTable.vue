<template>
    <div class="table-responsive">
        <table class="table table-sm">
            <thead>
            <tr>
                <th v-for="(item, index) in header" :key="index">{{item}}</th>
                <slot name="extra-th"></slot>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(row, index) in data" :key="index">
                <td v-for="(item, key) in row" :key="key">{{item}}</td>
                <slot name="extra-td" :data="row"></slot>
            </tr>
            </tbody>
        </table>

        <nav
                aria-label="Page navigation example"
                style="float: right"
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
                    v-if="Math.abs(pageNumber-pagination.current_page) < 2 || pageNumber == pagination.last_page - 1 || pageNumber == 1"
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
</template>

<script>
    export default {
        name:'standardTable',
        props:{
            header:{
                type:Array
            },
            data:{
                type:Array
            },
            pagination:{
                type:Object
            }
        },
        methods:{
            changePage({action, page}){
                this.$emit("changePage", {
                    action:action,
                    page:page
                })
            }
        }
    }
</script>

<style scoped>

</style>