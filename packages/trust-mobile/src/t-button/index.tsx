import { defineComponent } from 'vue';
import { Button } from 'vant';
import type { ButtonProps } from 'vant';

export default defineComponent({
  name: 't-button',
  setup(props:any,{slots}) {
    const text = slots.default ? slots.default() : props.text;
    return {
      text
    }
  },
  render(props:ButtonProps) {
    return (<Button {...props} class="t-button">{this.text}</Button>)
  }
});

