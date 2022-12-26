import { getLabelByValue } from '../src';

const options = [{
  label:'选项一',
  desc:'选项一',
  value:'1'
},{
  label:'选项二',
  desc:'选项二',
  value:'2'
}]

test('通过码值获取描述（不指定key）', () => {
  expect(getLabelByValue('1', options)).toBe('选项一');
});

test('通过码值获取描述（指定key）', () => {
  expect(getLabelByValue('2', options, 'desc')).toBe('选项二');
});