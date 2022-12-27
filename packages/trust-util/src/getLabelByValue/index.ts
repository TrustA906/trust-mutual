interface Option {
    label:string;
    value:string|number;
    [key:string]:string|number
}
/**
 通过value值获取对应描述，
 使用场景为选项列表从元数据获取，展示描述时后端只返回码值
 @param value 需要展示描述的码值
 @param options 需要查找描述的全量列表
 @key (可选)指定需要展示的字段key
 @author victor
* */
const getLabelByValue = (value:string|number, options:Option[], key?:string)=>{
    const currentItem = options.find((item) => `${item.value}` === `${value}`);
    return (currentItem && (currentItem[key]||currentItem.label)) || "";
};

export default getLabelByValue