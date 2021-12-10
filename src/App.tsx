import {defineComponent} from 'vue';
import Test from "@/views/Test";

export default defineComponent({
    name: 'App',
    setup() {
        return () => <>
            <Test/>
        </>
    },
});
