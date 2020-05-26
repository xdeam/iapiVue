import storagex from 'store';

// 缓存数据的key
const IAPI_TOKEN = 'IAPI_TOKEN';

export const storage = {
    set localStorageToken(val) {
        if (!val) {
            storagex.remove(IAPI_TOKEN);
        } else {
            storagex.set(IAPI_TOKEN, val);
        }
    },
    get localStorageToken() {
        return storagex.get(IAPI_TOKEN);
    }
}
