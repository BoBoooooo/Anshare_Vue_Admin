<!--
 * @file: 部门管理
 * @copyright: BoBo
 * @author: BoBo
 * @Date: 2019-07-09 14:30:43
 -->
<template>
  <div class="page-container">
    <CrudTable
      ref="table"
      tableName="dept"
      tableTitle="部门列表"
      listField="data"
      border
      :visibleList="{
        searchForm: false,
        btnAdd: false,
        btnDel: true,
        actionColumnBtnAdd: true,
      }"
      :prefill="{
        parentId: 'id',
      }"
      :promiseForSelect="promiseForSelect"
      fullHeight
    />
  </div>
</template>

<script>
import { DML, crud } from '@/api/public/crud';

import { Component, Vue, Watch } from 'vue-property-decorator';

@Component({
  name: 'Dept',
})
export default class Dept extends Vue {
  promiseForSelect() {
    return new Promise((resolve, reject) => {
      crud(DML.TREE, 'dept')
        .then((res) => {
          resolve(res);
        })
        .catch((err) => reject(err));
    });
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped></style>
