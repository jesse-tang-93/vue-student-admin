<template>
  <el-dialog
    :title="dialogType === 'add' ? '新增' : '编辑'"
    :visible.sync="dialogVisible"
    width="30%"
    :before-close="handleClose"
  >
    <!-- form-content -->
    <el-form ref="editForm" :model="form" label-width="80px" :rules="rules">
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
    <!-- btn-group -->
    <span slot="footer" class="dialog-footer">
      <el-button @click="$emit('toggleDialogVisible')">取 消</el-button>
      <el-button type="primary" @click="onSubmit('editForm')">确 定</el-button>
    </span>
  </el-dialog>
</template>
<script>
// 自定义api请求baseUrl
const apiUrl = process.env.VUE_APP_BASE_URL;
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
    editForm: {
      type: Object,
      default: () => {},
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
        id: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入学生姓名", trigger: "blur" },
          { min: 2, max: 5, message: "长度在 2 到 5 个字", trigger: "blur" },
        ],
      },
    };
  },

  watch: {
    editForm: {
      handler(val) {
        if (Object.keys(val).length) {
          Object.assign(this.form, val);
        } else {
          Object.assign(this.form, {
            name: "",
            sex: "",
            age: "",
            grade: "",
            teacher: "",
            id: "",
          });
        }
      },
      deep: true,
      immediate: true,
    },
  },
  computed: {},
  // 组件生命周期
  beforeCreate() {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  // 组件内方法
  methods: {
    onSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          const { id } = this.form;
          if (id) {
            this.submitEdit();
          } else {
            this.submitAdd();
          }
        } else {
          return false;
        }
      });
    },
    submitEdit() {
      let { form } = this;
      fetch(`${apiUrl}/studentList/${form.id}`, {
        method: "PUT",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.ok) {
          this.$message({
            message: "编辑成功",
            type: "success",
          });
          this.handleClose();
          this.$emit("getList");
        }
      });
    },
    // 提交新增学生信息
    submitAdd() {
      let { form } = this;
      fetch(`${apiUrl}/studentList`, {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(async (res) => {
        if (res.ok) {
          this.$message({
            message: "新增成功",
            type: "success",
          });
          this.handleClose();
          this.$emit("getList");
        }
      });
    },
    // 关闭弹框
    handleClose() {
      this.$emit("toggleDialogVisible");
    },
  },
};
</script>
