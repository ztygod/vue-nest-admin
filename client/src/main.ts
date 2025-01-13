import ant from 'ant-design-vue'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'ant-design-vue/dist/reset.css';
import App from './App.vue'
import Echarts from 'vue-echarts';
import * as echarts from 'echarts'
import router from './router'

const app = createApp(App)

app.component('e-charts', Echarts)
app.config.globalProperties.$echarts = echarts
app.use(createPinia())
app.use(router)
app.use(ant)

app.mount('#app')
