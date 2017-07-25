<template>
    <div>
        <div class="act-tab">
            <flexbox>
                <flexbox-item>
                    <div class="tab-item">活动列表</div>
                </flexbox-item>
                <flexbox-item>
                    <div class="tab-item">我的活动</div>
                </flexbox-item>
            </flexbox>
        </div>
        <div class="act-lists">
            <ul>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
                <li class="act-item" v-on:click="goDetail()">
                    <h1 class="ellipsis">
                        这个夏天，带上小朋友们玩点不一样的--Little Inventors家长创意征集令来咯！
                    </h1>
                    <div>
                        <span class="act-state ing"></span>
                        <span class="act-f-text">活动进行中</span>
                        <span class="fr act-f-text">
                            【10/100】
                        </span>
                    </div>
                </li>
            </ul>
            <a href="javascript:;" class="more">点击加载更多</a>
        </div>
    </div>
</template>
<style scoped>
    .act-tab {
        position: fixed;
        top: 0;
        width: 100%;
        padding: 10px 0;
        background: #fff;
    }
    .tab-item {
        text-align: center;
        font-size: 14px;
    }
    .act-lists {
        padding-top: 45px;
    }
    .act-item {
        background: #fff;
        margin: 10px 0;
        padding: 10px;
    }
    .act-item h1 {
        font-size: 16px;
        color: #333;
    }
</style>
<script>
    import {Flexbox, FlexboxItem} from 'vux';
    export default {
        methods: {
            goDetail:function() {
                this.$router.push({ name: 'applyDetail', params: { applyId: 1 } })
            }
        },
        mounted: function() {

        },
        components: {
            Flexbox,
            FlexboxItem
        }
    }
</script>