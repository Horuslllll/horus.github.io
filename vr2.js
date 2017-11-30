


function f(){

};

var pg2={};

pg2.changeDigit=function(target,digit){target.innerHTML=digit;};
pg2.show=function(ID){document.getElementById(ID).style.display='inline';};
pg2.hide=function(ID){document.getElementById(ID).style.display='none';};
pg2.start=function(){var target = document.getElementById('digit');
setTimeout(function(){pg2.changeDigit(target,0);},1000);
setTimeout(function(){pg2.changeDigit(target,1);},2000);
setTimeout(function(){pg2.changeDigit(target,2);},3000);
setTimeout(function(){pg2.changeDigit(target,3);},4000);
setTimeout(function(){pg2.changeDigit(target,"GO!");},5000);
setTimeout(function(){pg2.changeDigit(target,"");},6000);
};

pg2.result_show=function(){pg2.show("page2_done");};
pg2.result_hide=function(){pg2.hide("page2_done");};

pg2.instruction_show=function(){pg2.show("instruction");};
pg2.instruction_hide=function(){pg2.hide("instruction");};

pg2.show_user_result=function(){

var right_checked=document.getElementById('right').checked;
var left_checked=document.getElementById('left').checked;
if(!right_checked&&!left_checked)return;
var str = "Ваш результат: ";
var str_right="Циклотим (Иррационал)";
var str_left="Шизотим (Рационал)";
var str2=(right_checked)?str+str_right:str+str_left;
document.getElementById("user_result").innerHTML=str2;
pg2.show("page2_user_result");
};
pg2.user_result_hide=function(){pg2.hide("page2_user_result");};