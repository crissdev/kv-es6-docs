import ruleTypes from './common/rule-types';
import rulesGroup from './common/rules-group';
import _ from 'underscore.string';


export default {
  '/': {
    component: 'app/pages/home'
  },
  '/{ruleType}-rules/{name}/': {
    component: 'app/pages/validation-rule-details',
    rules: {
      ruleType: ['native', 'custom', 'community'],
      name: (value, request, valuesObj) => {
        var allowedRules = rulesGroup[valuesObj.ruleType];
        return allowedRules.indexOf(valuesObj.name) > -1;
      }
    },
    meta: {
      docTitle: (route) => _.titleize(route.params.name) + ' Rule'
    }
  },
  '/{ruleType}-rules/': {
    component: 'app/pages/validation-rules',
    meta: {
      docTitle: (route) => ruleTypes[route.params.ruleType] + ' Rules'
    },
    rules: {
      ruleType: Object.keys(ruleTypes)
    }
  },
  '/configuration/': {
    component: 'app/pages/configuration',
    meta: {
      docTitle: 'Configuration Options'
    }
  },
  '/localization/': {
    component: 'app/pages/localization',
    meta: {
      docTitle: 'Localization'
    }
  }
};
