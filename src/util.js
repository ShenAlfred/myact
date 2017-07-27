/**
 * Created by admin on 2017/7/5.
 */
export default {
  isInteger: function (obj) {
    return parseInt(obj, 10) === obj
  },
  handleTime: function(timestamp) {
    var date = new Date(timestamp),
      result = {};
    result.year = date.getFullYear();
    result.month = date.getMonth()+1 < 10 ? "0"+(date.getMonth()+1) : date.getMonth();
    result.date = date.getDate() < 10 ? "0"+(date.getDate()+1) : date.getDate();
    result.hour = date.getHours() < 10 ? "0"+date.getHours() : date.getHours();
    result.min = date.getMinutes() < 10 ? "0"+date.getMinutes() : date.getMinutes();
    return result;
  }
}
