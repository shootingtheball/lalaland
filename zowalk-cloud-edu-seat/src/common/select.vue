<template>
  <div class="select" >
    <div class="select2">
      <div class="ipt" @click="isshow"><input ref='vipt' type="text" :placeholder="placetext" readonly="readonly" autocomplete="off">
        <span>
          <img src="../assets/icon/xiangxia.png" alt="">
        </span>
      </div>
      <div class="datalist" v-for="item in list" v-if="showlist" @click="choose(item)">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
      return{
          showlist:false
      }
  },
  props:{
      list:{
          type:Array
      },
      option:{
          type:String
      },
      placetext:{
        type:String
      }
  },
  methods:{
      choose(item){
          this.$refs.vipt.value = item.name;
          this.$emit('give',item.code);
          this.showlist =!this.showlist
      },
      isshow(){
          this.showlist =!this.showlist
      },
      getData(){
          debugger
          if(this.option ==='province'){
              this.getProvince();
          }
      }
  }
}
</script>

<style lang="less" scoped>

  .select{
    width: 70px;
    position: relative;
      .ipt{
          position: relative;
          width: 62px;
          height: 27px;
          line-height: 27px;
          input{
              height: 25px;
              width:50px;
              border:1px solid #979797;
              border-bottom-left-radius: 5px;
              border-top-left-radius: 5px;
              border-right: 0;
              position: relative;
              background: #F5F5F5;
              padding:0 5px;
              &::-webkit-input-placeholder{text-align: right}    /* 使用webkit内核的浏览器 */
              &:-moz-placeholder{text-align: right}                  /* Firefox版本4-18 */
              &::-moz-placeholder{text-align: right}                  /* Firefox版本19+ */
              &:-ms-input-placeholder{text-align: right}           /* IE浏览器 */
          }
          span{
              position: absolute;
              top:0;
              right: -17px;
              height: 27px;
              width: 18px;
              line-height: 20px;
              background: #2A58AD;
              border-bottom-right-radius: 5px;
              border-top-right-radius: 5px;
              img{
                height: 5px;;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%)
              }
          }
      }
      .select2{
        position: absolute;
        height: 27px;
        top: 50%;
        transform: translate(0,-50%)
      }
  }

  .fixplaceholder(){

  }
</style>
