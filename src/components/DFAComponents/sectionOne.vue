<template>
  <div class="DFAOne">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>1. Design for Automation (Must item)</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL={{ 66.0 }}</h3>
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
                @change="calculateDFAOne"
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
      condition10: 0,
      condition11: 0,
      judge1: 0,
      judge2: 0,
      judge3: 0,
      judge4: 0,
      judge5: 0,
      judge6: 0,
      judge7: 0,
      judge8: 0,
      judge9: 0,
      judge10: 0,
      judge11: 0,
      remark1: "",
      remark2: "",
      remark3: "",
      remark4: "",
      remark5: "",
      remark6: "",
      remark7: "",
      remark8: "",
      remark9: "",
      remark10: "",
      remark11: "",
      tableData: [
        {
          text:
            "1 Assemble PSU by straight up and straight down, but not oblique direction.",
          cn: "直上直下组装电源，电源不能斜着装入机箱",
          model: "condition1",
          yn: "judge1",
          remark: "remark1"
        },
        {
          text:
            "2 The distance between screw hole centre of HDD bracket and surrounding obstacles must bigger than 6mm.",
          cn: "机架上的硬盘螺丝孔中心距离周边的障碍物距离大于6mm",
          model: "condition2",
          yn: "judge2",
          remark: "remark2"
        },
        {
          text: "3 HDD, ODD bay sequence must be same for one type chassis.",
          cn: "同一种机箱的硬盘、光驱 bay的位置一致",
          model: "condition3",
          yn: "judge3",
          remark: "remark3"
        },
        {
          text:
            "4 HDD,ODD bay must be fixed on chassis or revolving, it cannot be taken off from chassis.",
          cn: "硬盘、光驱的机架必须是固定在机箱上或是翻盖式，不可以取下来",
          model: "condition4",
          yn: "judge4",
          remark: "remark4"
        },
        {
          text: "5 ODD must be inserted into chassis from front face.",
          cn: "光驱必须从机箱前脸插入机箱",
          model: "condition5",
          yn: "judge5",
          remark: "remark5"
        },
        {
          text:
            "6 The distance between screw hole centre of slim ODD bracket and edgefold or slim ODD edge must bigger than 6mm.",
          cn: "Slim ODD的小铁片的螺孔中心距离折边或ODD要大于6mm",
          model: "condition6",
          yn: "judge6",
          remark: "remark6"
        },
        {
          text: "7 All hooks of front bezel must be on same side.",
          cn: "前面板一定是单边卡勾固定方式",
          model: "condition7",
          yn: "judge7",
          remark: "remark7"
        },
        {
          text:
            "8 Removable side cover may be assembled by only one direction.",
          cn: "活动侧板放在机箱上可以直接推入，不需要一边按压一边推",
          model: "condition8",
          yn: "judge8",
          remark: "remark8"
        },
        {
          text:
            "9 Incoming chassis must be two rows, 6pcs each row, total 6X2=12pcs",
          cn: "机箱来料必须是两排，每排6台",
          model: "condition9",
          yn: "judge9",
          remark: "remark9"
        },
        {
          text: "10 Memory install rule is common.",
          cn: "内存安装规则统一",
          model: "condition10",
          yn: "judge10",
          remark: "remark10"
        },
        {
          text: "11 Incoming PSU cable need be bundled and taward inside.",
          cn: "电源来料cable需要捆扎并且朝向包装箱内部",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        }
      ]
    };
  },
  methods: {
    calculateDFAOne() {
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
