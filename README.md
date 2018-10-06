# Flow JS types for ECMAScript decorators
## *Beware* - experimental technology
Please be aware that at the time of writing, [ECMAScript decorators] are *an experimental technology* which has yet to be ratified.  It is subject to change and breakage.

## This repository
This repository contains [Flow JS] types which are useful for working with **decorators**, a technology which will likely be added to a future JavaScript/ECMAScript version.

```js
// Adds a field in addition to the decorated one, which gets the value in a sassy way
function mySassyDecorator(descriptor : FieldDescriptor<string>) : FieldOutputDescriptor<string,mixed> {
    return {
        ...descriptor,
        extras: [
            {
                kind: 'field',
                key: descriptor.key + 'WithSass',
                placement: 'prototype',
                descriptor: {
                    get: () => 'Yo, it\'s ' + this[descriptor.key],
                }
            }
        ]
    }
}
```

## Specification version
Because decorators are an evolving specification (a moving target), it is important to note the version for which this library was created.

This library targets the **[Babel]** [decorator plugin] `@babel/plugin-proposal-decorators` version **7.1.0**.

[ECMAScript decorators]: https://github.com/tc39/proposal-decorators/
[Flow JS]: https://flow.org/
[Babel]: https://babeljs.io/
[decorator plugin]: https://www.npmjs.com/package/@babel/plugin-proposal-decorators