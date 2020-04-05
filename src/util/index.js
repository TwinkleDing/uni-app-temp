const showToasts = (title, duration, icon = 'none') => {
  uni.showToast({
    title: title,
    duration: duration,
    icon: icon
  });
};

const goTo = (url) => {
  uni.navigateTo({
    url: url,
    animationType: 'pop-in',
    animationDuration: '200'
  });
};

const goBack = (url) => {
  uni.navigateBack({
    url: url,
    animationType: 'pop-out',
    animationDuration: '200'
  });
};

const goRedirect = (url) => {
  uni.redirectTo({
    url: url
  });
};

const goRelaunch = (url) => {
  uni.reLaunch({
    url: url
  });
};

export default {
	install: (Vue, options) => {
		Vue.prototype.$util = {
			showToasts,
			goTo,
			goBack,
			goRedirect,
			goRelaunch
		}
	}
}