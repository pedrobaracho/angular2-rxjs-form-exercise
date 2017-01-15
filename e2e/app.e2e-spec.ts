import { Angular2RxjsFormExercisePage } from './app.po';

describe('angular2-rxjs-form-exercise App', function() {
  let page: Angular2RxjsFormExercisePage;

  beforeEach(() => {
    page = new Angular2RxjsFormExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
