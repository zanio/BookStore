import Vue from "vue";
import Vuetify, { VFlex, VLayout, VContainer, VImg, VRow, VCol } from 'vuetify/lib';

Vue.use(Vuetify, {
    components: { VFlex, VLayout, VContainer, VImg,VRow, VCol },
    theme: {
        primary: '#ee44aa',
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107',
    },
    customProperties: true,
    iconfont: 'md',
});


export default new Vuetify({});