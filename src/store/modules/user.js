// 这三个函数就是： axios 请求相关的 API
import { login } from '@/api/user'

// 这三个函数就是： 与 token 相关的操作
import { getToken, setToken } from '@/utils/auth'

// import router, { resetRouter } from '@/router'

// user模块自己的状态
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: [
    {
      'id': 2,
      'parentId': 0,
      'name': '系统管理',
      'children': [
        {
          'id': 3,
          'parentId': 2,
          'children': [
            {
              'id': 5,
              'parentId': 3,
              'children': [
              ],
              'name': '用户管理'
            },
            {
              'id': 6,
              'parentId': 3,
              'children': [
              ],
              'name': '角色管理'
            },
            {
              'id': 7,
              'parentId': 3,
              'children': [
              ],
              'name': '部门管理'
            },
            {
              'id': 8,
              'parentId': 3,
              'children': [
              ],
              'name': '资源管理'
            }
          ],
          'name': '权限管理'
        },
        {
          'id': 4,
          'parentId': 2,
          'children': [
          ],
          'name': '系统配置'
        },
        {
          'id': 9,
          'parentId': 2,
          'children': [
          ],
          'name': '微服务名称配置'
        },
        {
          'id': 10,
          'parentId': 2,
          'children': [
          ],
          'name': '第三方系统接入配置'
        }
      ]
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
