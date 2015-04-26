export default class ConfigurationPage {
  constructor() {
    this.options = [
      {
        name: 'insertMessages',
        description: [
          'If true validation will insert either a <code>&lt;span&gt;</code> element or the',
          'template specified by messageTemplate after any element (e.g. <code>&lt;input&gt;</code>) that',
          'uses a KO value binding with a validated field.'].join(' '),
        defaultValue: 'true',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'decorateInputElement',
        description: [
          'Indicates whether to assign an error class to the <code>&lt;input&gt;</code> tag when',
          'your property is invalid. Note that this was previously called decorateElement, and',
          'this config option was <a href="goo.gl/aD03S0">renamed 2013-11-21</a>.'].join(' '),
        defaultValue: 'false',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'errorMessageClass',
        description: 'The CSS class assigned to validation error messages.',
        defaultValue: 'validationMessage',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'errorElementClass',
        description: [
          'The CSS class assigned to validation error <code>&lt;input&gt;</code>',
          'elements, must have decorateInputElement set to true.'].join(' '),
        defaultValue: 'validationElement',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'errorsAsTitle',
        description: 'Shows tooltips using input ‘title’ attribute. False hides them.',
        defaultValue: 'true',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'errorClass',
        description: [
          'If defined, the CSS class assigned to both <code>&lt;input&gt;</code> and',
          'validation message elements.'].join(' '),
        defaultValue: 'null',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'parseInputAttributes',
        description: [
          'Indicates whether to assign validation rules to your ViewModel using',
          'HTML5 validation attributes.'].join(' '),
        defaultValue: 'false',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'messagesOnModified',
        description: [
          'Indicates whether validation messages are triggered only when properties',
          'are modified or at all times.'].join(' '),
        defaultValue: 'true',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'decorateElementOnModified',
        description: [
          'Indicates whether css error classes are added only when properties are',
          'modified or at all times.'].join(' '),
        defaultValue: 'true',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'messageTemplate',
        description: [
          'The id of the &lt;script type="text/html"&gt;&lt;/script&gt; that you want',
          'to use for all your validation messages.'].join(' '),
        defaultValue: 'null',
        link: 'javascript:alert("No example available yet!")'
      },
      {
        name: 'grouping',
        description: [
          'When using the <code>group</code> or <code>validatedObservable</code> functions:<br>',
          '<ul>',
          '  <li>',
          '    <code>deep</code> indicates whether to walk the ViewModel (or object) recursively,',
          'or only walk first-level properties.',
          '  </li>',
          '</ul>'].join(' '),
        defaultValue: '{ deep: false, observable: true, live: false }',
        link: 'javascript:alert("No example available yet!")'
      }
    ];
  }
}
