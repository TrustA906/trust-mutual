import { defineComponent } from 'vue';
import { Field } from 'vant';

export default defineComponent({
  name: 'TInput',
  props: {
    placeholder: {
      require: false,
      type: String,
      default: ''
    },
  },
  setup(props, {emit}) {
    return () => <Field />
  }
});
