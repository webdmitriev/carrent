import Vue from 'vue';

import VuePaginate from 'vue-paginate';
Vue.use(VuePaginate);

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)

import Tooltip from 'vue-directive-tooltip';
import 'vue-directive-tooltip/dist/vueDirectiveTooltip.css';
Vue.use(Tooltip);

import vWow from 'v-wow';
Vue.use(vWow);

// UI
import Intro from "@/components/UI/Intro.vue";
import Message from "@/components/UI/Message.vue";
import PostsList from "@/components/Parts/PostsList.vue";
import PostsListBuscket from "@/components/Parts/PostsListBuscket.vue";
// Controls
import AppButton from "@/components/UI/Controls/Button.vue";
import AppInput from "@/components/UI/Controls/Input.vue";
import AppTextArea from "@/components/UI/Controls/TextArea.vue";

// Controls
Vue.component('AppButton', AppButton)
Vue.component('AppInput', AppInput)
Vue.component('AppTextArea', AppTextArea)

// UI
Vue.component('Intro', Intro)
Vue.component('Message', Message)
Vue.component('PostsList', PostsList)
Vue.component('PostsListBuscket', PostsListBuscket)