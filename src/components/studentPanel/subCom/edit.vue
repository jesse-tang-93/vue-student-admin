<template>
  <el-dialog
    :title="dialogType === 'add' ? '新增' : '编辑'"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="学生姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="form.sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="年龄">
        <el-input v-model="form.age"></el-input>
      </el-form-item>
      <el-form-item label="年级">
        <el-input v-model="form.grade"></el-input>
      </el-form-item>
      <el-form-item label="班主任">
        <el-input v-model="form.teacher"></el-input>
      </el-form-item>
    </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('toggleDialogVisible')">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: false,
    },
    dialogType: {
      type: String,
      default: "add",
    },
  },
  // 组件数据部分
  data() {
    return {
      form: {
        name: "",
        sex: "",
        age: "",
        grade: "",
        teacher: "",
      },
    };
  },

  watch: {},
  computed: {},
  // 组件生命周期
  beforeCreate() {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  // 组件内方法
  methods: {
    onSubmit() {
      console.log("submit!");
    },
    handleClose() {
      this.$emit("toggleDialogVisible");
    },
  },
};
</script>
