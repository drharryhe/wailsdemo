import {Notify} from 'quasar';
import {ionCheckmarkOutline, ionCloseOutline} from '@quasar/extras/ionicons-v6'

const error = (message: string) => {
    Notify.create({
        message: message,
        icon: ionCloseOutline,
        type: 'negative',
    });
};

const success = (message: string) => {
    Notify.create({
        message: message,
        icon: ionCheckmarkOutline,
        type: 'positive',
    });
};

export default {
    error,
    success,
};