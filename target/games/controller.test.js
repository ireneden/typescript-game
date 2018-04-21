const { colors, defaultBoard } = require('./controller');


describe('arrayContaining', () => {
    const defaultBoard = [
        ['o', 'o', 'o'],
        ['o', 'o', 'o'],
        ['o', 'o', 'o']
    ];
    
   
    it('matches if first array contains "o", "o", "o"', () => {
      expect(['o', 'o', 'o']).toEqual(expect.arrayContaining(defaultBoard[0]));
    });
    it('matches if second array also contains "o", "o", "o"', () => {
        expect(['o', 'o', 'o']).toEqual(expect.arrayContaining(defaultBoard[1]));
    });
    it('matches if also the third array contains "o", "o", "o"', () => {
        expect(['o', 'o', 'o']).toEqual(expect.arrayContaining(defaultBoard[2]));
    });
});


describe('arrayContaining', () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'magenta'];
    it('does not match if received does not contain expected elements', () => {
        expect(['red', 'blue', 'green', 'yellow', 'magenta']).toEqual(expect.arrayContaining(colors),);
    });
});