! function (e) {
	"use strict";
	e.getIns = new class {
		constructor() {
			this.initData()
		}
		initData() {
			this.appid = "tt600616bbff39696102", this.videoId = "q507dfrcd2p176e526", this.bannerId = "21pmfhh579f45l6j6n", this.drawerId = "", this.gridId = "", this.nativeId = "", this.interstitialId = "1cf3l9i9ch86481ai4", window.uleeSDK = this, console.log("======initsdk======")
		}
		showAD(e) {
			/*this.isStopshowBanner || (e ? MiniGameAds.isBannerReady() ? MiniGameAds.showBanner().then(() => {
				console.info("====> show banner success")
			}).catch(e => {
				console.error("====> show banner error: " + e.message)
			}) : (console.info("====> banner not ready"), this.isStopshowBanner = !0, Laya.timer.once(2e3, this, () => {
				this.isStopshowBanner = !1, console.log("重新加载banner"), this.showAD(!0)
			})) : this.hideBanner())*/
		}
		hideBanner() {
			/*MiniGameAds.hideBanner().then(() => {
				console.info("====> hide banner success")
			}).catch(e => {
				console.error("====> hide banner error: " + e.message)
			})*/
		}
		showVideoAD(e, s) {
			console.info("====> show RewardedVideo success"), e && e()
			/*MiniGameAds.isRewardvideoReady() ? MiniGameAds.showRewardedVideo().then(() => {
				console.info("====> show RewardedVideo success"), e && e()
			}).catch(e => {
				console.error("====> show RewardedVideo error: " + e.message), s && s()
			}) : console.info("====> RewardedVideo not ready")*/
		}
		showInterstitialAD(e) {
			/*MiniGameAds.isInterstitialReady() ? (console.log("插屏广告可以展示"), MiniGameAds.showInterstitial().then(() => {
				console.info("====> show interstitial success"), e && e()
			}).catch(s => {
				console.error("====> show interstitial error: " + s.message), e && e()
			})) : console.log("插屏广告无法展示")*/
		}
	}
}({});