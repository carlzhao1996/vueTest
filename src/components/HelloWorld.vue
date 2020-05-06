<template>
  <div class="dashboard">
    <el-form label-width="110px" class="Menu">
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
          <h3>100</h3>
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
      <el-row style="float:right;">
        <el-col>
          <h3>POINTRESULT: {{100}}</h3>
        </el-col>
      </el-row>
    </el-form>
    <SectionOne ref="sectionOne" />
    <SectionTwo ref="sectionTwo" />
    <SectionThree ref="sectionThree" />
    <SectionFour ref="sectionFour" />
  </div>
</template>

<script>
import SectionOne from "./AIO/sectionOne";
import SectionTwo from "./AIO/sectionTwo";
import SectionThree from "./AIO/sectionThree";
import SectionFour from "./AIO/sectionFour";

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour
  },
  data() {
    return {
      product: "",
      originDate: "",
      gaDate: "",
      performed_By: "",
      process_owner: "",
      packSizeCheck: 0
    }
  },
  created() {},
  mounted() {
    // console.log(this.$refs.menu.product)
  },
  methods: {}
};
</script>

<style lang="less">
.dashboard {
}
</style>
