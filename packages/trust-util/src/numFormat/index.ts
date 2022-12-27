/**
 千位分隔。
 @param {Number|String} num 传入的数字
 @return {String} 分隔后的字符串
 @author victor
 */
const numFormat = (num:string|number)=>{
    let numArr=num.toString().split(".");  // 分隔小数点
    let arr=numArr[0].split("").reverse();  // 转换成字符数组并且倒序排列
    let res:string[]=[];
    for(let i=0,len=arr.length;i<len;i++){
        if(i%3===0&&i!==0){
            res.push(",");   // 添加分隔符
        }
        res.push(arr[i]);
    }
    res.reverse(); // 再次倒序成为正确的顺序
    let newNum;
    if(numArr[1]){  // 如果有小数的话添加小数部分
        newNum=res.join("").concat("."+numArr[1]);
    }else{
        newNum=res.join("");
    }
    return newNum;
};

export default numFormat