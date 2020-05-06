<template>
  <div class="boxLevelAssembly">
    <div class="blaTitle">
      <h3>1.0 BOX LEVEL ASSEMBLY DIFFICULTY</h3>
    </div>
    <div class="blaContent">
      <div v-for="(item,index) in content1" :key="index">
        <el-form>
          <el-row>
            <el-col :span="5">
              <el-form-item label="Deductions:">
                <span>{{$data[item.deductions]}}</span>
              </el-form-item>
            </el-col>
            <el-col :span="13" style="padding-left:20px;">
              <p v-for="(i,j) in item.textContent" :key="j" :style="i.style">{{i.text}}</p>
            </el-col>
          </el-row>
        </el-form>
        <el-row style="text-align:center; padding-top:20px;">
          <el-col :span="8" v-for="(k,l) in item.calculatorContent" :key="l">
            <div>
              <p>{{k.text}}</p>
              <el-input-number
                size="small"
                @change="calculateData"
                v-model="$data[k.model]"
                :min="0"
              ></el-input-number>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="20" style="padding-top:20px;">
            <el-input type="textarea" autosize placeholder="Remark" v-model="$data[item.Comments]"></el-input>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="blaContent2">
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Deductions:">
              <span>{{deductions16}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:20px;">
            <p>
              6. Inability to remove the key commodities: planar, power supply,
              DASD, etc.; without removal of another part (this includes covers),and the their means of attachment.
            </p>
            <p>Note: Cable unplugging and cage movement is "free" and are not a penalty item</p>
          </el-col>
        </el-row>
      </el-form>
      <div class="formContent" v-for="(item,key) in content2" :key="key" style="padding-top:30px;">
        <span style="font-weight:bold;">{{item.title}} {{$data[item.titleModel]}}</span>
        <div v-for="(i,j) in item.contentList" :key="j">
          <el-row style="padding-top:20px;">
            <el-col :span="5" style="padding-top:20px;">
              <span>{{$data[i.resultModel]}}</span>
            </el-col>
            <el-col :span="13" style="padding-left:20px;">
              <p>{{i.text}}</p>
            </el-col>
          </el-row>
          <el-row style="text-align:center;">
            <el-col :span="8">
              <div>
                <p>{{i.calculatorText}}</p>
                <el-input-number size="small" v-model="$data[i.calculatorModel]" :min="0"></el-input-number>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content1: [
        {
          deductions: "deductions11",
          textContent: [
            {
              text:
                "1.  A)  Number of Torque settings by the number of fastners.",
              style: ""
            }
          ],
          calculatorContent: [
            {
              text: "Fastener tools required",
              model: "calculator111"
            },
            {
              text: "Number of Fastener",
              model: "calculator112"
            },
            {
              text:
                'How many kind of Head Size of "Torque Drivers" are required more than 2',
              model: "calculator113"
            }
          ],
          Comments: "comments11"
        },
        {
          deductions: "deductions12",
          textContent: [
            {
              text:
                "2.  Inadequate finger / tool space to install / remove devices, cabling, fasteners, or labeling.",
              style: ""
            }
          ],
          calculatorContent: [
            {
              text: "1 Minor",
              model: "calculator121"
            },
            {
              text: "2 Moderate",
              model: "calculator122"
            },
            {
              text: "3 Significant",
              model: "calculator123"
            }
          ],
          Comments: "comments12"
        },
        {
          deductions: "deductions13",
          textContent: [
            {
              text:
                "3. Additional tools that are required that are NOT fastener tools such as locating tools, fixtures, label tools that aid assembly.",
              style: ""
            }
          ],
          calculatorContent: [
            {
              text: "Number of non fastner tools required",
              model: "calculator131"
            }
          ],
          Comments: "comments13"
        },
        {
          deductions: "deductions14",
          textContent: [
            {
              text:
                "4. Insertion / removal forces for devices, cables, and mechanical parts exceed the capacity of the production worker to perform without",
              style: ""
            },
            {
              text:
                "fatigue, injury, or introducing damage.  (When performed on a repetitive basis)",
              style: ""
            }
          ],
          calculatorContent: [
            {
              text: "Number of non fastner tools required",
              model: "calculator141"
            }
          ],
          Comments: "comments14"
        },
        {
          deductions: "deductions15",
          textContent: [
            {
              text:
                "5.  Assembly of any parts that can be enhanced by providing lead in's. chamfers, locating guides, or demensional changes",
              style: ""
            },
            {
              text:
                "For example: two locating column of planar for better assembly.",
              style: "color:blue;"
            }
          ],
          calculatorContent: [
            {
              text: "Number of conditions",
              model: "calculator151"
            }
          ],
          Comments: "comments15"
        }
      ],
      plannerRemoval:0,
      plannerRemovalResult1:0,
      plannerRemoval1:0,
      content2:[
          {
              title:"Planner Removal:",
              titleModel:"plannerRemoval",
              contentList:[
                  {
                      text:'1st Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval1',
                      resultModel:'plannerRemovalResult1'
                  },
                  {
                      text:'2nd Key component ___________  requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval2',
                      resultModel:'plannerRemovalResult2'
                  },
                  {
                      text:'3rd Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval3',
                      resultModel:'plannerRemovalResult3'
                  },
                  {
                      text:'4th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval4',
                      resultModel:'plannerRemovalResult4'
                  },
                  {
                      text:'5th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval5',
                      resultModel:'plannerRemovalResult5'
                  },
                  {
                      text:'6th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval6',
                      resultModel:'plannerRemovalResult6'
                  },
              ]
          },
          {
              title:"Power supply Removal:",
              titleModel:"psr",
              contentList:[
                  {
                      text:'1st Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr1',
                      resultModel:'psrResult1'
                  },
                  {
                      text:'2nd Key component ___________  requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr2',
                      resultModel:'psrResult2'
                  },
                  {
                      text:'3rd Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr3',
                      resultModel:'psrResult3'
                  },
                  {
                      text:'4th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr4',
                      resultModel:'psrResult4'
                  },
                  {
                      text:'5th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr5',
                      resultModel:'psrResult5'
                  },
                  {
                      text:'6th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'psr6',
                      resultModel:'psrResult6'
                  },
              ]
          },
          {
              title:"HDD:",
              titleModel:"hdd",
              contentList:[
                  {
                      text:'1st Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'hdd1',
                      resultModel:'hddResult1'
                  },
                  {
                      text:'2nd Key component ___________  requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval2',
                      resultModel:'plannerRemovalResult2'
                  },
                  {
                      text:'3rd Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval3',
                      resultModel:'plannerRemovalResult3'
                  },
                  {
                      text:'4th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval4',
                      resultModel:'plannerRemovalResult4'
                  },
                  {
                      text:'5th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval5',
                      resultModel:'plannerRemovalResult5'
                  },
                  {
                      text:'6th Key component ___________ requires:',
                      calculatorText:'Number of fastner tools.',
                      calculatorModel:'plannerRemoval6',
                      resultModel:'plannerRemovalResult6'
                  },
              ]
          }
      ]
    };
  }
};
</script>

<style lang="less">
.boxLevelAssembly {
  .blaTitle {
    background: yellow;
  }
}
</style>