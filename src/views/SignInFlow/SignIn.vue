<template>
  <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
    <Notification v-if="hasText" :text="text" />
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">Sign into Design+Code HQ</h4>
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
        <input
          type="password"
          name
          id
          placeholder="Password"
          :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
          v-model="password"
          required
        />
        <button>Sign in</button>
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
  name: "sigin",
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
      const password = this.password;
      console.log(email);
      console.log(password);
      auth
        .login(email, password, true)
        .then(response => {
          console.log(JSON.stringify({ response }));
          this.$router.replace("/").catch(err => {
            console.log('all good')
          })
        })
        .catch(error => console.log("Failed  ", JSON.stringify(error)));
    }
  },
  mounted() {
    const params = this.$route.params;
    console.log(params.userRecoverAccount)
    console.log(params.userRequestedAccount)
    if (params.userLoggedOut) {
      this.hasText = true;
      this.text = "you have logged out!";
    }else if(params.userRecoverAccount){
      this.hasText=true;
      this.text=`you email has already been sent to ${params.email}`
    }else if(params.userRequestedAccount){
      this.hasText=true;
      this.text=`you request has already been sent to an administrator for ${params.email}`
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
