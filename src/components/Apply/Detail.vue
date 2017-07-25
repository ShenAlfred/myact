<template>
    <div class="apply-wrap">
        <div class="block-area">
            <h1 class="apply-title">这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！</h1>
            <h2 class="apply-f-title">
                这个夏天，带上小朋友们玩点不一样的（副标题）
            </h2>
            <div>
                <span class="act-state ing"></span>
                <span class="act-f-text">活动进行中</span>
                <div class="fr">
                    <span class="act-f-text">已报名: 10/100</span>
                </div>
            </div>
        </div>
        <div class="act-detail block-area">
            <div class="act-d-inner">
                <p>5月28日-7月9日在北京蓝色港湾央美术馆进行了Little Inventors儿童创意展北京站的展出。北京展览刚刚结束，Little Inventors又马不停蹄将天马行空的儿童创意作品带去了西安。</p>
                <img src="../../assets/demo/1.jpeg" alt="">
                <p>漏砂鞋：鞋下面有很多触须，当沙子进鞋子里以后，简单的抖一抖，就可以把沙子排到鞋子外面！</p>
                <img src="../../assets/demo/2.jpeg" alt="">
                <p>反方向望远镜：走在前面，可以看见后面的很远的东西。</p>
                <img src="../../assets/demo/3.jpeg" alt="">
                <p>电吹面风装置：这是一个可以戴在头上的蓝色的帽子，帽子上还有一个强力电风扇。当你吃的面条太烫的时候，可以打开电风扇，把面条快速的吹凉，上面还有一个用来照明的手电筒。</p>
            </div>
            <div class="more-expand">更多</div>
        </div>
        <div class="act-info block-area">
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>开始时间: 2017-07-11&nbsp;10:00</span>
            </div>
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>结束时间: 2017-08-11&nbsp;18:00</span>
            </div>
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>报名截止: 2017-07-20&nbsp;18:00</span>
            </div>
            <div class="act-line">
                <i class="fa fa-map-marker"></i>
                <span>活动地址: （上海闵行）虹桥天地购物中心3楼</span>
            </div>
        </div>
        <a href="javascript:;" class="apply-btn able">点击报名</a>
    </div>
</template>
<style scoped>
    .apply-wrap {
        /*padding: 0 10px;*/
        padding-bottom: 60px;
    }
    .block-area {
        background: #fff;
        padding: 0 10px 10px;
        margin-bottom: 10px;
    }
    .apply-title {
        padding: 20px 0 0;
        font-size: 18px;
        color: #a82425;
        text-shadow: 1px 1px 0 #fff;
        letter-spacing: 5px;
    }
    .apply-f-title {
        font-size: 14px;
        color: #666;
        padding-bottom: 10px;
        font-weight: normal;
    }
    .act-detail {
        padding-top: 10px;
    }
    .act-detail img {
        max-width: 100%;
    }
    .act-d-inner {
        position: relative;
        height: 80px;
        overflow: hidden;
    }
    .more-expand {
        padding: 5px 0;
        width: 100%;
        text-align: center;
        background: #fff;
    }
    .act-info {
        padding-top: 10px;
        color: #666;
        font-size: 14px;
    }
    .act-line {
        padding: 2px 0;
    }
    .apply-btn {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        text-align: center;
        font-size: 18px;
        border-radius: 5px 5px 0 0;
        text-decoration: none;
    }
    .apply-btn.able {
        background: #6393ff;
        color: #fff;
    }
    .apply-btn.unable {
        background: #ccc;
        color: #b1b1b1;
    }
    .apply-btn.cancel {
        background: #fe4e52;
        color: #fff;
    }
</style>
<script>
    export default {
        mounted: function() {
            const applyId = this.$route.params.applyId;
            console.log(applyId)
        }
    }
</script>