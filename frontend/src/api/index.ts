import notify from '/@/utils/notify'

function request(api: string, params: any, callback: (data: any) => void): void {
    window.go.backend.API.Request(api, params).then(
        (res: { error: string; data: any }) => {
            window.runtime.LogDebug(JSON.stringify(res))
            if (res.error !== '') {
                notify.error(res.error)
            } else {
                callback(res.data)
            }
        },
        (err: { toString: () => string }) => {
            notify.error(err.toString())
        }
    )
}

export default {
    request,
}