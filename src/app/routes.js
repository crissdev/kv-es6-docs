import ruleTypes from './common/rule-types';

export default {
  '/': {
    component: 'app/pages/home'
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
  '/{ruleType}-rules/{name}/': {
    component: 'app/pages/validation-rule-details',
    rules: {
      ruleType: ['native', 'custom', 'community'],
      name: ['required', 'email']
    },
    meta: {
      docTitle: function(route) {
        return [
          route.params.name[0].toUpperCase(),
          route.params.name.substr(1),
          ' Rule'
        ].join('');
      }
    }
  },
  '/localization/': {
    component: 'app/pages/localization',
    meta: {
      docTitle: 'Localization'
    }
  }
};
