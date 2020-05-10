<template>
  <div class="MFGpOne">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>1.Packing Size Checking</h3>
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
                @change="calculateMFGpOne"
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
      //
      condition1: 0,
      condition2: 0,
      condition3: 0,
      condition4: 0,
      //
      judge1_1: 0,
      judge2_1: 0,
      judge3_1: 0,
      judge4_1: 0,
      judge1_2: 0,
      judge2_2: 0,
      judge3_2: 0,
      judge4_2: 0,
      //
      remark1: "",
      remark2: "",
      remark3: "",
      remark4: "",
      //
      tableData: [
        {
          text:
            "1  If the new packing size is over standard pallet size of 1200*1000mm more than 20mm tolerance?",
          cn: "Enter the number of each condition.",
          model: "condition1",
          dt1: "judge1_1",
          dt1Text: "Yes",
          dt2: "judge1_2",
          dt2Text: "No",
          remark: "remark1"
        },
        {
          text:
            "2  If the new packing size is over standard pallet size of 1200*800mm more than 20mm tolerance?",
          cn: "Enter the number of each condition.",
          model: "condition2",
          dt1: "judge2_1",
          dt1Text: "Yes",
          dt2: "judge2_2",
          dt2Text: "No",
          remark: "remark2"
        },
        {
          text: "3 If the packing sample has suitable gap between Carton box and cushion?",
          cn: "Enter the number of each condition.",
          model: "condition3",
          dt1: "judge3_1",
          dt1Text: "for more than 5mm tolerance",
          dt2: "judge3_2",
          dt2Text: "for more than 10mm tolerance",
          remark: "remark3"
        },
        {
          text:
            "4 If the packing sample has suitable gap between accessories box and products,accessories box and Carton box?",
          cn: "Enter the number of each condition.",
          model: "condition4",
          dt1: "judge4_1",
          dt1Text: "for more than 5mm tolerance",
          dt2: "judge4_2",
          dt2Text: "for more than 10mm tolerance",
          remark: "remark4"
        },
      ]
    };
  },
  methods: {
    calculateMFGpOne() {
      console.log(this.condition1);
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
