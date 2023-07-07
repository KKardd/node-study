// import {increase, getCount} from './counter.js';

// increase();
// increase();
// console.log(getCount());

import * as counter from "./counter.js";

counter.increase();
counter.increase();
console.log(counter.getCount());
// package.json에서 "type": "module"때문에 이렇게 되는거래;; 충격
