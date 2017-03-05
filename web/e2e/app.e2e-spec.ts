import { StencilPage } from './app.po';

describe('Stencil App', () => {
  let page: StencilPage;

  beforeEach(() => {
    page = new StencilPage();
  });

  it('should display message saying Stencil', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Stencil');
  });
});
