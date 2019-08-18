<template>
  <div class="container">
    <div class="request">
      Don't have a Design+Code HQ account
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" alt />
      <h4>Sign into Design+Code HQ</h4>
      <input type="email" name id placeholder="Email" />
      <input type="password" name id placeholder="Password" />
      <button>Sign in</button>
      <router-link to="/recover">Forgotten your password?</router-link>
      <button @click="toggleDarkMode"></button>
    </div>
  </div>
</template>

<script>
export default {
  name: "sigin",
  data: function() {
    return {
      isDarkMode: true
    };
  },
  methods: {
    toggleDarkMode() {
      this.isDarkMode = !this.isDarkMode;
      alert(this.isDarkMode);
    }
  }
};
</script>

<style lang="scss" scoped>

.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.login {
  width: 400px;
}
.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);
  a {
    color: white;
  }
}
h4 {
  margin: 0;
  font-family: SF Pro Display;
  font-size: 24px;
  line-height: 34px;
  color: #ffffff;
}
input {
  height: 60px;
  width: 100%;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  color: #ffffff;
  padding-left: 20px;
  margin-top: 20px;
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
button {
  /* teal */
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  height: 60px;
  width: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: SF Pro Text;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
}
a {
  font-family: SF Pro Text;
  font-size: 16px;
  line-height: 25px;
  color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
}
</style>
