<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="8">
          <CCardGroup>
            
            <CCard
              color="primary"
              text-color="white"
              class="text-center py-5 d-md-down-none"
              body-wrapper
            >
              <CCardBody>
                <h2>Login with your Zoom account</h2>
                <CButton
                  color="light"
                  variant="outline"
                  size="lg"
                  @click="redirectToLogin"
                >
                  LOGIN
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
import Cookies from 'js-cookie';

export default {
  name: 'Login',
  methods : {
    redirectToLogin(){
      window.location = 'https://zoom.us/oauth/authorize?response_type=code&client_id=JFdAIYn_R8yQI2w9y2xgQ&redirect_uri=http://localhost%3A8080%2Fpages%2Fregister'
    }
  },
  mounted() {
    let appID = 'JFdAIYn_R8yQI2w9y2xgQ'
    let appSecret = 'oHOQSk59HHHp8nkJGKNyFehE4EGbUki0'
    let basicAppAuth = Buffer.from(appID + ':' + appSecret).toString('base64')
    Cookies.set('basicAppAuth', basicAppAuth)
  }
}
</script>
 