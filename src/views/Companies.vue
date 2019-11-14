<template>
    <div>
        <CompanyForm ref="CompanyForm" :company-data="company" :company="company" :loading="loading" @submit="createCompany" @edit="editCompany"/>
    </div>
</template>

<script>
    import { CompanyServices } from "../service/CompanyService";
    import CompanyForm from "../components/form/CompanyForm";
    export default {
        data()
        {
            return {
                loading:false,
                company:null
            }
        },
        components:{
            CompanyForm
        },
        methods:{
            createCompany(data)
            {
                this.loading = true;
                CompanyServices.storeCompany(data)
                    .then(res=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación Realizada',
                            text: 'La compañia se ingreso con exito',
                            type: 'success ',
                        });
                        this.$refs.CompanyForm.CleanForm();
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Compañia',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=>{
                        this.loading = false;
                    })
            },
            editCompany(data)
            {
                this.loading = true;
                CompanyServices.editCompany(data)
                    .then(res=> {
                        this.$notify({
                            group: 'foo',
                            title: 'Operación Realizada',
                            text: 'La compañia se ingreso con exito',
                            type: 'success ',
                        });
                        this.$refs.CompanyForm.CleanForm();
                        this.getCompany();
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Compañia',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=>{
                        this.loading = false;
                    })
            },
            getCompany()
            {
                this.loading = true;
                CompanyServices.getCompany()
                    .then(res=> {
                        this.company = res;
                    })
                    .catch(err => {
                        this.$notify({
                            group: 'foo',
                            title: 'Compañia',
                            text: err.response.data.message,
                            type: 'warn ',
                        });
                    })
                    .finally(()=>{
                        this.loading = false;
                    })
            }
        },
        created() {
            this.getCompany();
        }
    }
</script>

<style scoped>

</style>