<template>
  <div class="user-info">
    <div class="info-table">
      <a-table :columns="columns" :data-source="dataSource" :pagination="false">
        <a slot="name" slot-scope="text">{{ text }}</a>
      </a-table>
    </div>
    <div id="main" style="width: 90%; height: 400px"></div>
  </div>
</template>

<script>
const columns = [
  {
    title: "用户名",
    dataIndex: "username",
    key: "name",
    scopedSlots: { customRender: "name" },
    align: "center",
  },
  {
    title: "年龄",
    dataIndex: "age",
    key: "age",
    width: 80,
    align: "center",
  },
  {
    title: "生日",
    dataIndex: "birthday",
    key: "birthday",
    align: "center",
  },
  {
    title: "地址",
    dataIndex: "address",
    key: "address 1",
    ellipsis: true,
    align: "center",
  },
  {
    title: "车型",
    dataIndex: "carband",
    key: "carband",
    align: "center",
  },
  {
    title: "会员等级",
    dataIndex: "vipgrade",
    key: "vipgrade",
    align: "center",
  },
  {
    title: "账户余额",
    dataIndex: "userbalance",
    key: "userbalance",
    align: "center",
  },
];
export default {
  name: "UserInfo",
  data() {
    return {
      columns,
      dataSource: [], // 表格数据
      userName: "",
      userAdName: ''
    };
  },
  mounted() {
    setTimeout(() => {
      this.userName = JSON.parse(sessionStorage.getItem("userIfon")).username;
      this.userAdName = JSON.parse(sessionStorage.getItem("userIfon")).adusername;
      this.getUserInfo();
      this.getAdUserInfo();
      this.drawChart();
    }, 500);
  },
  methods: {
    // 用户信息
    getUserInfo() {
      this.$http({
        method: "post",
        url: this.$util.baseUrl + "users/userinfo",
        data: {
          username: this.userName,
        },
      }).then((res) => {
        if (res.data.code === "200") {
          this.dataSource = res.data.data;
          console.log(this.dataSource);
        }
      });
    },
    // 用户信息
    getAdUserInfo() {
      this.$http({
        method: "post",
        url: this.$util.baseUrl + "users/userinfo",
        data: {
          username: this.userAdName,
        },
      }).then((res) => {
        if (res.data.code === "200") {
          this.dataSource = res.data.data;
          console.log(this.dataSource);
        }
      });
    },
    drawChart() {
      // 使用刚指定的配置项和数据显示图表。
      setTimeout(() => {
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById("main"));
        // 指定图表的配置项和数据
        let option = {
          title: {
            text: "积分明细",
            // subtext: "纯属虚构",
            left: "center",
          },
          tooltip: {
            trigger: "item",
          },
          legend: {
            orient: "vertical",
            left: "left",
          },
          series: [
            {
              name: "积分明细",
              type: "pie",
              radius: "50%",
              data: [
                { value: this.dataSource[0].getpointes, name: "积分获得" },
                { value: this.dataSource[0].outpointes, name: "积分转出" },
                { value: this.dataSource[0].sendpointes, name: "赠送积分" },
                { value: this.dataSource[0].oilpointes, name: "加油积分" },
              ],
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: "rgba(0, 0, 0, 0.5)",
                },
              },
            },
          ],
        };
        myChart.setOption(option);
        console.log(
          "this.dataSource.outpointes:",
          this.dataSource[0].getpointes
        );
      }, 500);
    },
  },
};
</script>
<style lang="less" scoped>
.user-info {
  #main {
    margin-top: 30px;
  }
}
</style>

