import {Module} from 'vuex'
import {RootStateTypes, UserInfo} from '/@/store/interface'


const userInfoModule: Module<UserInfo, RootStateTypes> = {
    namespaced: true,
    state: {
        name: '',
        avatar: '',
        online: false,
    },
    mutations: {
        signOn(state: UserInfo, data: UserInfo) {
            state.online = true;
            state.name = data.name;
            state.avatar = data.avatar;
        },
        signOut(state: UserInfo) {
            state.online = false;
            state.name = '';
            state.avatar = '';
        }
    },
}

export default userInfoModule
