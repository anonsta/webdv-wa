<template>
  <div class="container">
    <div class="login-flexbox">
      <h2 id="para1">Welcome to PostIt</h2>
      <p class="login-text"><a href="webdv-wa/index.html">Create an account</a></p>
      <p>Or</p>
      <p>Please log In</p>
      <form>
        <label>
          <input class="login-textbox" type="text" placeholder="E-mail" >
        </label>

        <label>
          <input class="login-textbox" type="password" placeholder="Password">
        </label>
      </form>
      <br>
      <a href="webdv-wa/index.html">
        <button class="website-button" type="submit">Log In</button>
      </a>
      <p><a href="" target="_blank">Forgot Password?</a></p>
      <div class="postitimage">
        <img src="images/postit.png" alt="PostIt logo" style="width:100px;height:100px;">
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>

</style>