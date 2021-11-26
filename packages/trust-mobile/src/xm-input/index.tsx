import { defineComponent } from 'vue';
import './index.less'

export default defineComponent({
  name: 'XmInput',
  props: {
    placeholder: {
      require: false,
      type: String,
      default: ''
    },
  },
  setup(props, {emit}) {
    const updateModel = (event:any) => {
      const {value} = event.target
      emit('update:modelValue', value);
    }
    return {
      updateModel
    }
  },
  render() {
    return (
    <div class="xm-input">
      <input placeholder={this.placeholder} onChange={this.updateModel} />
    </div>
    )
  }
});
