<template>
  <div class="MFGpSeven">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>III. Robust design checkpoints for packing MFG ratings review</h3>
        </el-col>
      </el-row>
    </div>
    <table>
      <tr>
        <th>RATING:</th>
        <th><u>SIT</u></th>
        <th><u>SVT</u></th>
      </tr>
      <tr>
        <th>EXISTING RATING:</th>
        <th>{{ 0.0 }}</th>
        <th>{{ 0.0 }}</th>
      </tr>
      <tr>
        <th>OUTLOOK RATING:</th>
        <th>{{ 0.0 }}</th>
        <th>{{ 0.0 }}</th>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less">
.MFGpSeven {
  margin-top: 50px;
  .title {
    .subTotal {
      padding-left: 50px;
    }
  }
  .Remark {
    padding-top: 20px;
  }
  table {
    width:100%;
    text-align: left;
    th {
      padding: 10px;
    }
  }
}
</style>
