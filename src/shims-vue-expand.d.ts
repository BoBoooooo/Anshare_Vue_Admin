/*
 * @file: 声明vue拓展原型链上的属性类型
 * @copyright: NanJing Anshare Tech .Com
 * @author: BoBo
 * @Date: 2020年06月23 16:47:06
 */
/* eslint-disable */

import { Store } from 'vuex';
import { ElMessage } from 'element-ui/types/message';

// 扩充
declare module 'vue/types/vue' {
    interface Vue {
        $message:ElMessage
        lodash:any;
        axios:any;
        dayjs:any;
        $pinyinmatch:any;
        $EventBus:any;
    }
}

