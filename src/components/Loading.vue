<template>
    <div class="load_background"></div>
    <div class="load_box">
    <div class='d-flex flex-column align-items-center'>
        <div class="loadingio-spinner-double-ring-dw1w6g0bhi"><div class="ldio-vhz49mox19n">
            <div></div>
            <div></div>
            <div><div></div></div>
            <div><div></div></div>
        </div></div>
        <div id="greeting">Please wait...We are working on it...</div>
    </div>
    </div>
</template>

<script>
    export default {
        name: 'AppLoading'
    }
</script>
<style>
    .load_background{
        background: #d9d9d9;
        opacity: 0.6;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 1110;
    }
    .load_box{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        align-content: stretch;
        position: absolute;
        z-index: 1111;
        width: 100%;
        height: 100%;
        font-weight: bold;
    }
    @keyframes ldio-vhz49mox19n {
        0% { transform: rotate(0) }
        100% { transform: rotate(360deg) }
    }
    .ldio-vhz49mox19n div { box-sizing: border-box!important }
    .ldio-vhz49mox19n > div {
        position: absolute;
        width: 144px;
        height: 144px;
        top: 28px;
        left: 28px;
        border-radius: 50%;
        border: 16px solid #000;
        border-color: #1d3f72 transparent #1d3f72 transparent;
        animation: ldio-vhz49mox19n 1s linear infinite;
    }

    .ldio-vhz49mox19n > div:nth-child(2), .ldio-vhz49mox19n > div:nth-child(4) {
        width: 108px;
        height: 108px;
        top: 46px;
        left: 46px;
        animation: ldio-vhz49mox19n 1s linear infinite reverse;
    }
    .ldio-vhz49mox19n > div:nth-child(2) {
        border-color: transparent #5699d2 transparent #5699d2
    }
    .ldio-vhz49mox19n > div:nth-child(3) { border-color: transparent }
    .ldio-vhz49mox19n > div:nth-child(3) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }
    .ldio-vhz49mox19n > div:nth-child(3) div:before, .ldio-vhz49mox19n > div:nth-child(3) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        top: -16px;
        left: 48px;
        background: #1d3f72;
        border-radius: 50%;
        box-shadow: 0 128px 0 0 #1d3f72;
    }
    .ldio-vhz49mox19n > div:nth-child(3) div:after {
        left: -16px;
        top: 48px;
        box-shadow: 128px 0 0 0 #1d3f72;
    }

    .ldio-vhz49mox19n > div:nth-child(4) { border-color: transparent; }
    .ldio-vhz49mox19n > div:nth-child(4) div {
        position: absolute;
        width: 100%;
        height: 100%;
        transform: rotate(45deg);
    }
    .ldio-vhz49mox19n > div:nth-child(4) div:before, .ldio-vhz49mox19n > div:nth-child(4) div:after {
        content: "";
        display: block;
        position: absolute;
        width: 16px;
        height: 16px;
        top: -16px;
        left: 30px;
        background: #5699d2;
        border-radius: 50%;
        box-shadow: 0 92px 0 0 #5699d2;
    }
    .ldio-vhz49mox19n > div:nth-child(4) div:after {
        left: -16px;
        top: 30px;
        box-shadow: 92px 0 0 0 #5699d2;
    }
    .loadingio-spinner-double-ring-dw1w6g0bhi {
        width: 200px;
        height: 200px;
        display: inline-block;
        overflow: hidden;

    }
    .ldio-vhz49mox19n {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
    }
    .ldio-vhz49mox19n div { box-sizing: content-box; }
</style>

