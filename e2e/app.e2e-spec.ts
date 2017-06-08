import { CountitPage } from './app.po';

describe('countit App', () => {
  let page: CountitPage;

  beforeEach(() => {
    page = new CountitPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
