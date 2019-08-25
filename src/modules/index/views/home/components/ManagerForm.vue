<template>
  <div class="main">
    <el-form ref="form" :model="formData" label-width="120px" size="medium">
      <!-- uploader -->
      <div class="border-line-w">
        <el-form-item label="receipt choose">
          <el-upload
            class="avatar-uploader"
            :action="uploadUrl"
            :show-file-list="false"
            :on-success="handlepicture_taiduSuccess"
          >
            <el-image v-if="formData.picture" :src="formData.picture" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <div class="result" v-html="content"></div>
      </div>
    </el-form>

    <div class="footer">
      <el-button
        type="primary"
        @click="beginRecognition"
        v-loading.fullscreen.lock="fullscreenLoading"
      >recognize</el-button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import Tesseract from "tesseract.js";
import { googleOcr } from "@/api/getData";

export default {
  data() {
    return {
      uploadUrl: "https://api.kuaimayoupin.com/v1/addimg/shop",
      content: "",
      formData: {
        picture: null
      },
      progress: 0,
      fullscreenLoading: false
    };
  },
  computed: {},
  methods: {
    async beginRecognition() {
      this.fullscreenLoading = true;
      // const result = await googleOcr(this.formData.picture);
      googleOcr(this.formData.picture).then(
        result => {
          let text = result.text;
          text = text.replace(/\n/g, "<br/>");
          text = text.replace(/↵/g, "<br/>");
          this.content = text;
          this.fullscreenLoading = false;
        },
        err => {
          this.fullscreenLoading = false;
        }
      );
      return;
      let text = result.text;
      text = text.replace(/\n/g, "<br/>");
      text = text.replace(/↵/g, "<br/>");
      this.content = text;
      this.fullscreenLoading = false;
    },
    handleChange() {},
    handlepicture_taiduSuccess(res, file) {
      const { image_path } = res;
      this.formData.picture = image_path;
    },
    onSubmit() {}
  }
};
</script>

<style>
.footer {
  position: fixed;
  bottom: 20px;
  left: 20px;
  right: 20px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.border-line-w {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px 10px 60px 10px;
  width: 95%;
}

.result {
  width: 100%;
  /* overflow-wrap: break-word; */
}

.border-line {
  border: dashed 1px #e1e1e1;
  margin-bottom: 10px;
  padding: 10px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 80px;
  height: 80px;
  line-height: 80px;
  text-align: center;
}
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
