import { AngularProjPage } from './app.po';

describe('angular-proj App', () => {
  let page: AngularProjPage;

  beforeEach(() => {
    page = new AngularProjPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
