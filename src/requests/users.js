import request from './request'
import Cookies from 'js-cookie';

export default {
    getUserInfo() {
        return request({
            url: '/users/me',
            method: 'GET',
            headers: {
                Authorization: 'Bearer '+Cookies.get('access_token')
             }
        })
    },

}
