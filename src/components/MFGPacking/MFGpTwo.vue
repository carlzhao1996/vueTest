<template>
  <div class="MFGpTwo">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>2. Packing Structure Checking</h3>
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
                @change="calculateMFGpTwo"
                :min="0"
              ></el-input-number>
                {{ item.dt1Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt2]"
                @change="calculateMFGpTwo"
                :min="0"
              ></el-input-number>
                {{ item.dt2Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt3]"
                @change="calculateMFGpTwo"
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
                    @input="calculateMFGpTwo"
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
      checks5: 0,
      //
      judge11: 0,
      judge21: 0,
      judge31: 0,
      judge41: 0,
      judge51: 0,
      judge12: 0,
      judge22: 0,
      judge32: 0,
      judge42: 0,
      judge52: 0,
      judge13: 0,
      judge23: 0,
      judge33: 0,
      judge43: 0,
      judge53: 0,
      //
      remark1: "",
      remark2: "",
      remark3: "",
      remark4: "",
      remark5: "",
      //
      tableData: [
        {
          text: "1 Only one screw hole of PSU is circle hole and other are WAIST-SHAPED HOLE.",
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
          text:"2 Try to paste all labels on same surface of chassis, had better on removable door.",
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
          text: "3 HDD ODD screw hole of bracket  is guide hole or WAIST-SHAPED HOLE", 
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
            "4 There is 5mm chamfer angle for ODD entrance. ",
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
        {
          text: "5 There is 30°X 5mm chamfer angle for slim ODD bracket, bracket screw hole and chassis screw hole are aligned by limiting piece.",
          cn: "Enter the number of each condition.",
          model: "checks5",
          dt1: "judge51",
          dt1Text: "X1 for minor irritation",
          dt2: "judge52",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge53",
          dt3Text: "X3 for significant irritation",
          remark: "remark5"
        },
      ]
    };
  },
  methods: {
    calculateMFGpTwo() {
      this.checks1 = this.judge11*1+this.judge12*2+this.judge13*3;
      this.checks2 = this.judge21*1+this.judge22*2+this.judge23*3;
      this.checks3 = this.judge31*1+this.judge32*2+this.judge33*3;
      this.checks4 = this.judge41*1+this.judge42*2+this.judge43*3;
      this.checks5 = this.judge51*1+this.judge52*2+this.judge53*3;
      this.total = this.checks1 + this.checks2 +this.checks3+this.checks4+this.checks5;
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
        checks5:this.checks5,
        remark1:this.remark1,
        remark2:this.remark2,
        remark3:this.remark3,
        remark4:this.remark4,
        remark5:this.remark5,
      }
      this.$emit('sectionTwoValue',Obj);
    }
  }
};
</script>

<style lang="less">
.MFGpTwo {
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
