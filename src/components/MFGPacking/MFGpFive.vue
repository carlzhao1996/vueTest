<template>
  <div class="MFGpFive">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>5. Improvement Item</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL={{ 25.0 }}</h3>
        </el-col>
      </el-row>
    </div>
    <div class="Content">
      <table class="contentTable">
        <div v-for="(item, index) in tableData" :key="index">
          <tr>
            <td>
              <el-input-number
                size="small"
                @change="calculateMFGpFive"
                v-model="$data[item.model]"
                :min="0"
              ></el-input-number>
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
              ></el-input-number>
                {{ item.dt1Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt2]"
                :min="0"
              ></el-input-number>
                {{ item.dt2Text }}&nbsp&nbsp&nbsp&nbsp
                <el-input-number
                size="mini"
                v-model="$data[item.dt3]"
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
                  ></el-input>
                </el-col>
              </div>
            </td>
          </tr>
          <hr />
        </div>
        <tr>
          <el-row>
            <el-col :span="4" class="subTotal">
              <h3>SUB TOTAL</h3>
            </el-col>
            <el-col :span="4" class="subTotal">
              <h3>{{ 0.0 }}</h3>
            </el-col>
          </el-row>
        </tr>
      </table>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition1: 0,
      condition2: 0,
      condition3: 0,
      //
      judge1_1: 0,
      judge2_1: 0,
      judge3_1: 0,
      judge1_2: 0,
      judge2_2: 0,
      judge3_2: 0,
      judge1_3: 0,
      judge2_3: 0,
      judge3_3: 0,
      //
      remark1: "",
      remark2: "",
      remark3: "",
      //
      tableData: [
        {
          text: "1 Compare to previous generate project,If quality got increased? ",
          cn: "Enter the number of each condition.",
          model: "condition1",
          dt1: "judge1_1",
          dt1Text: "X1 for minor irritation",
          dt2: "judge1_2",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge1_3",
          dt3Text: "X3 for significant irritation",
          remark: "remark1"
        },
        {
          text:"2 Compare to previous generate project,If process efficiency got increased? ",
          cn: "Enter the number of each condition.",
          model: "condition2",
          dt1: "judge2_1",
          dt1Text: "X1 for minor irritation",
          dt2: "judge2_2",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge2_3",
          dt3Text: "X3 for significant irritation",
          remark: "remark2"
        },
        {
          text: "3 Compare to previous generate project,If there is cost down? ", 
          cn: "Enter the number of each condition.",
          model: "condition3",
          dt1: "judge3_1",
          dt1Text: "X1 for minor irritation",
          dt2: "judge3_2",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge3_3",
          dt3Text: "X3 for significant irritation",
          remark: "remark3"
        },
      ]
    };
  },
  methods: {
    calculateMFGpFive() {
      console.log(this.condition1);
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
