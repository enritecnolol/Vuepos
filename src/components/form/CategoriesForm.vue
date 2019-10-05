<template>
    <div>
        <form @submit.prevent="submit">
            <div class="form-row" style="margin-top: 20px">
                <div class="form-group col-md-12 col-sm-12 col-xs-12">
                    <label for="inputCode" :class="{ 'text-danger': $v.form.name.$error }" >Nombre</label>
                    <input
                            style="width: 300px"
                            type="text"
                            class="form-control"
                            id="inputCode"
                            placeholder="Nombre categoria"
                            :class="{ 'is-invalid': $v.form.name.$error }"
                            v-model.trim="form.name"
                    >
                    <div :class="{ 'text-danger': $v.form.name.$error }" v-if="!$v.form.name.required && $v.form.name.$error">Campo obligatorio</div>
                </div>
            </div>
            <div class="row" style="margin-top: 20px">
                <div class="col-md-12 col-sm-12">
                    <div class="text-center">
                        <button type="button" class="btn btn-lg btn-warning" style="margin-right: 20px;" @click="cleanForm" :disabled="loading"> <i class="icon-reload-alt"></i> Reset</button>
                        <button type="submit" class="btn btn-lg btn-primary" :disabled="loading"><i :class="loading ? 'icon-spinner2 spinner' : 'icon-upload4'"></i> Submit</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators';
    export default {
        props:{
          loading:{
              type:Boolean
          }
        },
        data(){
            return {
                form:{
                    id:'',
                    name:''
                }
            }
        },
        validations: {
            form: {
                name:{
                    required
                },
            },
        },
        methods:{
            CategoryDataForEdit(data){
                this.form.id = data.id;
                this.form.name = data.name;
            },
            submit() {
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    if(this.form.id){
                        this.$emit("edit", this.form);
                    }else{
                        this.$emit("insert", this.form);
                    }
                }
            },
            cleanForm(){
                this.form.id = '';
                this.form.name = '';
            }
        }
    }
</script>

<style scoped>

</style>