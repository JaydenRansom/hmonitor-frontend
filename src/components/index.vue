<template>
    <div id="index">
                <div id="asidebar">
                    <el-menu default-active="1" class="el-menu-demo" @select="handleSelect">
                        <el-menu-item index="1">11</el-menu-item>
                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-upload"></i>
                                <span>我的工作台</span>
                            </template>
                            <el-menu-item index="2-1">21</el-menu-item>
                            <el-menu-item index="2-2">22</el-menu-item>
                        </el-submenu>
                      <el-menu-item index=""></el-menu-item>
                    </el-menu>
                </div>
    </div>
</template>

<script>
export default {
  methods: {
    handleSelect (key, keyPath) {
      switch (keyPath[0]) {
        case '1':
          alert("1")
        case '2':
          switch (key) {
            case '2-1':
              alert("2-1")
              break
            case '2-2':
              alert("2-2")
              break
            }
          
        }
    }
    }
}
</script>

