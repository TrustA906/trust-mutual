import { defineComponent, ref, onMounted } from 'vue';
import { isBankCode } from 'trust-util'
import '@/assets/styles/home.less';
import 'vant/lib/index.css';
const Msg = (bankCode: typeof isBankCode) => {
  return '111';
}
export default defineComponent({
  setup() {
    onMounted(()=>{
      console.log('checkPhone', isBankCode('1111111'))
    });
    return {
    };
  },
  data() {
    return {
    };
  },
  render() {
    return (
      <div class={'home-main'}>
        <input type="text" />
      </div>
    );
  },
});

