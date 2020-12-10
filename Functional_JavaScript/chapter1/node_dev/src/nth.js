import _ from 'underscore';
import { fail, warn, note } from './log.js';

function nativeNth(a, index) {
  return a[index];
}

function isIndexed(data) {
  return _.isArray(data) || _.isString(data);
}

function nth(a, index) {
    if(!_.isNumber(index)) fail("インデックスは数値である必要があります");
    if(!isIndexed(a)) fail("インデックス指定可能ではないデータ型はサポートされていません");
    if((index < 0) || (index > a.length -1)) fail("指定されたインデックスは範囲外です");
    return a[index];
}


function second(a) {
  return nth(a, 1);
}

export { nativeNth, isIndexed, nth, second };
