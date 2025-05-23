/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxe3642dc0f557e231',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '7cb9494ba31c39c730fef046d1ccb01d',

  PROVINCE: '烟台',
  CITY: '福山区',

  USERS: [
    {
      // 想要发送的人的名字
      name: '宝宝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBF-67RJwd_CVGmNRKxpcTemrxms',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'HnoDto5inZ8JpzRwlbM5i_WBC4u_EAlQNC8gmKUxxbs',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '07-20',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '嘉嘉', year: '2005', date: '06-15',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '嘉嘉', year: '2005', date: '07-20',
        },
        {
          type: '节日', name: '相识一年', year: '2024', date: '07-06',
        },
      ],
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2025-01-15' },
        // 结婚纪念日
        { keyword: '', date: '' },
      ],
      
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'oBF-67TPHmKuGV5OD6yLiK9zzUWo',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oBF-67TPHmKuGV5OD6yLiK9zzUWo',
    }
  ],

}

module.exports = USER_CONFIG

