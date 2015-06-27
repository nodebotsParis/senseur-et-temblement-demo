/**
 * Simple display of the data sent by the distance sensor by the socket.io server
 */

var socket = io('http://localhost:4000/');

socket.on('proximity', function (data) {
  setCircle(data);
  $('#distCont').html(data);
});

/**
 * set the circle scale and color
 * @param {int} data [value from socket.io (distance)]
 */
function setCircle(data){
  if (data > 130) data = 130;
  var  color = Math.floor(convertToRange(data,[0,130],[20,180]));
  var colorString = 'rgb(' + color +','+color +','+color +')';
  var scale = convertToRange(data,[0,130],[2,0.2]);
  var scaleString = 'scale('+scale+')';

  $('.circle').css({
    "transform": scaleString,
    'background-color':colorString,
  });
}

/**
 * convert range to range
 * @param  {int} value    [value to convert]
 * @param  {arr} srcRange [source range [min,max]]
 * @param  {arr} dstRange [applied range range [min,max]]
 * @return {int}          [mapped value]
 */
function convertToRange(value, srcRange, dstRange){
  // value is outside source range return
  if (value < srcRange[0] || value > srcRange[1]){
    return NaN;
  }

  var srcMax = srcRange[1] - srcRange[0],
      dstMax = dstRange[1] - dstRange[0],
      adjValue = value - srcRange[0];

  return (adjValue * dstMax / srcMax) + dstRange[0];

}
