import {Module} from 'vuex'
import { RootStateTypes, VersionInfo} from '/@/store/interface'


const versionInfoModule: Module<VersionInfo, RootStateTypes> = {
    namespaced: true,
    state: {
        name: '',
        type: '',
    },
    mutations: {
        save(state: VersionInfo, data: VersionInfo) {
            state.name = data.name;
            state.type = data.type;
        },
        remove(state: VersionInfo) {
            state.name = '';
            state.type = '';
        }
    },
}

export default versionInfoModule
