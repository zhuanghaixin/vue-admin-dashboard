<template>
  <div class="home">
    <Header></Header>
    <div class="container">
      <div class="spread">
        <h3>Traffic Overview</h3>
        <div class="toggle">
          <div class="days">Days</div>
          <div class="weeks">Weeks</div>
          <div class="months">Months</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";

export default {
  name: "home",
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
.container {
  padding: 0 15%;
}
.spread {
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
}
.toggle {
  display: flex;
  flex-wrap: nowrap;
  @include medium-text;
  color: $dark-gray;
  height: 50px;
  width: 240px;
  border-radius: 6px;
  padding: 5px;
  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.3);
}
@mixin toggle-settings {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 33.33%;
  height: 100%;
}
.days {
  @include toggle-settings;
  background-color: $teal;
  border-radius: 4px;
  color: $white;
}
.weeks {
  @include toggle-settings;
}
.months {
  @include toggle-settings;
}

h3 {
  @include heading-3;
}
</style>
