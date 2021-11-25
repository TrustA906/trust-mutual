import { defineComponent } from 'vue';
import './index.less';

export default defineComponent({
  name: 'demo-button',
  props: {
    name: {
      require: false,
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: '#f44'
    }
  },
  setup() {
  },
  render() {
    return (<button class="demo-button" style={{backgroundColor: this.color}}>
    {this.name}
  </button>)
  }
});

