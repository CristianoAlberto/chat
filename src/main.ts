import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import router from './router';

const app = createApp(App);

const axiosInstance = axios.create({
    baseURL: process.env.VUE_APP_HOST,
});
app.use(router);
app.config.globalProperties.axios = axiosInstance;
app.mount('#app');


