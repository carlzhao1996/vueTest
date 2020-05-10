<template>
  <div class="DFA">
    <el-form label-width="110px" class="DFAMenu">
      <el-row style="text-align:center">
        <h3>Design for Automation Rating</h3>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="PRODUCT: ">
            <el-input size="small" v-model="product"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="11">
          <el-form-item label="ORIGIN DATE:">
            <el-date-picker type="date" size="small" v-model="originDate"></el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8" style="padding-left:10px;">
          <h3>RATING</h3>
        </el-col>
        <el-col :span="8">
          <h3>{{pointResult}}</h3>
        </el-col>
        <el-col :span="8">
          <h3>{{Rating}}</h3>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px;">
        <el-col :span="3">GA Date (SS DATE):</el-col>
        <el-col :span="8">
          <el-date-picker type="date" size="small" v-model="gaDate"></el-date-picker>
        </el-col>
      </el-row>
      <el-row style="padding-top:20px;">
        <el-col :span="3">PERFORMED BY:</el-col>
        <el-col :span="8">
          <el-input size="small" v-model="performed_By"></el-input>
        </el-col>
      </el-row>
      <el-row style="text-align:right">
        <el-col>
          <h3 style="color:blue">POINT RESULT: {{pointResult}}</h3>
        </el-col>
      </el-row>
      <el-row>
        <h2 style="color:blue">Design for Automation (Must item)</h2>
      </el-row>
    </el-form>
    <SectionOne ref="sectionOne" @sectionOneValue="getSectionOneData($event)" />
    <SectionTwo ref="sectionTwo" @sectionTwoValue="getSectionTwoData($event)" />
    <SectionThree ref="sectionThree" @sectionThreeValue="getSectionThreeData($event)" />
  </div>
</template>

<script>
import SectionOne from "./DFAComponents/sectionOne";
import SectionTwo from "./DFAComponents/sectionTwo";
import SectionThree from "./DFAComponents/sectionThree";

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree
  },
  data() {
    return {
      product: "",
      originDate: "",
      gaDate: "",
      performed_By: "",
      process_owner: "",
      pointResult: 100,
      Rating: "A",

      resultOne: 66,
      resultTwo: 16,
      resultThree: 18
    };
  },
  methods: {
    getSectionOneData(value) {
      //console.log(value);
      this.resultOne = value;
      this.pointResultCalculate();
      this.RatingCalculate();
    },
    getSectionTwoData(value) {
      this.resultTwo = value;
      this.pointResultCalculate();
      this.RatingCalculate();
    },
    getSectionThreeData(value) {
      this.resultThree = value;
      this.pointResultCalculate();
      this.RatingCalculate();
    },
    pointResultCalculate(){
      this.pointResult = this.resultOne +this.resultTwo+this.resultThree;
    },
    RatingCalculate(){
      if(this.pointResult>85){
        this.Rating ="A";
      }else if(this.pointResult>75 && this.pointResult<85||this.pointResult==85){
        this.Rating = "B+";
      }else if(this.pointResult>70 && this.pointResult<75||this.pointResult==75 ){
        this.Rating = "B";
      }else if(this.pointResult>55 && this.pointResult<70||this.pointResult==70){
        this.Rating = "C+"
      }else if(this.pointResult>42 && this.pointResult<55||this.pointResult==55){
        this.Rating = "C";
      }else if(this.pointResult>29 && this.pointResult<42||this.pointResult==42){
        this.Rating = "D+";
      }else if(this.pointResult>24 && this.pointResult<29||this.pointResult==29){
        this.Rating = "D";
      }else{
        this.Rating = "F";
      }
    }
  }
};
</script>

<style lang="less">
</style>