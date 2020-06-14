<template>
  <div class>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      background-color="#001529"
      text-color="hsla(0,0%,100%,.65)"
      active-text-color="#ffd04b"
      unique-opened
    >
      <el-submenu v-for="(item, index) in menu" :key="index" :index="item.rolesName">
        <template slot="title">
          <i class="el-icon-menu" />
          <span>{{ item.rolesText }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item :index="item.rolesName+'-1'">选项1</el-menu-item>
          <el-menu-item :index="item.rolesName+'-2'">选项2</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {
      menu: []
    }
  },
  created() {
    const { roles } = this.$store.state.user
    this.menu = roles
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
  .is-opened .el-submenu__title {
    span, .el-icon-menu {
      color: #fff;
    }
  }
  [role="menuitem"].el-menu-item {
    padding-left: 65px !important;
  }
}
</style>
