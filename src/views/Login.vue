<template>
    <div class="content d-flex justify-content-center align-items-center">
        <!-- Login form -->
        <form class="login-form" @submit.prevent="submit">
            <div class="card mb-0">
                <div class="card-body">
                    <div class="text-center mb-3">
                        <i class="icon-reading icon-2x text-slate-300 border-slate-300 border-3 rounded-round p-3 mb-3 mt-1"></i>
                        <h5 class="mb-0">Tomas POS</h5>
                        <span class="d-block text-muted">Ingrese sus credenciales a continuación</span>
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                        <input type="text"
                               class="form-control"
                               :class="{ 'is-invalid': $v.form.email.$error }"
                               placeholder="Email"
                               v-model="form.email">
                        <div class="form-control-feedback">
                            <i class="icon-user text-muted"></i>
                        </div>
                        <div
                                :class="{ 'text-danger': $v.form.email.$error }"
                                v-if="!$v.form.email.email && $v.form.email.$error">Se requiere un correo electronico</div>
                    </div>

                    <div class="form-group form-group-feedback form-group-feedback-left">
                        <input type="password"
                               class="form-control"
                               :class="{ 'is-invalid': $v.form.password.$error }"
                               placeholder="Password"
                               v-model="form.password">
                        <div class="form-control-feedback">
                            <i class="icon-lock2 text-muted"></i>
                        </div>
                    </div>

                    <div class="form-group">
                        <button type="submit"
                                class="btn btn-primary btn-block"
                                :disabled="isPetition" >Inicio de sesion<i :class="isPetition ? 'icon-spinner2 spinner' : 'icon-circle-right2 ml-2' "></i></button>
                    </div>

                    <div class="text-center">
                        <a href="#" v-if="!isPetition">Olvidaste tu contraseña?</a>
                    </div>
                </div>
            </div>
        </form>
        <!-- /login form -->
    </div>
</template>
<script>
    import { email, required } from 'vuelidate/lib/validators'
    export default {
        name:'login',
        data () {
            return {
                isPetition: false,
                form:{
                    email: "",
                    password: "",
                }
            }
        },
        validations: {
            form: {
                email:{
                    email,
                    required
                },
                password:{
                    required
                }
            }
        },
        methods:{
            submit(){
                this.$v.$touch();
                if (!this.$v.$invalid) {
                    this.login();
                }
            },
            login() {
                this.isPetition = true;
                const email = this.form.email;
                const password = this.form.password;
                this.$store.dispatch('account/login',{
                    email,
                    password
                })
                    .then(() => {
                        this.isPetition = false;
                        this.$router.push("/");
                    })
                    .catch((error) => {
                        this.$notify({
                            group: 'foo',
                            title: 'Error de credenciales',
                            text: 'Email o contraseña incorrectas',
                            type: 'warn ',
                        });
                        this.isPetition = false;
                    })

            }
        }
    }
</script>
