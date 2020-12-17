import request from './request'
import Cookies from 'js-cookie';

export default {

    getAllMeetings() {
        return request({
            url: '/users/me/meetings',
            method: 'GET',
            headers: { Authorization: 'Bearer '+Cookies.get('access_token') }
        })
    },
    createMeeting(data){
        return request({
            url: '/users/me/meetings',
            method: "POST",
            data: data,
            headers: { Authorization: 'Bearer '+Cookies.get('access_token') }
        })
    }
}
