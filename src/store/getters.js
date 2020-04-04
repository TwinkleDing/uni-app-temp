import user from './modules/user';
import picture from './modules/picture';
const getters = {
  hasLogin: (state) => user.state.hasLogin,
  userName: (state) => user.state.userName,
  forcedLogin: (state) => user.state.forcedLogin,
  collections: (state) => picture.state.collections,
  hasCollection: (state) => picture.state.hasCollection,
};
export default getters;