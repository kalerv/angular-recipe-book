import { AngularrecipebookPage } from './app.po';

describe('angularrecipebook App', () => {
  let page: AngularrecipebookPage;

  beforeEach(() => {
    page = new AngularrecipebookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
