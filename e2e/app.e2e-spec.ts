import { SecondPage } from './app.po';

describe('second App', () => {
  let page: SecondPage;

  beforeEach(() => {
    page = new SecondPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
