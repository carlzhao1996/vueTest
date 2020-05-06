<template>
  <div class="DFAThree">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>3.Design for Automation (Preference item--Label & Packing)</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL={{ 18.0 }}</h3>
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
                @change="calculateDFAThree"
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
                v-model="$data[item.yn]"
                :min="0"
              ></el-input-number>
                0->yes 1->no
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
      condition4: 0,
      condition5: 0,
      condition6: 0,
      condition7: 0,
      condition8: 0,
      condition9: 0,
      //
      judge1: 0,
      judge2: 0,
      judge3: 0,
      judge4: 0,
      judge5: 0,
      judge6: 0,
      judge7: 0,
      judge8: 0,
      judge9: 0,
      //
      remark1: "",
      remark2: "",
      remark3: "",
      remark4: "",
      remark5: "",
      remark6: "",
      remark7: "",
      remark8: "",
      remark9: "",
      //
      tableData: [
        {
          text:
            "1 There is no new label",
          cn: "没有新label",
          model: "condition1",
          yn: "judge1",
          remark: "remark1"
        },
        {
          text:
            "2 Label thickness should be more than 0.03mm, excluding release paper.",
          cn: "标签厚度需大于0.03mm（含）不包括离型纸的厚度",
          model: "condition2",
          yn: "judge2",
          remark: "remark2"
        },
        {
          text: "3 Incoming label need be roll.",
          cn: "label需卷状来料",
          model: "condition3",
          yn: "judge3",
          remark: "remark3"
        },
        {
          text:
            "4 Labels are arranged as single row",
          cn: "标签排列方式为单排",
          model: "condition4",
          yn: "judge4",
          remark: "remark4"
        },
        {
          text: "5 The release paper is fexible and not easy to break.",
          cn: "离型纸是连续的.即折纸线（容易拉断）.离型纸本身要有韧性",
          model: "condition5",
          yn: "judge5",
          remark: "remark5"
        },
        {
          text:
            "6 Thhe orientation that shape carton box are common.",
          cn: "成箱方向相同",
          model: "condition6",
          yn: "judge6",
          remark: "remark6"
        },
        {
          text: "7 There is no new accessory box",
          cn: "没有新的附件盒",
          model: "condition7",
          yn: "judge7",
          remark: "remark7"
        },
        {
          text:
            "8 For same type KYB/Mouse, PN is no more than 5.",
          cn: "对同一类型的键鼠，PN不要超过5个",
          model: "condition8",
          yn: "judge8",
          remark: "remark8"
        },
        {
          text:
            "9 Carton box is vertial",
          cn: "包装箱统一为立式包装",
          model: "condition9",
          yn: "judge9",
          remark: "remark9"
        },
      ]
    };
  },
  methods: {
    calculateDFAThree() {
      console.log(this.condition11);
    }
  }
};
</script>

<style lang="less">
.DFAOne {
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
