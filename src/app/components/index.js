import ko from 'knockout';
import $ from 'jquery';


// Register custom KO components (require a different component loader)
//
export function register() {
  var components = [
    { selector: 'cko-window-title', descriptor: 'app/components/window-title' },
    { selector: 'cko-navbar', descriptor: 'app/components/navbar' },
    { selector: 'cko-view-switch', descriptor: 'app/components/view-switch' },
    { selector: 'fork-me-ribbon', descriptor: 'app/components/fork-me-ribbon' },
    { selector: 'cko-markdown', descriptor: 'app/components/markdown' }
  ];
  for (let {selector, descriptor} of components) {
    ko.components.register(selector, { component: descriptor });
  }
}
