import ko from 'knockout';
import marked from 'marked';


export default class Markdown {
  constructor(params) {
    if (params.file) {
      this.markup = ko.observable();
      this.loading = ko.observable(true);
      this.error = ko.observable();

      System.import(ko.unwrap(params.file))
        .then((content) => {
          this.loading(false);
          this.markup(marked(content));
        })
        .catch((error) => {
          this.loading(false);
          this.error(error.toString());
        })
    }
  }
}
