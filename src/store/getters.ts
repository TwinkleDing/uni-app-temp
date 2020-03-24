const getters:any = {
  hasLogin: (state: { hasLogin: boolean }) => state.hasLogin,
  userName: (state: { userName: string }) => state.userName,
  forcedLogin: (state: { forcedLogin: boolean }) => state.forcedLogin,
};
export default getters;