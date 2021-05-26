import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    position: '北京',
};

const mutation = {
    setPostion(state, val){
        state.position = val;
    }
};

const actions = {
    setPostion({ commit }, val) {
        //异步请求后端获取当前位置数据
        commit('setPosition', val);
    }
};

export default new Vuex.Store({
    state,
    mutation,
    actions,
})