export const showToasts = (title, duration, icon = 'none') => {
  uni.showToast({
    title: title,
    duration: duration,
    icon: icon
  });
};

export const goTo = (url) => {
  uni.navigateTo({
    url: url,
    animationType: 'pop-in',
    animationDuration: '200'
  });
};

export const goBack = (url) => {
  uni.navigateBack({
    url: url,
    animationType: 'pop-out',
    animationDuration: '200'
  });
};

export const goRedirect = (url) => {
  uni.redirectTo({
    url: url
  });
};

export const goRelaunch = (url) => {
  uni.reLaunch({
    url: url
  });
};