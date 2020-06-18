class Storage {
    get(key: string) {
        return window.sessionStorage.getItem(key)
    }
    set(key: string, val: any) {
        return window.sessionStorage.setItem(key, val)
    }
}

let storage = new Storage();


class History {
    // _history: any
    // _history = window.location.history

    push (url: string) {
        console.log('push', url)
        console.log(window.location.history)
    }
}

let history = new History()

export {
    storage,
    history,
}
