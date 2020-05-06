<template>
  <div>
    <div class="levelone" style="margin-top:30px;">
      <el-row>
        <el-col :span="5">
            <h3>1.Packing Size Checking</h3>
        </el-col>
        <el-col :span="8" style="padding-left:50px;">
          <h3>SUB TOTAL= {{40}}</h3>
        </el-col>
      </el-row>
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point1}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:50px;">
            <h4>1 If the new pallet SOP size can fit in standard pallet size of 1170*970mm.</h4>
            <p>Mark: To get the carton width and length data by calculate the pallet SOP.</p>
            <p
              style="background:yellow;"
            >Thinking the width of cap size:30mm, The original pallet size is 1200*1000mm</p>
            <p>Enter the number of each condition.</p>
          </el-col>
        </el-row>
      </el-form>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 for more than 30mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition111"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X2 for more than 60mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition112"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X3 for more than 90mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition113"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark11"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="leveltwo" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point2}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>2 If the new pallet size can fit in standard pallet height of 1038mm(Can't over this size)</h4>
          <p>Mark: To get the carton width and length data by calculate the pallet SOP.</p>
          <p>Standard height can't over 1160mm,Thinking 115mm height for pallet heigth,and 20mm for two caps. So the Max size is 1038mm.</p>
          <p>Enter the number of each condition.</p>
        </el-col>
      </el-row>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 for more than 60mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition121"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X2 for more than 120mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition122"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X3 for more than 180mm tolerance.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition123"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark12"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelthree" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point3}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>3 If the new packing density more than 1.0.</h4>
          <p>Density formular=gross weight(kg)/(longth*width*height with cm/6000)</p>
          <p>For example: Thinkpad T440p,Gross weight:3.3 Kg,Carton box size:0.388*0.29*0.126m.</p>
          <p>So the Density:3.3/(38.8*29*12.6)/6000)=1.397</p>
          <p>Gross Weight:machine+accessory+carton box</p>
          <p>Current project density=1.397</p>
          <p>Enter the number of each condition.</p>
        </el-col>
      </el-row>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="6">
          <div>
            <p>X1 for 1.1-1.2</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition131"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="6">
          <div>
            <p>X2 for 1.0-1.1</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition132"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="5">
          <div>
            <p>X3 for 0.9-1</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition133"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="5">
          <div>
            <p>X4 for less than 0.9</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition134"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark13"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfour" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point4}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>4 If the new packing density is better than previous same size project.</h4>
          <p>Current project density= 1.397</p>
          <p>previous project density=1.2</p>
          <p>Calculate the Ratio=Current Project Density/Previous Project Density={{1.16}}</p>
        </el-col>
      </el-row>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 for 1-1.1</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition141"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X2 for 0.9-1</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition142"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X3 for less than 0.9</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition143"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark12"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfive" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point5}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>5 If this project has bulk pack operation with "N in 1" packing,If the quantity(N) meet the Maximum.</h4>
          <p>For example:DT Tiny had one unit per carton box,After improvement,Changed into 2 units per carton box(2 in 1) for bulk pack.</p>
          <p>In order to utilize the packing/pallet space.</p>
        </el-col>
      </el-row>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 still 1-2 units can be added.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition151"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X2 still 3-5 units can be added.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition152"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X3 still more than 6 units can be added.</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition153"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark15"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelsix" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel1Point6}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>6 If the packing sample has such condition that represent too large or narrow.</h4>
          <p>Enter the number of each condition.</p>
        </el-col>
      </el-row>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 for minor irritation</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition161"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X2 for moderate irritation</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition162"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
        <el-col :span="8">
          <div>
            <p>X3 for significant irritation</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition163"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark16"></el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageCheckLevel1Point1: 0,
      condition111: 0,
      condition112: 0,
      condition113: 0,
      remark11: "",

      packageCheckLevel1Point2: 0,
      condition121: 0,
      condition122: 0,
      condition123: 0,
      remark12: "",

      packageCheckLevel1Point3: 0,
      condition131: 0,
      condition132: 0,
      condition133: 0,
      condition134: 0,
      remark13: "",

      packageCheckLevel1Point4:0,
      condition141: 0,
      condition142: 0,
      condition143: 0,
      remark14:'',

      packageCheckLevel1Point5:0,
      condition151: 0,
      condition152: 0,
      condition153: 0,
      remark15:'',

      packageCheckLevel1Point6:0,
      condition161: 0,
      condition162: 0,
      condition163: 0,
      remark16:'',
    };
  },
  methods: {
    calculate() {
      this.packageCheckLevel1Point1 =
        this.condition111 * 1 + this.condition112 * 2 + this.condition113 * 3;
      this.packageCheckLevel1Point2 =
        this.condition121 * 1 + this.condition122 * 2 + this.condition123 * 3;
    }
  }
};
</script>

<style lang="less">
</style>