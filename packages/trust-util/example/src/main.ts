import { createApp } from 'vue';
import router from '@/router';
import App from './App';
import './assets/styles/tailwind.css';

createApp(App).use(router).mount('#app');
