<template>
  <div class="homework">
    <navbar></navbar>
    <div class="main">
      <sidebar></sidebar>
      <div class="content" >
        <div class="option">
          <div class="already" :class="{choose:chooseNow,unchoose:!chooseNow}" id="already" @click="change($event)">已预约</div>
          <div class="past" :class="{choose:choosePast,unchoose:!choosePast}" id="past" @click="change($event)">往期预约</div>
        </div>
        <div class="info" v-if="chooseNow" >
          <table @click="goto($event)" >
            <tr>
              <th>学科</th>
              <th>年级</th>
              <th>姓名</th>
              <th>孩子性格</th>
              <th>孩子今日作业</th>
              <th>上次作业辅导老师</th>
              <th>上次作业辅导时间</th>
              <th>预约辅导时间</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>数学</td>
              <td>五年级</td>
              <td>良知</td>
              <td>活泼、可爱</td>
              <td class="work">数学、语文</td>
              <td>王佳</td>
              <td>2018-01-2</td>
              <td>18：30</td>
              <td>
                <ul>
                  <li id="summary">辅导汇报</li>
                  <li>开始上课</li>
                  <li>结束授课</li>
                  <li id="basic">学生详情</li>
                  <li>课程已学完</li>
                  <li id="live">为孩子匹配其他项目</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>数学</td>
              <td>五年级</td>
              <td>良知</td>
              <td>活泼、可爱</td>
              <td class="work">数学、语文</td>
              <td>王佳</td>
              <td>2018-01-2</td>
              <td>18：30</td>
              <td>
                <ul>
                  <li id="summary">辅导汇报</li>
                  <li>开始上课</li>
                  <li>结束授课</li>
                  <li id="basic">学生详情</li>
                  <li>课程已学完</li>
                  <li id="live">为孩子匹配其他项目</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
        <div class="info" v-if="choosePast">
          <table>
            <tr>
              <th>学科</th>
              <th>年级</th>
              <th>姓名</th>
              <th>孩子性格</th>
              <th>孩子今日作业</th>
              <th>上次作业辅导老师</th>
              <th>学生评价</th>
              <th>家长评价</th>
              <th>操作</th>
            </tr>
            <tr>
              <td>数学</td>
              <td>五年级</td>
              <td>良知</td>
              <td>活泼、可爱</td>
              <td class="work">数学、语文</td>
              <td>王佳</td>
              <td><img src="@/assets/icon/pingjia.png" alt=""></td>
              <td><img src="@/assets/icon/pingjia.png" alt=""></td>
              <td>
                <ul>
                  <li  @click="$router.push({path:'/basic'})">学生详情</li>
                  <li @click="$router.push({path:'/summary'})">辅导汇报</li>
                  <li>查看回放</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>数学</td>
              <td>五年级</td>
              <td>良知</td>
              <td>活泼、可爱</td>
              <td class="work">数学、语文</td>
              <td>王佳</td>
              <td><img src="@/assets/icon/pingjia.png" alt=""></td>
              <td><img src="@/assets/icon/pingjia.png" alt=""></td>
              <td>
                <ul>
                  <li  @click="$router.push({path:'/basic'})">学生详情</li>
                  <li @click="$router.push({path:'/summary'})">辅导汇报</li>
                  <li>查看回放</li>
                </ul>
              </td>
            </tr>
          </table>
        </div>
      </div>
      <div class="page">
        <div>上一页</div>
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>下一页</div>
      </div> 
    </div>
  </div>
</template>

<script>
import navbar from '../../common/navbar.vue'
import sidebar from '../../common/sidebar.vue'

export default {
  data(){
    return {
      chooseNow:true,
      choosePast:false,
    }
  },
  components:{
    navbar,sidebar
  },
  methods:{
    change(event){
      if(event.target.id ==='already'){
        this.chooseNow = true;
        this.choosePast = false;
      }else if(event.target.id === 'past'){
        this.chooseNow = false;
        this.choosePast =true
      }
    },
    goto(event) {
      let id =event.target.id;
      switch(id) {
        case 'live':
        this.$api({
          url:'/admin/live/list',
          method:'get',
          params:{
            address:'s'
          }
        }).then(res => {
          this.$router.push({path:'/live'})
        }) 
        break;
        case 'summary':
        this.$router.push({path:'/summary'})
        break;
        case 'basic':
        this.$router.push({path:'/basic'})
        break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.main{
  position: absolute;
}
  .homework{
    padding-top: 45px;
    .content{
      margin-left: 18vw;
      width: 81vw;
      .option{
        font-size: 0;
        text-align: center;
        margin-top: 40px;
        div{
            font-size: 16px;
            display: inline-block;
            width: 135px;
            text-align: center;
            height: 40px;
            line-height: 40px;
            border-radius: 5px;
        }
        div:last-child{
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
            border-left-width: 0;
        }
        div:first-child{
          border-top-right-radius: 0;
          border-bottom-right-radius: 0;
          border-right-width: 0;
        }
        .choose{
         background: #2A58AD;
         color:#fff; 
         border: 1px solid #2A58AD;
        }
        .unchoose{
          color:#2A58AD;
          border: 1px solid #94abd6;
        }
      }
      .info{
        margin-top: 30px;
        table{
          width: 99%;
          margin-left: 10px;
          text-align: center;
          .work{
            color: #BD10E0
          }
          tr:first-child{
            background: #9FD6F4;
            color:#2A58AD;
            border:1px solid #188FD1;
            height: 42px;
            line-height: 42px;
            border-top-left-radius: 0px;
            border-bottom-left-radius: 3px;
          }
          th:nth-child(1){
            width: 7%;
          }
          th:nth-child(2){
            width: 7%
          }
          th:nth-child(3){
            width: 7%;
          }
          th:nth-child(4){
            width: 10%;
          }
          th:nth-child(5){
            width: 13%;
          }
          th:nth-child(6){
            width: 16%;
          }
          th:nth-child(7){
            width: 18%;
          }
          th:nth-child(8){
            width: 10%
          }
          tr{
            border-bottom: 1px dashed #979797;
          }
          td{
            font-size: 14px;
            height: 110px;
            img{
              width: 100px
            }
          }
          li{
            text-align: left
          }
          ul{
            display: inline-block;
            text-align: left;
          }
        }
      }
    }
    .page{
      margin-left: 18vw;
      color:#787878;
      font-size: 14px;
      text-align: center;
      margin-top: 55px;
      div{
        display: inline-block;
        margin-right: 5px;
      }
      div:first-child{
        color:#000;
      }
      div:last-child{
        color:#000
      }
   }
  }
</style>

