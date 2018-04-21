const { randomColor, defaultBoard } = require('./controller');



describe('arrayContaining', () => {
    const defaultBoard = [
        ['o', 'o', 'o'],
        ['o', 'o', 'o'],
        ['o', 'o', 'o']
    ];
    
   
    it('does not match if received does not contain expected elements', () => {
      expect(['o', 'o', 'o']).toEqual(expect.arrayContaining(defaultBoard[1]));
    });
  });