import fetch from '../config/fetch'

/**
 * 获取用户信息
 */

export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')});

/**
*个人中心里编辑地址
*/

export const getAddressList = (user_id) => fetch('/v1/users/'+user_id+'/addresses')
