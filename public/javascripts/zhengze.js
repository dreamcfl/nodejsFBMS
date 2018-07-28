$(function(){
//	var ddbm = $('#billId').val();
//	var	spmc = $('#billName').val();
//	var spdj = $('#billCom').val();
//	var spsl = $('#billNum').val();
//	var zje = $('#money').val();
	
	//数字：^[0-9]*$
	//非负整数   ^[1-9]\d*|0$
	//中文字符  ^[\u4e00-\u9fa5]{0,}$
	//电话号码  ^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$
	//密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)：^[a-zA-Z]\w{5,17}$
	
	//非零开头的最多带两位小数的数字：^([1-9][0-9]*)+(.[0-9]{1,2})?
	
	$('#billId').blur(function(){
		var ddbm = $('#billId').val();
		console.log(ddbm)
		var reg = /^[0-9]*$/g;
		if(reg.test(ddbm) == true){
			console.log("aaa")
		}else{
			alert('请输入整数')
		}
	})
	
	
	
	$('#billCom').blur(function(){
		var spdj = $('#billCom').val();
		
		var reg = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/g;
		if(reg.test(spdj) == true){
			console.log("aaa")
		}else{
			alert('请输入大于0的正自然数，小数点后保留2位')
		}
	})
	
	$('#price1').blur(function(){
		var spdj = $('#price1').val();
		
		var reg = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/g;
		if(reg.test(spdj) == true){
			console.log("aaa")
		}else{
			alert('请输入大于0的正自然数，小数点后保留2位')
		}
	})
	
	$('#billNum').blur(function(){
		var spsl = $('#billCom').val();
		
		var reg = /^[1-9]\d*|0$/g;
		if(reg.test(spsl) == true){
			console.log("aaa");
		}else{
			console.log("bbb")
			
		}
	})
	
	$('#num1').blur(function(){
		var spsl1 = $('#num1').val();
		
		var reg = /^[1-9]\d*|0$/g;
		if(reg.test(spsl1) == true){
			console.log("aaa");
		}else{
			console.log("bbb")
			
		}
	})
	
	$('#money').focus(function(){
		var zje = $('#money').val();
			zje = parseFloat($('#billCom').val()) * parseInt($('#billNum').val());
			console.log(zje)
			$('#money').val(zje)
	})
	
	$('#money1').focus(function(){
		var zje1 = $('#money1').val();
			zje1 = parseFloat($('#price1').val()) * parseInt($('#num1').val());
			console.log(zje1)
			$('#money1').val(zje1)
	})
	
	
	$('#providerId').blur(function(){
		var gysbm = $('#providerId').val();
		
		var reg = /^[0-9]*$/g;
		if(reg.test(gysbm) == true){
			console.log("aaa")
		}else{
			alert('请输入整数')
		}
	})
	
	$('#phone').blur(function(){
		var lxdh = $('#phone').val();
		console.log(lxdh)
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
		if(reg.test(lxdh) == true){
			console.log("aaa")
		}else{
			alert('请输入正确电话号码')
		}
	})
	
	$('#userId').blur(function(){
		var yhbm = $('#userId').val();
		
		var reg = /^[0-9]*$/g;
		if(reg.test(yhbm) == true){
			console.log("aaa")
		}else{
			alert('请输入整数')
		}
	})
	
	$('#userphone').blur(function(){
		var yhdh = $('#userphone').val();
		console.log(yhdh)
		var reg = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/g;
		if(reg.test(yhdh) == true){
			console.log("aaa")
		}else{
			alert('请输入正确电话号码')
		}
	})
	
	
})
