<template>
  <div>
    <CRow v-for="meeting in meetings" :key="meeting.id">
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>{{meeting.topic}}</strong>
          </CCardHeader>
          <CCardBody>Meeting on {{ new Date(meeting.start_time) }}</CCardBody>
          <CCardFooter>
            <CRow>
              <CCol sm="6">
                <CButton
                  @click="changeVisibility(meeting)"
                  type="submit"
                  size="sm"
                  color="primary"
                  ><CIcon name="cil-check-circle" /> {{!(meeting.visibility)?'Join':'Close'}}</CButton
                >
              </CCol>
              <CCol sm="6" style="float: right">
                <CButton type="submit" size="sm" color="danger"
                  ><CIcon name="cil-check-circle" /> Delete</CButton
                >
              </CCol>
            </CRow>
            <CCollapse :show="meeting.visibility" :duration="200"
              ><ZoomMeeting :signature="meeting.signature" :meetingNumber="meeting.id" password="" email='albertonan@gmail.com' :connect="meeting.visibility" username="anan@makenai.es" :key="meeting.visibility"
            /></CCollapse>
          </CCardFooter>
        </CCard>
      </CCol>
    </CRow>
    <CRow v-if="noMeetings">
      <CButton
                  @click="createMeeting()"
                  type="submit"
                  size="sm"
                  color="primary"
                  ><CIcon name="cil-check-circle" /> Create a new meeting</CButton
                >
    </CRow>
  </div>
</template>

<style scoped>
.card {
  padding: 10px;
}

.details-button {
  float: right;
  margin-bottom: 10px;
}

.info-cont {
  padding-top: 0px;
  padding-bottom: 5px;
}

.info-col {
  background-color: #3c4b64 !important;
  padding-top: 10px;
  color: white;
  text-align: center;
}

.info-col .card-body {
  padding-top: 10px !important;
  font-size: 30px;
}

.info-col .card-body .row {
  display: block !important;
}

.info-col .card-body .row * {
  text-align: center;
}
</style>

<script>
import meetings from "../../requests/meetings";
import Vue from "vue";
import ZoomMeeting from "./ZoomMeeting";
import zoomLogin from '../../requests/zoomLogin';

export default {
  name: "List of meetings",
  components: { ZoomMeeting },
  mounted() {
    this.getMeetings();
  },
  data: () => {
    return {
      meetings: [],
      meetingVisible: false,
      noMeetings: false
    };
  },
  computed: {
    
  },
  methods: {
    getMeetings() {
      meetings.getAllMeetings().then((res) => {
        console.log(res.data);
        this.meetings = res.data.meetings;
        this.noMeetings = this.meetings.length <= 0
        this.meetings.forEach((meeting) => {
          console.log(meeting)
        });
      });
    },
    changeVisibility(meeting){
      zoomLogin.generateSignature(meeting.id, 1).then(res=>{
        meeting.signature = res.data.signature
        this.$set(meeting, "visibility", !meeting.visibility)
      })
      
    },
    createMeeting(){
      this.$router.push('/configuration')
    }
  },
};
</script>
