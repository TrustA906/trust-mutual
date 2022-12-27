/**
 根据出生日期计算年龄，按照周岁计算，例如18岁生日当天，还是17周岁
 @param {String} birth 传入生日
 @return {String} 2018-10-01 获取到年龄
 @author victor
 */
const getAgeByBirth = (birth:string)=>{
    if (typeof birth !== 'string') return new Error("入参应是string类型");
    let r:any = birth.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    let age = 0;
    let monthCurrent:number = new Date().getMonth() + 1;
    let dayCurrent:number = new Date().getDate() - 1;
    if(monthCurrent<r[3]){
        age = new Date().getFullYear() - r[1] - 1;
    }else if(monthCurrent == r[3] && dayCurrent<r[4]){
        age = new Date().getFullYear() - r[1] - 1;
    }else{
        age = new Date().getFullYear() - r[1];
    }
    return age>0?age:0;
};

export default getAgeByBirth