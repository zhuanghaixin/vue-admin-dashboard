<template>
  <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">Request Account</h4>
      <form @submit.prevent="onSubmit">
        <input
          type="email"
          name
          id
          placeholder="Email"
          :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
          v-model="email"
          required
        />
  
        <button>Request Accout</button>
      </form>
      <router-link
        to="/recover"
        :class="{'light-link':isDarkMode,'dark-link':!isDarkMode}"
      >Forgotten your password?</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
import Notification from "@/components/Notification.vue";
// import * as netlifyIdentityWidget from "netlify-identity-widget";
import { auth } from "@/main";

export default {
  name: "request",
  components: {
    RequestAccount,
    ThemeSwitch,
    Notification
  },
  data() {
    return {
      email: null,
      password: null,
      hasText: false,
      text: ""
    };
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  // mounted() {
  //   netlifyIdentityWidget.open();
  // },
  methods: {
    onSubmit() {
      const email = this.email;
      console.log(email);
    //Slack API logic
    let slackURL=new URL("https://slack.com/api/chat.postMessage")
    const data={
      token:'',
      channel:'hq',
      text:`${email} has requested admin access to HQ.Please go to Netlify to invite them`,
    }
    slackURL.search=new URLSearchParams(data)
    console.log(slackURL)
    fetch(slackURL)
    fetch(slackURL).then(()=>{
      this.$router.push({
        name:'SignIn',
        params:{
        userRequestedAccount:true,
        email:email
        }
      })
    })
    .catch((error) => {console.log("Error request account: %o", error)
    })
    }
  },
  mounted() {
    const params = this.$route.params;
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "you have logged out!";
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.login {
  width: 400px;
}
</style>
