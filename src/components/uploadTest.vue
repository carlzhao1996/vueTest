<template>
  <div>
    <el-upload
      ref="upload"
      :before-upload="beforeUpload"
      :headers="getHeader()"
      :on-success="SuccessUpload"
      :on-change="handleChange"
      :on-error="uploadError"
      action="https://jsonplaceholder.typicode.com/posts/"
    >
      <el-button type="primary">点击上传</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  methods: {
    beforeUpload() {
      return file => {
        console.log(file);
      };
    },
    handleChange(file){
        console.log(file)
    },
    getHeader(){
        return {
        accesstoken: "test",
        appName: "testapp"
      }
    },
    SuccessUpload(res) {
        console.log("success")
        console.log(res)
    },
    uploadError(err){
        console.error(err)
    },
    // Copy from /ec/ec-detail
    postDownloadFile(url, data, existFileName) {
      Jw.showLocalLoading();
      axios
        .post(url, data, {
          headers: {
            "content-type": "application/json",
            accesstoken: cookie.getAuth(),
            appName: Jw.appName
          },
          responseType: "blob"
        })
        .then(response => {
          //console.log(response);
          if (response.headers.state == -1) {
            Jw.hideLocalLoading();
            return this.$error("数据量过大无法下载，数据量总数为 "+response.headers.count)
          }
          let fileUrl = "";
          let fileData = response.data;
          let downloadA = document.createElement("a");
          let fileName, contentDisposition;

          Jw.hideLocalLoading();
          if (_.isEmpty(existFileName)) {
            contentDisposition = response.headers["content-disposition"] || "";
            fileName = contentDisposition.match(/;filename=[^]*/);

            if (_.isArray(fileName)) {
              fileName = fileName[0];
              fileName = window.decodeURI(fileName);
              fileName = fileName.replace(";filename=", "");
            } else {
              return this.$error(Jw.mainView.langs["platform.file.exist"])
              // return Promise.reject({
              //   msg: Jw.mainView.langs["platform.file.exist"]
              // });
            }
          } else {
            fileName = existFileName;
          }

          fileData = new Blob([fileData]);
          if ("download" in downloadA) {
            //Chrome
            fileUrl = window.URL.createObjectURL(fileData);
            downloadA.setAttribute("href", fileUrl);
            downloadA.setAttribute("download", fileName);
            document.body.appendChild(downloadA);
            downloadA.click();
            window.URL.revokeObjectURL(fileUrl);
            document.body.removeChild(downloadA);
          } else {
            //IE10+
            navigator.msSaveBlob(fileData, fileName);
          }
        })
        .catch(error => {
          console.log(error)
          Jw.hideLocalLoading();
          Jw.Vue.prototype.$error(
            error.msg || Jw.mainView.langs["platform.common.downloadFail"]
          );
        });
    },
  }
};
</script>

<style lang="less">
</style>