<template>
  <div>
    <el-row>
      <!-- 左边 -->
      <el-col :span="8" style="padding-right: 10px;">
        <!-- 用户信息 -->
        <el-card class="box-card">
          <div class="user">
            <img src="../assets/image/OIP-C (1).jpg" alt="">
            <div class="userinfo">
              <p class="name">MaYi</p>
              <p class="access">超级管理员</p>
            </div>
          </div>
          <div class="login-info">
            <p>上次登录时间: <span>2023-5-25</span></p>
            <p>上次登录地点: <span>宜宾</span></p>
          </div>
        </el-card>
        <!-- 销售信息 -->
        <el-card style="margin-top: 25px; height: 400px; ">
          <el-table
            :data="tableData"
            style="width: 100%">
            <el-table-column
            v-for="(val,key) in LabelData" :key="key"
              :prop="key"
              :label="val">
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <!-- 右边 -->
      <el-col :span="16" style="padding-left: 10px;">
        <div class="num">
          <el-card v-for="item in countData" :key="item.name"  :body-style="{display:'flex',padding:0}">
            <i class="icon" :class="`el-icon-${item.icon}`"></i>
            <div class="detail">
              <p class="price">￥{{ item.value }}</p>
              <p class="desc">{{ item.name }}</p>
            </div>
          </el-card>
        </div>
      <!-- 折线图 -->
        <el-card style="height: 240px;">
          <!-- 获取该元素 -->
          <div ref="echartsShow" style="height: 240px;">

          </div>
        </el-card>
        <div class="bottomimg">
          <el-card style="height: 220px;" >
            <div  ref="echartsShowTwo"  style="height: 220px;">
            </div>
          </el-card>

          <el-card style="height: 220px;">
            <div  ref="echartsShowThree"  style="height: 200px;"></div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import {getdata} from '../api/index'
import * as echarts from 'echarts'
export default {

data() {
  return {
    tableData: [],
    LabelData:{
        name:'品牌',todayBuy:'今日购买',monthBuy:'本月购买',totalBuy:'总购买'
      },
    countData: [
      {
        name: "今日支付订单",
        value: 1234,
        icon: "success",
        color: "#2ec7c9",
      },
      {
        name: "今日收藏订单",
        value: 210,
        icon: "star-on",
        color: "#ffb980",
      },
      {
        name: "今日未支付订单",
        value: 1234,
        icon: "s-goods",
        color: "#5ab1ef",
      },
      {
        name: "本月支付订单",
        value: 1234,
        icon: "success",
        color: "#2ec7c9",
      },
      {
        name: "本月收藏订单",
        value: 210,
        icon: "star-on",
        color: "#ffb980",
      },
      {
        name: "本月未支付订单",
        value: 1234,
        icon: "s-goods",
        color: "#5ab1ef",
      },
    ],
  
  }
},
mounted(){
//getdata返回一个promise对象

//解构写法
  getdata().then(({data})=>{
    // console.log(data.data);
    const {tableData}=data.data
    this.tableData=tableData
    this.initChart(data.data)
    this.histogram(data.data)
    this.pieChart(data.data)

  })
  
},
methods:{
  //折线图
  initChart(data){
    // 准备数据
    // console.log(data.orderData)
    //时间线
    // console.log(data.orderData.date)

    let options={}

    //获取对象的键名
    const xdata=Object.keys(data.orderData.data[0])
    // console.log(xdata)  //数据的键名

    //提示
    options.tooltip={}

    //x轴数据
    options.xAxis={
      data: data.orderData.date
    }

    //上方的提示
    options.legend={
      data: xdata
    }
    //y轴
    options.yAxis={}

    //各品牌的数据
    options.series=[] //x轴名字的对应的数据,重组
    xdata.forEach(item=>{
      options.series.push({
        name:item,
        type:'line',
        data:data.orderData.data.map(items=>items[item])
      })
    })

    // 基于准备好的dom，初始化echarts实例
    let myeCharts=echarts.init(this.$refs.echartsShow)
    // 绘制图表
    myeCharts.setOption(options)
  },

  //柱状图
  histogram(data){
    //数据,一个数组
    console.log(data.userData)
   
    // console.log( data.userData.map(item=>item.date))
    // console.log(data.userData.map(item=>item.new))
    // console.log(data.userData.map(item=>item.active))
    
    // console.log(MyeCharts)
    let histogramOption={
      legend: {
            // 图例文字颜色
            textStyle: {
              color: "#333",
            },
            // data: ['用户1','用户2']
          },
          grid: {
            left: "20%",
          },
          // 提示框
          tooltip: {
            trigger: "axis",
          },
          xAxis: {
            type: "category", // 类目轴
            data: data.userData.map(item=>item.date),
            axisLine: {
              lineStyle: {
                color: "#17b3a3",
              },
            },
            axisLabel: {
              interval: 0,
              color: "#333",
            },
          },
          yAxis: [
            {
              type: "value",
              axisLine: {
                lineStyle: {
                  color: "#17b3a3",
                },
              },
            },
          ],
          color: ["#2ec7c9", "#b6a2de"],
          series: [
            {
              name: '新增用户',
              type: 'bar',
              data: data.userData.map(item=>item.new)
            },
            {
              name: '活跃用户',
              type: 'bar',
              data: data.userData.map(item=>item.active)
            }
          ],
    }

    let echartsShowTwo=echarts.init(this.$refs.echartsShowTwo)
    echartsShowTwo.setOption(histogramOption)
  },

  //饼状图
  pieChart(data){

    console.log(data);
    let echartsShowThree=echarts.init(this.$refs.echartsShowThree)

    let pieChartOption={
      tooltip: {
            trigger: "item",
          },
          color: [
            "#0f78f4",
            "#dd536b",
            "#9462e5",
            "#a6a6a6",
            "#e1bb22",
            "#39c362",
            "#3ed1cf",
          ],
          series: [
           {
            data:data.videoData,
            type:'pie'

           }
          ],
    }
    echartsShowThree.setOption(pieChartOption)
  }
}


}
</script>

<style lang="less" scoped>

.user{
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid #cecaca;
  display: flex;
  align-items: center;
  img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-right: 40px;
  }
  .userinfo{
    .name{
        font-size: 32px;
        margin-bottom: 10px;
    }
    .access{
      color: #999999;
    }
  }
}

.login-info{
  p{
    line-height: 28px;
    font-size: 14px;
    color: #999999;

    span{
      color: #666666;
      margin-left: 60px;
    }
  }

}

.num{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .el-card{
    width: 32%;
    margin-bottom: 20px;
  }
  .icon{
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
  }

  .detail{
    display: flex;
    flex-direction: column;
    justify-content: center;
    .price{
      font-size: 24px;
      margin-bottom: 5px;
    }
    .desc{
      font-size: 14px;
      color: #999;
      text-align: center;
    }
  }
}

.bottomimg{
  display: flex;
  justify-content: space-between;

  .el-card{
    margin-top: 15px;
    width: 48%;
    height: 220px;
  }
}
</style>