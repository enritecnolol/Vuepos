<template>
    <div class="modal fade right" id="sidebar-right" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 ">
                                <div class="text-center">Facturacion</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    .modal.fade:not(.in).left .modal-dialog {
        -webkit-transform: translate3d(-25%, 0, 0);
        transform: translate3d(-25%, 0, 0);
    }
    .modal.fade:not(.in).right .modal-dialog {
        -webkit-transform: translate3d(25%, 0, 0);
        transform: translate3d(25%, 0, 0);
    }
    .modal.fade:not(.in).bottom .modal-dialog {
        -webkit-transform: translate3d(0, 25%, 0);
        transform: translate3d(0, 25%, 0);
    }

    .modal.right .modal-dialog {
        position:absolute;
        top:0;
        right:0;
        margin:0;
    }

    .modal.left .modal-dialog {
        position:absolute;
        top:0;
        left:0;
        margin:0;
    }

    .modal.left .modal-dialog.modal-sm {
        width:500px;
    }
    .modal.right .modal-dialog.modal-lg {
        width:50%;
    }

    .modal.left .modal-content, .modal.right .modal-content {
        min-height:100vh;
        border:0;
    }

</style>