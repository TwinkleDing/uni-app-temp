export const showToast1 = (showToastParams) => {
  uni.showToast({
    title: showToastParams.title,
    icon: showToastParams.icon || 'none',
    duration: showToastParams.duration
  });
};

export const showToast2 = (title, duration, icon = 'none') => {
  uni.showToast({
    title: title,
    duration: duration,
    icon: icon
  });
};