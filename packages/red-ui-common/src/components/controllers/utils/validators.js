/**
 * Copyright JS Foundation and other contributors, http://js.foundation
 *
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
import {
  Context
} from '../context'

import utils from './utils'

export class Validators extends Context {
  constructor(ctx) {
    super(ctx)
    console.log('create Validators')
    ctx.utils = utils
  }

  number(blankAllowed) {
    return function (v) {
      return (blankAllowed && (v === '' || v === undefined)) || (v !== '' && !isNaN(v));
    }
  }

  regex(re) {
    return function (v) {
      return re.test(v);
    }
  }

  typedInput(ptypeName, isConfig) {
    const ctx = this.ctx;
    return function (v) {
      var ptype = $('#node-' + (isConfig ? 'config-' : '') + 'input-' + ptypeName).val() || this[ptypeName];
      if (ptype === 'json') {
        try {
          JSON.parse(v);
          return true;
        } catch (err) {
          return false;
        }
      } else if (ptype === 'msg' || ptype === 'flow' || ptype === 'global') {
        return ctx.utils.validatePropertyExpression(v);
      } else if (ptype === 'num') {
        return /^[+-]?[0-9]*\.?[0-9]*([eE][-+]?[0-9]+)?$/.test(v);
      }
      return true;
    }
  }

}
