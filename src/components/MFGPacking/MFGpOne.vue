<template>
  <div class="MFGpOne">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>1.Packing Size Checking</h3>
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
                :min="0"
                @change="calculateMFGpOne"
              ></el-input-number>
                {{ item.dt1Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt2]"
                @change="calculateMFGpOne"
                :min="0"
              ></el-input-number>
                {{ item.dt2Text }}
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
                    @input="calculateMFGpOne"
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
      //
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
      //
      remark11: "",
      remark12: "",
      remark13: "",
      remark14: "",
      //
      tableData: [
        {
          text:
            "1  If the new packing size is over standard pallet size of 1200*1000mm more than 20mm tolerance?",
          cn: "Enter the number of each condition.",
          model: "checks1",
          dt1: "judge11",
          dt1Text: "Yes",
          dt2: "judge12",
          dt2Text: "No",
          remark: "remark11"
        },
        {
          text:
            "2  If the new packing size is over standard pallet size of 1200*800mm more than 20mm tolerance?",
          cn: "Enter the number of each condition.",
          model: "checks2",
          dt1: "judge21",
          dt1Text: "Yes",
          dt2: "judge22",
          dt2Text: "No",
          remark: "remark12"
        },
        {
          text: "3 If the packing sample has suitable gap between Carton box and cushion?",
          cn: "Enter the number of each condition.",
          model: "checks3",
          dt1: "judge31",
          dt1Text: "for more than 5mm tolerance",
          dt2: "judge32",
          dt2Text: "for more than 10mm tolerance",
          remark: "remark13"
        },
        {
          text:
            "4 If the packing sample has suitable gap between accessories box and products,accessories box and Carton box?",
          cn: "Enter the number of each condition.",
          model: "checks4",
          dt1: "judge41",
          dt1Text: "for more than 5mm tolerance",
          dt2: "judge42",
          dt2Text: "for more than 10mm tolerance",
          remark: "remark14"
        }
      ]
    };
  },
  methods: {
    calculateMFGpOne() {
      this.checks1 = this.judge11*3+this.judge12*0;
      this.checks2 = this.judge21*3;
      this.checks3 = this.judge31*1+this.judge32*3;
      this.checks4 = this.judge41*1+this.judge42*2;
      this.total = this.checks1+this.checks2+this.checks3+this.checks4;
      if(25-this.total<0){
        this.subTotal = 0;
      }else{
        this.subTotal = 25-this.total;
      }
      let sectionOneObj={
        total:this.total,
        subTotal:this.subTotal,
        checks1:this.checks1,
        checks2:this.checks2,
        checks3:this.checks3,
        checks4:this.checks4,
        remark11:this.remark11,
        remark12:this.remark12,
        remark13:this.remark13,
        remark14:this.remark14,
      }
      this.$emit('sectionOneValue',sectionOneObj);
    }
  }
};
</script>

<style lang="less">
.MFGpOne {
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
