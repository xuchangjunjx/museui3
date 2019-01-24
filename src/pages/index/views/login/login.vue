<style lang="less">
@import "login.less";
</style>
<template>
  <div>
    <div class="login"></div>
    <mu-container class="container">
      <mu-form ref="form" :model="form" class="mu-demo-form">
        <mu-form-item label="用户名" prop="userName" :rules="userNamerules">
          <mu-text-field
            color="secondary"
            v-model="form.userName"
            autocomplete="new-password"
            prop="userName"
          ></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password" :rules="passwordrules">
          <mu-text-field
            color="secondary"
            v-model="form.password"
            prop="password"
            autocomplete="new-password"
            :action-icon="visibility ? 'visibility_off' : 'visibility'"
            :action-click="() => (visibility = !visibility)"
            :type="visibility ? 'text' : 'password'"
          ></mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button color="secondary" full-width @click="submit">Submit</mu-button>
    </mu-container>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      visibility: false,
      form: {
        userName: "",
        password: ""
      },

      userNamerules: [
        { validate: value => !!value, message: "用户名不能为空" }
      ],
      passwordrules: [{ validate: value => !!value, message: "密码不能为空" }]
    };
  },
  methods: {
    submit() {
      let that = this;
      this.$refs.form.validate().then(valid => {
        if (valid) {
          that.$store.commit("SET_USER", that.form);
          let redirect = decodeURIComponent(that.$route.query.redirect || "/");
          that.$router.push({
            path: redirect
          });
        }
      });
    }
  },
  mounted() {
    // this.$progress.start();
  }
};
</script>


