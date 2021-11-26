import { defineComponent, ref, onMounted } from 'vue';
import { isBankCode, fetchRequest } from 'trust-util';
import { setting } from 'trust-util/es/fetchRequest';
import '@/assets/styles/home.less';
import 'vant/lib/index.css';
export default defineComponent({
  setup() {
    onMounted(()=>{
      console.log('checkPhone', isBankCode('1111111'))
    });
    const fetchData = () => {
      const setting: setting = {
        body:'',
        needLoading: true,
      }
      fetchRequest('url', setting)
    }
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

