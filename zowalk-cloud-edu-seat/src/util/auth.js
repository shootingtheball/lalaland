import util from './common.js';
import store from '@/vuex/store.js'

export default function islogin() {
    if(util.getLocal('Token')){
        return true
    }else if(store.state.token){
        return true
    }else {
        return false
    }
};