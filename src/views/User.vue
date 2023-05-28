<template>
  <div class="manage">
    <!-- 弹窗 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <el-form ref="form" :inline="true" :rules="rules" :model="form" label-width="80px" >
        <el-form-item label="姓名" prop="name">
          <el-input placeholder="请输入姓名" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input placeholder="请输入年龄" v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex" >
         <el-select v-model="form.sex" placeholder="请选择">
          <el-option label="男" :value="1"></el-option>
          <el-option label="女" :value="0"></el-option>
         </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">
          <el-date-picker
            v-model="form.birth"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-DD">
          </el-date-picker>
        </el-form-item>
        <el-form-item label="地址" prop="addr">
          <el-input placeholder="请输入地址" v-model="form.addr"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="subMit">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 新增 -->
    <el-button type="primary"  @click="stateChange(0)">+ 新增</el-button>
    <!-- 表格 -->
    <el-table
      height="90%"
      :data="tableData"
      style="width: 100%">

      <el-table-column
        prop="name"
        label="姓名"
        width="130">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width="130">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{ scope.row.sex == 1 ? '男' : '女' }}</span>
          </template>
      </el-table-column>
      <el-table-column
        prop="age"
        label="年龄"
        width="130">
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="addr"
        label="地址">
      </el-table-column>

      <el-table-column
        prop=""
        label="操作">
        <template slot-scope="scope">
            <el-button size="mini" @click="stateChange(1,scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">删除</el-button>
        </template>
      </el-table-column>

    </el-table>
    <div>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script> 
import {getUser,addUser,editUser,delUser} from '../api'
export default {
  data() {
    return {
      dialogVisible:false,
      //表单数据
      form:{
        name:'',
        age:'',
        sex:'',
        birth:'',
        addr:''
      },
      //表单校验
      rules:{
        name:[
        { required: true, message: '请输入姓名', trigger: 'blur' },
        ],
        age:[
        { required: true, message: '请输入年龄', trigger: 'blur' },
        ],
        sex:[
        { required: true, message: '请选择性别', trigger: 'blur' },
        ],
        birth:[
        { required: true, message: '请选择出生日期', trigger: 'blur' },
        ],
        addr:[
        { required: true, message: '请输入地址', trigger: 'blur' },
        ],
      },
      //列表数据
      tableData:[],
      modeltype:0,//0代表新增  1代表编辑
      //数据条数
      total:0 
    }
  },
  methods:{
    //提交
    subMit(){
      //表单校验
      this.$refs.form.validate((item)=>{ // console.log(item)  //返回bool值
      if(item){
        console.log(this.form)
        //新增和编辑是两个状态,都是一个弹窗.我们进行区分
        if(this.modeltype===0){
          //新增后,要重新的插入列表数据,相当于刷新页面
          //将数据插入到数据库
          addUser(this.form).then(()=>{
            //更新列表
            this.getList()
          })
        }else{
          editUser(this.form).then(()=>{
              //更新列表
            this.getList()
          })
        }
        this.handleClose()
      }
     })

    },

    //清空表单函数
    handleClose(){
      this.$refs.form.resetFields()
      //关闭弹窗
      this.dialogVisible = false
    },
   //状态改变
    stateChange(condition,row){
      //打开弹窗
      this.dialogVisible = true
      this.modeltype=condition

      if(condition===1){
        //此时为编辑,修改数据库中的数据,同时在编辑时,表单中还要显示现有的数据,即this.form
        //深拷贝
        this.form=JSON.parse(JSON.stringify(row))
      }
    },

    //删除数据
    handleDelete(row){
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          delUser({id:row.id}).then(()=>{
            this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
    },


    //获取列表数据
    getList(){
     getUser().then(({data})=>{
      this.tableData=data.list
      console.log(data)
      this.total=data.count
    })
    }
  },

  mounted(){
    this.getList()
  }
}
</script>

<style lang="less" scoped>
.manage{
  height: 500px;
}
</style>