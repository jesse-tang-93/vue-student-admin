<template>
  <el-container style="height:100%;">
    <el-aside width="200px">
      <!-- left menu -->
      <el-menu
        default-active="1"
        class="el-menu-vertical-demo"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="height:100%;"
      >
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">学生名单列表</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <!-- right container -->
    <el-container>
      <el-header style="line-height:60px;">
        {{ getGreetings }}，面试官~
      </el-header>
      <!-- right main-content -->
      <el-main>
        <StudentPanel />
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import StudentPanel from "../studentPanel";
export default {
  components: {
    StudentPanel,
  },
  // 组件数据部分
  data() {
    return {};
  },
  watch: {},
  computed: {
    // 获取初始问候语
    getGreetings() {
      const nowHour = new Date().getHours();
      return this.getQuantum(nowHour);
    },
  },
  // 组件内方法
  methods: {
    // 获取当前时间段
    getQuantum(nums) {
      let result = "";
      if (nums > 1 && nums < 6) {
        result = "凌晨好";
      } else if (nums > 6 && nums < 10) {
        result = "早上好";
      } else if (nums > 10 && nums < 14) {
        result = "中午好";
      } else if (nums > 14 && nums < 18) {
        result = "下午好";
      } else {
        result = "晚上好";
      }
      return result;
    },
  },
};
</script>
