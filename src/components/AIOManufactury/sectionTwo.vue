<template>
  <div class="sectionTwo">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3 style="color:red;">2.0 NUMBER OF BOX LEVEL INTERCONNECTS</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL= {{subTotal}}</h3>
        </el-col>
      </el-row>
    </div>
    <div class="Content">
      <table class="contentNoteTable">
        <tr>
          <td style="width:200px;">NOTE !</td>
          <td style="width:200px;">Include:</td>
          <td style="height:100px;">
            <div style="padding-top:30px;">
              <p>Plugging of cable connections, plugging cards into other cards,</p>
              <p>plugging cards into the planar, or any device into the planar.</p>
            </div>
          </td>
        </tr>
        <tr>
          <td>NOTE !</td>
          <td>Exclude:</td>
          <td>
            <div style="padding-top:100px;">
              <p>Memory, Processor, Dimms & Adapater Cards</p>
              <p>HDD, OPT Drive-Asm, KBD, FAN, Speaker</p>
              <p>PCMCIA, Security Chip, Touch Pad, BT card, WLAN/WAN Card, Antenna</p>
              <p>Modem Card, Modem Cable, RTC Battery,</p>
              <p>LCD, LCD Interface Cable, LCD Inverter, Camera</p>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div class="CalContent">
      <table class="contentTable">
        <tr v-for="(item,index) in tableData" :key="index">
          <td>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="$data[item.model]"
              :min="0"
            ></el-input-number>
          </td>
          <td>{{item.text}}</td>
        </tr>
        <tr>
          <td><span>SUB TOTAL: </span></td>
          <td>{{total}}</td>
        </tr>
      </table>
    </div>

    <div class="Remark">
      <el-col :span="20">
        <el-input type="textarea" autosize placeholder="Remark" v-model="remark2" @input="calculate"></el-input>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition21:0,
      condition22:0,
      remark2:'',
      tableData: [
        {
          text:
            '1. How many interconnects (DC-IN x1, Ext VGA x1, Audio Sub x2)',
          model: "condition21"
        },
        {
          text:
            '2. How many interconnects without Fool Proof (not keyed, look same, accept wrong, can not fully seat)',
          model: "condition22"
        }
      ],
      total:0,
      subTotal:10
    };
  },
  methods: {
    calculate(){
      this.total = this.condition21+this.condition22;
      //TODO: SUB TOTAL
      let data;
      if((5-this.condition22)<0){
        data=0;
      }else{
        data = 5-this.condition22;
      }
      console.log(data);
      if((5-(this.condition21/5))<0){
        this.subTotal = 0;
      }else{
        this.subTotal = (5-(this.condition21/5))+data
      }
      let obj = {
        total:this.total,
        subTotal:this.subTotal,
        remark2:this.remark2
      }
      this.$emit('sectionTwoValue',obj);
    }
  },
};
</script>

<style lang="less">
.sectionTwo {
    margin-top:50px;
  .title {
  }
  .Content {
    .contentNoteTable {
      width: 1000px;
    }
  }
}
</style>