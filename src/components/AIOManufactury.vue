<template>
  <div>
    <el-form label-width="110px" class="Menu">
      <el-row>
        <el-col :span="8">
          <el-form-item label="PRODUCT: ">
            <el-input size="small" v-model="product"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="HARDWARE LEVEL:">
            <el-input size="small" v-model="hardWareLevel"></el-input>
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
          <!-- <el-input size="small" v-model="performed_By"></el-input> -->
          {{"Jame Jia"}}
        </el-col>
      </el-row>
      <el-row style="padding-top:20px;">
        <el-col :span="3">PROCESS OWNER:</el-col>
        <el-col :span="8">
          <!-- <el-input size="small" v-model="process_owner"></el-input> -->
          {{"Global ME Team"}}
        </el-col>
      </el-row>
    </el-form>
    <Reviewers ref="reviewers" />
    <Distrubution />
    <div>
      <el-row style="float:right;">
        <el-col>
          <h3>POINTRESULT: {{pointResult}}</h3>
        </el-col>
      </el-row>
    </div>
    <sectionOne ref="sectionOne" @sectionOneValue="getSectionOneData($event)" />
    <sectionTwo ref="sectionTwo" @sectionTwoValue="getSectionTwoData($event)" />
    <sectionThree ref="sectionThree" @sectionThreeValue="getSectionThreeData($event)" />
    <sectionFour ref="sectionFour" @sectionFourValue="getSectionFourData($event)" />
    <sectionFive ref="sectionFive" @sectionFiveValue="getSectionFiveData($event)" />
    <div style="margin-top:30px;text-align:center;border:2px solid black">
      <h2>SUMMARY AND MISCELLANEOUS</h2>
    </div>
    <div>
      <span style="font-weight:bold;">I. Mfg. mechanical design ratings summary of results</span>
    </div>
    <div>
      <table style="width:100%">
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th>Tot.</th>
        <th>Act.</th>
        <!--1-->
        <tr>
          <td>1. BOX LEVEL ASSEMBLY DIFFICULTY</td>
          <td>12.0</td>
          <td>13-15</td>
          <td>16-18</td>
          <td>19-21</td>
          <td>22-24</td>
          <td>25-27</td>
          <td>28-30</td>
          <td>{{result1}}</td>
          <td>{{grade1}}</td>
        </tr>
        <!--2-->
        <tr>
          <td>2. NUMBER OF BOX LEVEL INTERCONNECTS</td>
          <td>0.0</td>
          <td>1.0</td>
          <td>2.0</td>
          <td>3-4</td>
          <td>5-6</td>
          <td>7-8</td>
          <td>9-10</td>
          <td>{{result2}}</td>
          <td>{{grade2}}</td>
        </tr>
        <!--3-->
        <tr>
          <td>3. BOX LEVEL SCREWS/FASTENERS</td>
          <td>0.0</td>
          <td>1.0</td>
          <td>2.0</td>
          <td>3-4</td>
          <td>5-6</td>
          <td>7-8</td>
          <td>9-10</td>
          <td>{{result3}}</td>
          <td>{{grade3}}</td>
        </tr>
        <!--4-->
        <tr>
          <td>4. BOX LEVEL ASSEMBLY AND DISASSEMBLY POTENTIAL RISK</td>
          <td>6.0</td>
          <td>7-10</td>
          <td>11-14</td>
          <td>15-18</td>
          <td>19-21</td>
          <td>22-23</td>
          <td>24-25</td>
          <td>{{result4}}</td>
          <td>{{grade4}}</td>
        </tr>
        <!--5-->
        <tr>
          <td>5. BOX LEVEL QUALITY POTENTIAL RISK</td>
          <td>6.0</td>
          <td>7-10</td>
          <td>11-14</td>
          <td>15-18</td>
          <td>19-21</td>
          <td>22-23</td>
          <td>24-25</td>
          <td>{{result5}}</td>
          <td>{{grade5}}</td>
        </tr>
        <!--Quality tot-->
        <tr>
          <td style="font-weight:bold;padding-left:200px;">Quality tot.</td>
          <td>24</td>
          <td>29-37</td>
          <td>42-50</td>
          <td>55-65</td>
          <td>70-78</td>
          <td>83-89</td>
          <td>94-100</td>
          <td>{{pointResult}}</td>
          <td>{{Rating}}</td>
        </tr>
      </table>
      <div style="float:right;padding-top:20px;">
      <table style="border:1px solid black;">
        <th style="border:1px solid black;">Grade</th>
        <th style="border:1px solid black;">D</th>
        <th style="border:1px solid black;">D+</th>
        <th style="border:1px solid black;">C</th>
        <th style="border:1px solid black;">C+</th>
        <th style="border:1px solid black;">B</th>
        <th style="border:1px solid black;">B+</th>
        <th style="border:1px solid black;">A</th>
        <tr>
          <td style="font-weight:bold;border:1px solid black;">Point</td>
          <td style="border:1px solid black;">0-28</td>
          <td style="border:1px solid black;">29-41</td>
          <td style="border:1px solid black;">42-54</td>
          <td style="border:1px solid black;">55-69</td>
          <td style="border:1px solid black;">70-74</td>
          <td style="border:1px solid black;">75-84</td>
          <td style="border:1px solid black;">85-100</td>
        </tr>
      </table>
      </div>
    </div>
  </div>
</template>

<script>
import Reviewers from "./AIOManufactury/reviewers";
import Distrubution from "./AIOManufactury/distribution";
import sectionOne from "./AIOManufactury/sectionOne";
import sectionTwo from "./AIOManufactury/sectionTwo";
import sectionThree from "./AIOManufactury/sectionThree";
import sectionFour from "./AIOManufactury/sectionFour";
import sectionFive from "./AIOManufactury/sectionFive";

export default {
  components: {
    Reviewers,
    Distrubution,
    sectionOne,
    sectionTwo,
    sectionThree,
    sectionFour,
    sectionFive
  },
  data() {
    return {
      product: "",
      hardWareLevel: "",
      originDate: "",
      gaDate: "",
      pointResult: 100,
      Rating: "A",
      result1: 30,
      grade1: "A",
      result2: 10,
      grade2: "A",
      result3: 10,
      grade3: "A",
      result4: 25,
      grade4: "A",
      result5: 25,
      grade5: "A"
    };
  },
  methods: {
    rating() {
      if (this.pointResult > 85 || this.pointResult == 85) {
        this.Rating = "A";
      } else if(this.pointResult<85 && this.pointResult>75||this.pointResult==75){
        this.Rating = "B+";
      }else if(this.pointResult<75 && this.pointResult>70||this.pointResult==70){
        this.Rating = "B"
      }else if(this.pointResult<70 && this.pointResult>55 || this.pointResult==55){
        this.Rating = "C+"
      }else if(this.pointResult<55 && this.pointResult>42 || this.pointResult==42){
        this.Rating = "C"
      }else if(this.pointResult<42 && this.pointResult>29 || this.pointResult ==29){
        this.Rating = "D+"
      }else{
        this.Rating = "D"
      }
    },
    ratingForThirty(value){
      if(value>28 || value==28 && value < 30 || value==30){
        return 'A';
      }else if(value>25 || value==25 && value<28){
        return 'B+';
      }else if(value>22 || value==22 && value<25){
        return 'C+';
      }else if(value>19 || value==19 && value<22){
        return 'C';
      }else if(value>16 || value==16 && value<19){
        return 'D+';
      }else if(value>12 || value==12 && value<16){
        return 'D';
      }else{
        return "F";
      }
    },
    ratingForTen(value){
      if(value==10 ){
        return 'A';
      }else if(value==9){
        return 'B+'
      }else if(value>7 || value==7 && value<9){
        return 'B'
      }else if(value>5 || value==5 && value<7){
        return 'C+'
      }else if(value >2 || value==2 && value<5){
        return 'C';
      }else if(value >1 || value==1 && value<2){
        return 'D+'
      }else{
        return 'D'
      }
    },
    ratingForTwentyfive(value){
      if(value==25){
        return 'A'
      }else if(value>24 && value<25){
        return 'B+';
      }else if(value<24 || value==24&& value>22){
        return 'B';
      }else if(value==22||value<22 && value>19){
        return 'C+';
      }else if(value<19 || value==19&&value>15){
        return 'C';
      }else if(value<15 || value==15 && value>11){
        return 'D+';
      }else if(value<11 || value==11 && value>6){
        return 'D';
      }else{
        return 'F';
      }
    },
    getSectionOneData(value) {
      console.log(value);
      this.result1 = value.subTotal;
      this.grade1 = this.ratingForThirty(this.result1);
      this.pointResult =
        this.result1 +
        this.result2 +
        this.result3 +
        this.result4 +
        this.result5;
        this.rating();
    },
    getSectionTwoData(value) {
      console.log(value);
      this.result2 = value.subTotal;
      this.grade2 = this.ratingForTen(this.result2);
      this.pointResult =
        this.result1 +
        this.result2 +
        this.result3 +
        this.result4 +
        this.result5;
        this.rating();
    },
    getSectionThreeData(value) {
      console.log(value);
      this.result3 = value.subTotal;
      this.grade3 = this.ratingForTen(this.result3);
      this.pointResult =
        this.result1 +
        this.result2 +
        this.result3 +
        this.result4 +
        this.result5;
        this.rating();
    },
    getSectionFourData(value) {
      console.log(value);
      this.result4 = value.subTotal;
      this.grade4 = this.ratingForTwentyfive(this.result4);
      this.pointResult =
        this.result1 +
        this.result2 +
        this.result3 +
        this.result4 +
        this.result5;
        this.rating();
    },
    getSectionFiveData(value) {
      console.log(value);
      this.result5 = value.subTotal;
      this.grade5 = this.ratingForTwentyfive(this.result5);
      this.pointResult =
        this.result1 +
        this.result2 +
        this.result3 +
        this.result4 +
        this.result5;
        this.rating();
    }
  }
};
</script>

<style lang="less">
</style>