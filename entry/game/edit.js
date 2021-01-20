import '@theme/detail.css';
import '@theme/ui/ui-button.css';
import '@theme/ui/ui-tips.css';

import { getRandomNum } from '@shared/lib/utils';
import _ from 'lodash';

let detailConsole = (wording) => {
  console.log(`This is a working ${wording}.`);
};
import '@gameedit/main'
detailConsole(getRandomNum());
detailConsole(_.join(['Hello', 'webpack'], ' '));
detailConsole(_.join(['Hello', 'Game Square'], ' '));
