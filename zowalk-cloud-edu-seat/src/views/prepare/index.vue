<template>
  <div class="prepare">
      <div class="option">
          <div class="grad">
              <div class="title">年级</div>
              <div>三年级</div>
              <div>四年级</div>
          </div>
          <div class="Subject">
              <div class="title">科目</div>
              <div>语文</div>
              <div>英语</div>
          </div>
          <div class="edition">
              <div class="title">书籍版本</div>
              <div>人教版</div>
          </div>
          <div class="kind">
              <div class="title">类别</div>
              <div>教科书</div>
              <div>辅导书</div>
              <div>练习册</div>
          </div>
          <div class="choose">筛选：</div>
      </div>
      <div class="content">
          <ul @click="goto($event)">
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
              <li><img src="../../assets/icon/shuxue3shang.png" alt=""></li>
          </ul>
      </div>
      <div class="page">
          <ul>
              <li>上一页</li>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>下一页</li>
          </ul>
      </div>
  </div>
</template>


<script>
export default {
  methods:{
      goto(event){
          this.$router.push({
              path:'/prepare/detail'
          })
      }
  }
}
</script>

<style lang="less" scoped>

@import '../../styles/mixin.less';
  .prepare{
      background: #fff;
      height: 820px;
      padding: 30px 30px 30px 30px;
      .option{
          padding: 0 0 0  90px;
          position: relative;
          & > div{
              display: flex
          }
          & > div >div{
              border-left: 1px solid #000;
              margin-top: 20px;
          }
          & > div div{
              width: 17%;
              line-height: 14px;
              height: 14px;
          }
          .title{
              font-weight: bold;
              border-left: 0
          }
          .choose{
              font-weight: bold;
              position: absolute;
              left: 0;
              top: 20px;
          }
      }
      .content{
          .clearfix;
          margin-top: 30px;
          li{
              float: left;
              width: 22%;
              margin-left: 13px;
              margin-top:14px;
              img{
                  width: 100%
              }
          }
      }
      .page{
          font-size: 13px;
          margin-top: 40px;
          ul{
              width: 40%;
              margin: 0 auto;
          }
          li{
              float: left;
              margin-left: 7px;
          }
      }
  }
</style>
