import request from './request'
import Cookies from 'js-cookie';

var localUrl = 'https://localhost:8080'


export default {
    getAccessToken(code) {
        return request({
            url: '/login',
            method: 'POST',
            data : {
                code: code,
                redirectURL: '/pages/register'
               },
            headers: {
                Authorization: 'Basic '+Cookies.get('basicAppAuth')
             }
        })
    },
    generateSignature(meeting, role) {
      return request({
          url: '/signature',
          method: 'POST',
          data : {
              meeting: meeting,
              role: role
             }
      })
  },
    getBasicAuth() {
        return request({
            url: '/basicAuth',
            method: 'GET'
        })
    }
}
