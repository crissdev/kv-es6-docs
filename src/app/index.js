import ko from 'knockout';
import kv from 'knockout.validation';
import * as router from './shared/router';
import routes from './routes';
import 'twbs/bootstrap';
import hljs from 'highlight.js';
import marked from 'marked';


// Markdown setup
hljs.configure({useBR: true});
marked.setOptions({
  highlight: function(code, lang, callback) {
    return hljs.highlightAuto(code, ['markdown', 'js', 'html', 'sh']).value;
  }
});


// Knockout component loader required for custom components (using SystemJS)
import componentLoader from './shared/component-loader';
ko.components.loaders.unshift(componentLoader);


// Initialize Validation plugin
kv.init({
  errorMessageClass: 'has-error',
  errorsAsTitle: false
});


// Register routes
router.registerRoutes(routes);


// Register components
import * as components from './components/index';
components.register();


// Bootstrap the application
ko.applyBindings({});
