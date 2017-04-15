
		var haveFocus	= true;
		function onBlur() {
			haveFocus = false;
		};
		function onFocus(){
			haveFocus = true;
		};

		if (/*@cc_on!@*/false) { // check for Internet Explorer
			document.onfocusin = onFocus;
			document.onfocusout = onBlur;
		} else {
			window.onfocus = onFocus;
			window.onblur = onBlur;
		}

		var recentPosts = new Array();
		var tickerRunning = true;
		var recentPostsGrabCount	= 0;

        function injectRecentPosts_callback(response){
            if(response.data.length > 0){

                var recentPosts = "";

                for(i=0;i<=4;i++){
                    //url = response.data[i].url;
                    url = 'http://forums.mmorpg.com/discussion/'+response.data[i].discussionid;
                    if(response.data[i].lastcommentid > 0){
                            url = 'http://forums.mmorpg.com/discussion/comment/'+response.data[i].lastcommentid+'/#Comment_'+response.data[i].lastcommentid;
                    }
                    var ago = moment((moment.utc(response.data[i].lastcomment, "YYYY-MM-DD HH:mm:ss"))).fromNow();  //"2015-08-12 15:47:29"

                    ago = ago.replace("a minute", "1 minute");
                    ago = ago.replace(" minutes", "m");
                    ago = ago.replace(" minute", "m");
                    ago = ago.replace(" hours", "h");
                    ago = ago.replace("an hour", "1h");
                    ago = ago.replace(" hour", "h");
                    ago = ago.replace('a few seconds ago', 'Now');

                    var photo = response.data[i].lastphoto;
                    var isPhoto = true;
                    if(photo == "" || photo == "null" || photo == null || photo == undefined){
                        isPhoto = false;
                    }

                    recentPosts = recentPosts + '<tr id="Discussion_'+response.data[i].lascommentid+'" class="Item ItemDiscussion">'+
                        '<td class="whoami">' + ((isPhoto) ? '<img src="'+response.data[i].lastphoto+'" border="0" />' : '') + '</td>'+
                        '<td class="what" valign="top" align="left"><a href="'+url+'">'+response.data[i].name+'</a><br /><span class="small">Posted by <a href="//forums.mmorpg.com/profile/'+response.data[i].lastname+'" class="less">'+response.data[i].lastname+'</a> in <u><a href="//forums.mmorpg.com/categories/'+response.data[i].categoryurl+'" class="less">'+response.data[i].category+'</a></u></span></td>'+
                        '<td class="when" valign="middle" align="center">'+ago+'</td>'+
                    '</tr>';
                }

                var postsHead = "";
                $('#forumActivity').html('<table border="0" cellpadding="0" cellspacing="0" width="100%" id="forumActivity" class="DataTable DiscussionsTable">'+postsHead+'<tbody id="rPostTickerArea">'+recentPosts+'</tbody></table>');

                setTimeout(injectRecentPosts,25000);

                //lastphoto

            }
        }

        function injectRecentPosts() {
            if(!tickerRunning || recentPostsGrabCount > 25 || !haveFocus){
                return;
            } else {
                recentPostsGrabCount++;
                var params = new Object();
                http('post', '/ajax/tools.cfc?method=updateForumTicker', injectRecentPosts_callback, params, true);
            }
        }

        $(function () {
            injectRecentPosts();
        });
	