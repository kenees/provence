class Storage {
    get(key: string) {
        return window.sessionStorage.getItem(key)
    }
    set(key: string, val: any) {
        return window.sessionStorage.setItem(key, val)
    }
}

let storage = new Storage();


export {
    storage,
}
