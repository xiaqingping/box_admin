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
      <el-submenu v-for="(item, index) in menu" :key="index" :index="+item.id+'-'+index">
        <template slot="title">
          <i class="el-icon-menu" />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item-group
          v-for="(child_item, child_index) in item.children"
          :key="child_index"
          :index="child_item.id+'-'+child_index"
        >
          <el-submenu v-if="heaveChilddren(child_item.children)" :index="child_item.id+'-'+child_index">
            <template slot="title">{{ child_item.name }}</template>
            <el-menu-item
              v-for="(c3_item, c3_index) in child_item.children"
              :key="c3_index"
              :index="c3_item.id+'-'+index"
            >{{ c3_item.name }}</el-menu-item>
          </el-submenu>
          <el-menu-item v-else :key="child_index" :index="child_item.id+'-'+child_index">{{ child_item.name }}</el-menu-item>
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
  computed: {},
  created() {
    const { roles } = this.$store.state.user
    this.menu = roles
  },
  methods: {
    heaveChilddren: function(value) {
      const valueLen = value && value.length
      return !!valueLen
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border-right: 0;
  .is-opened .el-submenu__title {
    span,
    .el-icon-menu {
      color: #fff;
    }
  }
  // [role='menuitem'].el-menu-item {
  //   padding-left: 65px !important;
  // }
}
</style>
