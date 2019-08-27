<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <a @click="onClick">Logout</a>
  </div>
</template>

<script>
import { auth } from "@/main";
export default {
  name: "Header",
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

<style lang="scss" scoped></style>
