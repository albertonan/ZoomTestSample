<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol class="md-8 xs-12">
          <CCardGroup>
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5"
              body-wrapper
            >
              <CCardBody>
                <h2>{{$t('login.loginTitle')}}</h2>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="redirectToLogin"
                >
                  {{$t('login.login')}}
                </CButton>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import ZoomLogin from "../../requests/zoomLogin";

export default {
  name: "Login",
  methods: {
    redirectToLogin() {
      this.getBasicAuth((appID, baseURL) => {
        let newLocation = "https://zoom.us/oauth/authorize?response_type=code&client_id="+appID+"&redirect_uri="+baseURL+"%2Fpages%2Fregister"
        window.location = newLocation;
      });
    },
    getBasicAuth(callback) {
      ZoomLogin.getBasicAuth().then((res) => {
        Cookies.set("basicAppAuth", res.data.basicAuth);
        callback(res.data.appID, res.data.baseURL);
      });
    },
  },
};
</script>
 