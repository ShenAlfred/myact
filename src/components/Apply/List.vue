<template>
    <div>
        <tab class="act-tab" active-color="#fe4e52">
          <tab-item selected @on-item-click="fetchData(0)">
              活动列表
          </tab-item>
          <tab-item @on-item-click="fetchData(1)">
              我的活动
          </tab-item>
        </tab>
        <div class="act-lists">
            <div v-for="(item, $index) in lists">
                <flexbox class="act-item" @click.native="goDetail(item.id)">
                    <flexbox-item>
                        <h1 class="ellipsis">
                            {{item.title}}
                        </h1>
                        <div>
                            <span class="act-state" :class="{un_start:item.status==1, ing:item.status==2, end:item.status==3}"></span>
                            <span class="act-f-text">
                                {{ item.showInfo }}
                            </span>
                        </div>
                    </flexbox-item>
                    <div class="is-link">
                        <i class="fa fa-chevron-right"></i>
                    </div>
                </flexbox>
            </div>
            <a href="javascript:;" class="more">点击加载更多</a>
        </div>
    </div>
</template>
<style scoped>
    .is-link {
      width: 30px;
      text-align: center;
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
    import {Flexbox, FlexboxItem, Tab, TabItem} from 'vux';
    import api from '../../api'
    import config from '../../config'

    export default {
        data() {
            return {
                query: {                                                 //请求提交参数对象
                    currentState: 0,
                    pageNumber: 1
                },
                lists: []
            }
        },
        methods: {
            goDetail:function(id) {
                this.$router.push({ name: 'applyDetail', params: { applyId: id } })
            },
            fetchData: function(status, pagenumber) {
                var that = this;
                this.lists = [];
                this.query = {
                  currentState: status,
                  pageNumber: pagenumber ? pagenumber : 1
                };
                this.$ajax.post(config.baseUrl + api.getList, {
                    pageSize: 10,   		                      // 每页显示条数
                    pageNo: that.query.pageNumber,				          // 需要获取的页数
                    params: {
                      startTime: "",
                      endTime: "",
                      searchContent: "",
                      status: that.query.currentState,         		//1是我参与的, 0是所有的
                      order:"desc",
                      orderColumn:"startTime"
                    }
                    }).then(function(res) {
                        if(res.data.data.length) {
                            var data = res.data.data;
                            for(var i=0; i < data.length; i++) {
                                if(data[i].status == 1) {
                                    data[i].showInfo = '即将开始';
                                }else if(data[i].status == 2) {
                                    data[i].showInfo = '正在进行';
                                }else {
                                    data[i].showInfo = '已过期';
                                }
                                that.lists.push(data[i]);
                            }
                        }
                    })
              }
        },
        mounted: function() {
            const currentState= 0;
            this.fetchData(currentState);
        },
        components: {
            Flexbox,
            FlexboxItem,
            Tab,
            TabItem
        }
    }
</script>
