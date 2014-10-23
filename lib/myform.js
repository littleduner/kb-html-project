(function ($) {
	/*正则表达式*/
	var regex = {
		'pInt': [ /^[1-9]\d*$/ , '该填写项只能为正整数']
		,'nInt': [ /^-[1-9]\d*$/ , '该填写项只能为负整数']
		,'int': [ /^-?[1-9]\d*$/ , '该填写项只能为整数']
		,'pfloat': [ /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/ , '该填写项只能为正数']
		,'nfloat': [ /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/ , '该填写项只能为负数']
		,'float': [ /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/ , '该填写项只能为数字']
		,'pNumber': [ /^([1-9]\d*|\d+\.\d+)$/ , '该填写项只能为正数']
		,'email': [ /\w+([-+\.]\w+)*@\w+([-\.]\w+)*\.\w+([-\.]\w+)*/ , '请填写正确的email格式']
		,'phoneNumber' : [ /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/ , '请填写正确的手机号码' ]
		,'telNumber' : [ /^((\d{3,4}-)|\d{3.4}-)?\d{7,8}$/ , '请填写正确的座机号码' ]
		,'text' : [ function (value) {
			if(value  >100 )return '不能大于100';
			else return '';
		}]
	};

	/*按照类型校验*/
	var checkType = function (value,type) {
		var flag = regex[type][0];
		if(value){
			if(typeof flag == 'function'){
				var msg = flag(value);
				if( msg) return msg;
				else false;
			} else {
				if(!regex[type][0].test(value))
					return regex[type][1];
			}
		}
		return false;
	};
	/*提示框颜色*/
	var stateColor = {
		'error': '#A94442'
		,'normal': '#000000'
	};
	/*建立提示框*/
	var buildTooltip = function (opts) {
		var $this = opts.control
			,title = opts.title
			,state = opts.state;
		$this.tooltip('destroy').tooltip({
			placement : "right"
			,trigger : "focus"
			,bgcolor : stateColor[state]
			,title : title
		});
	};

	/*按照条件校验表单*/
	var checkControl = function (opts) {
		var $this = opts.$this
			,required = $this.attr('group-required') || false
			,$control = $this.find('.form-control')
			,value = $control.val()
			,title = $control.attr("normal-title")
			,type = $control.attr("validate-type") || false
			,minlength = $control.attr("minlength") || 0
			,hasRequired = opts.hasRequired;
		$this.removeClass('has-success');
		$this.find('.tooltip').remove();//清除垃圾tooltip
		
		if(required) { //是否必填
			if(hasRequired) {
				if(value) {
					$this.removeClass('has-error');
				}else {
					$this.addClass('has-error');
					buildTooltip({control : $control, title : '该填写项不能为空', state : 'error'});
					return;
				}
			}
		}
		if(type) { //根据类型校验
			if(value || hasRequired) {
				var errorMsg = checkType(value,type);
				if(errorMsg) {
					$this.addClass('has-error');
					buildTooltip({control : $control, title : errorMsg, state : 'error'});
					return;
				}else {
					$this.removeClass('has-error');
				}
			}
		}
		if(minlength!=0) { //判断最小长度
			if(value || hasRequired) {
				if(value.length < minlength){
					$this.addClass('has-error');
					buildTooltip({control : $control, title : '该填写项不得少于'+ minlength +'位', state : 'error'});
					return;
				}else {
					$this.removeClass('has-error');
				}
			}
		}
		$this.removeClass('has-error');
		$this.addClass('has-success');
		$control.tooltip('destroy');
	};
	
	
	

	/*初始化表单*/
	$.fn.initForm = function () {
		var $form = $(this)
			,$formGroup = $form.find('.form-group');

		$formGroup.each(function () {
			var $this = $(this)
				,$control = $this.find('.form-control')
				,title = $control.attr("normal-title")
				,type = $control.attr('type');
		
			buildTooltip({control : $control, title : $control.attr('normal-title'), state : 'normal'});
			$control.blur(function () {
				checkControl({
					$this : $this,
					hasRequired : true
				});
			});
		});
	}
	
	/*校验表单*/
	$.fn.checkForm = function () {
		var $form = $(this)
			,$formGroup = $form.find('.form-group');
		$formGroup.each(function () {
			var $this = $(this)
			checkControl({
				$this :$this,
				hasRequired : true
			});
		});
		 if ($form.find('.has-error:first').length > 0) {
            $form.find('.has-error:first .form-control')[0].focus();
            return false;
        } else {
            return true;
        }
	}
	
	/*校验表单无非空验证*/
	$.fn.checkFormNoReq = function () {
		var $form = $(this)
			,$formGroup = $form.find('.form-group');
		$formGroup.each(function () {
			var $this = $(this)
			checkControl({
				$this :$this,
				hasRequired : false
			});
		});
		 if ($form.find('.has-error:first').length > 0) {
            $form.find('.has-error:first .form-control')[0].focus();
            return false;
        } else {
            return true;
        }
	}
	
	/*重置表单*/
	$.fn.resetForm = function () {
		var $form = $(this)
			,$formGroup = $form.find('.form-group');
		$form[0].reset();
		$formGroup.each(function () {
			var $this = $(this)
				,$control = $this.find('.form-control');
			$this.removeClass('has-error').removeClass('has-success');
			buildTooltip({control : $control, title : $control.attr('normal-title'), state : 'normal'});
		});
	}
	
	/*获取表单信息*/
	$.fn.getFormInfo = function () {
		var $form = $(this),
            $formGroup = $form.find('.form-group'),
            formInfo = {};
        $formGroup.each(function () {
        	var $this = $(this),
                $control = $this.find('.form-control'),
                key = $control.attr('name'),
                value = $control.val();
            formInfo[key] = value;
        });
        return formInfo;     
	}

}) (jQuery);