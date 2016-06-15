'use strict';

module.exports.get = function $get(target, path, defaultValue) {
    if (!target || !path) return false;

    function _get(v){return typeof v === 'function' ? v() : v;}

    path = path.split('.');
    var l = path.length, i = 0, p = '';
    for (; i < l; ++i) {
        p = path[i];
        if (target.hasOwnProperty(p)) target = target[p];
        else return _get(defaultValue);
    }
    return _get(target);
};
