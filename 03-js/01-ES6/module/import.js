import { firstName } from './export.js';
import { lastName as cute } from './export.js';

console.log('%c [  ]-3', 'font-size:13px; background:pink; color:#bf2c9f;', firstName, cute)

// import命令具有提升效果，会提升到整个模块的头部，首先执行
multiply();
import { multiply } from './export.js';

// 整体加载
import * as a from './export.js';
a.multiply(2, 4)

import customName from './export.js';
customName()
