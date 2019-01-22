<template>
  <div class="login">
    <mu-container class="container">
      <mu-form ref="form" :model="form" class="mu-demo-form" :rules="rules">
        <mu-form-item label="用户名" prop="userName">
          <mu-text-field color="secondary" v-model="form.userName" autocomplete="new-password" prop="userName"></mu-text-field>
        </mu-form-item>
        <mu-form-item label="密码" prop="password">
          <mu-text-field color="secondary"
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
      rules: {
        userName: [{ validate: value => !!value, message: "用户名不能为空" }],
        password: [{ validate: value => !!value, message: "密码不能为空" }]
      }
    };
  },
  methods: {
    submit() {
      this.$refs.form.validate().then(valid => {
        console.log(valid);
      });
    }
  }
};
</script>
<style lang="less">
@import "login.less";
</style>

