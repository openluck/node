<!--
 * @Descripttion: 
 * @version: 
 * @Author: OpenLcuk
 * @Date: 2021-05-17 16:30:40
 * @LastEditors: OpenLcuk
 * @LastEditTime: 2021-05-17 17:08:48
-->
<template>
  <div>
    <a-table :columns="columns" :data-source="data">
      <a href="javascript:;" slot="ctrl">
        <span style="color: red" @click="showModal">赠送</span>
      </a>
    </a-table>
    <a-modal
      v-model="visible"
      title="好友列表"
      @ok="handleOk"
      cancelText="取消"
      okText="确定"
    >
      <div class="">
        <a-table
          :columns="columns2"
          :data-source="data2"
          :row-selection="rowSelection"
        >
        </a-table>
      </div>
    </a-modal>
  </div>
</template>
<script>
const columns = [
  {
    title: "好友列表",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "积分数",
    dataIndex: "number",
    key: "number",
  },
  {
    title: "日期",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "操作",
    key: "ctrl",
    dataIndex: "ctrl",
    scopedSlots: { customRender: "ctrl" },
  },
];

const data = [
  {
    key: "1",
    type: "A积分",
    number: "100",
    date: "2020-10-03",
  },
  {
    key: "2",
    type: "b积分",
    number: "200",
    date: "2020-11-03",
  },
  {
    key: "3",
    type: "c积分",
    number: "100",
    date: "2021-01-03",
  },
  {
    key: "4",
    type: "D积分",
    number: "300",
    date: "2020-11-03",
  },
  {
    key: "5",
    type: "E积分",
    number: "500",
    date: "2020-05-03",
  },
  {
    key: "6",
    type: "F积分",
    number: "100",
    date: "2021-01-03",
  },
  {
    key: "7",
    type: "G积分",
    number: "600",
    date: "2021-03-03",
  },
  {
    key: "8",
    type: "H积分",
    number: "100",
    date: "2020-02-03",
  },
];
const columns2 = [
  {
    title: "好友",
    dataIndex: "people",
    key: "people",
    // width: "50%",
    // algin: "center",
  },
];

const data2 = [
  {
    key: "1",
    people: "张三",
  },
  {
    key: "2",
    people: "李四",
  },
  {
    key: "3",
    people: "王五",
  },
  {
    key: "5",
    people: "小明",
  },
  {
    key: "6",
    people: "小黑",
  },
];

export default {
  data() {
    return {
      data,
      columns,
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      columns2,
      data2,
      rowSelection: {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      },
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      this.visible = false;
      this.confirmLoading = false;
      this.$message.success("赠送成功");
    },
    handleCancel(e) {
      console.log("Clicked cancel button");
      this.visible = false;
    },
  },
};
</script>
