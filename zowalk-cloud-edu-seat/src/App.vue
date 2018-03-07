<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components:{
  },
  created() {
      this.$store.commit('CHANGE_TOKEN')
  }
}
</script>

<style lang="less">
html,body,#app{
  width: 100%;
  height: 100%;
  -webkit-tap-highlight-color:rgba(0,0,0,0)
}

body,
dd,
dl,
dt,
fieldset,
form,
h1,
h2,
h3,
h4,
h5,
h6,
html,
img,
legend,
li,
ol,
p,
ul {
    margin: 0;
    padding: 0;
    -moz-user-select:none;-webkit-user-select:none;
    -webkit-tap-highlight-color:transparent;
}

button,
fieldset,
img,
input {
    border: none;
    padding: 0;
    margin: 0;
    outline-style: none;
}
ol,
ul {
    list-style: none;
}

input {
    padding-top: 0;
    padding-bottom: 0;
    font-family: "SimSun", "宋体";
}

input,
select {
    vertical-align: middle;
}

input,
select,
textarea {
    font-size: 12px;
    margin: 0;
    padding: 0;
}
textarea {
    resize: none;
    background: #F5F5F5;
    border: 1px solid #E6E6E6;
    width:100%
}

/*防止拖动*/
img {
    border: 0;
    vertical-align: middle;
}

/*  去掉图片低测默认的3像素空白缝隙*/
table {
    border-collapse: collapse;
}
//去斜体
i {
  font-style:normal
}
body {
    font-family: PingFangSC-normal,Microsoft YaHei,helvetica,'Heiti SC';
    color: #000;
    background: #eaeef1;
}

a {
    color: #666;
    text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    text-decoration: none;
    font-weight: normal;
    font-size: 100%;
    font-family: PingFangSC-Light,helvetica,'Heiti SC';
}

.ac {
    text-align: center;
}


</style>
