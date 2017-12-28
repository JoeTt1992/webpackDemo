/*
* @Author: lenovo
* @Date:   2017-12-19 09:30:32
* @Last Modified by:   lenovo
* @Last Modified time: 2017-12-19 11:38:47
*/
var sub = require('./sub');
var $ = require('jquery');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World it</h1>';
document.body.appendChild(app);
app.appendChild(sub());
$('body').append('<p>look at me! now is</p>');