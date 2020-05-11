<template>
<div>
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
        <h3>{{pointResult}}</h3>
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
        <h3>POINT RESULT: {{pointResult}}</h3>
      </el-col>
    </el-row>
  </el-form>
  <SectionOne ref="sectionOne" @sectionOneValue="getSectionOneData($event)"/>
  <SectionTwo ref="sectionTwo" @sectionTwoValue="getSectionTwoData($event)"/>
  <SectionThree ref="sectionThree" @sectionThreeValue="getSectionThreeData($event)"/>
  <SectionFour ref="sectionFour" @sectionFourValue="getSectionFourData($event)"/>
  <SectionFive ref="sectionFive" @sectionFiveValue="getSectionFiveData($event)"/>
  <div class="DetractorSummary" style="padding-top:30px;">
      <h2>II. Detractor summary</h2>
      <table style="width:100%;border-collapse:collapse;border:1px solid black;">
        <tr>
          <th style="border:1px solid black;">Item</th>
          <th style="border:1px solid black;">Detractor summary</th>
          <th style="border:1px solid black;">Pictures</th>
          <th style="border:1px solid black;">Points Lost</th>
          <th style="border:1px solid black;">Priority</th>
        </tr>
        <tr v-for="(item,index) in tableData" :key="index">
          <td style="border:1px solid black;">{{item.Number}}</td>
          <td style="border:1px solid black;">{{$data[item.summary]}}</td>
          <td style="border:1px solid black;">
            <el-input size="small" v-model="$data[item.pictures]"></el-input>
          </td>
          <td style="border:1px solid black;">{{$data[item.pointsLost]}}</td>
          <td style="border:1px solid black;">
            <el-input size="small" v-model="$data[item.priority]"></el-input>
          </td>
        </tr>
      </table>
    </div>
</div>
</template>

<script>
import SectionOne from './MFGPacking/MFGpOne';
import SectionTwo from './MFGPacking/MFGpTwo';
import SectionThree from './MFGPacking/MFGpThree';
import SectionFour from './MFGPacking/MFGpFour';
import SectionFive from './MFGPacking/MFGpFive';

export default {
  components: {
    SectionOne,
    SectionTwo,
    SectionThree,
    SectionFour,
    SectionFive
  },
  data() {
    return {
      product: "",
      originDate: "",
      gaDate: "",
      performed_By: "",
      process_owner: "",
      pointResult:100,
      Rating:"A",
      result1:25,
      result2:25,
      result3:25,
      result4:25,
      result5:0,
      //Section One
      item1Summary: "",
      item1Pictures: "",
      item1PointsLost: 0,
      item1Priority: "",

      item2Summary: "",
      item2Pictures: "",
      item2PointsLost: 0,
      item2Priority: "",

      item3Summary: "",
      item3Pictures: "",
      item3PointsLost: 0,
      item3Priority: "",

      item4Summary: "",
      item4Pictures: "",
      item4PointsLost: 0,
      item4Priority: "",
      //Section Two
      item5Summary: "",
      item5Pictures: "",
      item5PointsLost: 0,
      item5Priority: "",

      item6Summary: "",
      item6Pictures: "",
      item6PointsLost: 0,
      item6Priority: "",

      item7Summary: "",
      item7Pictures: "",
      item7PointsLost: 0,
      item7Priority: "",

      item8Summary: "",
      item8Pictures: "",
      item8PointsLost: 0,
      item8Priority: "",

      item9Summary: "",
      item9Pictures: "",
      item9PointsLost: 0,
      item9Priority: "",

      //Section Three
      item10Summary: "",
      item10Pictures: "",
      item10PointsLost: 0,
      item10Priority: "",

      item11Summary: "",
      item11Pictures: "",
      item11PointsLost: 0,
      item11Priority: "",

      item12Summary: "",
      item12Pictures: "",
      item12PointsLost: 0,
      item12Priority: "",

      item13Summary: "",
      item13Pictures: "",
      item13PointsLost: 0,
      item13Priority: "",

      item14Summary: "",
      item14Pictures: "",
      item14PointsLost: 0,
      item14Priority: "",

      item15Summary: "",
      item15Pictures: "",
      item15PointsLost: 0,
      item15Priority: "",

      item16Summary: "",
      item16Pictures: "",
      item16PointsLost: 0,
      item16Priority: "",

      item17Summary: "",
      item17Pictures: "",
      item17PointsLost: 0,
      item17Priority: "",

      item18Summary: "",
      item18Pictures: "",
      item18PointsLost: 0,
      item18Priority: "",

      tableData:[
        //Section one
        {
          Number:1,
          summary: "item1Summary",
          pictures: "item1Pictures",
          pointsLost: "item1PointsLost",
          priority: "item1Priority"
        },
        {
          Number:2,
          summary: "item2Summary",
          pictures: "item2Pictures",
          pointsLost: "item2PointsLost",
          priority: "item2Priority"
        },
        {
          Number:3,
          summary: "item3Summary",
          pictures: "item3Pictures",
          pointsLost: "item3PointsLost",
          priority: "item3Priority"
        },
        {
          Number:4,
          summary: "item4Summary",
          pictures: "item4Pictures",
          pointsLost: "item4PointsLost",
          priority: "item4Priority"
        },
        //Section Two
        {
          Number:5,
          summary: "item5Summary",
          pictures: "item5Pictures",
          pointsLost: "item5PointsLost",
          priority: "item5Priority"
        },
        {
          Number:6,
          summary: "item6Summary",
          pictures: "item6Pictures",
          pointsLost: "item6PointsLost",
          priority: "item6Priority"
        },
        {
          Number:7,
          summary: "item7Summary",
          pictures: "item7Pictures",
          pointsLost: "item7PointsLost",
          priority: "item7Priority"
        },
        {
          Number:8,
          summary: "item8Summary",
          pictures: "item8Pictures",
          pointsLost: "item8PointsLost",
          priority: "item8Priority"
        },
        {
          Number:9,
          summary: "item9Summary",
          pictures: "item9Pictures",
          pointsLost: "item9PointsLost",
          priority: "item9Priority"
        },
        //Section Three
        {
          Number:10,
          summary: "item10Summary",
          pictures: "item10Pictures",
          pointsLost: "item10PointsLost",
          priority: "item10Priority"
        },
        {
          Number:11,
          summary: "item11Summary",
          pictures: "item11Pictures",
          pointsLost: "item11PointsLost",
          priority: "item11Priority"
        },
        {
          Number:12,
          summary: "item12Summary",
          pictures: "item12Pictures",
          pointsLost: "item12PointsLost",
          priority: "item12Priority"
        },
        {
          Number:13,
          summary: "item13Summary",
          pictures: "item13Pictures",
          pointsLost: "item13PointsLost",
          priority: "item13Priority"
        },
        //Section Four
        {
          Number:14,
          summary: "item14Summary",
          pictures: "item14Pictures",
          pointsLost: "item14PointsLost",
          priority: "item14Priority"
        },
        {
          Number:15,
          summary: "item15Summary",
          pictures: "item15Pictures",
          pointsLost: "item15PointsLost",
          priority: "item15Priority"
        },
        {
          Number:16,
          summary: "item16Summary",
          pictures: "item16Pictures",
          pointsLost: "item16PointsLost",
          priority: "item16Priority"
        },
        {
          Number:17,
          summary: "item17Summary",
          pictures: "item17Pictures",
          pointsLost: "item17PointsLost",
          priority: "item17Priority"
        },
        {
          Number:18,
          summary: "item18Summary",
          pictures: "item18Pictures",
          pointsLost: "item18PointsLost",
          priority: "item18Priority"
        },
      ],
    };
  },
  methods:{
    pointResultCal(){
      this.pointResult = this.result1
      +this.result2
      +this.result3
      +this.result4
      +this.result5;
    },
    RatingCal(){

    },
    getSectionOneData(value){
      console.log(value);
      this.result1 = value.subTotal;
      this.pointResultCal();
      this.item1PointsLost = value.checks1;
      this.item2PointsLost = value.checks2;
      this.item3PointsLost = value.checks3;
      this.item4PointsLost = value.checks4;

      this.item1Summary = value.remark11;
      this.item2Summary = value.remark12;
      this.item3Summary = value.remark13;
      this.item4Summary = value.remark14;
    },
    getSectionTwoData(value){
      console.log(value)
      this.result2 = value.subTotal;
      this.pointResultCal();
      this.item5PointsLost = value.checks1;
      this.item6PointsLost = value.checks2;
      this.item7PointsLost = value.checks3;
      this.item8PointsLost = value.checks4;
      this.item9PointsLost = value.checks5;

      this.item5Summary = value.remark1;
      this.item6Summary = value.remark2;
      this.item7Summary = value.remark3;
      this.item8Summary = value.remark4;
      this.item9Summary = value.remark5;
    },
    getSectionThreeData(value){
      console.log(value)
      this.result3 = value.subTotal;
      this.pointResultCal();
      this.item10PointsLost = value.checks1;
      this.item11PointsLost = value.checks2;
      this.item12PointsLost = value.checks3;
      this.item13PointsLost = value.checks4;

      this.item10Summary = value.remark1;
      this.item11Summary = value.remark2;
      this.item12Summary = value.remark3;
      this.item13Summary = value.remark4;
    },
    getSectionFourData(value){
      console.log(value)
      this.result4 = value.subTotal;
      this.pointResultCal();
      this.item14PointsLost = value.checks1;
      this.item15PointsLost = value.checks2;

      this.item14Summary = value.remark1;
      this.item15Summary = value.remark2;
    },
    getSectionFiveData(value){
      console.log(value)
      this.result5 = value.subTotal;
      this.pointResultCal();

      this.item16PointsLost = value.checks1;
      this.item17PointsLost = value.checks2;
      this.item18PointsLost = value.checks3;

      this.item16Summary = value.remark1;
      this.item17Summary = value.remark2;
      this.item18Summary = value.remark3;
    }
  }
};
</script>

<style lang="less">
</style>