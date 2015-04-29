### required

> The rule is used to ensure an observable has a value.


<br>
##### 1. Default validation message

```js
var obs = ko.observable();

obs.extend({ required: true });
```

<br>
##### 2. Custom validation message

```js
var obs = ko.observable();

obs.extend({
    required: {
        params: true,
        message: 'This field is required.'
    }
});
```

<br>
##### 3. Conditional validation

The observable is validated if `onlyIf` property returns `true`.

```js
var obs = ko.observable();
var enableValidation = ko.observable(false);

obs.extend({
    required: {
        params: true,        
        // A function / observable to enable or disable validation 
        onlyIf: enableValidation
    }
});
```

<br>
##### 4. Conditional validation with custom validation message

```js
var obs = ko.observable();
var enableValidation = ko.observable(false);

obs.extend({
    required: {
        params: true,
        message: 'This field is required.',
        onlyIf: enableValidation
    }
});
```
