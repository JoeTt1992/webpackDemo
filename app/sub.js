/*
* @Author: lenovo
* @Date:   2017-12-19 09:30:56
* @Last Modified by:   lenovo
* @Last Modified time: 2017-12-19 09:31:08
*/
//我们这里使用CommonJS的风格
function generateText() {
  var element = document.createElement('h2');
  element.innerHTML = "Hello h2 world";
  return element;
}

module.exports = generateText;