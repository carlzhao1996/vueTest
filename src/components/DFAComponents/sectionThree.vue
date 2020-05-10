<template>
  <div class="DFAThree">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>3.Design for Automation (Preference item--Label & Packing)</h3>
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
              <span style="padding-right:10px;">Checks: {{$data[item.yn]}}</span>
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
                @change="calculateDFAThree"
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
              <h3>{{ total }}</h3>
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
      total:0,
      subTotal:18,
      //
      judge31: 0,
      judge32: 0,
      judge33: 0,
      judge34: 0,
      judge35: 0,
      judge36: 0,
      judge37: 0,
      judge38: 0,
      judge39: 0,
      //
      remark31: "",
      remark32: "",
      remark33: "",
      remark34: "",
      remark35: "",
      remark36: "",
      remark37: "",
      remark38: "",
      remark39: "",
      //
      tableData: [
        {
          text:
            "1 There is no new label",
          cn: "没有新label",
          yn: "judge31",
          remark: "remark31"
        },
        {
          text:
            "2 Label thickness should be more than 0.03mm, excluding release paper.",
          cn: "标签厚度需大于0.03mm（含）不包括离型纸的厚度",
          yn: "judge32",
          remark: "remark32"
        },
        {
          text: "3 Incoming label need be roll.",
          cn: "label需卷状来料",
          yn: "judge33",
          remark: "remark33"
        },
        {
          text:
            "4 Labels are arranged as single row",
          cn: "标签排列方式为单排",
          yn: "judge34",
          remark: "remark4"
        },
        {
          text: "5 The release paper is fexible and not easy to break.",
          cn: "离型纸是连续的.即折纸线（容易拉断）.离型纸本身要有韧性",
          yn: "judge35",
          remark: "remark35"
        },
        {
          text:
            "6 Thhe orientation that shape carton box are common.",
          cn: "成箱方向相同",
          yn: "judge36",
          remark: "remark36"
        },
        {
          text: "7 There is no new accessory box",
          cn: "没有新的附件盒",
          yn: "judge37",
          remark: "remark37"
        },
        {
          text:
            "8 For same type KYB/Mouse, PN is no more than 5.",
          cn: "对同一类型的键鼠，PN不要超过5个",
          yn: "judge38",
          remark: "remark38"
        },
        {
          text:
            "9 Carton box is vertial",
          cn: "包装箱统一为立式包装",
          yn: "judge39",
          remark: "remark39"
        },
      ]
    };
  },
  methods: {
    calculateDFAThree() {
      this.total = this.judge31+this.judge32+this.judge33+this.judge34+this.judge35
      +this.judge36+this.judge37+this.judge38+this.judge39;
      if((18-this.total)<0){
        this.subTotal = 0;
      }else if((18-this.total*2)<0){
        this.subTotal = 0;
      }else{
        this.subTotal = 18-this.total*2
      }
      this.$emit('sectionThreeValue',this.subTotal);
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
