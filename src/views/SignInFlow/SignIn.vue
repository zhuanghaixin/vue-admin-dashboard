<template>
  <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
    <RequestAccount />
    <div class="login">
      <img src="@/assets/DCHQ.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-dark.svg" v-show="!isDarkMode" />
      <h4 :class="{'light-text':isDarkMode,'dark-text':!isDarkMode}">Sign into Design+Code HQ</h4>
      <input
        type="email"
        name
        id
        placeholder="Email"
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
      />
      <input
        type="password"
        name
        id
        placeholder="Password"
        :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}"
      />
      <button>Sign in</button>
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
import * as netlifyIdentityWidget from "netlify-identity-widget";

export default {
  name: "sigin",
  components: {
    RequestAccount,
    ThemeSwitch
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  mounted() {
    netlifyIdentityWidget.open();
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
