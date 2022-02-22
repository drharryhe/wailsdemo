import {Dialog, DialogChainObject} from 'quasar';


const confirm = (title: string, message: string, onOk: (callbackFn: (payload?: any) => void) => DialogChainObject) => {
    Dialog.create({
        title: title,
        class: 'q-pl-md q-pr-md q-pb-md',
        message: message,
        persistent: true,
        cancel: true,
    }).onOk(onOk);
};

export default {
    confirm,
};