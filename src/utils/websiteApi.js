/*
    * 网站管理接口
    * */
import services from '../plugins/axiosc';

const websiteManageAPI = {
    base: process.env.VUE_APP_URL,

    // 登录

    login(params) {
        return services._axios.post(`${this.base}/login`, params);
    },
    // 测试post接口
    postJSON(params) {
        return services._axios.post(`${this.base}/getter/postJSON`, params);
    },
    // 测试get接口
    getJSON(pageNo, pageSize) {
        return services._axios.get(`${base}/getter/getJSON`, { params: { pageNo: pageNo, pageSize: pageSize } });
    },
    //TTS接口

    tts(word, voiceType) {
        return services._axios.post(`${this.base}/api/tts/`, { 'word': word, 'voice_type': voiceType })
    }
};

export default websiteManageAPI;
