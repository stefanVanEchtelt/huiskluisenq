<template>
    <transition name="modal">
        <div class="modal-mask"  @click="$emit('close')" >
            <div class="modal-dialog" :class="modalSize">
                <div class="modal-content" @click.stop>
                    <div class="modal-header">
                        <h4 class="modal-title">
                            <slot name="header">
                            </slot>
                        </h4>
                    </div>
                    <div class="modal-body" :class="{ 'modal-scrollable' : scroll }">
                        <slot name="body">
                        </slot>
                    </div>
                    <slot name="alerts" class="alert alert-warning">
                    </slot>
                    <div class="modal-footer">
                        <slot name="footer">
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>

    export default {
        props: {
            size: {
                default: 'lg',
            },
            scroll: {
                default: true
            },
            input: null,
        },
        computed: {
            modalSize() {
                return 'modal-' + this.size;
            }
        },
        mounted(){
            let component = this;
            window.addEventListener('keydown', function(e) {
                if(e.keyCode === 27){
                    component.$emit('close');
                }
            });
        },
    }
</script>
