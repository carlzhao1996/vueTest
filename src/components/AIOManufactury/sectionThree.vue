<template>
  <div class="sectionThree">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>3 BOX LEVEL SCREWS/FASTENERS</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL= {{subTotal}}</h3>
        </el-col>
      </el-row>
      <div>
        <el-row>
          <el-col :span="3">NOTE !</el-col>
          <el-col :span="8">Exclude: Screws installed by Supplier ...................</el-col>
        </el-row>
      </div>
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
            <el-input type="textarea" autosize placeholder="Remark" v-model="remark3" @input="calculate"></el-input>
        </el-col>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      condition31: 0,
      condition32: 0,
      condition33: 0,
      condition34: 0,
      condition35: 0,
      remark3:"",
      tableData: [
        {
          text:
            '1. How many kind of screws are required',
          model: "condition31",
          textStyle:"color:red;"
        },
        {
          text:
            '2. How many screws are required (x 0.1)',
          model: "condition32",
          textStyle:"color:red;"
        },
        {
          text:
            '3. How many kind of screws are required',
          model: "condition33"
        },
        {
          text:
            '4. How many tapes for cable wiring are required (x 0.3)',
          model: "condition34",
          textStyle:"color:red;"
        },
        {
          text:
            '5. How many screw thread is less than 3 or more than 8',
          model: "condition35"
        }
      ],
      total:0,
      subTotal:10
    };
  },

  methods:{
    calculate(){
      this.total=this.condition31+this.condition32
      +this.condition33*0.1+this.condition34*0.3+this.condition35;
      //TODO: subtotal
      this.subTotal = 10-this.total;
      let obj = {
        total:this.total,
        subTotal:this.subTotal,
        remark3:this.remark3
      }
      this.$emit('sectionThreeValue',obj);
    }
  }

};
</script>

<style lang="less">
.sectionThree {
    margin-top:50px;
}
</style>