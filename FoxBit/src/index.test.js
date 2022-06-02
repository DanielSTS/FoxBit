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