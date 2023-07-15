import {hello} from "./index";
import * as sdk from "aws-sdk";

module.exports.handler = async (event: any, context: any) => {
    // 이벤트와 컨텍스트를 활용하여 원하는 로직을 작성합니다.
    const result = hello("John");
    console.log(result);
    // ...
};
