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
    <Reviewers ref="reviewers"/>
    <Distrubution />
    <div>
      <el-row style="float:right;">
        <el-col>
          <h3>POINTRESULT: {{pointResult}}</h3>
        </el-col>
      </el-row>
    </div>
    <sectionOne ref="sectionOne" @sectionOneValue="getSectionOneData($event)" />
    <sectionTwo ref="sectionTwo" @sectionTwoValue="getSectionTwoData($event)"/>
    <sectionThree ref="sectionThree" @sectionThreeValue="getSectionThreeData($event)"/>
    <sectionFour ref="sectionFour" @sectionFourValue="getSectionFourData($event)"/>
    <sectionFive ref="sectionFive" @sectionFiveValue="getSectionFiveData($event)"/>
  </div>
</template>

<script>
import Reviewers from './AIOManufactury/reviewers'
import Distrubution from './AIOManufactury/distribution'
import sectionOne from './AIOManufactury/sectionOne'
import sectionTwo from './AIOManufactury/sectionTwo'
import sectionThree from './AIOManufactury/sectionThree'
import sectionFour from './AIOManufactury/sectionFour'
import sectionFive from './AIOManufactury/sectionFive'

export default {
    components:{
        Reviewers,
        Distrubution,
        sectionOne,
        sectionTwo,
        sectionThree,
        sectionFour,
        sectionFive
    },
    data(){
        return{
            product:'',
            hardWareLevel:'',
            originDate:'',
            gaDate:'',
            pointResult:100,
            Rating:''
        }
    },
    methods:{
      getSectionOneData(value){
        console.log(value)
      },
      getSectionTwoData(value){
        console.log(value)
      },
      getSectionThreeData(value){
        console.log(value)
      },
      getSectionFourData(value){
        console.log(value)
      },
      getSectionFiveData(value){
        console.log(value)
      },
    }

};
</script>

<style lang="less">
</style>