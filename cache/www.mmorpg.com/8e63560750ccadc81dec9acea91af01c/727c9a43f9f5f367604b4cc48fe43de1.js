
		//<![CDATA[
			function x() {
				if (document.searchForm.sitesearch.value != '')
					document.searchForm.submit();
			};
			
				var cookieBypass = false;
			
			
			function getVPmCount(userId){
				var params = new Object();
				params['userId'] = parseInt(0);
				http('post','/ajax/tools.cfc?method=vPmCount',getVPmCount_callback,params,true);			
			}
			
			function getVPmCount_callback(result){
				try {
					var vpm = parseInt(result);
					if(vpm > 0){
						$('#vmailcount').html("<a href='http://forums.mmorpg.com/sso?target=/messages/inbox' class='urmclink'><strong>"+result.messagecount+"</strong> PMs</a>");
					}
					else {
						$('#vmailcount').html("<a href='http://forums.mmorpg.com/sso?target=/messages/inbox' class='urmclink'>No PMs</a>");
					}
				}
				catch(err) {}
			}

			function showQuickGamelistPanel(){
				if(pageLoaded === true){
					var params	= new Object();
					http('post','/ajax/tools.cfc?method=buildGameDropdownList',buildQuickGamelistPanelCallback,params);
				}
				return false;
			}
			
			function buildQuickGamelistPanelCallback(result){
				$('#gqj').html(result);
				toggle('gqj');
			}
			
			function buildFavGamesDropdown(){
				if(pageLoaded === true){
					var params	= new Object();
					params['userId']	= 0;
					http('post','/ajax/tools.cfc?method=buildFavGamesDropdown',buildFavGamesDropdownCallback,params);
				}
				return false;
			}
			
			function buildFavGamesDropdownCallback(result){
				$('#favgamepanel').html(result);
				// First figure where to make it
				var linkposition = findPos(getObj('favgameslink'));
				var panelobj = getObj('favgamepanel');
				var windowsize = getWindowSize();
				var finalpos = parseInt(linkposition[0])-parseInt((parseInt(windowsize[0])-990)/2);
				
				if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)){
					finalpos = finalpos - 20;
				}
				
				
				// Show it
				panelobj.style.left = finalpos+"px";
				toggle('favgamepanel');
			
				return false;
			}
			
			
			function closeQuickGamelistPanel(){
				toggle('gqj');
			}

			

			function shadowBackdrop(state){
				if(pageLoaded === true){
					shadowy = getObj("shadowlayer");

					//Reset tip
					shadowy.style.display = 'none';
					shadowy.style.opacity = '0';
					shadowy.style.filter = 'alpha(opacity:0)';
					shadowy.style.visibility = "hidden";
					shadowy.style.top = "0px";
					shadowy.style.left = "0px";
					shadowy.style.width = "auto";
					shadowy.style.height = "auto";
					shadowy.innerHTML = "";
					shadowy.style.background = "transparent";
					if(parseInt(state) == 1){
						shadowy.style.opacity = '0.9';
						shadowy.style.filter = 'alpha(opacity:9)';
						shadowy.style.visibility = "visible";
						shadowy.innerHTML = "&nbsp;";
						shadowy.style.display = "block";
						shadowy.style.width = "100%";
						shadowy.style.height = "100%";
						shadowy.style.background = "#000";

						if (window.innerHeight && window.scrollMaxY) {// Firefox
							yWithScroll = window.innerHeight + window.scrollMaxY;
							xWithScroll = window.innerWidth + window.scrollMaxX;
						} else if (document.body.scrollHeight > document.body.offsetHeight){ // all but Explorer Mac
							yWithScroll = document.body.scrollHeight;
							xWithScroll = document.body.scrollWidth;
						} else { // works in Explorer 6 Strict, Mozilla (not FF) and Safari
							yWithScroll = document.body.offsetHeight;
							xWithScroll = document.body.offsetWidth;
					  }

					  shadowy.style.height = yWithScroll+"px";

					}
				}
			}
			
		//]]>
	