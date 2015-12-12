module.exports = function(list = []) {
  var len = list.length;
  ReactDOM.render(
    <p>This dropdown contain {len} element{len > 1 ? 's' : ''}</p>, this);
};
