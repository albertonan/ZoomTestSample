<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6"> {{$t('register.obtaining')}} </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import zoomLogin from "../../requests/zoomLogin";
import Cookies from 'js-cookie';
import users from '../../requests/users'

export default {
  name: "Register",
  mounted() {
    let code = this.$route.query.code;
    if (code) {
      zoomLogin.getAccessToken(code).then((res) => {
        if (res.data.access_token) {
          Cookies.set('access_token',res.data.access_token)
          Cookies.set('expiring',new Date().getTime() + 3599000)
          users.getUserInfo().then(res=>{
            console.log(res.data)
            Cookies.set('email', res.data.email)
            Cookies.set('username', res.data.first_name)
            this.$router.push('/list')
          })
          return
        }
      });
    }
  },
};
</script>
