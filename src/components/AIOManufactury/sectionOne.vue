<template>
  <div class="sectionOne">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>1.0 BOX LEVEL ASSEMBLY DIFFICULTY:</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL= {{subTotal}}</h3>
        </el-col>
      </el-row>
    </div>
    <div class="Content">
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
          <td :style="item.textStyle">{{item.text}}</td>
        </tr>
        <tr>
          <td><span>SUB TOTAL: </span></td>
          <td>{{total}}</td>
        </tr>
      </table>
    </div>
    <div class="Remark">
        <el-col :span="20">
            <el-input type="textarea" autosize placeholder="Remark" v-model="remark1" @input="calculate"></el-input>
        </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition11: 0,
      condition12: 0,
      condition13: 0,
      condition14: 0,
      condition15: 0,
      condition16: 0,
      condition17: 0,
      remark1:'',
      tableData: [
        {
          text:
            '1. How many kind of Setting of  "Torque Drivers" are required more than 2 (One set is Zero).',
          model: "condition11",
          textStyle:"color:red;"
        },
        {
          text:
            '2. How many kind of Head Size of "Torque Drivers" are required more than  2 (One Size is Zero).',
          model: "condition12",
          textStyle:"color:red;"
        },
        {
          text:
            "3. How many inadequate finger / tool space to install / remove devices, cabling, fasteners, or labeling.",
          model: "condition13",
          textStyle:""
        },
        {
          text: "4. How many kind of special tools are required.",
          model: "condition14",
          textStyle:"color:red;"
        },
        {
          text: "5. How many blind plugging.",
          model: "condition15",
          textStyle:"color:red;"
        },
        {
          text:
            "6. How many screw direction other than a tops down (except Industry Standard).",
          model: "condition16",
          textStyle:"color:red;"
        },
        {
          text:
            "7. How many wrong parts can be assembled (No P/N, difficult to identify).",
          model: "condition17",
          textStyle:""
        }
      ],
      total:0,
      subTotal:30
    };
  },
  methods: {
    calculate() {
      this.total = this.condition11+this.condition12+
      this.condition13+this.condition14+this.condition15+
      this.condition16+this.condition17;
      if((30-this.total)<0){
        this.subTotal = 0;
      }else{
        this.subTotal = (30-this.total);
      }
      let sectionOneObj={
        total:this.total,
        subTotal:this.subTotal,
        remark1:this.remark1
      }
      this.$emit('sectionOneValue',sectionOneObj);
    }
  }
};
</script>

<style lang="less">
.sectionOne {
  margin-top: 50px;
  .title {
    .subTotal {
      padding-left: 50px;
    }
  }
  .Remark{
      padding-top:20px;
  }
}
</style>