import { AngularServiceAppPage } from './app.po';

describe('angular-service-app App', () => {
  let page: AngularServiceAppPage;

  beforeEach(() => {
    page = new AngularServiceAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
