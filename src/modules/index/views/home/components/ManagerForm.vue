<template>
  <el-form ref="form" :model="form" label-width="120px" size="mini">
    <div class="border-line">
      <el-form-item label="邀请拼团">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleGroupSuccess"
        >
          <img v-if="form.invite_group.picture" :src="form.invite_group.picture" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="邀请拼团">
        <el-input v-model="form.invite_group.text"></el-input>
      </el-form-item>
    </div>

    <div class="border-line">
      <el-form-item label="我-邀请好友">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleInviteFriendSuccess"
        >
          <img
            v-if="form.me_invite_friend.picture"
            :src="form.me_invite_friend.picture"
            class="avatar"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="我-邀请好友">
        <el-input v-model="form.me_invite_friend.input_text"></el-input>
      </el-form-item>

      <el-form-item label="我-邀请好友-链接">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleInviteFriendLinkSuccess"
        >
          <img
            v-if="form.me_invite_friend.invite_link.picture"
            :src="form.me_invite_friend.invite_link.picture"
            class="avatar"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="我-邀请好友-链接">
        <el-input v-model="form.me_invite_friend.invite_link.text"></el-input>
      </el-form-item>
      <el-form-item label="我-邀请好友-说明">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleInviteFriendInfoSuccess"
        >
          <img
            v-if="form.me_invite_friend.invite_info.picture"
            :src="form.me_invite_friend.invite_info.picture"
            class="avatar"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="我-邀请好友-说明">
        <el-input v-model="form.me_invite_friend.invite_info.text"></el-input>
      </el-form-item>
    </div>

    <div class="border-line">
      <el-form-item label="零元抢规则">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleruleZeroSuccess"
        >
          <img v-if="form.rule.zero_picture" :src="form.rule.zero_picture" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="Common规则">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleruleCommSuccess"
        >
          <img v-if="form.rule.common_picture" :src="form.rule.common_picture" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="奖励规则">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handleruleAwardSuccess"
        >
          <img v-if="form.awards.picture" :src="form.awards.picture" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
    </div>

    <div class="border-line">
      <el-form-item label="首页-零元背景">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlehomeZeroBgSuccess"
        >
          <img v-if="form.zerobg" :src="form.zerobg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="首页-超值精选图">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlehomeActiveBigSuccess"
        >
          <img
            v-if="form.home_activity_big_picture"
            :src="form.home_activity_big_picture"
            class="avatar"
          >
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="首页-3D-special">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlehome3DSepcialSuccess"
        >
          <img v-if="form.threed_spectial" :src="form.threed_spectial" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="首页-3D-header">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlehome3DHeaderSuccess"
        >
          <img v-if="form.threed_header" :src="form.threed_header" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="首页-banner">
        <el-upload
          class="avatar-uploader"
          :action="uploadUrl"
          :show-file-list="false"
          :on-success="handlehomeBannerSuccess"
        >
          <img v-if="form.banner" :src="form.banner" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </el-form-item>
      <el-form-item label="首页-零元抢label">
        <el-input v-model="form.zerolabel"></el-input>
      </el-form-item>
    </div>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
// import {baseUrl}  from "@/util/api"

export default {
  data() {
    return {
      uploadUrl:'/api/upload/',
      form: {
        invite_group: {
          picture: "",
          text: ""
        },
        me_invite_friend: {
          input_text: "",
          picture: "",
          invite_link: {
            picture: "",
            text: ""
          },
          invite_info: {
            picture: "",
            text: ""
          }
        },
        rule: {
          zero_picture: "",
          common_picture: ""
        },
        awards: {
          picture: ""
        },
        zerobg: "",
        home_activity_big_picture: "",
        threed_spectial: "",
        threed_header: "",
        banner: "",
        zerolabel: "7D抢"
      }
    };
  },
  methods: {
    onSubmit() {
      // console.log("form data ", JSON.stringify(this.form));
    },
    handleGroupSuccess(res) {
      this.form.invite_group.picture = res.imgUrl;
    },
    handleInviteFriendSuccess(res) {
      this.form.me_invite_friend.picture = res.imgUrl;
    },
    handleInviteFriendLinkSuccess(res) {
      this.form.me_invite_friend.invite_link.picture = res.imgUrl;
    },
    handleInviteFriendInfoSuccess(res) {
      this.form.me_invite_friend.invite_info.picture = res.imgUrl;
    },

    handleruleZeroSuccess(res) {
      this.form.rule.zero_picture = res.imgUrl;
    },
    handleruleCommSuccess(res) {
      this.form.rule.common_picture = res.imgUrl;
    },
    handleruleAwardSuccess(res) {
      this.form.awards.picture = res.imgUrl;
    },
    handlehomeZeroBgSuccess(res) {
      this.form.zerobg = res.imgUrl;
    },
    handlehomeActiveBigSuccess(res) {
      this.form.home_activity_big_picture = res.imgUrl;
    },
    handlehome3DSepcialSuccess(res) {
      this.form.threed_spectial = res.imgUrl;
    },
    handlehome3DHeaderSuccess(res) {
      this.form.threed_header = res.imgUrl;
    },
    handlehomeBannerSuccess(res) {
      this.form.banner = res.imgUrl;
    }
  }
};
</script>

<style>
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
