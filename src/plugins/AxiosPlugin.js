import axios from "axios";

const BASE_URL = "https://jsonbox.io/box_4d8689a8182055db36f1";

export default {
    install(Vue) {
        Vue.prototype.axios = axios;
        Vue.prototype.base_url = BASE_URL;
    }
}