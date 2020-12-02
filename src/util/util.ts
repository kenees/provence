class Storage {
  get(key: string) {
    return window.sessionStorage.getItem(key)
  }

  set(key: string, val: any) {
    return window.sessionStorage.setItem(key, val)
  }
}

let storage = new Storage();


function fNumber(n) {
  return n > 99999 ? parseInt(`${n / 10000}`, 10) + '万' : n;
}

export {
  storage,
  fNumber,
}
