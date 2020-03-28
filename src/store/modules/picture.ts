import {setStorage, getStorage, removeStorage} from '@/util/store';
const picture = {
  state: {
    collections: getStorage('collections') || [],
    hasCollection: false,
  },
  mutations: {
    ADD_COLLECTION: (state:any, picture:string) => {
      state.collections.push(picture)
			setStorage('collections', state.collections);
      uni.showToast({
        icon: 'none',
        title: '已收藏'
      })
    },
    CHECK_COLLECTION: (state:any, picture:string) => {
      const a = state.collections.filter((item:any) => {
        return item === picture
      })
      state.hasCollection = a.length > 0 ? true : false
    },
  },
  actions: {
    removeCollection: ({state}:any, picture:string) => {
      const index = state.collections.indexOf(picture)
      state.collections.splice(index, 1)
			setStorage('collections', state.collections);
      uni.showToast({
        icon: 'none',
        title: '已取消收藏'
      })
    }
  }
}

export default picture;
