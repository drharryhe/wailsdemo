import {createApp} from 'vue'
import {Dialog, Notify, Quasar} from 'quasar'

// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css'
import '@quasar/extras/line-awesome/line-awesome.css'
import '@quasar/extras/bootstrap-icons/bootstrap-icons.css'
import '@quasar/extras/eva-icons/eva-icons.css'
import 'quasar/src/css/index.sass'
import '/@/assets/css/index.scss';
import mitt from 'mitt';

// Assumes your root component is App.vue
import App from './App.vue'
import i18n from "/@/i18n";
import router from "/@/router"
import {key, store} from '/@/store';

const app = createApp(App)

app.use(Quasar, {
    plugins: {
        Notify,
        Dialog,
    },
    config: {
        notify: {
            classes: 'notify',
            position: 'top',
            timeout: 3000,
        }
    }
}).use(store, key)
    .use(router)
    .use(i18n)
    .mount('#app');

app.config.globalProperties.$bus = mitt();
