import user from './modules/user';
const getters:any = {
  hasLogin: (state: { hasLogin: boolean }) => user.state.hasLogin,
  userName: (state: { userName: string }) => user.state.userName,
  forcedLogin: (state: { forcedLogin: boolean }) => user.state.forcedLogin,
};
export default getters;