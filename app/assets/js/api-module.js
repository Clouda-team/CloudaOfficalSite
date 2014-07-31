;$(function(){

	var getApis = function(){
		var arr = [];
		var obj;
		$('.api-item').each(function(i,item){
			obj = $(item);console.log(obj);
			if(obj.attr('checked')){
				arr.push(obj.data('name'));
			}
		});

		return arr;
	};

	$('.category-check').on('click',function(){
		var obj = $(this);
		console.log(obj);
		if(obj.attr('checked')){
			obj.closest('.group').find('.apilist-ul input[type="checkbox"]').attr('checked','checked');
		}else{
			obj.closest('.group').find('.apilist-ul input[type="checkbox"]').removeAttr('checked');
		}
	});

	$("#down-btn").click(function(){

		var apis = getApis();
		var m = "";
		// console.log("localhost/clouda-site/api-list.php?type=download&m="+m);
		// return
		

		
		if(apis.length <= 0){
			$("#codeTip").text("请勾选想要加载的js模块").show();
			setTimeout(function(){
				$("#codeTip").hide();
			},1500);
			return;
		}
		
		for(var i=0;i<apis.length;i++){
			m+='"'+apis[i]+'"';
			if(i != apis.length-1){
				m+=",";
			}
		}
		
		
		
		var code_str = 'blend.lightInit({\n\
	ak:apikey,\n\
	module:['+ m +']\n\
});';

		$(".code-box").show();
		$(".code-box pre").text(code_str);
		$(".code-box #code_pre").text(code_str);
		
		baidu.more.copyClipBoard('code_pre','copyMask','copy_btn','复制成功','html');
	
		
	});
	
	
	$('body').on('click','#copy_btn',function(){
		alert('hah');
	});


	$('body').on('click','.apilist-ul li',function(){
		var checkbox = $(this).find('.api-item');
		if(checkbox.attr('checked')){
			checkbox.removeAttr('checked');
		}else{
			checkbox.attr('checked','checked');
		}
	});

	$('body').on('click','.api-item',function(e){
		e.stopPropagation();
	});



});