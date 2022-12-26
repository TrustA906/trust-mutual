;(function(global,undefined) {
    "use strict"
    var _global;
    var _util = {
        /**
         判断证件的出生日期
         @param {String} UUserCard 传入证件号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkCardBirth:function(UUserCard) {
            var birthday = UUserCard.substr(6, 4) + '/' + Number(UUserCard.substr(10, 2)) + '/' + Number(UUserCard.substr(12, 2));
            var d = new Date(birthday);
            var newBirthday = d.getFullYear() + '/' + Number(d.getMonth() + 1) + '/' + Number(d.getDate());
            var currentTime = new Date().getTime();
            var time = d.getTime();
            if (time >= currentTime || birthday !== newBirthday) return false; // 非法生日
            return true;
        },
        /**
         判断证件是否合法
         @param {String} UUserCard 传入证件号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkCardIsLegal:function(UUserCard) {
            var arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
            var arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
            var sum = 0, i, residue;
            for (i = 0; i < 17; i++) {
                sum += UUserCard.substr(i, 1) * arrInt[i];
            }
            residue = arrCh[sum % 11];
            if (residue !== UUserCard.substr(17, 1)) return false; // 非法证号
            return true;
        }
    }
    var plugin = {
        /**
         姓名校验（包含中文和英文）：姓名可以输入英文(包含空格例如 Li Si) || 中文 (包含· 例如：卡尔·马克思)
         @param {String} value 传入姓名
         @return {Boolean} true-校验通过，false-校验不通过
         @author meng
         */
        checkName : function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            var newvalue = value;
            //var newvalue = value.replace(/\s+/g, "");
            // return /(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\\·]{0,48}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·/\s]{0,48}[a-zA-Z]{1}$)/.test(newvalue);
            return /(^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\\·]{0,48}[\u4e00-\u9fa5]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\s]{0,48}[a-zA-Z]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·]{0,48}[a-zA-Z]{1}$)/.test(newvalue);
        },
        /**
         纯中文姓名校验：只能是输入中文
         @param {String} value 传入姓名
         @return {Boolean} true-校验通过，false-校验不通过
         @author meng
         */
        checkChinaName : function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            //var newvalue = value.replace(/\s+/g, "");
            var newvalue = value;
            return /^[\u4e00-\u9fa5]{1}[\u4e00-\u9fa5\\·]{0,15}[\u4e00-\u9fa5]{1}$/.test(newvalue);

        },
        /**
         英文姓名校验：英文名、英文姓.不能低于2个字符，包括空格。
         @param {String} value 传入姓名
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkEnName:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            //var newvalue = value.replace(/\s+/g, "");
            var newvalue = value;
            return /(^[a-zA-Z]{1}[a-zA-Z\s]{0,48}[a-zA-Z]{1}$)|(^[a-zA-Z]{1}[a-zA-Z\\·]{0,48}[a-zA-Z]{1}$)/.test(newvalue);
        },
        /**
         根据身份证获取性别，18位身份证号。
         @param {String} UUserCard 传入身份证号码
         @return {Number} 1-男 2-女
         @author keely
         */
        getGenderByIdCard:function(UUserCard) {
            if (typeof UUserCard !== 'string') return new Error("入参应是string类型");
            return parseInt(UUserCard.substr(16, 1)) % 2 == 1 ? 1 : 2;
        },
        /**
         根据身份证获取出生日期，18位身份证号。
         @param {String} UUserCard 传入身份证号码
         @return {String} 2018-10-01 获取到生日
         @author keely
         */
        getBirthByIdCard:function(UUserCard) {
            if (typeof UUserCard !== 'string') return new Error("入参应是string类型");
            return UUserCard.substring(6, 10) + "-" + UUserCard.substring(10, 12) + "-" + UUserCard.substring(12, 14);
        },
        /**
         根据身份证获取年龄，18位身份证号。
         @param {String} UUserCard 传入身份证号码
         @return {String} 27 获取到年龄
         @author keely
         */
        getAgeByIdCard:function(UUserCard) {
            if (typeof UUserCard !== 'string') return new Error("入参应是string类型");
            var myDate = new Date();
            var month = myDate.getMonth() + 1;
            var day = myDate.getDate();
            var age = myDate.getFullYear() - UUserCard.substring(6, 10) - 1;
            if (UUserCard.substring(10, 12) < month || UUserCard.substring(10, 12) == month && UUserCard.substring(12, 14) <= day) {
                age++;
            }
            return age;
        },
        /**
         判断证件类型是身份证，18位身份证号。18位字符（18位数字或17位数字+末位X）且字母大写
         @param {String} UUserCard 传入身份证号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkIdCard:function(UUserCard) {
            if (typeof UUserCard !== 'string') return new Error("入参应是string类型");

            if (!/^\d{17}(\d|x)$/i.test(UUserCard.toUpperCase())) return false; // 不是18位

            var city = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江 ", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北 ", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏 ", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
            if (city[UUserCard.substr(0, 2)] === undefined) return false; // 非法地区

            if (!_util.checkCardBirth(UUserCard.toUpperCase())) return false; // 非法生日
            if (!_util.checkCardIsLegal(UUserCard.toUpperCase())) return false; // 非法证号

            return true;
        },

        /**
         港澳居民居住证：共18位数字，前六位为地区代码，中间八位为出生日期，末4位同身份证校验规则。
         香港居民公民身份号码前六位为810000，澳门居民公民身份号码前六位为820000.
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkHKMacaoIdCard:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");

            if (!/^\d{17}(\d|x)$/i.test(value.toUpperCase())) return false; // 不是18位

            var city = { 810000: "香港", 820000: "澳门" };
            if (city[value.substr(0, 6)] === undefined) return false; // 非法地区

            if (!_util.checkCardBirth(value.toUpperCase())) return false; // 非法生日
            if (!_util.checkCardIsLegal(value.toUpperCase())) return false; // 非法证号

            return true;
        },
        /**
         台湾居民居住证：共18位数字：前六位为地区代码，中间八位为出生日期，末4位同身份证校验规则。
         台湾居民公民身份号码前六位为830000。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkTWIdCard:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");

            if (!/^\d{17}(\d|x)$/i.test(value.toUpperCase())) return false; // 不是18位

            var city = { 830000: "台湾" };
            if (city[value.substr(0, 6)] === undefined) return false; // 非法地区

            if (!_util.checkCardBirth(value.toUpperCase())) return false; // 非法生日
            if (!_util.checkCardIsLegal(value.toUpperCase())) return false; // 非法证号

            return true;
        },
        /**
         判断证件类型是护照，15位字符，支持纯数字或者字母加数字，字母大写。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkPassport:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^[0-9A-Z]{3,15}$/.test(value.toUpperCase()) && !/^[A-Z]{3,15}$/.test(value.toUpperCase());
        },
        /**
         港澳居民来往大陆通行证：9至11位字符，第一个字符为字母且只能为“H”或者“M”。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkHKMacaoPass:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^[H|M][\w\W]{8,10}$/.test(value.toUpperCase());
        },
        /**
         台湾居民来往大陆通行证：6至10位字符，支持纯数字或者字母加数字。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkTWPass:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^[0-9a-zA-Z]{6,10}$/.test(value.toUpperCase()) && !/^[a-zA-Z]{6,10}$/.test(value.toUpperCase());
        },
        /**
         出生证：6至10位字符，支持纯数字或者字母加数字。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author meng
         */
        checkBornCertificatePass:function(value) {

            return /^[0-9a-zA-Z]{3,10}$/.test(value.toUpperCase()) && !/^[a-zA-Z]{6,10}$/.test(value.toUpperCase());
        },
        /**
         校验手机号：1打头11位数字，只能一个人使用，系统要校验。投保人手机号必录。
         @param {String} value 传入号码
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkPhone:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^1\d{10}$/.test(value);
        },
        /**
         校验邮箱：要包含@和.
         @param {String} value 传入邮箱
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkEmail:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
        },
        /**
         校验详细地址：详细地址栏不能低于3个汉字7个字符，不可以全为数字。
         @param {String} value 传入详细地址
         @return {Boolean} true-校验通过，false-校验不通过
         @author keely
         */
        checkAddress:function(value) {
            if (typeof value !== 'string') return new Error("入参应是string类型");
            return /^[\u4e00-\u9fa5\u2E80-\uFE4F]{3,}|[\w\W]{7,}$/.test(value) && !/^[0-9]{7,}$/.test(value);
        },
        /**
         银行卡校验规则：16 || 17 || 18 || 19位的数字
         @param {String} value 传入银行卡号
         @return {Boolean} true-校验通过，false-校验不通过
         @author meng
         */
        checkBankCode:function(value) {
            return /^([1-9]{1})(\d{15}|\d{16}|\d{17}|\d{18})$/.test(value)
        }

    }
    // 最后将插件对象暴露给全局对象
    _global = (function(){ return this || (0, eval)('this'); }());
    !('trustUtil' in _global) && (_global.trustUtil = plugin);
}());