# Components

This directory contains _custom components_ used throughout the application. They are called
custom because they use a custom definition and loader. See `app/shared/component-loader.js` module 
for implementation details.

Registering a new component requires a `name` and an object with a `component` property. The loader
will use this information to fetch component's resources.

```js
ko.components.register('component-name', { component: 'path-to-component-directory' });
```

The component directory, by convention, searches for two files in a specific format:

- `index.js` - the view model for the component, the exported module value must be a 
class or function
- `index.html` - the template for the component which cannot be empty. If no content is needed,
a simple comment will be enough to prevent a loader error from Knockout library.


**Currently the component loader does not support custom files names.**


For more examples about component registration, `app/components/index.js` module contains 
registration for all available components.

