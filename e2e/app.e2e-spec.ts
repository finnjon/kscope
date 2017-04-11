import { KscopePage } from './app.po';

describe('kscope App', () => {
  let page: KscopePage;

  beforeEach(() => {
    page = new KscopePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
