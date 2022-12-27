/**
 根据身份证获取出生日期，18位身份证号、港澳居民居住证、台湾居民居住证。
 @param {String} UUserCard 传入证件号
 @return {String} 2018-10-01 获取到生日
 @author victor
 */
const getBirthByCard = (UUserCard:string)=>{
    if (typeof UUserCard !== 'string') return new Error("入参应是string类型");
    return UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
};

export default getBirthByCard