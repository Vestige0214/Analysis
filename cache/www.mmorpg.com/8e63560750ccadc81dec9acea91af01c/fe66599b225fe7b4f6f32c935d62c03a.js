
var gptAdSlots = [];
googletag.cmd.push(function() {
gptAdSlots[6] = googletag.defineSlot('/149935395/MMO_MedRect', [300, 250], 'div-gpt-ad-1349395187216-2').addService(googletag.pubads());gptAdSlots[5] = googletag.defineSlot('/149935395/Home_Page_Button', [160, 160], 'div-gpt-ad-1374774164640-0').addService(googletag.pubads());googletag.defineSlot('/149935395/SiteSkin_1x1', [1, 1], 'div-gpt-ad-1373084855440-0').addService(googletag.pubads());gptAdSlots[3] = googletag.defineSlot('/149935395/MMO_Leaderboard', [728, 90], 'div-gpt-ad-1349395187216-1').addService(googletag.pubads());gptAdSlots[2] = googletag.defineSlot('/149935395/MMO_WideSkyscraper', [160, 600], 'div-gpt-ad-1349395187216-3').addService(googletag.pubads()); googletag.pubads().setTargeting("gameId","0");googletag.pubads().setTargeting("mobile","false");googletag.pubads().setTargeting("forums","false");googletag.pubads().setTargeting("article","false");googletag.pubads().setTargeting("pageId","home");
googletag.pubads().enableSingleRequest();
googletag.pubads().collapseEmptyDivs();
googletag.enableServices();
});
// Button action which refreshes both slots
 var refreshDfpSlots = function() {
   googletag.cmd.push(function() {
     googletag.pubads().refresh(gptAdSlots);
   });
 };

var refreshCnt = 0;
/*var refreshDfpAds = function() {
	if(refreshCnt < 1){
		refreshDfpSlots();
		refreshCnt++;
	}
}*/