<template>
  <div class="calendar">
      <div class="head">
          <div class="title">
            <div @click="gotoPast"><img src="@/assets/icon/left.png" alt=""></div>
            <div>{{titleDate}}</div>
            <div @click="gotoNext"><img src="@/assets/icon/right.png" alt=""></div>
          </div>
      </div>
      <div class="main">
          <table>
              <tr>
                  <th>周一</th>
                  <th>周二</th>
                  <th>周三</th>
                  <th>周四</th>
                  <th>周五</th>
                  <th>周六</th>
                  <th>周日</th>
              </tr>
              <tr>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
              </tr>
              <tr>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
              </tr>
              <tr>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
              </tr>
              <tr>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
              </tr>
              <tr>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
                  <td><div></div></td>
              </tr>
          </table>
      </div>
      <div class="info">
          <ul>
              <li>本月签到次数：</li>
              <li>本月签到次数：</li>
              <li>缺勤：</li>
              <li>早退：</li>
          </ul>
          <ul>
              <li>累计签到：</li>
              <li>累计应签到次数：</li>
              <li>累计缺勤：</li>
              <li>累计早退：</li>
          </ul>
      </div>
  </div>
</template>

<script>

export default {
  data(){
      return {
          dataObj:new Date(),
          tds : document.getElementsByTagName('td'),
          year:'',
          month:'',
          date:''
      }
  },
  computed:{
      titleDate(){
          this.year = this.dataObj.getFullYear();
          this.month = this.dataObj.getMonth();
          this.date = this.dataObj.getDate();
          return `${this.year}年${this.month+1}月${this.date}日`;
      }
  },
  mounted(){
      this.getCalendar()
  },
  methods:{
      getCalendar() {
          let firstDay = new Date(this.year,this.month,1);
          for(let i = 0;i<this.tds.length;i++){
              let thisdate = new Date(this.year,this.month,i+2-firstDay.getDay());
              let div = document.createElement('div');
              let div2 = document.createElement('div');
              div.appendChild(div2);
              div2.innerText = thisdate.getDate();
              this.tds[i].firstChild.appendChild(div);
              
              let dateMon = thisdate.getMonth();
              if(dateMon !== this.month){
                this.tds[i].innerHTML =''
              }
              let dataDay = thisdate.getDay();

              if(dataDay===6 || dataDay ===0){
                  div.className = 'weekend'
              }else{
                  div.className = 'datenumber'
              }
          }
      },
      gotoPast() {
          this.dataObj = new Date(this.year,this.month-1)
          this.getCalendar()
      },
      gotoNext() {
          this.dataObj = new Date(this.year,this.month+1)
          this.getCalendar();
      }
  }
}
</script>


<style lang="less" >
  .calendar{
      width: 100%;
      margin-top: 30px;
      .head{
          background: #9FD6F4;
          border: 1px solid #188FD1;
          border-radius: 4px;
          .title{
              width: 35%;
              display: flex;
              justify-content: space-between;
              margin: 0 auto;
              height: 40px;
              line-height: 40px;
              color: #2A58AD;
              div{
                  text-align: center;
                  line-height: 40px;
              }
              img{
                  width: 25%;
              }
              
          }
      }
      .main{
          table{
              width: 100%;
              tr:first-child{
                  background: #C0EBFD;
                  color:#2A58AD;
                  font-weight:normal !important;
              }
              td{
                  border: 1px solid #95B6F3;
                  position: relative;
              }
              td >div{
                  padding-top: 100%;
                  height: 0;
              }
          }
          .now{
              background: red
          }
          .datenumber{
              position: absolute;
              top: 0;
              left: 0;
              border-top: 20px solid #73B75F;
              border-left :20px solid #73B75F;
              border-right :20px solid transparent;
              border-bottom: 20px solid transparent;
              div{
                  position: absolute;
                  top: -15px;
                  left: -16px;
                  color:#fff
              }
          }
          .weekend{
              position: absolute;
              top: 0;
              left: 0;
              border-top: 20px solid #f2c6c9;
              border-left :20px solid #f2c6c9;
              border-right :20px solid transparent;
              border-bottom: 20px solid transparent;
              div{
                  position: absolute;
                  top: -15px;
                  left: -16px;
                  color:#fff
              }
          }
      }
      .info{
          background: #fff;
          margin-top: 50px;
          margin-bottom: 30px;
          ul{
              display: flex;
              justify-content: space-between;
              li{
                  flex: 1;
                  height: 40px;
                  width: 150px;
                  line-height: 40px
              }
          }
      }
  }
</style>
