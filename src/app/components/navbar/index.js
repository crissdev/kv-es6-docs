import ko from 'knockout';
import {currentRoute} from '../../shared/router';


export default class Navbar {
  constructor() {
    this.state = ko.computed(function() {
      var location = currentRoute().location;

      if (location) {
        if (location.indexOf('configuration/') > -1) {
          return 'configuration';
        }
        if (location.indexOf('native-rules/') > -1) {
          return 'native-rules';
        }
        if (location.indexOf('custom-rules/') > -1) {
          return 'custom-rules';
        }
        if (location.indexOf('community-rules/') > -1) {
          return 'community-rules';
        }
        if (location.indexOf('localization/') > -1) {
          return 'localization';
        }
      }
      return '';
    });
    this.title = 'Knockout-Validation Docs'
  }
}
