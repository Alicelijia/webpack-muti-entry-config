// 此文件用户放各种配置项
export const AUTH_TYPE = {
  GUEST: 0, // 未注册
  DEVELOPER: 1, // 开发商
  ADMIN: 2, // 管理员
  APPLYINGADMIN: 3, // 申请注册管理员
  APPLYINGDEV: 4, // 已注册未审核
  APPLYINGADMINREJECT: 5, // 申请注册管理员未通过
  APPLYINGDEVREJECT: 6, // 申请注册开发商未通过
  USER_IDENTITY_REFUSED_QQ_DEVELOPER: 7, // （迭代1.14.0）兼容qq注册开发商审核被拒绝的情形
  UP_ACCOUNT: 8, // 测试账号升级为正式账号
  USER_IDENTITY_OA_VISIT: 9, // 内部工作室注册（OA登录）
  USER_IDENTITY_BINDED_ACCOUNT: 10, // 内部工作室绑定已经存在的账号
  USER_IDENTITY_OA_TOKEN_EXPIRED_VISIT: 11, // 内部工作室注册， token过期
  USER_IDENTITY_NO_EQUAL_ACCOUNT: 12, // 登录邮箱和OA跳转过来的邮箱不一致
  PASSWORD_MODIFIED: 13, // 帐号密码已经修改，请重新登录
  ONLY_ONE_CLIENT_ALLOWED: 14 // 1个账号在同一时间下只能登录1台机器
};
