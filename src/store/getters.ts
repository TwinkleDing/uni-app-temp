import user from './modules/user';
import picture from './modules/picture';
const getters:any = {
  hasLogin: (state: { hasLogin: boolean }) => user.state.hasLogin,
  userName: (state: { userName: string }) => user.state.userName,
  forcedLogin: (state: { forcedLogin: boolean }) => user.state.forcedLogin,
  collections: (state: { collections: object }) => picture.state.collections,
  hasCollection: (state: { hasCollection: boolean }) => picture.state.hasCollection,
};
export default getters;