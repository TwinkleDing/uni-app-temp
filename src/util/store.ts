export const setStorage = (key:string, data:any, sync:boolean = false) => {
  if (sync) {
    uni['setStorageSync'](key, data)
  } else {
    uni['setStorage']({key, data})
  }
};

export const getStorage = (key:string, sync:boolean = true) => {
  if (sync) {
    return uni['getStorageSync'](key)
  } else {
    return uni['getStorage']({key})
  }
};

export const removeStorage = (key:string, sync?:boolean) => {
  if (sync) {
    return uni['removeStorageSync'](key)
  } else {
    return uni['removeStorage']({key})
  }
};

export const clearStorage = (sync:boolean = false) => {
  if (sync) {
    uni.clearStorageSync();
  } else {
    uni.clearStorage();
  }
};