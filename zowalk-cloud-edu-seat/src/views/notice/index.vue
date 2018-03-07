<template>
  <div class="notice">
      <navbar></navbar>
      <div class="main">
          <div class="head">通知公告</div>
          <div class="info">
              <table>
                  <tr>
                      <td>通知</td>
                      <td id="neirong">内容</td>
                      <td>时间</td>
                  </tr>
                  <tr>
                      <td>1</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>5</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>6</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>7</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
                  <tr>
                      <td>8</td>
                      <td>王晓丽今天的表现很不错，很积极有效的为学生解决了**生活问题</td>
                      <td>2017—12—09  18:00:00</td>
                  </tr>
              </table>
          </div>
      </div>
  </div>
</template>

<script>
import navbar from '../../common/navbar.vue'

export default {
  components:{
      navbar
  }
}
</script>

<style lang="less" scoped>
  .notice{
      .main{
          position: fixed;
          top: 15%;
          left: 50%;
          transform: translate(-50%);
          width: 60%;
          height: 900px;
          & > div{
              width: 100%
          }
          table{
              width: 100%;
          }
          .head{
              background: #9FD6F4;
              border:1px solid #188FD1;
              text-align: center;
              color: #2A58AD;
              height: 43px;
              line-height: 43px;
              font-weight: bold;
              font-size: 22px;
              border-radius: 5px;
          }
          .info{
              background: #fff;
              padding: 8px;
              margin-top: 8px;
              table{
                  td{
                      border:1px solid #95B6F3;
                      text-align: center
                  }
                  tr:first-child{
                    font-weight: bold;
                    background: #C0EBFD;
                  }
                  tr{
                      height: 40px;
                      line-height: 40px;
                      td:first-child{
                          width: 15%;
                          text-align: center
                      }
                      td:nth-child(2){
                          text-align: left
                      }
                  }
                  #neirong{
                      text-align: center
                  }
              }
          }
      }
  }
</style>
