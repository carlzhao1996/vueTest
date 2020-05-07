<template>
  <div class="sectionFour">
    <div class="title">
      <el-row>
        <el-col :span="8">
          <h3>4 BOX LEVEL ASSEMBLY OR DISASSEMBLY POTENTIAL RISK</h3>
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

    <div class="CableRoutingTable">
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{checksfourPointseven}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <p style="font-weight:bold; padding-left:15px;">7. cable routing.</p>
          </el-col>
        </el-row>
      </el-form>
      <table class="contentTable">
        <tr v-for="(item,index) in cableRoutingTable" :key="index">
          <td>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="$data[item.model]"
              :min="0"
            ></el-input-number>
          </td>
          <td :style="item.textStyle">{{item.text}}</td>
        </tr>
      </table>
    </div>

    <div class="HDDHandling">
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{checksfourPointeight}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:20px;">
            <p style="font-weight:bold;">8 HDD handling.</p>
          </el-col>
        </el-row>
      </el-form>
      <div v-for="(item,index) in HDDHandlingData" :key="index">
        <el-row>
          <h4>{{item.title}}</h4>
        </el-row>
        <el-row style="text-align:center;">
          <el-col :span="8">
            <div>
              <p>{{item.calOneText}}</p>
              <el-input-number
                size="small"
                @change="calculate"
                v-model="$data[item.calOne]"
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
                v-model="$data[item.calTwo]"
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
                v-model="$data[item.calThree]"
                :min="0"
              ></el-input-number>
            </div>
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
      this.checksfourPointone = this.condition411*1+this.condition412*2+this.condition413*3;
      this.checksfourPointtwo = this.condition421*1+this.condition422*2+this.condition423*3;
      this.checksfourPointthree = this.condition431*1+this.condition432*2+this.condition433*3;
      this.checksfourPointfour = this.condition441*1+this.condition442*2+this.condition443*3;
      this.checksfourPointfive = this.condition451*1+this.condition452*2+this.condition453*3;
      this.checksfourPointsix = this.condition461*1+this.condition462*2+this.condition463*3;
      this.checksfourPointseven = this.condition47A+this.condition47B+this.condition47C+this.condition47D
      +this.condition47E+this.condition47F+this.condition47G+this.condition47I+this.condition47j+this.condition47k+
      this.condition47l+this.condition47j2+this.condition47k2+this.condition47l2+this.condition47m+
      this.condition47n+this.condition47o+this.condition47p+this.condition47p+this.condition47q+this.condition47r
      +this.condition47s+this.condition47u+this.condition47v;
      this.checksfourPointeight = this.condition8a1*2*this.condition8a2+3*this.condition8a3+this.condition8b1
      +2*this.condition8b2+3*this.condition8b3+this.condition8B1+2*this.condition8B2+3*this.condition8B3;
      this.total = this.checksfourPointone+this.checksfourPointtwo+this.checksfourPointthree
      +this.checksfourPointfour+this.checksfourPointfive+this.checksfourPointsix+this.checksfourPointseven
      +this.checksfourPointeight;
      if((25-this.total)<0){
        this.subTotal = 0;
      }else{
        this.subTotal = (25-this.total);
      }
      let sectionFourObj = {
        total:this.total,
        subTotal:this.subTotal,
        checksfourPointone:this.checksfourPointone,
        checksfourPointtwo:this.checksfourPointtwo,
        checksfourPointthree:this.checksfourPointthree,
        checksfourPointfour:this.checksfourPointfour,
        checksfourPointfive:this.checksfourPointfive,
        checksfourPointsix:this.checksfourPointsix,
        checksfourPointseven:this.checksfourPointseven,
        checksfourPointeight:this.checksfourPointeight,
        comment41:this.comment41,
        comment42:this.comment42,
        comment43:this.comment43,
        comment44:this.comment44,
        comment45:this.comment45,
        comment46:this.comment46,
      }
      this.$emit('sectionFourValue',sectionFourObj);
    }
  },
  data() {
    return {
      total:0,
      subTotal:25,

      checksfourPointone:0,
      condition411:0,
      condition412:0,
      condition413:0,
      comment41:"",

      checksfourPointtwo:0,
      condition421:0,
      condition422:0,
      condition423:0,
      comment42:'',

      checksfourPointthree:0,
      condition431:0,
      condition432:0,
      condition433:0,
      comment43:'',

      checksfourPointfour:0,
      condition441:0,
      condition442:0,
      condition443:0,
      comment44:'',

      checksfourPointfive:0,
      condition451:0,
      condition452:0,
      condition453:0,
      comment45:'',

      checksfourPointsix:0,
      condition461:0,
      condition462:0,
      condition463:0,
      comment46:'',

      checksfourPointseven:0,
      condition47A:0,
      condition47B:0,
      condition47C:0,
      condition47D:0,
      condition47E:0,
      condition47F:0,
      condition47G:0,
      condition47I:0,
      condition47j:0,
      condition47k:0,
      condition47l:0,
      condition47j2:0,
      condition47k2:0,
      condition47l2:0,
      condition47m:0,
      condition47n:0,
      condition47o:0,
      condition47p:0,
      condition47q:0,
      condition47r:0,
      condition47s:0,
      condition47t:0,
      condition47u:0,
      condition47v:0,

      checksfourPointeight:0,
      condition8a1:0,
      condition8a2:0,
      condition8a3:0,
      condition8b1:0,
      condition8b2:0,
      condition8b3:0,
      condition8B1:0,
      condition8B2:0,
      condition8B3:0,

      contentData: [
        {
          checks: "checksfourPointone",
          textContent: [
            {
              text:
                "1. Insertion / removal forces for mechanical parts exceed the capacity of the production worker",
              style: "color:red;font-weight:bold;"
            },
            {
              text:
                "to perform without fatigue, injury, or introducing damage.",
              style: "color:red;font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition411",
          x2: "condition412",
          x3: "condition413",
          comment: "comment41"
        },

        {
          checks: "checksfourPointtwo",
          textContent: [
            {
              text: "2. Screws or Mechanical parts introduce cables damage.",
              style: "font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition421",
          x2: "condition422",
          x3: "condition423",
          comment: "comment42"
        },

        {
          checks: "checksfourPointthree",
          textContent: [
            {
              text:
                "3. ODD/MB component/HDD have tight space with bottom case or top case.",
              style: "font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition431",
          x2: "condition432",
          x3: "condition433",
          comment: "comment43"
        },

        {
          checks: "checksfourPointfour",
          textContent: [
            {
              text: "4. Buttons or latchs are insensitive.",
              style: "font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition441",
          x2: "condition442",
          x3: "condition443",
          comment: "comment44"
        },

        {
          checks: "checksfourPointfive",
          textContent: [
            {
              text:
                "5. None fool proof assembly identification. For example, FPC don't add alignment line for operator ",
              style: "font-weight: bold;color:red;"
            },
            {
              text:
                "identification or operators plug cables mistakenly because no fool proof assembly design (Such as",
              style: "font-weight: bold;"
            },
            {
              text: "keyboard cable).",
              style: "font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition451",
          x2: "condition452",
          x3: "condition453",
          comment: "comment45"
        },

        {
          checks: "checksfourPointsix",
          textContent: [
            {
              text:
                "6. Screw thread is on the material which rigidity is less than or equal to copper. ",
              style: "font-weight: bold;"
            },
            {
              text: "Enter the number of each condition.",
              style: ""
            }
          ],
          calOneText: "X1 for minor irritation",
          calTwoText: "X2 for moderate irritation",
          calThreeText: "X3 for significant irritation",
          x1: "condition461",
          x2: "condition462",
          x3: "condition463",
          comment: "comment46"
        }
      ],
      cableRoutingTable: [
        {
          text:
            "A) Number of cables where Routing is not provided or indicated in any manner... Flat cables do not have fold marks.",
          model: "condition47A",
          textStyle: ""
        },
        {
          text: "B) Routing does not provide enough space for operator.",
          model: "condition47B",
          textStyle: ""
        },
        {
          text: "C) Routing is very close to sharp edge.",
          model: "condition47C",
          textStyle: ""
        },
        {
          text:
            "D) Cable blocks or interfere with the flow of air. Need checked by thermal engineer",
          model: "condition47D",
          textStyle: ""
        },
        {
          text: "E) Cable strain is to great or interferes with other cables. ",
          model: "condition47E",
          textStyle: ""
        },
        {
          text:
            "F) Cable has additional strain at the connector or strain relief's are not provided where needed. ",
          model: "condition47F",
          textStyle: ""
        },
        {
          text:
            "G) The cable routing should not lose it's shape when open/close chassis cover 30 times.",
          model: "condition47G",
          textStyle: ""
        },
        {
          text:
            "I)  Cable lengths are too short or too long. (Consideration made for convergence).",
          model: "condition47I",
          textStyle: ""
        },
        {
          text:
            "j) Audio, video, high speed and power cable can't be parallel, the space must be more than 10cm except having shield layer.",
          model: "condition47j",
          textStyle: ""
        },
        {
          text: "k) AC 220 cable must have shield layer.",
          model: "condition47k",
          textStyle: ""
        },
        {
          text:
            "l) All cable connectors should have hook, if hasn't, plug force should larger than 1KGF at least & meet it's force spec except having \"tail\" solution",
          model: "condition47l",
          textStyle: ""
        },
        {
          text: "j) Without blank cable connectors.",
          model: "condition47j2",
          textStyle: ""
        },
        {
          text:
            "k) Cable routing can't be higher than plane of metal shield,Otherwise,Should use tape to paste it.",
          model: "condition47k2",
          textStyle: ""
        },
        {
          text:
            "l) 5V/12V cable should be wrapped by addition protection layer.",
          model: "condition47l2",
          textStyle: ""
        },
        {
          text: "m) Two independent cables can't cross together.",
          model: "condition47m",
          textStyle: ""
        },
        {
          text: "n) Any part can't touch cable tightly.",
          model: "condition47n",
          textStyle: ""
        },
        {
          text: "o) Cable routing away from Fan.",
          model: "condition47o",
          textStyle: ""
        },
        {
          text:
            "p) Cable routing can't be seen from chassis outside or can't impact customer satisification at least.",
          model: "condition47p",
          textStyle: ""
        },
        {
          text:
            "q) Cable routing away from internal speakers (1CM distance at least). ",
          model: "condition47q",
          textStyle: ""
        },
        {
          text:
            "r) Avoid cable routing go throgh backside of motherboard, if necessary, must avoid pin or sharp part.",
          model: "condition47r",
          textStyle: ""
        },
        {
          text:
            "s) Avoid using extending cable.(One cabel is made of two independent cables)",
          model: "condition47s",
          textStyle: ""
        },
        {
          text:
            "t) Cable routing can be changed/cabel connectors can't  have additional force during assembly/disassembly. ",
          model: "condition47t",
          textStyle: ""
        },
        {
          text:
            "u)  Make sure all the cables has been fixed well,and no risk to be broken when installing the screws,parts,other mechanical components.",
          model: "condition47u",
          textStyle: ""
        },
        {
          text:
            "v) Check if the tiny,flat  cable(such as FFC,FPC) connection have the cleary mark to make sure the cable has been fixed well",
          model: "condition47v",
          textStyle: ""
        }
      ],
      HDDHandlingData: [
        {
          title:
            "a)  Verify the shock and impact to HDD during assembly. Verify the shock and impact to HDD during installation other parts.",
          calOneText: "number for minor irritation",
          calTwoText: "number for moderate irritation",
          calThreeText: "Number that stops manufacturing assembly",
          calOne: "condition8a1",
          calTwo: "condition8a2",
          calThree: "condition8a3"
        },
        {
          title:
            "b)   Has no cushion for protection HDD.(e.g HDD plastic shield)",
          calOneText: "number for minor irritation",
          calTwoText: "number for moderate irritation",
          calThreeText: "Number that stops manufacturing assembly",
          calOne: "condition8b1",
          calTwo: "condition8b2",
          calThree: "condition8b3"
        },
        {
          title:
            "b)   Has no resonance of HDD when power on machine.",
          calOneText: "number for minor irritation",
          calTwoText: "number for moderate irritation",
          calThreeText: "Number that stops manufacturing assembly",
          calOne: "condition8B1",
          calTwo: "condition8B2",
          calThree: "condition8B3"
        },
      ]
    };
  }
};
</script>

<style lang="less">
.sectionFour {
  margin-top: 50px;
  .CableRoutingTable {
    margin-top: 20px;
  }
  .HDDHandling {
    margin-top: 20px;
  }
}
</style>