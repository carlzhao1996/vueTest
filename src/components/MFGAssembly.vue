<template>
  <div class="dashboard">
    <div class="title">
      <h2>DESKTOP & WORKSTATION MANUFACTURING MECHANICAL DESIGN RATING</h2>
    </div>
    <div class="Header">
      <p style="font-weight:bold;">Product Prefix</p>
      <p style="font-weight:bold;">D = Desktop</p>
      <p style="font-weight:bold;">W = Workstation</p>
      <el-row>
        <el-col span="3">Enter Product Prefix:</el-col>
        <el-col span="5">
          <el-input size="small" />
        </el-col>
      </el-row>
      <span style="font-weight:bold;">RATING {{100}}</span>
      <el-form :inline="true" class="TitleForm">
        <el-row>
          <el-col span="8">
            <el-form-item label="PRODUCT: (ie:Bird)">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="GRADING">
              <span>A</span>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="8">
            <el-form-item label="MECHANICAL: (ie: Big Sur P520)">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="PERFORMED BY: ">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="10">
            <el-form-item label="HARDWARE LEVEL: (ie: Concept / SDV / SIT)">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="PROCESS OWNER: ">
              <el-input size="small"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col span="8">
            <el-form-item label="ORIGIN DATE: ">
              <el-date-picker type="date"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col span="8">
            <el-form-item label="GA Date (SS Date):">
              <el-date-picker type="date"></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <titleContent />
      <Approvals />
      <Distribution />
      <TableOfContent />
      <div class="title">
        <h2>MECHANICAL DESIGN AND MANUFACTURABILITY RATING WORKSHEET</h2>
      </div>
      <boxLevelAssembly />
    </div>
  </div>
</template>

<script>
import titleContent from "./MFGAssembly/titleContent";
import Approvals from "./MFGAssembly/approvals";
import Distribution from "./MFGAssembly/distribution";
import TableOfContent from "./MFGAssembly/tableOfContents";
import boxLevelAssembly from "./MFGAssembly/boxLevelAssembly";

export default {
  components: {
    titleContent,
    Approvals,
    Distribution,
    TableOfContent,
    boxLevelAssembly
  }
};
</script>

<style lang="less">
.dashboard {
  .title {
    background: lightblue;
    .h2 {
    }
  }
  .Header {
    .TitleForm {
    }
  }
}
</style>