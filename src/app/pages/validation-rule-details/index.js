import ko from 'knockout';


//
// Display detailed information and usage for a rule
//
export default class ValidationRulePage {
  constructor(routeParams) {
    this.ruleType = ko.observable(routeParams.ruleType);
    this.ruleName = ko.observable(routeParams.name);
    this.resourceUrl = ko.computed(() => {
      var type = this.ruleType();
      var name = this.ruleName();
      return `app/marked/${type}-rules/${name}.md!text`;
    });
  }
}
