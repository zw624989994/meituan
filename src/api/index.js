import axios from '@/axios.js';

var api = {
    searchHotWords(params){
        return axios.get("/api/meituan/header/searchHotWords.json", params);
    },
    getSearchList(){
        return axios.get("/api/meituan/header/search.json");
    },
    getMenuList(){
        return axios.get("/api/meituan/index/nav.json");
    },
    resultsByKeywords(){
        return axios.get("/api/meituan/index/resultsByKeywords.json");
    },
    goodsList(){
        return axios.get("/api/meituan/list/goodsList.json");
    },
    classify(){
        return axios.get("/api/meituan/list/classify.json");
    },
    areaList(){
        return axios.get("/api/meituan/list/areaList.json");
    },
    getHotCity(){
        return axios.get("/api/meituan/city/hot.json");
    }
}

export default api;
