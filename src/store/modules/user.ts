const user = {
  state: {
		/**
		 * 是否需要强制登录
		 */
		forcedLogin: false,
		hasLogin: false,
		userName: ""
	},
	mutations: {
		login(state:any, userName:string) {
			state.userName = userName || '新用户';
			state.hasLogin = true;
		},
		logout(state:any) {
			state.userName = "";
			state.hasLogin = false;
		}
	}
};

export default user;