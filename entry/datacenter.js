import '@theme/topic.css';
import '@theme/ui/ui-button.css';
import '@theme/ui/ui-text.css';
import '@theme/ui/ui-tips.css';

import Vue from 'vue';
import $ from 'jquery';
import Main from '@shared/components/main';
import { getRandomNum, getCurDate } from '@shared/lib/utils';

let myConsole = (wording) => {
  console.log(`This is a test ${wording}.`);
};

myConsole(getRandomNum());
myConsole(getCurDate());

$('#app').append(`<p>This is the second line5.</p>`);
import '@datacenter/main'
// 开启压缩后，下面的涉及 process.env.DENV 的代码只会保留 if (true) {} 的逻辑块
if (process.env.DENV === 'curry') {
  console.log('curry env');
}
if (process.env.DENV === 'stephen') {
  console.log('stephen env');
}

import "@datacenter/main"

new Vue({
  el: '#vueApp',
  components: {
    'topic-main': Main
  }
});
