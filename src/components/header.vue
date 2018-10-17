<template>
  <div class="header">
    <div class="logo">EMMS</div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#242f42"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">我的集群</el-menu-item>
      <el-menu-item index="2">我的应用</el-menu-item>
      <el-menu-item index="3">我的索引</el-menu-item>
      <el-submenu index="4">
        <template slot="title">{{username}}</template>
        <el-menu-item index="4-1">退出</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<style scoped>
    .header {
        display: flex;
        justify-content: space-between;
        height: 70px;
        line-height: 70px;
        width: 100%;
        font-size: 22px;
        color: #fff;
    }
    .header .logo{
        float: left;
        width:250px;
        text-align: center;
    }

    .el-menu {
        display: flex;
        align-items: center;
    }

    .el-dropdown-menu__item {
        text-align: center;
    }
    .el-menu--horizontal {
      border-bottom: 0;
    }
</style>
