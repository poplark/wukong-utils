import getTag, { funcTag } from './base/getTag';

/*
 * function() {}
 * () => {}
 * new Function()
 */
// TODO - AsyncFunction, GeneratorFunction, Proxy
function isFunction(val) {
  return 'function' === typeof val && val instanceof Function;// && getTag(val) === funcTag;
}

export default isFunction;
