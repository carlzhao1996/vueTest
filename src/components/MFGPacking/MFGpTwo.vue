<template>
  <div class="MFGpTwo">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>2. Packing Structure Checking</h3>
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
                @change="calculateMFGpTwo"
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
              <h3>{{ 3.0 }}</h3>
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
      condition2: 1,
      condition3: 0,
      condition4: 0,
      condition5: 0,
      //
      judge1_1: 0,
      judge2_1: 0,
      judge3_1: 0,
      judge4_1: 0,
      judge5_1: 0,
      judge1_2: 0,
      judge2_2: 0,
      judge3_2: 0,
      judge4_2: 0,
      judge5_2: 0,
      judge1_3: 0,
      judge2_3: 0,
      judge3_3: 0,
      judge4_3: 0,
      judge5_3: 0,
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
          text:"2 Try to paste all labels on same surface of chassis, had better on removable door.",
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
          text: "3 HDD ODD screw hole of bracket  is guide hole or WAIST-SHAPED HOLE", 
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
        {
          text:
            "4 There is 5mm chamfer angle for ODD entrance. ",
          cn: "Enter the number of each condition.",
          model: "condition4",
          dt1: "judge4_1",
          dt1Text: "X1 for minor irritation",
          dt2: "judge4_2",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge4_3",
          dt3Text: "X3 for significant irritation",
          remark: "remark4"
        },
        {
          text: "5 There is 30°X 5mm chamfer angle for slim ODD bracket, bracket screw hole and chassis screw hole are aligned by limiting piece.",
          cn: "Enter the number of each condition.",
          model: "condition5",
          dt1: "judge5_1",
          dt1Text: "X1 for minor irritation",
          dt2: "judge5_2",
          dt2Text: "X2 for moderate irritation",
          dt3: "judge5_3",
          dt3Text: "X3 for significant irritation",
          remark: "remark5"
        },
      ]
    };
  },
  methods: {
    calculateMFGpTwo() {
      console.log(this.condition1);
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
