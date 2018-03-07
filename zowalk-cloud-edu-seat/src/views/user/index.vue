<template>
  <div class="back">
    <div class="user">
      <div class="head">
          <div class="avatar">
              <img src="http://img3.imgtn.bdimg.com/it/u=3323357240,227862409&fm=27&gp=0.jpg" alt="">
          </div>
      </div>
      <div class="main">
        <div class="info">
          <div class="infofir">
              <div class="name"><div class="logoname"><span><img src="../../assets/icon/name.png" alt=""></span></div><div class="text">姓名：</div><input type="text" ref="nameIpt" v-model="seatname"></div>
              <div class="age"><div class="logoname"><span><img src="../../assets/icon/tree.png" alt=""></span></div><div class="text">年龄：</div><input type="text" ref="ageIpt"></div>
              <div class="gender"><div class="logoname"><span><img src="../../assets/icon/gender.png" alt=""></span></div><div class="text">性别：</div><input type="text" ref="genderIpt"></div>
          </div>
        </div>
        <div class="inforsec">
            <div class="address">
              <div class="logoname">
                <span><img src="../../assets/icon/location.png" alt=""></span>
              </div>
              <div class="text">家庭住址：</div>
            </div>
            <div class="location">
              <vselect placetext='省'></vselect>
              <vselect placetext='市'></vselect>
            </div>
            <div class="detail"><input type="text" name="" id="" placeholder="详细地址"></div>
        </div>
        <div class="school">
            <div class="school_name"><div class="logoname2"><span><img src="../../assets/icon/school.png" alt=""></span></div><div class="text">学校名称：</div><input type="text" ref="schoolName"></div>
            <div class="school_major"><div class="logoname2"><span><img src="../../assets/icon/tree.png" alt=""></span></div><div class="text">专业/系：</div><input type="text" ref="schoolMajor"></div>
            <div class="school_grade"><div class="logoname2"><span><img src="../../assets/icon/grade.png" alt=""></span></div><div class="text">年级：</div><input type="text" ref="schoolGrade"></div>
            <div class="xuexiao"><img src="../../assets/icon/xuexiao.png" alt=""></div>
        </div>
        <div class="shouke">
            <div class="shoukeFir">
              <div class="logoname3"><span><img src="../../assets/icon/teach.png" alt=""></span></div>
              <div class="text">可授课学段：</div>
              <div class="sect">
                <div class="btn">小学</div>
                <div class="btn">初中</div>
                <div class="btn">高中</div>
              </div>
              <div class="shoukexinxi"><img src="../../assets/icon/shouke.png" alt=""></div>
            </div>
            <div class="shoukeSec">
                <div class="logoname4"><span><img src="../../assets/icon/subject.png" alt=""></span></div>
                <div class="text">可授课科目：</div>
                <div class="item">
                    <div class="line">
                        <div class="btn">语文</div>
                        <div class="btn">数学</div>
                        <div class="btn">英语</div>
                        <div class="btn">化学</div>
                    </div>
                    <div class="line">
                        <div class="btn">物理</div>
                        <div class="btn">政治</div>
                        <div class="btn">历史</div>
                        <div class="btn">语文</div>
                    </div>
                </div>
            </div>
            <div class="shoukeSec">
                <div class="logoname4"><span><img src="../../assets/icon/teach2.png" alt=""></span></div>
                <div class="text">可授课年级：</div>
                <div class="item">
                    <div class="line">
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                    </div>
                    <div class="line">
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                        <div class="btn">一年级</div>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div class="send" @click="send">提交</div>
    </div>
  </div>
</template>

<script>
import vselect from '@/common/select.vue'
import {userInfo} from '@/api/index.js'
import {infoUpdate} from '@/api/index.js'

export default {
  components:{
    vselect
  },
  data() {
      return {
          userdata:{},
          seatname:''
      }
  },
  created() {
      let params = {
          id :this.$store.state.userId
      }
      userInfo(params).then(res => {
          if(res.data.code === '2000'){
              let r = res.data.data;
              this.$refs.nameIpt.value = r.name ? r.name : r.mobile;
              this.$refs.ageIpt.value = r.age ? r.age : '未填写';
              this.$refs.genderIpt.value = r.gender ? r.gender : '未填写';
              this.$refs.schoolName.value =r.schoolName ? r.schoolName :'未填写' ;
              this.$refs.schoolMajor.value =r.schoolMajor ? r.schoolMajor:'未填写';
              this.$refs.schoolGrade.value =r.schoolGrade ? r.schoolGrade:'未填写';  
            }
      })
  },
  methods:{
      send() {
          let q = {
              realname:this.seatname
          }
          infoUpdate(q).then(res =>{
              
          })
      }
  }
}
</script>

<style lang="less" scoped>
  .user{
      position: absolute;
      width: 120%;
      height: 800px;
      top: 20px;
      left: -170px;
      background: #fff;
      box-shadow: 1px 1px 5px #868686;
      .head{
          padding-top: 17%;
          background: #eaeaea;
          position: relative;
          background-image: url('../../assets/icon/shanfeng.png');
          background-position:0% 0% ;
          background-size: 100% 100%;
          background-repeat: no-repeat;
          .avatar{
              position: absolute;
              left: 50%;
              top: 50%;
              padding-top: 11%;
              width: 11%;
              transform: translate(-50%,-50%);
              border-radius: 50%;
              background: #fff;
              overflow: hidden;
              img{
                 position: absolute;
                 left: 50%;
                 top: 50%;
                 transform: translate(-50%,-50%);
                 width: 100%
              }
          }
      }
      .main{
          padding: 0 25px;
          .text{
              color:#767676;
              margin-left: 10px;
          }
         .info,.inforsec{
           color: #2A58AD;
           padding: 0 25px;
           border-bottom: 1px dashed #979797;
           & > div{
              display: flex;
              justify-content: space-between;
              height: 70px;
              line-height: 70px;
          }
           & > div div{
              display: inline-block
          }
        }
        .infofir{
            input{
                color: #2A58AD;
                font-weight: bold;
                font-size: 14px;
                vertical-align: 1px
            }
            .name{
                input{
                    width: 41%
                }
            }
            .age{
                input{
                    width: 20%
                }
            }
            .gender{
                input{
                    width: 30%
                }
            }
        }
        .logoname{
            height: 100%;
            span{
              vertical-align: 2px;
            }
              img{
              height: 45%;
            }
         }
        .logoname2{
            height: 100%;
            span{
              vertical-align: 2px;
            }
              img{
              height: 63%;
            }
        }
        .logoname3{
            height: 100%;
            span{
              vertical-align: 2px;
            }
            img{
              height: 48%;
            }
        }
        .logoname4{
            height: 100%;
            span{
              vertical-align: 2px;
            }
              img{
              height: 25%;
            }
        }
        .inforsec{
          display: flex;
          justify-content: space-between;
          .location{
            width: 200px;
            display: flex;
            justify-content: space-around
          }
          .detail{
            width: 43%;
            box-sizing: border-box;
            padding: 20px 0;
            input{
              background: #F5F5F5;
              border: 1px solid #979797;
              height: 27px;
              width: 100%;
              border-radius: 4px;
              &::-webkit-input-placeholder{color: #D7D7D7}    /* 使用webkit内核的浏览器 */
              &:-moz-placeholder{color: #D7D7D7}                  /* Firefox版本4-18 */
              &::-moz-placeholder{color: #D7D7D7}                  /* Firefox版本19+ */
              &:-ms-input-placeholder{color: #D7D7D7}           /* IE浏览器 */
            }
          }
        }
        .school{
            color: #2A58AD;
            display: flex;
            justify-content: space-between;
            height: 50px;
            line-height: 50px;
            padding: 60px 25px 0 25px;
            border-bottom: 1px dashed #979797;
            position: relative;
            & > div div{
                display: inline-block
            }
            .xuexiao{
                position: absolute;
                left:-25px;
                top: 10px;
                width: 105px;
                img{
                    width: 100%;
                }
            }
            input{
                color: #2A58AD;
                font-weight: bold;
                font-size: 14px;
                vertical-align: 1px;

            }
            .school_name{
                input{
                    width: 40%;
                }
            }
            .school_major{
                input{
                    width: 40%
                }
            }
            .school_grade{
                input{
                    width: 30%;
                }
            }
        }
        .shouke{
            color: #2A58AD;
           // padding: 0 25px;
            .btn{
                border: 1px solid #2A58AD;
                border-radius: 4px;
                width: 75px;
                height:26px;
                color: #2A58AD;
                line-height: 26px;
                text-align: center
            }
            .shoukeFir{
                padding: 60px 25px 0 25px;
                height: 50px;
                line-height: 50px;
                position: relative;
                border-bottom: 1px dashed #979797;
                .text2{
                   color:#767676;
                }
                .btn{
                    margin-left: 20px;
                }
                .sect{
                    //display: flex;
                }
                & div{
                    display: inline-block;
                }
                .shoukexinxi{
                    position: absolute;
                    left:-25px;
                    top: 10px;
                    width: 105px;
                    img{
                        width: 100%
                    }
                }
            }
            .shoukeSec{
                border-bottom: 1px dashed #979797;
                color:#767676;
                height: 110px;
                line-height: 110px;
                padding: 0 25px;
                .desc{
                    width: 18%
                }
                .item{
                    height: 80%;
                    width: 72%;
                }
                & >div{
                    display: inline-block;
                    height: 100px;
                    line-height: 100px;
                }
                .line{
                    display: flex;
                    justify-content: space-between;
                    margin-top: 20px;
                }
            }
        }
      }
      .send{
          background: #2A58AD;
          color: #fff;
          width: 100px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          border-radius: 8px;
          margin: 20px auto
      }
  }
</style>
