// Copyright (c) 2012 Ecma International.  All rights reserved.
// Ecma International makes this code available under the terms and conditions set
// forth on http://hg.ecmascript.org/tests/test262/raw-file/tip/LICENSE (the
// "Use Terms").   Any redistribution of this code must retain the above
// copyright and this notice and otherwise comply with the Use Terms.

/*---
es5id: 15.2.3.7-6-a-73
description: >
    Object.defineProperties will not throw TypeError if P.configurable
    is false, P.writalbe is false, P.value is undefined and
    properties.value is undefined (8.12.9 step 10.a.ii.1)
includes: [propertyHelper.js]
---*/


var obj = {};

Object.defineProperty(obj, "foo", { 
    value: undefined, 
    writable: false, 
    configurable: false 
});

Object.defineProperties(obj, {
    foo: {
        value: undefined
    }
});
verifyEqualTo(obj, "foo", undefined);

verifyNotWritable(obj, "foo");

verifyNotEnumerable(obj, "foo");

verifyNotConfigurable(obj, "foo");
