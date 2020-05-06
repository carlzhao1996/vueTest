<template>
  <div>
    <div class="levelone" style="margin-top:30px;">
      <el-row>
        <el-col :span="5">
          <h3>4. Label Checking</h3>
        </el-col>
        <el-col :span="8" style="padding-left:50px;">
          <h3>SUB TOTAL= {{15}}</h3>
        </el-col>
      </el-row>
      <el-form>
        <el-row>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel4Point1}}</span>
            </el-form-item>
          </el-col>
          <el-col :span="13" style="padding-left:50px;">
            <h4>1 Carton box has enough space to stick carton label(100*160mm),the biggest Geo label(100*100mm) and Japan warrenty card(265*110mm)</h4>
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
              v-model="condition411"
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
              v-model="condition412"
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
              v-model="condition413"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark41"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="leveltwo" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel4Point2}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>2 If label for carton box will cover pre-printing characters and pictures.</h4>
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
              v-model="condition421"
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
              v-model="condition422"
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
              v-model="condition423"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark42"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelthree" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel4Point3}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>3 If has at least 8cm space to stick carton box seal tape?</h4>
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
              v-model="condition431"
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
              v-model="condition432"
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
              v-model="condition433"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark43"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfour" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel4Point4}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>4 Keep label mark for carton label?</h4>
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
              v-model="condition441"
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
              v-model="condition442"
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
              v-model="condition443"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark44"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="levelfive" style="margin-top:40px;">
      <el-row>
        <el-form>
          <el-col :span="5">
            <el-form-item label="Checks:">
              <span>{{packageCheckLevel4Point5}}</span>
            </el-form-item>
          </el-col>
        </el-form>
        <el-col :span="13" style="padding-left:50px;">
          <h4>5 Any potential for label sticking?</h4>
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
              v-model="condition451"
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
              v-model="condition452"
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
              v-model="condition453"
              :min="0"
            ></el-input-number>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="20" style="padding-left:40px;padding-top:20px;">
          <el-input type="textarea" autosize placeholder="Remark" v-model="remark45"></el-input>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageCheckLevel4Point1: 0,
      condition411: 0,
      condition412: 0,
      condition413: 0,
      remark41: "",

      packageCheckLevel4Point2: 0,
      condition421: 0,
      condition422: 0,
      condition423: 0,
      remark42: "",

      packageCheckLevel4Point3: 0,
      condition431: 0,
      condition432: 0,
      condition433: 0,
      remark43: "",

      packageCheckLevel4Point4: 0,
      condition441: 0,
      condition442: 0,
      condition443: 0,
      remark44: "",

      packageCheckLevel4Point5: 0,
      condition451: 0,
      condition452: 0,
      condition453: 0,
      remark45: "",

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