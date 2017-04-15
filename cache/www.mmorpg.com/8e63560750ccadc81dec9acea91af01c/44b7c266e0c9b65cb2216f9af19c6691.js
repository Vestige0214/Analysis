
						function popularJump(goto){
							for(var i = 1;i <= 5;i++){
								if(i == goto){
									getObj("pop"+i).style.display = "";
									getObj("poplink"+i).className = "current";
								}
								else {
									getObj("pop"+i).style.display = "none";
									getObj("poplink"+i).className = "";
								}
							}
						}
						function voteJump(goto){
							for(var i = 1;i <= 2;i++){
								if(i == goto){
									getObj("vot"+i).style.display = "";
									getObj("votlink"+i).className = "current";
								}
								else {
									getObj("vot"+i).style.display = "none";
									getObj("votlink"+i).className = "";
								}
							}
						}
					