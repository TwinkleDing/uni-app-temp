interface showToastParams {
  title:string;
  icon?:any;
  duration?:number;
};
export const showToast1 = (showToastParams:showToastParams) => {
  uni.showToast({
    title: showToastParams.title,
    icon: showToastParams.icon || 'none',
    duration: showToastParams.duration
  });
};

export const showToast2 = (title:string, duration?:number, icon:any = 'none') => {
  uni.showToast({
    title: title,
    duration: duration,
    icon: icon
  });
};