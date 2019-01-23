<template>
  <div class="body">
    <router-view class="child-view"/>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {};
  }
};
</script>
<style>
html,
body,
.body,
.child-view {
  height: 100%;
  width: 100%;
}
</style>

