
	function trackClick(skinId,location,subSkinId){
		var params = new Object();
		params['skinId'] = parseInt(skinId);
		params['location'] = location;
		params['subSkinId'] = parseInt(subSkinId);		
		http('post','/ajax/tools.cfc?method=trackSkinClick',trackClick_callback,params,true);
	}
	function trackClick_callback(){}
