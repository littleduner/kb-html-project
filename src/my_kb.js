$(function () {
	var kb_profile = {
	'photo':'http://www.baidu.com'
	,'name':'lvcheng'
	,'age':'18'
	,'sex':'男'
	};
	
	

	$(function(){
    $('button').click(function(){
	  var url = $("input[type='text']").val(); 
			 $.ajax({
				 type: "GET",
				 url: url,
				 dataType: "json",
				 success: function(data){
						console.log(data);
						  },
				  error:function(XMLHttpRequest,errorinfo){
						alert("连接失败~");
				  }
						  
			 });
		});
	});
	
});