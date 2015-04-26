### required

> The rule is used to ensure a field has a value.


<br>
##### 1. Default validation message

```js
var obs = ko.observable();

// Use default validation message
obs.extend({ required: true });
```

<br>
##### 2. Custom validation message

```js
var obs = ko.observable();

// Use default validation message
obs.extend({
    required: {
        params: true,
        message: 'This field is required.'
    }
});
```

<br>
##### 3. Conditional validation

```js
var obs = ko.observable();
var enableValidation = ko.observable(false);

// Use default validation message
obs.extend({
    required: {
        params: true,        
        // A simple function or value can be used as well 
        onlyIf: enableValidation
    }
});
```

<br>
##### 4. Conditional validation with custom validation message

```js
var obs = ko.observable();
var enableValidation = ko.observable(false);

// Use default validation message
obs.extend({
    required: {
        params: true,
        message: 'This field is required.',
        // A simple function or value can be used as well 
        onlyIf: enableValidation
    }
});
```
