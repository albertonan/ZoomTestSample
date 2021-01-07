<template>
  <iframe v-if="connect" :src="'/meeting.html?apiKey=CIgtVGg3Tvu-9TNZM4R4Dg&mn='+meetingNumber+'&email='+email+'&name='+username+'&pwd='+password+'&signature='+signature"></iframe>
</template>

<script>

export default {
  name: "ZoomMeeting",
  props: [
    "meetingNumber",
    "username",
    "password",
    "role",
    "email",
    "signature",
    "connect"
  ],
  data: () => {
    return {
      meetingConfig: {},
    };
  },
  beforeMount() {
    this.meetingConfig = {
      meetingNumber: this.meetingNumber,
      userName: this.username,
      passWord: this.password,
      leaveUrl: "/list",
      role: this.role,
      userEmail: this.email,
      lang: "en",
      signature: this.signature,
      china: "0",
    };
  },
  mounted() {

  },
  methods: {
    
  },
};
</script>

<style scoped>
iframe {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
.c-chart-brand {
  position: absolute;
  width: 100%;
  height: 100px;
}
</style>
