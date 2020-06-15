<template>
  <div class="container">
    <el-container>
      <el-aside width="200px">
        <div class="headerLogo">
          LOGO
        </div>
        <Menu />
      </el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from './menu'

export default {
  components: {
    Menu
  },
  data() {
    return {
      name: ''
    }
  },
  created() {}
}
</script>

<style lang='scss' scoped>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #001529;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}

.container,
.el-container {
  height: 100%;
  .el-aside {
    margin-bottom: 0;
    padding: 0;
    text-align: left;
    line-height: 60px;
  }
}

.headerLogo {
  color: #fff;
  font-size: 25px;
  margin-left: 20px;
}

.el-header {
  background-color: #fff;
}

</style>
