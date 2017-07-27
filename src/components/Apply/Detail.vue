<template>
    <div class="apply-wrap">
        <div class="block-area">
            <h1 class="apply-title">
              {{ detail.title }}
            </h1>
            <h2 class="apply-f-title">
                {{ detail.subTitle }}
            </h2>
            <div>
                <span class="act-state" :class="{un_start:detail.status==1, ing:detail.status==2, end:detail.status==3}"></span>
                <span class="act-f-text">
                  {{ detail.showInfo }}
                </span>
            </div>
        </div>
        <div class="act-detail block-area" v-more-expand="75">
            <div class="act-d-inner" v-html="detail.content"></div>
            <div class="more-expand">
                点击查看
            </div>
        </div>
        <div class="act-info block-area">
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>开始时间: {{ detail.startTime }}</span>
            </div>
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>结束时间: {{ detail.endTime }}</span>
            </div>
            <div class="act-line">
                <i class="fa fa-clock-o"></i>
                <span>报名截止: {{ detail.endJoinTime }}</span>
            </div>
            <div class="act-line">
                <i class="fa fa-map-marker"></i>
                <span>活动地址: {{ detail.address }}</span>
            </div>
        </div>
        <a href="javascript:;" class="apply-btn" :class="{able:status==0, cancel:status==1, unable:(detail.status==2||detail.status==3) }" v-on:click="join()">
          {{status==1 ? '取消报名' : '点击报名'}}
        </a>
        <toast v-bind:tip-text="tipsText" v-model="showTips" close-time="5"></toast>
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
        height: 75px;
        overflow: hidden;
    }
    .more-expand {
        padding: 5px 0;
        width: 100%;
        font-size: 14px;
        text-align: center;
        background: #fff;
        border: 1px solid #ccc;
        margin-top: 10px;
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
    import api from '../../api'
    import config from '../../config'
    import Toast from '@/components/custom/toast.com'

    export default {
        data() {
            return {
                query: {
                    id: 0
                },
                detail: {},
                flag: true,                         //频繁操作
                status: 0,                          //是否报名
                showTips: false,                                                                      //是否显示toast提示框
                tipsText: "",                                                                          //toast提示框动态提示文本
                joined: ''
            }
        },
        mounted: function() {
            this.query.id = this.$route.params.applyId;
            this.fetchData(this.query);
        },
        methods: {
            fetchData: function(query) {
                var that = this;
                this.$ajax.post(config.baseUrl + api.detail, query)
                    .then(function(result) {
                        var data = result.data.data;
                        if(data) {
                            that.detail = data;
                            that.status = that.detail.joined;
                            that.joined = data.status;
                            if(data.status == 1) {
                              that.detail.showInfo = '即将开始';
                            }else if(data.status == 2) {
                              that.detail.showInfo = '正在进行';
                            }else {
                              that.detail.showInfo = '已过期';
                            }
                        }
                });
            },
            join: function() {
                var that = this;
                if(this.joined == 2 || this.joined == 3) {
                    return;
                }else {
                    if(this.flag) {
                        this.flag = false;
                        this.$ajax.post(config.baseUrl + api.join, {
                            activityId: this.query.id,
                            status: this.status == 0 ? 1 : 0
                        }).then(function(result) {
                            if(result.data.code == "0") {
                                that.status = that.status == 0 ? 1 : 0;
                                that.flag = true;
                                that.showTips = true;
                                that.tipsText = that.status == 0 ? '取消成功': '报名成功';
                            }
                        });
                    }
                }
            }
        },
        directives: {
            moreExpand: {
                bind: (el, binding, vnode) => {
                    const more = el.querySelector(".more-expand");
                    const art = el.querySelector(".act-d-inner");
                    var isExpand = false;
                    more.addEventListener('touchstart', function(ev) {
                        if(isExpand) {
                            art.style.height = binding.value+"px";
                            more.innerText = "点击查看";
                            isExpand = false;
                        }else {
                            art.style.height = 'auto';
                            more.innerText = "点击收起"
                            isExpand = true
                        }
                    });
                }
            }
        },
      components: {
        Toast
      }
    }
</script>
