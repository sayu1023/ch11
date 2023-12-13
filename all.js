// 11-01 範例
// document.write("Hello1129, JavaScript!");


//11-02 範例
// var myName = "David";	//宣告姓名 maName字串
// 	var myAge = 25;			//宣告年齡 myAge 數值
// 	var myHeight = 180, myWeight = 75;	//宣告身高 myHeight 數值
//     //體重 myWeight 體重  數值


//     document.write("下午好，我是" + myAge +",<br/>");

// 	document.write("大家好，我是" + myName + ",<br/>");
// 	document.write("身高" + myHeight +"公分，體重" + myWeight + "公斤，<br/>");
// 	document.write("今年" + myAge + "歲。");

//11-03 範例
// var a = prompt("請輸入數字2", "0"); //宣告一個 a變數 提示()
// if (a > 0) document.write("您輸入的值是正數");
//假如 a > 0 成立,然後(then) 印出 "字串內容"

// //11-04 範例
// var a = prompt("請輸入數字", "0");
// if (a >= 0) {
//     document.write("您輸入的值是正數");
// } else {
//     document.write("您輸入的值是負數");
// }

// //11-04 範例 自己練習
// var a = prompt("請輸入數字", "0");
// if (a%2 >= 1) {
//     document.write("您輸入的值是奇數");
// } else {
//     document.write("您輸入的值是偶數");
// }

// // //11-05 範例
// var a = prompt("請輸入數字", "0");
// (a >= 0) ? document.write("您輸入的值是正數") :
//     document.write("您輸入的值是負數");	

// // // //11-06 範例
// var score = prompt("請輸入分數", "0");
// 	if(score>=60 && score<70){
// 		document.write('丙等');
// 	}else if(score>=70 && score<80){
// 		document.write('乙等');
// 	}else if(score>=80 && score<90){
// 		document.write('甲等');
// 	}else if(score>=90 && score<=100){
// 		document.write('優等');
// 	}else{
// 		document.write('不及格');
// 	}	

// //11-07 範例
// var payway = prompt("請選擇付款方式：1.ATM匯款 2.刷卡 3.貨到付款", "1");
// switch (payway){
// 	case "1":
// 		document.write("我的付款方式為ATM匯款");
// 		break;
// 	case "2":
// 		document.write("我的付款方式為刷卡");
// 		break;
// 	case "3":
// 		document.write("我的付款方式為貨到付款");
// 		break;
// 	default:
// 		document.write("請選擇正確的付款方式");
// }

// //11-08 範例

// var i = 0; //設定 i 的變數 初值為0
// 	while (i<10){		
// 		i++;
// 		document.write(i + "<br> "); 
// 	}

// // //11-09 範例
// var i = 0;
// 	do {
// 		i++;
// 		document.write(i + " ");
// 	} while(i<10)





// // //11-10 範例
// var countI = 0;
// for (i=1;i<=10;i++){
//     countI += i;
// }
// document.write(countI);



// //11-10 範例 練習
// var j=2;    //var宣告的意思 
// for (i=1;i<=1;i++){
// 	j=j+j; 
// }
// document.write(j);



// var j=2;    //var宣告的意思 
// for (i=1;i<=2;i++){
// 	j=j+j; 
// }
// document.write(j);



var j=2;    //var宣告的意思 
for (i=1;i<10;i++){
	j=j+j; 
}
document.write(j);

// 2的平方
// document.write(2**2);


// var i = 0; //設定 i 的變數 初值為0
// 	while (i<10){	                       //滿足條件就不會跳出while迴圈
// 		i++;//i=i+1;	
// 		for(var j=0;j<i;j++){
// 			document.write("*" ); 
// 		}
		
// 		document.write("<br> "); 
// 	}
	