/**
 脱敏处理，加*号，只展示前preLen位和后subLen位
 @param {Number} preLen 字符串前应展示位数
 @param {Number} subLen 字符串后应展示位数
 @return {String} 返回脱敏后的字符串
 @author victor
 */
const desensitize = (str:string, preLen:number = 0, subLen:number = 0)=>{
    if (typeof str !== 'string') return new Error("入参应是string类型");
    if (!str) {
        return str || "";
    }
    str = str.toString();
    const len = str.length;
    const subIndex = len - subLen > preLen ? len - subLen : preLen;
    return (
        str.substr(0, preLen) +
        Array(subIndex - preLen > 0 ? subIndex - preLen : 0)
            .fill('')
            .map(() => "*")
            .join("") +
        str.substr(subIndex)
    );
};

export default desensitize