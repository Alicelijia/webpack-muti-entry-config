import '@theme/detail.css';
import '@theme/ui/ui-button.css';
import '@theme/ui/ui-tips.css';
// 加载wiki入口信息
import '@wiki/main'
import { getRandomNum } from '@shared/lib/utils';
import _ from 'lodash';

let detailConsole = (wording) => {
  console.log(`This is a working ${wording}.`);
};

detailConsole(getRandomNum());
detailConsole(_.join(['Hello', 'webpack'], ' '));
detailConsole(_.join(['Hello', 'lodash'], ' '));
