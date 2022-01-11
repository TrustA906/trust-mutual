import { defineComponent, ref, onMounted } from 'vue';
import { isBankCode } from '../../../es';
import '@/assets/styles/home.less';
import 'vant/lib/index.css';
let vali=new Map([
  [false, '验证不通过'],
  [true, '验证通过']
])
export default defineComponent({
  setup() {
    let bankCode = ref<string>()
    let check = (name:string) => {
      console.log(isBankCode(''+bankCode.value),bankCode.value)
      switch(name){
        case 'bankCode':
          alert(vali.get(isBankCode(''+bankCode.value)))
          break
      }
    }
    onMounted(()=>{
    });
    return {
      bankCode,
      check
    };
  },
  data() {
    return {
    };
  },
  render() {
    return (
      <div class={'home-main'}>
        <div>
          银行卡：<input type="text" placeholder='请输入银行卡号' onInput={(e:any)=>{
            this.bankCode=e.target.value
          }} /><button onClick={()=>this.check('bankCode')}>验证</button>
        </div>
      </div>
    );
  },
});

