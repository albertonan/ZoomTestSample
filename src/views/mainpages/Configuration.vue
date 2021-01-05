<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>Create Meeting</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput v-model="topic" label="Topic" placeholder="Topic" :value="topic" horizontal />
              <CInput v-model="date" label="Date" type="date" horizontal />
              <CInput
              ref="startTime"
                label="Start Time"
                description="Start time"
                type="time"
                :value="startTime"
                horizontal
                :v-model="startTime"
              />
              <CInput
                label="Duration"
                description="Duration of the meeting"
                placeholder="Duration of the meeting"
                type="number"
                :value="duration"
                horizontal
                :v-model="duration"
              />
              <CInput
              v-model="password"
                label="Password"
                description="Please enter a complex password"
                placeholder="Add a password to the meeting"
                type="password"
                horizontal
              />
              <CRow form class="form-group">
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Host video
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="hostVideo"
                    shape="pill"
                    v-model="hostVideo"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Participant video
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="participantVideo"
                    shape="pill"
                    v-model="participantVideo"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Cn Meeting
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="cnMeeting"
                    shape="pill"
                    v-model="cnMeeting"
                  />
                </CCol>
              </CRow>
              <CRow form class="form-group">
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    In Meeting
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="inMeeting"
                    shape="pill"
                    v-model="inMeeting"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Join before host
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="beforeHost"
                    shape="pill"
                    v-model="beforeHost"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Mute upon entry
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="mute"
                    shape="pill"
                    v-model="mute"
                  />
                </CCol>
              </CRow>
              <CRow form class="form-group">
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Watermark
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="watermark"
                    shape="pill"
                    v-model="watermark"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Use PMI
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="usePMI"
                    shape="pill"
                    v-model="usePMI"
                  />
                </CCol>
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Enforce login
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="enforceLogin"
                    shape="pill"
                    v-model="enforceLogin"
                  />
                </CCol>
              </CRow>
              <CRow form class="form-group">
                <CCol sm="4">
                  <CCol tag="label" sm="6" class="col-form-label">
                    Notify registrants by email
                  </CCol>
                  <CSwitch
                    class="mr-1"
                    color="primary"
                    :checked="notify"
                    shape="pill"
                    v-model="notify"
                  />
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton @click="createMeeting" type="submit" size="sm" color="primary"
              ><CIcon name="cil-check-circle" /> Create</CButton
            >
          </CCardFooter>
        </CCard>
      </CCol>
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

export default {
  name: "Colors",
  components: {},
  mounted() {
    this.getMeetings();
  },
  data: () => {
    return {
      topic: 'Test topic',
      date: '',
      startTime: '',
      duration: 3599,
      password: '',
      hostVideo: true,
      participantVideo: true,
      cnMeeting: true,
      inMeeting: true,
      beforeHost: true,
      mute: false,
      watermark: false,
      usePMI: false,
      enforceLogin: false,
      notify: false
    };
  },
  methods: {
    getMeetings() {
      meetings.getAllMeetings().then((res) => {
        console.log(res.data);
      });
    },
    createMeeting() {
      var dateFormat = new Intl.DateTimeFormat("default", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      var usedOptions = dateFormat.resolvedOptions();
      console.log(this.date)
      console.log(this.$refs.startTime.state)
      var data = {
        topic: this.topic,
        type: 2,
        start_time: this.date+' '+this.$refs.startTime.state,
        duration: this.duration,
        timezone: usedOptions.timeZone,
        password: this.password,
        settings: {
          host_video: this.hostVideo,
          participant_video: this.participantVideo,
          cn_meeting: this.cnMeeting,
          in_meeting: this.inMeeting,
          join_before_host: this.beforeHost,
          mute_upon_entry: this.mute,
          watermark: this.watermark,
          use_pmi: this.usePMI,
          approval_type: 0,
          registration_type: 0,
          audio: "string",
          auto_recording: "string",
          enforce_login: this.enforceLogin,
          registrants_email_notification: this.notify,
        },
      };
      meetings.createMeeting(data).then(res=>{
        console.log(res.data)
        this.$router.push('/list')
      })
    },
  },
};
</script>
