<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
import "animate.css";
export default {
  name: "App",
  mounted() {
    const isDarkMode = this.$store.getters.isDarkMode;
    document.body.style.backgroundColor = isDarkMode ? "#212C4F" : "#F0F3F5";
  }
};
</script>
<style lang="scss">
* {
  transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
}
body {
  background: $dark-blue;
}
h1 {
  @include heading-1;
}
p {
  @include large-text-bold;
}
#app {
  font-family: system-font-family;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: $white;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: $white;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
h4 {
  margin: 0;
  font-family: SF Pro Display;
  font-size: 24px;
  line-height: 34px;
  // color: $white;
}
input {
  height: 60px;
  width: 100%;
  font-size: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;
  color: $white;
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

  text-decoration: none;
}
/* Theme*/
// 换肤
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}
.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}
.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}
.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}
.light-link {
  color: rgba(255, 255, 255, 0.3);
}
.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>
