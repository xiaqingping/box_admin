// 这三个函数就是： axios 请求相关的 API
import { login } from '@/api/user'

// 这三个函数就是： 与 token 相关的操作
import { getToken, setToken } from '@/utils/auth'

import router, { resetRouter } from '@/router'

// user模块自己的状态
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [
    {
      roleId: '1',
      rolesName: 'management',
      rolesText: '用户管理'
    },
    {
      roleId: '2',
      rolesName: 'configuration',
      rolesText: '路由配置'
    },
    {
      roleId: '3',
      rolesName: 'department',
      rolesText: '部门配置'
    },
    {
      roleId: '4',
      rolesName: 'role',
      rolesText: '角色管理'
    }
  ]
}

// user模块自己的修改状态的方法
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_INTRODUCTION: (state, introduction) => {
    state.introduction = introduction
  },
  SET_NAME: (state, name) => {
    state.name = name
  },
  SET_AVATAR: (state, avatar) => {
    state.avatar = avatar
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  }
}

// user模块自己的进行异步操作的方法
const actions = {
  login({ commit }, action) {
    const { payload } = action
    return new Promise((resolve, reject) => {
      login(payload)
        .then(response => {
          const { data } = response
          console.log(data)
          commit('SET_TOKEN', data.access_token)
          setToken(data.access_token)
          resolve()
        })
        .catch(error => {
          reject(error)
        })
    })
  },

  logout({ commit, state, dispatch }) { }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
