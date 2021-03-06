import Vue from 'vue';

import {
    PROVIDER_CLEAR,
    PROVIDER_FETCH,
    PROVIDER_SELECTED
} from '../actions/provider.js';
import providers from '../../service/provider/providers.js';

export const clearState = (state) => {
    state.all.length = 0;
    state.selected = '';
};

const state = {
    all: [],
    selected: ''
};

const actions = {
    [PROVIDER_CLEAR]: ({ commit }) => commit(PROVIDER_CLEAR),
    [PROVIDER_FETCH]: ({ commit, dispatch }) => {
        dispatch(PROVIDER_CLEAR);
        // TODO: Get a list of configured providers from the backend
        commit(PROVIDER_FETCH, Object.keys(providers.providerNames));
    },
    [PROVIDER_SELECTED]: ({ commit }, providerName) => {
        if (!providerName || !providers.providerNames[providerName]) {
            throw new Error(`Unknown provider: ${providerName}`);
        }
        commit(PROVIDER_SELECTED, providerName);
    }
};

const mutations = {
    [PROVIDER_CLEAR]: (state) => clearState(state),
    [PROVIDER_FETCH]: (state, providers) => {
        state.all.length = 0;
        providers.forEach((provider, idx) => Vue.set(state.all, idx, provider));
    },
    [PROVIDER_SELECTED]: (state, provider) => {
        state.selected = provider;
    }
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};
