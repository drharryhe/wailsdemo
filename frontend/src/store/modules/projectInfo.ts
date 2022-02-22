import {Module} from 'vuex'
import {ProjectInfo, RootStateTypes} from '/@/store/interface'


const projectInfoModule: Module<ProjectInfo, RootStateTypes> = {
    namespaced: true,
    state: {
        key: '',
        name: '',
        path: '',
        type: '',
    },
    mutations: {
        save(state: ProjectInfo, data: ProjectInfo) {
            state.key = data.key;
            state.name = data.name;
            state.path = data.path;
            state.type = data.type;
        },
        remove(state: ProjectInfo) {
            state.key = '';
            state.name = '';
            state.path = '';
            state.type = '';
        }
    },
}

export default projectInfoModule
