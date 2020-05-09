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
        <h3>97.0</h3>
      </el-col>
      <el-col :span="8">
        <h3>A</h3>
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
        <h3 style="color:blue">POINT RESULT: {{97.0}}</h3>
      </el-col>
    </el-row>
    <el-row>
        <h2 style="color:blue">Design for Automation (Must item)</h2>
      </el-row>
  </el-form>
  <SectionOne />
  <SectionTwo />
  <SectionThree />
</div>
</template>

<script>
import SectionOne from './DFAComponents/sectionOne'
import SectionTwo from './DFAComponents/sectionTwo'
import SectionThree from './DFAComponents/sectionThree'

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
    };
  }
};
</script>

<style lang="less">
</style>