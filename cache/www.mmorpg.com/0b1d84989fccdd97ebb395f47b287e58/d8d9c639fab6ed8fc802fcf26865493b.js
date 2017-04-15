		
		function onLoads(){
		pageLoaded=true; checkForZoom(); MM_preloadImages('//images.mmorpg.com/images/themes/radiance/fullmoon/waiting_fast.gif'); zoombox.setAlpha(1); 
						eventtimerthing = -119441047;
						
						var productElement = document.getElementById('setimebox');
						if(productElement != null){
							if($('#setimebox') != 'NULL'){
								$('#setimebox').countdown({
									alwaysExpire: true,
									compact: false,
									layout: ' in {d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{mn} {ml}, and {sn} {sl}',
									labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'], 
									labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'], 
									format: 'dhmS',
									compactLabels: ['y', 'm', 'w', 'd'],
									onExpiry: liftOff,
									onComplete: function(event){
										$('#hcilinkf').html('Game On #94 | What\'s in a Review Anyway?');
										$('#setimebox').countdown({
											alwaysExpire: true,
											compact: false,
											layout: ' in {d<}{dn} {dl}, {d>}{h<}{hn} {hl}, {h>}{mn} {ml}, and {sn} {sl}',
											labels: ['Years', 'Months', 'Weeks', 'Days', 'Hours', 'Minutes', 'Seconds'], 
											labels1: ['Year', 'Month', 'Week', 'Day', 'Hour', 'Minute', 'Second'], 
											format: 'dhmS',
											compactLabels: ['y', 'm', 'w', 'd'],
											onComplete: function(event) {
												$('#hcilinkf').html('Game On #94 | What\'s in a Review Anyway?');
											},
											onExpiry: liftOff,
											leadingZero: false,
											until: eventtimerthing
										});
									},
									leadingZero: false,
									until: eventtimerthing
								});
							}
							else {
								//
							}
						}
						else {
							//
						}
						
						function liftOff() { 
							$('#hcilinkf').html('Game On #94 | What\'s in a Review Anyway?'); 
						} 
						
					ExternalLinks("www.mmorpg.com"); setInterval(function(){refreshDfpAds();}, 60000); 
		}

		document.onload = onLoads();
	