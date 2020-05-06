<template>
  <div>
    <div class="levelone" style="margin-top:30px;">
      <el-row>
        <el-col :span="5">
          <h3>2. Packing Structure Checking</h3>
        </el-col>
        <el-col :span="8" style="padding-left:50px;">
          <h3>SUB TOTAL= {{25}}</h3>
        </el-col>
      </el-row>
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel2Point1}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:50px;">
            <h4>1 New material cut in.</h4>
            <p>Enter the number of each condition.</p>
          </el-col>
        </el-row>
      </el-form>
      <el-row style="text-align:center; padding-top:20px;">
        <el-col :span="8">
          <div>
            <p>X1 for minor irritation</p>
            <el-input-number
              size="small"
              @change="calculate"
              v-model="condition211"
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
              v-model="condition212"
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
              v-model="condition213"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark21"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="leveltwo" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel2Point2}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>2  If packing material easy to cause warpage.</h4>
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
              v-model="condition221"
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
              v-model="condition222"
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
              v-model="condition223"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark22"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="leveltthree" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel2Point3}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>3 Compare to previous generate project,If the packing structure changed?</h4>
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
              v-model="condition231"
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
              v-model="condition232"
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
              v-model="condition233"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark23"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfour" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel2Point4}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>4 During shipping,If accessories and boxes can't keep original layout.</h4>
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
              v-model="condition241"
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
              v-model="condition242"
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
              v-model="condition243"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark24"></el-input>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return{
        packageCheckLevel2Point1:0,
        condition211:0,
        condition212:0,
        condition213:0,
        remark21:'',

        packageCheckLevel2Point2:0,
        condition221:0,
        condition222:0,
        condition223:0,
        remark22:'',

        packageCheckLevel2Point3:0,
        condition231:0,
        condition232:0,
        condition233:0,
        remark23:'',

        packageCheckLevel2Point4:0,
        condition241:0,
        condition242:0,
        condition243:0,
        remark24:'',
    }
  },
  methods: {
      calculate(){

      }
  },
};
</script>

<style lang="less">
</style>