import { ScrumPage } from './app.po';

describe('scrum App', function() {
  let page: ScrumPage;

  beforeEach(() => {
    page = new ScrumPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
