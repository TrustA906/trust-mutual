import { defineComponent, ref, onMounted } from 'vue';
import { isBankCode, uploadOss } from '../../../src';
import '@/assets/styles/home.less';
import 'vant/lib/index.css';
let vali=new Map([
  [false, '验证不通过'],
  [true, '验证通过']
])
export default defineComponent({
  setup() {
    let bankCode = ref<string>()
    let file = ref()
    let check = (name:string) => {
      switch(name){
        case 'bankCode':
          alert(vali.get(isBankCode(''+bankCode.value)))
          break
        case 'ossUpload':
          const uploadConfig = {
            access_key_id: '',
            access_key_secret: '',
            filename: file.value.name,
            endpoint: 'oss-cn-beijing.aliyuncs.com',
            file: file.value,
            url: 'http://hw-test.oss-cn-beijing.aliyuncs.com'
          }
          uploadOss(uploadConfig)
          break
      }
    }
    onMounted(()=>{
    });
    return {
      bankCode,
      check,
      file
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
        <div>
          上传：<input type="file" placeholder='请选择文件' onChange={(e:any)=>{
            console.log(e.target.files)
            this.file=e.target.files[0]
          }} /><button onClick={()=>this.check('ossUpload')}>上传</button>
        </div>
      </div>
    );
  },
});

