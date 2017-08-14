/**
 * Created by admin on 2017/7/5.
 */
export default {
  isInteger: function (obj) {
    return parseInt(obj, 10) === obj
  },
  /**
   * 处理时间戳
   * @param timestamp
   * @returns {{}}
   */
  handleTime: function(timestamp) {
    var date = new Date(timestamp),
      result = {};
    result.year = date.getFullYear();
    result.month = date.getMonth()+1;
    result.date = date.getDate();
    result.hour = date.getHours();
    result.min = date.getMinutes();
    return result;
  }
}
