/**
 根据身份证获取性别，18位身份证号、港澳居民居住证、台湾居民居住证、户口本。
 @param {String} UUserCard 传入身份证号码
 @return {Number} M-男 F-女
 @author victor
 */
const getGenderByCard = (UUserCard:string)=>{
    if (typeof UUserCard !== 'string') return new Error("入参应是string类型");
    return parseInt(UUserCard.substr(16, 1)) % 2 == 1 ? 'M' : 'F';
};

export default getGenderByCard