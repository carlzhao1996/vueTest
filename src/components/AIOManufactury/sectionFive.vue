<template>
  <div class="sectionFive">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>5 BOX LEVEL QUALITY POTENTIAL RISK</h3>
        </el-col>
        <el-col :span="8" class="subTotal">
          <h3>SUB TOTAL= {{subTotal}}</h3>
        </el-col>
      </el-row>
    </div>

    <div class="conditionContent">
      <div v-for="(item,index) in contentData" :key="index">
        <el-form>
          <el-row>
            <el-col :span="5">
              <el-form-item label="Checks:">
                <span>{{$data[item.checks]}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="13" style="padding-left:20px;">
              <p v-for="(i,j) in item.textContent" :key="j" :style="i.style">{{i.text}}</p>
            </el-col>
          </el-row>
        </el-form>
        <el-row style="text-align:center; padding-top:20px;">
          <el-col :span="8">
            <div>
              <p>{{item.calOneText}}</p>
              <el-input-number
                size="small"
                @change="calculate"
                v-model="$data[item.x1]"
                :min="0"
              ></el-input-number>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <p>{{item.calTwoText}}</p>
              <el-input-number
                size="small"
                @change="calculate"
                v-model="$data[item.x2]"
                :min="0"
              ></el-input-number>
            </div>
          </el-col>
          <el-col :span="8">
            <div>
              <p>{{item.calThreeText}}</p>
              <el-input-number
                size="small"
                @change="calculate"
                v-model="$data[item.x3]"
                :min="0"
              ></el-input-number>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20" style="padding-top:20px;">
            <el-input type="textarea" autosize placeholder="Remark" v-model="$data[item.comment]" @input="calculate"></el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <div style="padding-top:30px;">
      <span>SUB TOTAL: {{total}}</span>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    calculate(){
      this.checksfivePointone = this.condition511*1+this.condition512*2+this.condition513*3;
      this.checksfivePointtwo = this.condition521*1+this.condition522*2+this.condition523*3;
      this.checksfivePointthree = this.condition531*1+this.condition532*2+this.condition533*3;
      this.checksfivePointfour = this.condition541*1+this.condition542*2+this.condition543*3;
      this.checksfivePointfive = this.condition551*1+this.condition552*2+this.condition553*3;
      this.checksfivePointsix = this.condition561*1+this.condition562*2+this.condition563*3;
      this.checksfivePointseven = this.condition571*1+this.condition572*2+this.condition573*3;
      this.checksfivePointeight = this.condition581*1+this.condition582*2+this.condition583*3;
      this.checksfivePointnine = this.condition591*1+this.condition592*2+this.condition593*3;
      this.checksfivePointten = this.condition5101*1+this.condition5102*2+this.condition5103*3;
      this.checksfivePointeleven = this.condition5111*1+this.condition5112*2+this.condition5113*3;
      this.checksfivePointtwelve = this.condition5121*1+this.condition5122*2+this.condition5123*3;
      this.checksfivePointthirteen = this.condition5131*1+this.condition5132*2+this.condition5133*3;
      this.checksfivePointfourteen = this.condition5141*1+this.condition5142*2+this.condition5143*3;
      this.total = this.checksfivePointone+this.checksfivePointtwo+this.checksfivePointthree
      +this.checksfivePointfour+this.checksfivePointfive+this.checksfivePointsix+this.checksfivePointseven
      +this.checksfivePointeight+this.checksfivePointnine+this.checksfivePointten+this.checksfivePointten
      +this.checksfivePointeleven+this.checksfivePointtwelve+this.checksfivePointthirteen+this.checksfivePointfourteen;
      if((25-this.total)<0){
        this.subTotal = 0;
      }else{
        this.subTotal = (25-this.total);
      }
      let sectionFiveObj={
        total:this.total,
        subTotal:this.subTotal,
        checksfivePointone:this.checksfivePointone,
        checksfivePointtwo:this.checksfivePointtwo,
        checksfivePointthree:this.checksfivePointthree,
        checksfivePointfour:this.checksfivePointfour,
        checksfivePointfive:this.checksfivePointfive,
        checksfivePointsix:this.checksfivePointsix,
        checksfivePointseven:this.checksfivePointseven,
        checksfivePointeight:this.checksfivePointeight,
        checksfivePointnine:this.checksfivePointnine,
        checksfivePointten:this.checksfivePointten,
        checksfivePointeleven:this.checksfivePointeleven,
        checksfivePointtwelve:this.checksfivePointtwelve,
        checksfivePointthirteen:this.checksfivePointthirteen,
        checksfivePointfourteen:this.checksfivePointfourteen,
        comment51:this.comment51,
        comment52:this.comment52,
        comment53:this.comment53,
        comment54:this.comment54,
        comment55:this.comment55,
        comment56:this.comment56,
        comment57:this.comment57,
        comment58:this.comment58,
        comment59:this.comment59,
        comment510:this.comment510,
        comment511:this.comment511,
        comment512:this.comment512,
        comment513:this.comment513,
        comment514:this.comment514
      }
      this.$emit('sectionFiveValue',sectionFiveObj);
    }
  },
  data() {
    return {
      total:0,
      subTotal:25,

      checksfivePointone:0,
      condition511:0,
      condition512:0,
      condition513:0,
      comment51:"",

      checksfivePointtwo:0,
      condition521:0,
      condition522:0,
      condition523:0,
      comment52:"",

      checksfivePointthree:0,
      condition531:0,
      condition532:0,
      condition533:0,
      comment53:"",

      checksfivePointfour:0,
      condition541:0,
      condition542:0,
      condition543:0,
      comment54:"",

      checksfivePointfive:0,
      condition551:0,
      condition552:0,
      condition553:0,
      comment55:"",

      checksfivePointsix:0,
      condition561:0,
      condition562:0,
      condition563:0,
      comment56:"",

      checksfivePointseven:0,
      condition571:0,
      condition572:0,
      condition573:0,
      comment57:"",

      checksfivePointeight:0,
      condition581:0,
      condition582:0,
      condition583:0,
      comment58:"",

      checksfivePointnine:0,
      condition591:0,
      condition592:0,
      condition593:0,
      comment59:"",

      checksfivePointten:0,
      condition5101:0,
      condition5102:0,
      condition5103:0,
      comment510:"",

      checksfivePointeleven:0,
      condition5111:0,
      condition5112:0,
      condition5113:0,
      comment511:"",

      checksfivePointtwelve:0,
      condition5121:0,
      condition5122:0,
      condition5123:0,
      comment512:"",

      checksfivePointthirteen:0,
      condition5131:0,
      condition5132:0,
      condition5133:0,
      comment513:"",

      checksfivePointfourteen:0,
      condition5141:0,
      condition5142:0,
      condition5143:0,
      comment514:"",

      contentData: [
        {
          checks: "checksfivePointone",
          textContent: [
            {
              text:
                "1 There is noise when open or close display.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition511",
          x2: "condition512",
          x3: "condition513",
          comment: "comment51"
        },

        {
          checks: "checksfivePointtwo",
          textContent: [
            {
              text:
                "2  LCD rear cover warpage with finish good level.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition521",
          x2: "condition522",
          x3: "condition523",
          comment: "comment52"
        },

        {
          checks: "checksfivePointthree",
          textContent: [
            {
              text:
                "3 Battery insertion/extraction condition issues (Such as difficult to assemble, easy to loose, can't lock ",
              style: "font-weight:bold;"
            },
            {
              text:
                " fully,rattling and so on).",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition531",
          x2: "condition532",
          x3: "condition533",
          comment: "comment53"
        },

        {
          checks: "checksfivePointfour",
          textContent: [
            {
              text:
                "4 Abnormal label floating from cover surface.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition541",
          x2: "condition542",
          x3: "condition543",
          comment: "comment54"
        },

        {
          checks: "checksfivePointfive",
          textContent: [
            {
              text:
                "5 All I/O ports are not in the centre of hole or intervene with each other or can't plug in/out smoothly.",
              style: "font-weight:bold;color:red;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition551",
          x2: "condition552",
          x3: "condition553",
          comment: "comment55"
        },
        //6
        {
          checks: "checksfivePointsix",
          textContent: [
            {
              text:
                "6 Ugly inside appearance can be seen from outside.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition561",
          x2: "condition562",
          x3: "condition563",
          comment: "comment56"
        },
        //7
        {
          checks: "checksfivePointseven",
          textContent: [
            {
              text:
                "7 Meet Manufacturability capacity.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition571",
          x2: "condition572",
          x3: "condition573",
          comment: "comment57"
        },
        //8
        {
          checks: "checksfivePointeight",
          textContent: [
            {
              text:
                "8 Bottom rocking (System rocking).",
              style: "font-weight:bold;color:red;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition581",
          x2: "condition582",
          x3: "condition583",
          comment: "comment58"
        },
        //9
        {
          checks: "checksfivePointnine",
          textContent: [
            {
              text:
                "9 Dormancy sensor is near speaker. (It will impact dormancy sensor's function because of magnetic ",
              style: "font-weight:bold;color:red;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition591",
          x2: "condition592",
          x3: "condition593",
          comment: "comment59"
        },
        //10
        {
          checks: "checksfivePointten",
          textContent: [
            {
              text:
                "10 Check Items when power on system. (A. LCD ripple; B. Light leakage; C. ODD tray slot out distance",
              style: "font-weight:bold;"
            },
            {
              text:" too short or too long even drop from shell; D. System hang up).",
              style:"font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition5101",
          x2: "condition5102",
          x3: "condition5103",
          comment: "comment510"
        },
        //11
        {
          checks: "checksfivePointeleven",
          textContent: [
            {
              text:
                "11 Check if have quality potential risk when assemble and disassemble parts,Also thinking L6 part assemble and  disassemble,  especially for  the disassembly difficulty",
              style: "font-weight:bold;color:red;"
            },
            {
              text:
                "Such as we need check the parts conflict of rear cover ,Linefit parts assembly and disassembly process.",
              style:"font-weight:bold;color:blue;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition5111",
          x2: "condition5112",
          x3: "condition5113",
          comment: "comment51"
        },
        //12
        {
          checks: "checksfivePointtwelve",
          textContent: [
            {
              text:
                "12 Check the product and carton box'outline dimension,if the two items will impact the currently MFG sites'spec.",
              style: "font-weight:bold;"
            },
            {
              text:"When the product'outline dimension is over 470mmX600mm,and the product height is over 400mm,the carton box'outline dimension is over 470mmX620mmX 500mm,",
              style: "font-weight:bold;"
            },
            {
              text:"box'outline dimension is over 470mmX620mmX 500mm,",
              style: "font-weight:bold;"
            },
            {
              text:"we need confirm with the MFG sites ,if the current line status can support the new product,and raise the issue to RD team before concept exit.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition5121",
          x2: "condition5122",
          x3: "condition5123",
          comment: "comment512"
        },
        //13
        {
          checks: "checksfivePointthirteen",
          textContent: [
            {
              text:
                "13 Check the reliability of the adhesiveness of the two parts,we need confirm with RD team before SIT exit.",
              style: "font-weight:bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition5131",
          x2: "condition5132",
          x3: "condition5133",
          comment: "comment513"
        },
        //14
        {
          checks: "checksfivePointfourteen",
          textContent: [
            {
              text:
                "14 Jump pin(such as CMOS jump pin) need be far away from metal parts, the distance between pin location and metal parts must be more than twice as long as pin length.",
              style: "font-weight:bold;color:red;"
            },
            {
              text: "Enter the number of each condition.",
              style: "color:blue;"
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition5141",
          x2: "condition5142",
          x3: "condition5143",
          comment: "comment514"
        }
      ]
    };
  }
};
</script>

<style lang="less">
.sectionFive {
  margin-top: 50px;
}
</style>