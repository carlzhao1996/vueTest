<template>
  <el-form label-width="110px" class="MFGpMenu">
    <el-row style="text-align:center">
      <h3>Desktop AIO Workstation Packing RATING</h3>
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
        <h3>100.0</h3>
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
    <el-row style="padding-top:20px;">
      <el-col :span="3">PROCESS OWNER:</el-col>
      <el-col :span="8">
        <el-input size="small" v-model="process_owner"></el-input>
      </el-col>
    </el-row>
    <el-row style="text-align:right">
      <el-col>
        <h3>POINT RESULT: {{100}}</h3>
      </el-col>
    </el-row>
  </el-form>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      product: "",
      originDate: "",
      gaDate: "",
      performed_By: "",
      process_owner: "",
      packSizeCheck: 0
    };
  }
};
</script>

<style lang="less">
</style>