/**
 去除字符串内所有空格。
 @param {String} str 传入需要去除空格的字符串
 @return {String} 去除空格后的字符串
 @author victor
 */
const removeAllSpace = (str:string)=>{
    return str.replace(/\s*/g,"");
};

export default removeAllSpace