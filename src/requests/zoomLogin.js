import request from './request'
import Cookies from 'js-cookie';

var localUrl = 'http://localhost:8080'


export default {
    getAccessToken(code) {
        return request({
            url: '/login',
            method: 'POST',
            data : {
                code: code,
                 //The uri below is a sample redirect_uri. Replace it with your actual redirect_uri while making requests.
                redirectURL: localUrl+'/pages/register'
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
  }
}
