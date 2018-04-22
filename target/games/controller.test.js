
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
    it('matches when containing accepted colors', () => {
        expect(['red', 'blue', 'green', 'yellow', 'magenta']).toEqual(expect.arrayContaining(colors),);
    });
});


describe('randomized color needs to be one of the accepted ones', () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'magenta']
    let randomColor = colors[Math.floor(Math.random()* colors.length)];  
    it('matches when color contains the letter "e", which is common for all accepted colors', () => {
    expect(randomColor).toContain('e');
    });
})    



