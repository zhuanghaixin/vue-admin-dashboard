<template>
  <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">Recover Accout</h4>
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
     
        <button>Send Email</button>
      </form>
      <router-link
        to="/signin"
        :class="{'light-link':isDarkMode,'dark-link':!isDarkMode}"
      >Already have an account? Sign in now</router-link>
      <ThemeSwitch />
    </div>
  </div>
</template>

<script>
import RequestAccount from "@/components/RequestAccount";
import ThemeSwitch from "@/components/ThemeSwitch.vue";
// import * as netlifyIdentityWidget from "netlify-identity-widget";
import { auth } from "@/main";

export default {
  name: "rover",
  components: {
    RequestAccount,
    ThemeSwitch,
  },
  data() {
    return {
      email: null,
      password: null,
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
      auth
        .requestPasswordRecovery(email)
        .then(response => {
          this.$router.push({
          name:"SignIn",
          params:
          {
            userRecoverAccount:true,
            email:email
          }
          })
        })
        .catch(error => console.log("Error sending recovery mail: %o", error));
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
