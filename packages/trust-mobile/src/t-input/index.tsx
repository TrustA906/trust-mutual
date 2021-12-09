import { defineComponent } from 'vue';
import './index.less'

export default defineComponent({
  name: 't-input',
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
    <div class="t-input">
      <input placeholder={this.placeholder} onChange={this.updateModel} />
    </div>
    )
  }
});
