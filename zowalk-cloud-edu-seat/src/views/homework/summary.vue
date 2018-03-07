<template>
  <div class="summary">
      <div class="main">
          <div class="title">为孩子贴上标签<img src="../../assets/icon/biaoqian.png" alt=""></div>
          <div class="btn">
              <div class="btnline">
                  <div>活泼</div>
                  <div>聪明</div>
                  <div>聪明</div>
                  <div>聪明</div>
                  <div>聪明</div>
                  <div>活泼</div>
              </div>
              <div class="btnline"> 
                  <div>活泼</div>
                  <div>聪明</div>
                  <div>活泼</div>
                  <div>活泼</div>
                  <div>活泼</div>
                  <div>活泼</div>
              </div>
          </div>
          <div class="comment comment1">
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="title">
                此次辅导学习情况汇报
          </div>
          <div class="option">
              <div>
                  <input type="checkbox">正常授课
              </div>
              <div>
                  <input type="checkbox">延时授课
              </div>
              <div>
                  <input type="checkbox">提早完成
              </div>
          </div>
          <div class="comment comment2">
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
          <div class="title">
              此次辅导学习情况汇报
          </div>
          <div class="option situ">
              <div >
                  <input type="checkbox">学习较差（跟不上学习进度1分）
              </div>
              <div > 
                  <input type="checkbox">学习一般（会做题，但是理解不透彻2分）
              </div>
          </div>
          <div class="option situ">
              <div>
                  <input type="checkbox">学习良好（知识点能掌握，学习积极3分）
              </div>
              <div>
                  <input type="checkbox" name="" id="">学习很好（孩子可以举一反三，所有知识点能很快掌握）
              </div>
          </div>
          <div class="title">
              学生家庭情况和情绪
          </div>
          <div>
              <textarea name="" id="" cols="30" rows="10"></textarea>
          </div>
      </div>
  </div>
</template>

<style lang="less" scoped>
  .summary{
      padding: 30px 120px 40px 120px;
      background: #fff;
      width: 55%;
      margin: 50px auto;
      border-radius: 6px;
      box-shadow: 1px 1px 5px #828282;
      .title{
          text-align: left;
          font-weight: bold;
          height: 30px;
          line-height: 30px;
          font-size: 18px;
          margin-top: 10px;
          img{
              height: 50%;
          }
      }
      .btn{
          color: #4A90E2;
          margin-top: 10px;
          .btnline{
              margin-top: 10px;
              display: flex;
              justify-content: space-between;
              div{
                  border: 1px solid #4A90E2;
                  height: 30px;
                  line-height: 30px;
                  border-radius: 7px;
                  text-align: center;
                  width: 84px;
              }
          }
      }
      .comment{
          width: 100%;
          margin-top: 10px;
          textarea{
              width: 100%;
          }
      }
      .comment1{
          textarea{
              height: 80px;
          }
      }
      .option{
          display: flex;
          margin-left: 30px;
          & >div{
              margin-right: 30px;
          }
          .situ{
                        div:first-child{
              width: 50%;
          }
          }
          input{
              margin-right: 5px;
              vertical-align: 1px;
          }
      }
      .comment2{
          textarea{
              height: 120px;
          }
      }
  }
</style>
