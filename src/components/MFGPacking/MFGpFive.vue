<template>
  <div class="MFGpFive">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>5. Improvement Item</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL={{ subTotal }}</h3>
        </el-col>
      </el-row>
    </div>
    <div class="Content">
      <table class="contentTable">
        <div v-for="(item, index) in tableData" :key="index">
          <tr>
            <td>
              <span style="padding-right:10px;">Checks: {{$data[item.model]}}</span>
            </td>
            <td>{{ item.text }}</td>
          </tr>
          <tr>
            <td></td>
            <td>{{ item.cn }}</td>
          </tr>
          <tr>
            <td></td>
            <td>
              <div>
                <el-input-number
                size="mini"
                v-model="$data[item.dt1]"
                @change="calculateMFGpFive"
                :min="0"
              ></el-input-number>
                {{ item.dt1Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt2]"
                @change="calculateMFGpFive"
                :min="0"
              ></el-input-number>
                {{ item.dt2Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt3]"
                @change="calculateMFGpFive"
                :min="0"
              ></el-input-number>
                {{ item.dt3Text }}&nbsp&nbsp&nbsp&nbsp
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="Remark">
                <el-col>
                  <el-input
                    type="textarea"
                    autosize
                    placeholder="Comments"
                    v-model="$data[item.remark]"
                    @input="calculateMFGpFive"
                  ></el-input>
                </el-col>
              </div>
            </td>
          </tr>
        </div>
        <tr>
          <el-row>
            <el-col :span="4" class="subTotal">
              <h3>SUB TOTAL</h3>
            </el-col>
            <el-col :span="4" class="subTotal">
              <h3>{{ total }}</h3>
            </el-col>
          </el-row>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      total:0,
      subTotal:25,

      checks1: 0,
      checks2: 0,
      checks3: 0,

      //
      judge11: 0,
      judge21: 0,
      judge31: 0,
      judge12: 0,
      judge22: 0,
      judge32: 0,
      judge13: 0,
      judge23: 0,
      judge33: 0,

      //
      remark1: "",
      remark2: "",
      remark3: "",
      //
      tableData: [
        {
          text: "1 Compare to previous generate project,If quality got increased? ",
          cn: "Enter the number of each condition.",
          model: "checks1",
          dt1: "judge11",
          dt1Text: "X1 for minor irritation",
          dt2: "judge12",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge13",
          dt3Text: "X3 for significant irritation",
          remark: "remark1"
        },
        {
          text:"2 Compare to previous generate project,If process efficiency got increased? ",
          cn: "Enter the number of each condition.",
          model: "checks2",
          dt1: "judge21",
          dt1Text: "X1 for minor irritation",
          dt2: "judge22",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge23",
          dt3Text: "X3 for significant irritation",
          remark: "remark2"
        },
        {
          text: "3 Compare to previous generate project,If there is cost down? ", 
          cn: "Enter the number of each condition.",
          model: "checks3",
          dt1: "judge31",
          dt1Text: "X1 for minor irritation",
          dt2: "judge32",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge33",
          dt3Text: "X3 for significant irritation",
          remark: "remark3"
        },
      ]
    };
  },
  methods: {
    calculateMFGpFive() {
      this.checks1 = this.judge11*1+this.judge12*2+this.judge13*3;
      this.checks2 = this.judge21*1+this.judge22*2+this.judge23*3;
      this.checks3 = this.judge31*1+this.judge32*2+this.judge33*3;
      this.total = this.checks1 + this.checks2+this.checks3;
      this.subTotal=this.total;
      // if(25-this.total<0){
      //   this.subTotal = 0;
      // }else{
      //   this.subTotal = 25-this.total;
      // }
      let Obj={
        total:this.total,
        subTotal:this.subTotal,
        checks1:this.checks1,
        checks2:this.checks2,
        checks3:this.checks3,
        remark1:this.remark1,
        remark2:this.remark2,
        remark3:this.remark3,
      }
      this.$emit('sectionFiveValue',Obj);
    }
  }
};
</script>

<style lang="less">
.MFGpFive {
  margin-top: 50px;
  .title {
    .subTotal {
      padding-left: 50px;
    }
  }
  .Remark {
    padding-top: 20px;
  }
}
</style>
