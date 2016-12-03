import { Ng2FromTheoryToPracticePage } from './app.po';

describe('ng2-from-theory-to-practice App', function() {
  let page: Ng2FromTheoryToPracticePage;

  beforeEach(() => {
    page = new Ng2FromTheoryToPracticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
