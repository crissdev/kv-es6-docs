import ko from 'knockout';
import ruleTypes from '../../common/rule-types';


var nativeRules = [];
nativeRules.push({
  name: 'required',
  description: 'The rule is used to ensure an observable has a value.'
});

var customRules = [];
var communityRules = [];

var rules = {
  native: nativeRules,
  custom: customRules,
  community: communityRules
};


//
// Display a list of validation rules
//
export default class ValidationRulesPage {
  constructor(routeParams) {
    this.ruleType = ko.observable(routeParams.ruleType);
    this.title = ruleTypes[routeParams.ruleType] + ' Rules';
    this.rules = ko.observableArray(rules[routeParams.ruleType]);
  }
}
