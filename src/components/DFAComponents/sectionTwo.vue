<template>
  <div class="DFATwo">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>2. Design for Automation (Preference item--Assembly)</h3>
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
                :min="0" @change="calculateDFATwo"
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
      subTotal:16,
      //
      judge21: 0,
      judge22: 0,
      judge23: 0,
      judge24: 0,
      judge25: 0,
      judge26: 0,
      judge27: 0,
      judge28: 0,
      judge29: 0,
      judge210: 0,
      judge211: 0,
      judge212: 0,
      judge213: 0,
      judge214: 0,
      judge215: 0,
      judge216: 0,
      //
      remark21: "",
      remark22: "",
      remark23: "",
      remark24: "",
      remark25: "",
      remark26: "",
      remark27: "",
      remark28: "",
      remark29: "",
      remark210: "",
      remark211: "",
      remark212: "",
      remark213: "",
      remark214: "",
      remark215: "",
      remark216: "",
      //
      tableData: [
        {
          text: "1 Only one screw hole of PSU is circle hole and other are WAIST-SHAPED HOLE.",
          cn: "电源一个螺丝孔为圆孔，其它为腰型孔",
          yn: "judge21",
          remark: "remark21"
        },
        {
          text:"2 Try to paste all labels on same surface of chassis, had better on removable door.",
          cn: "所有label尽量贴在同一个面上，最好是活动侧板上",
          yn: "judge22",
          remark: "remark22"
        },
        {
          text: "3 HDD ODD screw hole of bracket  is guide hole or WAIST-SHAPED HOLE", 
          cn: "机架上的硬盘光驱螺丝孔需要有导向或者是腰型孔。",
          yn: "judge23",
          remark: "remark23"
        },
        {
          text:
            "4 There is 5mm chamfer angle for ODD entrance. ",
          cn: "光驱入口四周需要有5mm的导角",
          yn: "judge24",
          remark: "remark24"
        },
        {
          text: "5 There is 30°X 5mm chamfer angle for slim ODD bracket, bracket screw hole and chassis screw hole are aligned by limiting piece.",
          cn: "Slim ODD小铁片需要有30°X 5mm的导角，并且能自动和机架上的螺丝孔对齐",
          yn: "judge25",
          remark: "remark25"
        },
        {
          text:
            "6 Fasten HDD/ODD screw vertically.",
          cn: "垂直锁硬盘光驱螺丝",
          yn: "judge26",
          remark: "remark26"
        },
        {
          text: "7 HDD/ODD is limited by mechanical design before fasten screw.",
          cn: "硬盘光驱螺丝前能被机构固定住",
          yn: "judge27",
          remark: "remark27"
        },
        {
          text:
            "8 Chassis rubber can cover all planar, operator don't need paste rubber for someone planar.",
          cn: "机箱胶垫可以cover所有主板，不用工厂再贴主板胶垫",
          yn: "judge28",
          remark: "remark28"
        },
        {
          text:
            "9 The iron bracket of chassis near by side door must has clearance for screws of MB edge.",
          cn: "机箱上层支架需要为靠主板边缘的螺孔预留避位孔",
          yn: "judge29",
          remark: "remark29"
        },
        {
          text: "10 Any iron bracket need be limited by mechanical design before fasten screw to fix it. The distance between screw hole centre of iron bracket and surrounding obstacles must be more than 6mm.",
          cn: "铁件装到机箱上需要有机械限位，方便打螺丝。螺孔中心距其它障碍件大于6mm",
          yn: "judge210",
          remark: "remark210"
        },
        {
          text: "11 Fan need be limited before fasten screw to fix it.",
          cn: "如果风扇用螺丝锁附，在锁螺丝之前需能自行限位",
          yn: "judge211",
          remark: "remark211"
        },
        {
          text: "12 There is no new screw and new torque( normal is 1.5, 3, 5, 10)",
          cn: "除了常用螺丝，没有增加新螺丝",
          yn: "judge212",
          remark: "remark212"
        },
        {
          text: "13 The length-diameter ratio of HDD/ODD screw is more than 1.3",
          cn: "硬盘光驱螺丝长径比大于1.3",
          yn: "judge213",
          remark: "remark213"
        },
        {
          text: "14 The location, color, direction and rule of  common connector on planar arre common, such as SATA、FAN、SATA POWER、USB、Audio、F_PANEL、 AUX_POWER、AUX_12V",
          cn: "通用插线口位置、方向、颜色、插线符合既定规则，如SATA、FAN、SATA POWER、USB、Audio、F_PANEL、AUX_POWER、AUX_12V等",
          yn: "judge214",
          remark: "remark214"
        },
        {
          text: "15 PN and MAC address label location on planar are common",
          cn: "主板P/N & MAC address 标签粘贴位置统一",
          yn: "judge215",
          remark: "remark215"
        },
        {
          text: "16 PSU connector orientation are common",
          cn: "电源插孔方向一致",
          yn: "judge216",
          remark: "remark216"
        }
      ]
    };
  },
  methods: {
    calculateDFATwo() {
      this.total = this.judge21+this.judge22+this.judge23+this.judge24+this.judge25
      +this.judge26+this.judge27+this.judge28+this.judge29+this.judge210+this.judge211
      +this.judge212+this.judge213+this.judge214+this.judge215+this.judge216;
      if((16-this.total)<0){
        this.subTotal = 0;
      }else{
        this.subTotal = 16-this.total;
      }
      this.$emit('sectionTwoValue',this.subTotal);
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
