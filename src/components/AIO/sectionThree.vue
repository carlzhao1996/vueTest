<template>
  <div>
    <div class="levelone" style="margin-top:30px;">
      <el-row>
        <el-col :span="5">
          <h3>3. Packing Operation Checking</h3>
        </el-col>
        <el-col :span="8" style="padding-left:50px;">
          <h3>SUB TOTAL= {{20}}</h3>
        </el-col>
      </el-row>
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel3Point1}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:50px;">
            <h4>1 Mfg site need special fixture or training to have packing?</h4>
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
              v-model="condition311"
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
              v-model="condition312"
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
              v-model="condition313"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark31"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="leveltwo" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel3Point2}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>2 If packing time got increased,Compare to previous project?</h4>
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
              v-model="condition321"
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
              v-model="condition322"
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
              v-model="condition323"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark32"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelthree" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel3Point3}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>3 Any part without barcode,Will cause quality risk?</h4>
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
              v-model="condition331"
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
              v-model="condition332"
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
              v-model="condition333"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark33"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfour" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel3Point4}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>4 Any operation without fool proof?</h4>
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
              v-model="condition341"
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
              v-model="condition342"
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
              v-model="condition343"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark34"></el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageCheckLevel3Point1: 0,
      condition311: 0,
      condition312: 0,
      condition313: 0,
      remark31: "",

      packageCheckLevel3Point2: 0,
      condition321: 0,
      condition322: 0,
      condition323: 0,
      remark32: "",

      packageCheckLevel3Point3: 0,
      condition331: 0,
      condition332: 0,
      condition333: 0,
      remark33: "",

      packageCheckLevel3Point4: 0,
      condition341: 0,
      condition342: 0,
      condition343: 0,
      remark34: ""
    };
  },
  methods: {
    calculate(){

    }
  },
};
</script>

<style lang="less">
</style>