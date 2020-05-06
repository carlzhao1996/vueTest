<template>
  <div class="DFATwo">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>2. Design for Automation (Preference item--Assembly)</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL={{ 13.0 }}</h3>
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
                @change="calculateDFATwo"
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
      condition6: 0,
      condition7: 1,
      condition8: 0,
      condition9: 0,
      condition10: 0,
      condition11: 0,
      condition12: 1,
      condition13: 1,
      condition14: 1,
      condition15: 1,
      condition16: 1,
      //
      judge1: 0,
      judge2: 1,
      judge3: 0,
      judge4: 0,
      judge5: 0,
      judge6: 0,
      judge7: 1,
      judge8: 0,
      judge9: 0,
      judge10: 0,
      judge11: 0,
      judge12: 1,
      judge13: 1,
      judge14: 1,
      judge15: 1,
      judge16: 1,
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
      remark10: "",
      remark11: "",
      remark12: "",
      remark13: "",
      remark14: "",
      remark15: "",
      remark16: "",
      //
      tableData: [
        {
          text: "1 Only one screw hole of PSU is circle hole and other are WAIST-SHAPED HOLE.",
          cn: "电源一个螺丝孔为圆孔，其它为腰型孔",
          model: "condition1",
          yn: "judge1",
          remark: "remark1"
        },
        {
          text:"2 Try to paste all labels on same surface of chassis, had better on removable door.",
          cn: "所有label尽量贴在同一个面上，最好是活动侧板上",
          model: "condition2",
          yn: "judge2",
          remark: "remark2"
        },
        {
          text: "3 HDD ODD screw hole of bracket  is guide hole or WAIST-SHAPED HOLE", 
          cn: "机架上的硬盘光驱螺丝孔需要有导向或者是腰型孔。",
          model: "condition3",
          yn: "judge3",
          remark: "remark3"
        },
        {
          text:
            "4 There is 5mm chamfer angle for ODD entrance. ",
          cn: "光驱入口四周需要有5mm的导角",
          model: "condition4",
          yn: "judge4",
          remark: "remark4"
        },
        {
          text: "5 There is 30°X 5mm chamfer angle for slim ODD bracket, bracket screw hole and chassis screw hole are aligned by limiting piece.",
          cn: "Slim ODD小铁片需要有30°X 5mm的导角，并且能自动和机架上的螺丝孔对齐",
          model: "condition5",
          yn: "judge5",
          remark: "remark5"
        },
        {
          text:
            "6 Fasten HDD/ODD screw vertically.",
          cn: "垂直锁硬盘光驱螺丝",
          model: "condition6",
          yn: "judge6",
          remark: "remark6"
        },
        {
          text: "7 HDD/ODD is limited by mechanical design before fasten screw.",
          cn: "硬盘光驱螺丝前能被机构固定住",
          model: "condition7",
          yn: "judge7",
          remark: "remark7"
        },
        {
          text:
            "8 Chassis rubber can cover all planar, operator don't need paste rubber for someone planar.",
          cn: "机箱胶垫可以cover所有主板，不用工厂再贴主板胶垫",
          model: "condition8",
          yn: "judge8",
          remark: "remark8"
        },
        {
          text:
            "9 The iron bracket of chassis near by side door must has clearance for screws of MB edge.",
          cn: "机箱上层支架需要为靠主板边缘的螺孔预留避位孔",
          model: "condition9",
          yn: "judge9",
          remark: "remark9"
        },
        {
          text: "10 Any iron bracket need be limited by mechanical design before fasten screw to fix it. The distance between screw hole centre of iron bracket and surrounding obstacles must be more than 6mm.",
          cn: "铁件装到机箱上需要有机械限位，方便打螺丝。螺孔中心距其它障碍件大于6mm",
          model: "condition10",
          yn: "judge10",
          remark: "remark10"
        },
        {
          text: "11 Fan need be limited before fasten screw to fix it.",
          cn: "如果风扇用螺丝锁附，在锁螺丝之前需能自行限位",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text: "12 There is no new screw and new torque( normal is 1.5, 3, 5, 10)",
          cn: "除了常用螺丝，没有增加新螺丝",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text: "13 The length-diameter ratio of HDD/ODD screw is more than 1.3",
          cn: "硬盘光驱螺丝长径比大于1.3",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text: "14 The location, color, direction and rule of  common connector on planar arre common, such as SATA、FAN、SATA POWER、USB、Audio、F_PANEL、 AUX_POWER、AUX_12V",
          cn: "通用插线口位置、方向、颜色、插线符合既定规则，如SATA、FAN、SATA POWER、USB、Audio、F_PANEL、AUX_POWER、AUX_12V等",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text: "15 PN and MAC address label location on planar are common",
          cn: "主板P/N & MAC address 标签粘贴位置统一",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        },
        {
          text: "16 PSU connector orientation are common",
          cn: "电源插孔方向一致",
          model: "condition11",
          yn: "judge11",
          remark: "remark11"
        }
      ]
    };
  },
  methods: {
    calculateDFATwo() {
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
