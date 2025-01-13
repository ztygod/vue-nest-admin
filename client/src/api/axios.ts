import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

service.interceptors.request.use(
    (config) => {
        // 可以在这里添加请求头等信息
        // 例如：config.headers['Authorization'] = 'Bearer your-token';
        config.headers['']
        return config;
    },
    (error) => {
        console.log(error);
        Promise.reject(error)
    }
);

service.interceptors.response.use(
    (response) => {
        const res = response.data;
        if (res.code === 200) {
            return res;
        } else {
            return Promise.reject({
                message: res.message || 'Error',
                status: res.code
            });
        }
    },
    (error) => {
        console.log(error, 'error');
        return Promise.reject(error);
    }
)
export default service