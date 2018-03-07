<template>
  <div class="basic">
      <div class="info">
          <div class="title" >学生基本信息</div>
          <div class="line">
              <div>
                  <div class="text">学科：</div>数学
              </div>
              <div>
                  <div class="text">姓名：</div>XXX
              </div>
              <div>
                  <div class="text">年级：</div>五年级
              </div>
              <div>
                  <div class="text">年龄：</div>11
              </div>
              <div id="teach">
                  <div class="text">辅导次数：</div>8次
              </div>
          </div>
      </div>
      <div class="character">
          <div class="title">孩子性格</div>
          <div class="line">
              <div class="btn">活泼</div>
              <div class="btn">聪明</div>
          </div>
      </div>
      <div class="state">
          <div class="title">孩子学习情况</div>
          <div class="line">
              <div class="text">综合评分：</div><div>3分</div><div class="comment">良好</div>
          </div>
      </div>
      <div class="family">
          <div class="title">孩子的家庭情况和情绪</div>
          <div class="area">
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
  .basic{
      background: #fff;
      height: 800px;
      padding: 20px;
      .text{
          color: #787878;
      }
      .title{
          font-weight: bold;
          text-align: left;
          border-bottom: 1px solid #CCCCCC;
          height: 34px;
          line-height: 34px;
      }
      .info{
          .line{
              margin-top: 10px;
              display: flex;
              justify-content:space-between;
              font-size: 14px;
              #teach{
                  color:red;
              }
              & > div>div{
                  display: inline-block;
                  
              }
          }
      }
      .character{
          margin-top: 20px;
          .line{
              display: flex;
          }
          .btn{
              background: #4A90E2;
              color:#fff;
              margin-right: 20px;
              height: 30px;
              line-height: 30px;
              width: 84px;
              text-align: center;
              border-radius: 7px;
              margin-top: 10px;
          }
      }
      .state{
          margin-top: 20px;
          .line{
              display: flex;
              font-size: 14px;
              margin-top: 10px;
              & div{
                  margin-right: 20px;
              }
              .comment{
                  color:red;
                  margin-left: 20px;
              }
          }
      }
      .family{
          margin-top: 20px;
          .area{
              width: 100%;
              height: 200px;
              margin-top: 15px;
              textarea{
                  width: 100%;
                  height: 100%;
                  background: #F5F5F5;
                  border:1px solid #E6E6E6
              }
          }
      }
  }
</style>
