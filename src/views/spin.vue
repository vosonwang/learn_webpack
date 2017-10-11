<style>


    .loader {
        width: 30px;
        height: 30px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }

    .circular {
        -webkit-animation: rotate 1.5s linear 1;
        animation: rotate 1.5s linear 1;
        height: 100%;
        -webkit-transform-origin: center center;
        -ms-transform-origin: center center;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .path {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
        -webkit-animation: dash 1.5s ease-in-out 1, color 1.5s ease-in-out 1;
        animation: dash 1.5s ease-in-out 1, color 1.5s ease-in-out 1;
        stroke-linecap: round;
    }

    .success {
        -webkit-animation: success 1.875s ease-in-out 0s 1 alternate forwards;
        animation: success 1.875s ease-in-out 0s 1 alternate forwards;
    }

    @-webkit-keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @keyframes rotate {
        100% {
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
        }
    }

    @-webkit-keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }

    @keyframes dash {
        0% {
            stroke-dasharray: 1, 200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89, 200;
            stroke-dashoffset: -124;
        }
    }

    @-webkit-keyframes color {
        100%, 0% {
            stroke: #399AFC;
        }
    }

    @keyframes color {
        100%, 0% {
            stroke: #399AFC;
        }

    }

    @-webkit-keyframes success {
        0% {
            color: #8D8D8D;
        }
        80% {
            color: #399AFC;
        }
        100% {
            color: #fafafa;
        }
    }

    @keyframes success {
        0% {
            color: #8D8D8D;
        }
        80% {
            color: #399AFC;
        }
        100% {
            color: #fafafa;
        }
    }

</style>
<template>

    <Spin fix v-if=this.loading>
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="15" fill="none" stroke-width="2"
                        stroke-miterlimit="10"></circle>
            </svg>
            <Icon type="ios-checkmark-empty" class="success" style="font-size: 30px;color:#8D8D8D"></Icon>
        </div>
    </Spin>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        computed: {
            ...mapState({
                'loading': state => state.common.loading,
            }),
        },
    }
</script>