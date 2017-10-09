<style>
    /*loading*/
    .spin-col {
        position: relative;
        height: 40px;
    }

    .loader {
        width: 30px;
        height: 30px;
        position: relative;
        margin: 0 auto;
        overflow: hidden;
    }

    .circular {
        -webkit-animation: rotate 3s linear 2;
        animation: rotate 3s linear 2;
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
        -webkit-animation: dash 3s ease-in-out 2, color 3s ease-in-out 2;
        animation: dash 3s ease-in-out 2, color 3s ease-in-out 2;
        stroke-linecap: round;
    }

    .success {
        -webkit-animation: success 8s ease-in-out 0s 1 alternate forwards;
        animation: success 8s ease-in-out 0s 1 alternate forwards;
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
            stroke: #008100;
        }
    }

    @keyframes color {
        100%, 0% {
            stroke: #008100;
        }

    }

    @-webkit-keyframes success {
        0% {
            color: #8D8D8D;
        }
        75%{
            color: #008100;
        }
        100% {
            color: #fafafa;
        }
    }

    @keyframes success {
        0% {
            color: #8D8D8D;
        }
        75%{
            color: #008100;
        }
        100% {
            color: #fafafa;
        }
    }

</style>
<template>
    <Col class="spin-col" span="1">

    <Spin fix v-if="spinShow">
        <div class="loader">
            <svg class="circular" viewBox="25 25 50 50">
                <circle class="path" cx="50" cy="50" r="15" fill="none" stroke-width="2"
                        stroke-miterlimit="10"></circle>
            </svg>
            <Icon type="ios-checkmark-empty" class="success" style="font-size: 30px;color:#8D8D8D"></Icon>
        </div>
    </Spin>
    </Col>
</template>
<script>
    import Spin from "../../node_modules/iview/src/components/spin/spin.vue";

    export default {
        components: {Spin},
        data() {
            return {
                spinShow: true
            }
        }
    }
</script>