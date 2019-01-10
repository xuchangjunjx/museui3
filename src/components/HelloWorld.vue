<template>
  <div class="hello">
    <mu-button color="secondary">
      <mu-icon left
               value="android"></mu-icon>
      Android
    </mu-button>
    <!--自定义icon-->
    <mu-button color="secondary">
      <mu-icon left
               size="24"
               value=":ion ion-logo-github"></mu-icon> github
    </mu-button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>
