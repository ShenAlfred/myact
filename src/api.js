/**
 * Created by admin on 2017/6/16.
 */
const api = {
  getUserInfo:        '/stock/api/user',         //获取用户信息
  getStockList:       '/stock/api/codematch',    //模糊匹配股票信息
  attentionStocks:    '/stock/api/selflist',     //用户关注股票信息
  remindStock:        '/stock/api/change',       //开启或关闭提醒按钮
  addStock:           '/stock/api/add',          //添加股票
  editStock:          '/stock/api/edit',         //修改股票
  delStock:           '/stock/api/del',          //用户删除关注的股票
  getStockInfo:       '/stock/api/selfstock',    //用户关注股票信息
  getPlant:              '/stock/api/platform'      //获取平台数据
};

export default api;