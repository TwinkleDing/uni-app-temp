import {setStorage, getStorage, removeStorage} from '@/util/store';
const user = {
  state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: true,
		hasLogin: getStorage('hasLogin') || false,
		userName: getStorage('userName') || ""
	},
	mutations: {
		LOGIN: (state:any, userName:string)=> {
			state.userName = userName || '新用户';
			state.hasLogin = true;
			setStorage('userName', state.userName);
			setStorage('hasLogin', state.hasLogin);
		},
		LOGOUT: (state:any)=> {
			state.userName = "";
			state.hasLogin = false;
			removeStorage('userName', state.userName);
			setStorage('hasLogin', state.hasLogin);
		}
	}
};

export default user;