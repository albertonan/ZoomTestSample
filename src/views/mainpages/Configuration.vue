<template>
  <div>
    <CRow>
      <CCol md="12">
        <CCard>
          <CCardHeader>
            <strong>{{$t('create.createMeeting')}}</strong>
          </CCardHeader>
          <CCardBody>
            <CForm>
              <CInput
                v-model="topic"
                :label="$t('create.topic')"
                :placeholder="$t('create.topic')"
                :value="topic"
                horizontal
              />
              <CInput
                v-model="password"
                :label="$t('create.password')"
                :description="$t('create.enterComplexPass')"
                :placeholder="$t('create.passPlaceholder')"
                type="password"
                horizontal
              />
              <CRow>
                <CCol sm="3"><label>{{$t('create.scheduleMeeting')}}</label></CCol>
                <CCol sm="9"
                  ><CSwitch
                    class="mr-1"
                    color="primary"
                    shape="pill"
                    @change.native="scheduleMeeting = !scheduleMeeting"
                /></CCol>
              </CRow>
              <br>
              <CCollapse :show="scheduleMeeting" :duration="200">
                <CInput v-model="date" :label="$t('create.date')" type="date" horizontal />
                <CInput
                  ref="startTime"
                  :label="$t('create.startTime')"
                  :description="$t('create.startTime')"
                  type="time"
                  :value="startTime"
                  horizontal
                  :v-model="startTime"
                />
                <CInput
                  :label="$t('create.duration')"
                  :description="$t('create.durationOfMeeting')"
                  :placeholder="$t('create.durationOfMeeting')"
                  type="number"
                  :value="duration"
                  horizontal
                  :v-model="duration"
                />
                <CRow form class="form-group">
                  <CCol sm="4">
                    <CCol tag="label" sm="6" class="col-form-label">
                      {{$t('create.hostVideo')}}
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
                      {{$t('create.participantVideo')}}
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
                      {{$t('create.cnMeeting')}}
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
                      {{$t('create.inMeeting')}}
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
                      {{$t('create.joinBeforeHost')}}
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
                      {{$t('create.muteOnEntry')}}
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
                      {{$t('create.watermark')}}
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
                      {{$t('create.usePMI')}}
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
                      {{$t('create.forceLogin')}}
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
                      {{$t('create.notify')}}
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
              </CCollapse>
            </CForm>
          </CCardBody>
          <CCardFooter>
            <CButton
              @click="createMeeting"
              type="submit"
              size="sm"
              color="primary"
              ><CIcon name="cil-check-circle" /> {{$t('create.create')}}</CButton
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
import TheContainer from "../../containers/TheContainer.vue";

export default {
  name: "Colors",
  components: { TheContainer },
  mounted() {
    this.getMeetings();
  },
  data: () => {
    return {
      topic: "Test topic",
      date: "",
      startTime: "",
      duration: 3599,
      password: "",
      hostVideo: true,
      participantVideo: true,
      cnMeeting: true,
      inMeeting: true,
      beforeHost: true,
      mute: false,
      watermark: false,
      usePMI: false,
      enforceLogin: false,
      notify: false,
      scheduleMeeting: false,
    };
  },
  methods: {
    change() {
      console.log(this.scheduleMeeting);
    },
    getMeetings() {
      meetings.getAllMeetings().then((res) => {
        console.log(res.data);
      });
    },
    createMeeting() {
      if(!this.password || this.password.trim()=="") {
        console.log("No password")
        return
      }
      var dateFormat = new Intl.DateTimeFormat("default", {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
      var usedOptions = dateFormat.resolvedOptions();
      console.log(this.date);
      console.log(this.$refs.startTime.state);
      var data = {
        topic: this.topic,
        type: 2,
        start_time: this.date + " " + this.$refs.startTime.state,
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
      meetings.createMeeting(data).then((res) => {
        console.log(res.data);
        this.$router.push("/list");
      });
    },
  },
};
</script>
