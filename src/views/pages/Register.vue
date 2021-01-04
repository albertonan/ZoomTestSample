<template>
  <div class="d-flex align-items-center min-vh-100">
    <CContainer fluid>
      <CRow class="justify-content-center">
        <CCol md="6"> Obteniendo Token de Acceso </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import zoomLogin from "../../requests/zoomLogin";
import Cookies from 'js-cookie';

export default {
  name: "Register",
  mounted() {
    let code = this.$route.query.code;
    if (code) {
      zoomLogin.getAccessToken(code).then((res) => {
        if (res.data.access_token) {
          Cookies.set('access_token',res.data.access_token)
          Cookies.set('expiring',new Date().getTime() + 3599000)
          this.$router.push('/list')
          return
        }
      });
    }
  },
};
</script>
