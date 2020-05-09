<template>
  <div class="DFAOne">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>1. Design for Automation (Must item)</h3>
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
                :min="0" @change="calculateDFAOne"
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
      subTotal:66,
      judge11: 0,
      judge12: 0,
      judge13: 0,
      judge14: 0,
      judge15: 0,
      judge16: 0,
      judge17: 0,
      judge18: 0,
      judge19: 0,
      judge110: 0,
      judge111: 0,

      remark11: "",
      remark12: "",
      remark13: "",
      remark14: "",
      remark15: "",
      remark16: "",
      remark17: "",
      remark18: "",
      remark19: "",
      remark110: "",
      remark111: "",
      tableData: [
        {
          text:
            "1 Assemble PSU by straight up and straight down, but not oblique direction.",
          cn: "直上直下组装电源，电源不能斜着装入机箱",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text:
            "2 The distance between screw hole centre of HDD bracket and surrounding obstacles must bigger than 6mm.",
          cn: "机架上的硬盘螺丝孔中心距离周边的障碍物距离大于6mm",
          yn: "judge12",
          remark: "remark12"
        },
        {
          text: "3 HDD, ODD bay sequence must be same for one type chassis.",
          cn: "同一种机箱的硬盘、光驱 bay的位置一致",
          yn: "judge13",
          remark: "remark13"
        },
        {
          text:
            "4 HDD,ODD bay must be fixed on chassis or revolving, it cannot be taken off from chassis.",
          cn: "硬盘、光驱的机架必须是固定在机箱上或是翻盖式，不可以取下来",
          yn: "judge14",
          remark: "remark14"
        },
        {
          text: "5 ODD must be inserted into chassis from front face.",
          cn: "光驱必须从机箱前脸插入机箱",
          yn: "judge15",
          remark: "remark15"
        },
        {
          text:
            "6 The distance between screw hole centre of slim ODD bracket and edgefold or slim ODD edge must bigger than 6mm.",
          cn: "Slim ODD的小铁片的螺孔中心距离折边或ODD要大于6mm",
          yn: "judge16",
          remark: "remark16"
        },
        {
          text: "7 All hooks of front bezel must be on same side.",
          cn: "前面板一定是单边卡勾固定方式",
          yn: "judge17",
          remark: "remark17"
        },
        {
          text:
            "8 Removable side cover may be assembled by only one direction.",
          cn: "活动侧板放在机箱上可以直接推入，不需要一边按压一边推",
          yn: "judge18",
          remark: "remark18"
        },
        {
          text:
            "9 Incoming chassis must be two rows, 6pcs each row, total 6X2=12pcs",
          cn: "机箱来料必须是两排，每排6台",
          yn: "judge19",
          remark: "remark19"
        },
        {
          text: "10 Memory install rule is common.",
          cn: "内存安装规则统一",
          yn: "judge110",
          remark: "remark110"
        },
        {
          text: "11 Incoming PSU cable need be bundled and taward inside.",
          cn: "电源来料cable需要捆扎并且朝向包装箱内部",
          yn: "judge111",
          remark: "remark111"
        }
      ]
    };
  },
  methods: {
    calculateDFAOne() {
      this.total = this.judge11+this.judge12+this.judge13+this.judge14+this.judge15
      +this.judge16+this.judge17+this.judge18+this.judge19+this.judge110+this.judge111;
      if((66-this.total)<0){
        this.subTotal = 0
      }else{
        this.subTotal = 66-(this.total*6);
      }
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
