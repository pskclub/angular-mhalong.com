import { MhalongcomPage } from './app.po';

describe('mhalongcom App', function() {
  let page: MhalongcomPage;

  beforeEach(() => {
    page = new MhalongcomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
