import { NgSliderPage } from './app.po';

describe('ng-slider App', () => {
  let page: NgSliderPage;

  beforeEach(() => {
    page = new NgSliderPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
