import i18n from '/@/i18n'

const t = (msg: string): string => {
    return i18n.global.t(msg)
}


export default {
    t,
};