const Rover = require('./Rover')
       
function moving(xLimit, yLimit, startX, startY, startDir, directions) {
    const rover = new Rover(startX, startY, startDir); 
    rover.StartMoving(xLimit, yLimit, directions); 
    const {X, Y, Direction} = rover; 
    return [X, Y, Direction]
}

test(`Rover starting at "1 2 N" moving with LMLMLMLMM expected: 1, 3, N`, () => {
    expect(moving(5, 5, 1, 2, 'N', 'LMLMLMLMM')).toStrictEqual([1, 3, 'N']);
});

test(`Rover starting at "3 3 E" moving with MMRMMRMRRM expected: 5, 1, E`, () => {
    expect(moving(5, 5, 3, 3, 'E', 'MMRMMRMRRM')).toStrictEqual([5, 1, 'E']);
});

test(`Rover starting at "1 1 N" moving with MMRM expected: 2, 3, E`, () => {
    expect(moving(5, 5, 1, 1, 'N', 'MMRM')).toStrictEqual([2, 3, 'E']);
});

test(`Rover starting at "1 1 N" moving with R expected: 1, 1, E`, () => {
    expect(moving(5, 5, 1, 1, 'N', 'R')).toStrictEqual([1, 1, 'E']);
});

test(`Rover starting at "1 1 N" moving with L expected: 1, 1, W`, () => {
    expect(moving(5, 5, 1, 1, 'N', 'L')).toStrictEqual([1, 1, 'W']);
});

test(`Rover starting at "1 1 N" moving with LL expected: 1, 1, S`, () => {
    expect(moving(5, 5, 1, 1, 'N', 'LL')).toStrictEqual([1, 1, 'S']);
});

test(`Rover starting at "1 1 N" moving with "empty directions" expected: 1, 1, N`, () => {
    expect(moving(5, 5, 1, 1, 'N', '')).toStrictEqual([1, 1, 'N']);
});