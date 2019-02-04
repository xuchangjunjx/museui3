<style>
video {
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
  /*加滤镜*/
  /*-webkit-filter: grayscale(100%);*/
  /*filter:grayscale(100%);*/
  z-index: -11;
}
source {
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
</style>

<template>
  <div class="home">
    this is index
    <video autoplay muted
           loop="loop">

      <source src="@/assets/video.mp4"
              type="video/mp4">
    </video>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "home"
};
</script>
