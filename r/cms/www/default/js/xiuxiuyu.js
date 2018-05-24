// JavaScript Document
$(document).ready(function(){
var num;
$('.main-nav>li[id]').hover(
function(){
var obj = $(this).attr('id');
num = obj.substring(7,obj.length);
//alert(num);
$('#hidden-box-'+num).slideDown(500);
},
function(){
$('#hidden-box-'+num).hide();
});
});