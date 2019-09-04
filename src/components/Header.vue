<template>
  <div id="nav">
    <div class="nav-1">
      <img src="@/assets/DCHQ-small.svg" v-show="isDarkMode" />
      <img src="@/assets/DCHQ-small-dark.svg" v-show="!isDarkMode" />
      <router-link to="/" :class="{'dark-nav':isDarkMode,'light-nav':!isDarkMode}">Stats</router-link>
      <router-link to="/manage">Manage User</router-link>
      <router-link to="/team">Team</router-link>
    </div>
    <a @click="onClick">
      Logout
      <img src="@/assets/logout.svg" alt />
    </a>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "Header",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    onClick() {
      const user = auth.currentUser();
      console.log(user);

      user
        .logout()
        .then(response => {
          this.$router.push({
            name: "SignIn",
            params: { userLoggedOut: true }
          });
        })
        .catch(error => {
          console.log("Failed to logout user: %o", error);
        });
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  padding: 30px;
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 15px 15%;
  background: $super-dark-blue;
  align-items: center;
  width: 100%;
  img {
    margin-right: 20px;
  }
  a {
    font-weight: bold;
    color: $dark-gray;
    &.router-link-exact-active.dark-nav {
      color: $white;
    }
    &.router-link-exact-active.light-link {
      color: $middle-blue;
    }
  }
}
.nav-1 {
  display: flex;
  align-items: center;
  a {
    margin: 0 20px;
  }
}
</style>
