import ListView from './ListView.vue';
import bus from '../utils/bus.js';

export default function CreateListView(name) {

  return {
    name,
    created() {
      bus.$emit('start:spinner');
      this.$store.dispatch("FETCH_LIST", this.$route.name)
      .then(() => {
        console.log('fetched');
        bus.$emit('end:spinner');
      })
      .catch(err => {
        console.log(err);
      });

    },
    // 재사용할 인스턴스(컴포넌트) 옵션들이 들어갈 자리 
    render(createElement) {
      return createElement(ListView);
    }
  }
}