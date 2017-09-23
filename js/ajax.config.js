//更新用户信息并且返回参数
	var UpdataUser = function(state,callback){
		var ajaxData = {
				url: 'user/getuser',
				data: 'uid='+state.user.uid,
				type: 'get'
			}
		ajax(ajaxData, function(data) {
		if(data.success === true) {
			state.user = data.user;
			app.setState(state);
			callback(data);
		} else {
			var errObj = {};
			errObj.success = err;
			callback(errObj)
		}
	});
	}
//更新用户星币增量记录并且返回参数
	var UpdataAddStar = function(state,callback){
		var ajaxData = {
				url: 'user/mih',
				data: 'uid='+state.user.uid,
				type: 'get'
			}
		ajax(ajaxData, function(data) {
		if(data.success === true) {
			state.addhistories = data.histories;
			app.setState(state);
			callback(data);
		} else {
			var errObj = {};
			errObj.success = err;
			callback(errObj)
		}
	});
}
	
//更新用户星币减量记录并且返回参数
	var UpdataLessStar = function(state,callback){
		var ajaxData = {
				url: 'user/mdh',
				data: 'uid='+state.user.uid,
				type: 'get'
			}
		ajax(ajaxData, function(data) {
		if(data.success === true) {
			state.lesshistories = data.histories;
			app.setState(state);
			callback(data);
		} else {
			var errObj = {};
			errObj.success = err;
			callback(errObj)
		}
	});
}

