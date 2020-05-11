<template>
  <div class="MFGpThree">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>3. Packing Operation Checking</h3>
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
                @change="calculateMFGpThree"
                :min="0"
              ></el-input-number>
                {{ item.dt1Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt2]"
                @change="calculateMFGpThree"
                :min="0"
              ></el-input-number>
                {{ item.dt2Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt3]"
                @change="calculateMFGpThree"
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
                    @input="calculateMFGpThree"
                    v-model="$data[item.remark]"
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
      checks4: 0,
      //
      judge11: 0,
      judge21: 0,
      judge31: 0,
      judge41: 0,
      judge12: 0,
      judge22: 0,
      judge32: 0,
      judge42: 0,
      judge13: 0,
      judge23: 0,
      judge33: 0,
      judge43: 0,
      //
      remark1: "",
      remark2: "",
      remark3: "",
      remark4: "",
      //
      tableData: [
        {
          text: "1 Mfg site need special fixture or training to have packing?",
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
          text:"2  If packing time got increased,Compare to main stream project?",
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
          text: "3 Any part without barcode,Will cause quality risk(All packing parts:carton box/keyboard/mouse...)?", 
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
        {
          text:
            "4 Any operation without fool proof?",
          cn: "Enter the number of each condition.",
          model: "checks4",
          dt1: "judge41",
          dt1Text: "X1 for minor irritation",
          dt2: "judge42",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge43",
          dt3Text: "X3 for significant irritation",
          remark: "remark4"
        },
      ]
    };
  },
  methods: {
    calculateMFGpThree() {
      this.checks1 = this.judge11*1+this.judge12*2+this.judge13*3;
      this.checks2 = this.judge21*1+this.judge22*2+this.judge23*3;
      this.checks3 = this.judge31*1+this.judge32*2+this.judge33*3;
      this.checks4 = this.judge41*1+this.judge42*2+this.judge43*3;
      this.total = this.checks1 + this.checks2 +this.checks3+this.checks4;
      if(25-this.total<0){
        this.subTotal = 0;
      }else{
        this.subTotal = 25-this.total;
      }
      let Obj={
        total:this.total,
        subTotal:this.subTotal,
        checks1:this.checks1,
        checks2:this.checks2,
        checks3:this.checks3,
        checks4:this.checks4,

        remark1:this.remark1,
        remark2:this.remark2,
        remark3:this.remark3,
        remark4:this.remark4,
      }
      this.$emit('sectionThreeValue',Obj);
    }
  }
};
</script>

<style lang="less">
.MFGpThree {
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
