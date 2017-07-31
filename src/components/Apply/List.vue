<template>
    <div>
        <tab class="act-tab" active-color="#fe4e52">
          <tab-item :selected="currentState==0" @on-item-click="fetchData(0)">
              活动列表
          </tab-item>
          <tab-item :selected="currentState==1" @on-item-click="fetchData(1)">
              我的活动
          </tab-item>
        </tab>
        <div class="act-lists">
            <div v-show="currentState == 0">
              <div v-for="(item, $index) in lists.all">
                <flexbox class="act-item" @click.native="goDetail(item.id)">
                  <div class="act-state-line" :class="{un_start:item.status==1, ing:item.status==2, end:item.status==3}"></div>
                  <flexbox-item>
                    <h1 class="ellipsis">
                      {{item.title}}
                    </h1>
                    <div class="act-pd-space">
                      <div class="act-f-text ellipsis act-line">
                          <i class="fa fa-map-marker main-color" style="padding-left: 2px;"></i>
                          <span class="act-f-text">{{item.address}}</span>
                      </div>
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-clock-o main-color"></i>
                        <span class="act-f-text">
                          开始时间:&nbsp;{{item.showStartTime.year}}-{{item.showStartTime.month}}-{{item.showStartTime.date}}&nbsp;{{ item.showStartTime.hour }}:{{item.showStartTime.min}}
                        </span>
                      </div>
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-clock-o main-color"></i>
                        <span class="act-f-text">
                          结束时间:&nbsp;{{item.showStartTime.year}}-{{item.showStartTime.month}}-{{item.showStartTime.date}}&nbsp;{{ item.showEndTime.hour }}:{{item.showEndTime.min}}
                        </span>
                      </div>
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-clock-o main-color"></i>
                        <span class="act-f-text">
                          截止时间:&nbsp;{{item.showStartTime.year}}-{{item.showStartTime.month}}-{{item.showStartTime.date}}&nbsp;{{ item.showEndTime.hour }}:{{item.showEndTime.min}}
                        </span>
                      </div>
                    </div>
                  </flexbox-item>
                  <div class="is-link">
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </flexbox>
              </div>
              <a href="javascript:;" v-show="isData.all" class="more" v-on:click="getMore()">
                点击加载更多
              </a>
              <div class="more" v-if="!isData.all">
                没有更多的活动了!
              </div>
            </div>
            <div v-show="currentState ==1">
              <div v-for="(item, $index) in lists.my">
                <flexbox class="act-item" @click.native="goDetail(item.id)">
                  <div class="act-state-line" :class="{un_start:item.status==1, ing:item.status==2, end:item.status==3}"></div>
                  <flexbox-item>
                    <h1 class="ellipsis">
                      {{item.title}}
                    </h1>
                    <div class="act-pd-space">
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-map-marker main-color" style="padding-left: 2px;"></i>
                        <span class="act-f-text">{{item.address}}</span>
                      </div>
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-clock-o main-color"></i>
                        <span class="act-f-text">
                          开始时间:&nbsp;{{item.showStartTime.year}}-{{item.showStartTime.month}}-{{item.showStartTime.date}}&nbsp;{{ item.showStartTime.hour }}:{{item.showStartTime.min}}
                        </span>
                      </div>
                      <div class="act-f-text ellipsis act-line">
                        <i class="fa fa-clock-o main-color"></i>
                        <span class="act-f-text">
                          结束时间:&nbsp;{{item.showStartTime.year}}-{{item.showStartTime.month}}-{{item.showStartTime.date}}&nbsp;{{ item.showEndTime.hour }}:{{item.showEndTime.min}}
                        </span>
                      </div>
                    </div>
                  </flexbox-item>
                  <div class="is-link">
                    <i class="fa fa-chevron-right"></i>
                  </div>
                </flexbox>
              </div>
              <a href="javascript:;" v-show="isData.my" class="more" v-on:click="getMore()">
                点击加载更多
              </a>
              <div class="more" v-if="!isData.my">
                没有更多的活动了!
              </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .act-line {
      display: block;
      width: 100%;
    }
    .act-pd-space {
      padding: 5px;
    }
    .is-link {
      width: 30px;
      text-align: right;
      color: #c1c1c1;
    }
    .act-tab {
        position: fixed;
        top: 0;
        width: 100%;
    }
    .act-lists {
        padding-top: 45px;
    }
    .act-item {
        position: relative;
        background: #fff;
        margin: 10px 0;
        padding: 10px;
    }
    .act-item h1 {
        font-size: 16px;
        color: #333;
        font-weight: normal;
    }
</style>
<script>
    import {Flexbox, FlexboxItem, Tab, TabItem} from 'vux';
    import api from '../../api'
    import config from '../../config'
    import util from '../../util'

    export default {
        data() {
            return {
                currentState: 0,
                query: {                               //请求提交参数对象
                    all: {
                      currentState: this.currentState,
                      pageNumber: 1
                    },
                    my: {
                      currentState: this.currentState,
                      pageNumber: 1
                    }
                },
                lists: {
                    all: [],
                    my: []
                },
                recodePage: {
                    all: 1,
                    my: 1
                },
                isData: {                               //是否有數據
                    all: false,
                    my: false
                },
                params: {
                  startTime: "",
                  endTime: "",
                  searchContent: "",
                  status: 1,         		                      //1是我参与的, 0是所有的
                  order:"desc",
                  orderColumn:"startTime"
                }
            }
        },
        methods: {
            goDetail:function(id) {
                this.$router.push({ name: 'applyDetail', params: { applyId: id } })
            },
            getMore: function() {
                var that = this;
                if(this.query.currentState == 0) {
                    this.recodePage.all++;
                }else {
                    this.recodePage.my++;
                }
                this.params.status = that.query.currentState;
                this.$ajax.post(config.baseUrl + api.getList, {
                    pageSize: 10,   		                                                                              // 每页显示条数
                    pageNo: this.query.currentState == 0 ? this.recodePage.all : this.recodePage.my,				          // 需要获取的页数
                    params: this.params
                }).then(function(res) {
                    if(res.data.data.length) {
                        var data = res.data.data;
                        that.handleDataActiveState(data, that, that.query.currentState);
                        that.query.currentState == 0 ? that.isData.all = true : that.isData.my = true;
                        that.setIsData(that, true, that.query.currentState);
                    }else {
                        if(that.query.currentState == 0) {
                          that.isData.all = false;
                          that.recodePage.all--;
                        }else {
                          that.isData.my = false;
                          that.recodePage.my --;
                        }
                    }
                  })
            },
            fetchData: function(status) {
                var that = this;
                this.currentState = status;
                status == 0 ? that.lists.all = [] : that.lists.my = [];
                status == 0 ? this.recodePage.all = 1 : this.recodePage.my = 1;
                this.$store.commit('setCurrentIndex', status);
                this.query = {
                  currentState: status,
                  pageNumber: 1
                };
                if(status == 0) {
                    this.params.status = that.query.currentState;
                    this.$ajax.post(config.baseUrl + api.getList, {
                      pageSize: 10,   		                                                // 每页显示条数
                      pageNo: that.query.pageNumber,				                              // 需要获取的页数
                      params: this.params
                    }).then(function(res) {
                      if(res.data.data.length) {
                        var data = res.data.data;
                        that.handleDataActiveState(data, that, status);
                        that.setIsData(that, true, status);
                      }else {
                        that.setIsData(that, false, status);
                      }
                    });
                } else if(status == 1) {
                    this.params.status = this.query.currentState;
                    this.$ajax.post(config.baseUrl + api.getList, {
                        pageSize: 10,   		                                                // 每页显示条数
                        pageNo: that.query.pageNumber,				                              // 需要获取的页数
                        params: this.params
                    }).then(function(res) {
                        if(res.data.data.length) {
                          var data = res.data.data;
                          that.handleDataActiveState(data, that, status);
                          that.setIsData(that, true, status);
                        }else {
                          that.setIsData(that, false, status);
                        }
                    });
                }
            },
            handleDataActiveState: function(data, context, status) {
              for(var i=0; i < data.length; i++) {
                data[i].showStartTime = util.handleTime(data[i].startTime);
                data[i].showEndTime = util.handleTime(data[i].endTime);
                data[i].showEndJoinTime = util.handleTime(data[i].showEndJoinTime);
                status == 0 ? context.lists.all.push(data[i]) : context.lists.my.push(data[i]);
              }
            },
            setIsData(context, boolean, status) {
              status == 0 ? context.isData.all = boolean : context.isData.my = boolean;
            }
        },
        mounted: function() {
            this.currentState = this.$store.getters.getCurrentIndex ? this.$store.getters.getCurrentIndex : 0;
            if(config.isDevEnv) {
              const query = {
                ticket: this.$route.query.ticket
              };
              this.$ajax.get(config.baseUrl + "/activity/app", {
                params: {
                  ticket: query.ticket
                }
              }).then((response) => {
                this.fetchData(this.currentState);
              }).catch((response) => {

              });
            }else {
              this.fetchData(this.currentState);
            }
        },
        components: {
            Flexbox,
            FlexboxItem,
            Tab,
            TabItem
        }
    }
</script>
