<template>
  <div style="text-align:left;">
    <!-- add new item -->
    <el-button type="primary" style="margin-bottom:10px;" @click="addStudent">
      新增学生
    </el-button>
    <!-- table content -->
    <el-table
      :data="studentData"
      border
      style="width: 100%"
      v-loading="tableLoading"
    >
      <el-table-column fixed prop="name" label="姓名" width="220">
      </el-table-column>
      <el-table-column prop="sex" label="性别" width="120"> </el-table-column>
      <el-table-column prop="age" label="年龄" width="120"> </el-table-column>
      <el-table-column prop="grade" label="年级" width="120"> </el-table-column>
      <el-table-column prop="teacher" label="班主任"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="editItem(scope.row)" type="text" size="small"
            >编辑</el-button
          >
          <el-button type="text" size="small" @click="deleteItem(scope.row)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 新增和编辑 -->
    <Edit
      :dialogType="dialogType"
      :dialogVisible="dialogVisible"
      @toggleDialogVisible="toggleDialogVisible"
      @getList="getList"
    />
  </div>
</template>
<script>
import Edit from "./subCom/edit";
// 自定义api请求baseUrl
const apiUrl = process.env.VUE_APP_BASE_URL;
export default {
  components: {
    Edit,
  },
  // 组件数据部分
  data() {
    return {
      tableLoading: false, // 数据加载loading状态
      dialogType: "add", // 弹框类型 edit-编辑 add-新增
      dialogVisible: false,
      studentData: [],
    };
  },
  watch: {},
  computed: {},
  // 组件生命周期
  beforeCreate() {},
  created() {},
  mounted() {
    this.getList();
  },
  beforeDestroy() {},
  // 组件内方法
  methods: {
    getList() {
      this.tableLoading = true;
      fetch(`${apiUrl}/studentList`)
        .then(async (res) => {
          if (res.ok) {
            return res.json();
          }
        })
        .then((data) => {
          console.log(data);
          this.studentData = data;
          this.tableLoading = false;
        })
        .catch((e) => {
          console.log(e);
          this.tableLoading = false;
        });
    },
    // 编辑弹框按钮与隐藏
    toggleDialogVisible() {
      console.log(11);
      this.dialogVisible = !this.dialogVisible;
    },
    // 编辑
    editItem(row) {
      this.dialogType = "edit";
      this.toggleDialogVisible();
      console.log(row);
    },
    // 删除某个学生
    deleteItem({ id }) {
      fetch(`${apiUrl}/studentList/${id}`, {
        method: "DELETE",
      }).then(async (res) => {
        if (res.ok) {
          this.$message({
            message: "删除成功",
            type: "success",
          });
          this.getList();
        }
      });
    },
    // 新增学生
    addStudent() {
      this.dialogType = "add";
      this.toggleDialogVisible();
    },
  },
};
</script>
