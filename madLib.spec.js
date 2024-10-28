// TEST FILE
// Make sure to put a script on package.json to make `npm t` work

const path = require('path');
const ScoreCounter = require('score-tests');
const {
  madLib
} = require(`./madLib.js`);

const testSuiteName = 'madLib Tests';
// sets up scores.json file
const scoresDir = path.join(__dirname,'scores');
const scoreCounter = new ScoreCounter(testSuiteName, scoresDir);

describe(testSuiteName, () => {
  // TEST CASE 1:
  it('Returns a string using all the params...', () => {
    // so u can't hardcode and pass
    // unless u have astronomical luck
 // random string of length 8
    const profession = Math.random().toString(36).substring(2,10)+'-profession';
    // random string of length 5
    const name = Math.random().toString(36).substring(2,7)+'-name';
    // random strings of length 4 and 10 with a ' ' (space) in between
    const activity = Math.random().toString(36).substring(2,12)+'-activity';

    const result = madLib(profession, name, activity, true);
    // expect(result).toMatch(new RegExp("(?=" + profession + ")(?=" + name + ")(?=" + activity + ")"));
    expect(result).toContain(profession);
    expect(result).toContain(name);
    expect(result).toContain(activity);

    // adds to score
    scoreCounter.correct(expect);
  });

  // TEST CASE 2:
  it('Returns different results based on the flag...', () => {
    expect(madLib('a','b','c', true) === madLib('a','b','c', false)).toBeFalsy();

    // adds to score
    scoreCounter.correct(expect);
  })
  
  // compiles total scores
  beforeEach(() => scoreCounter.add(expect));
  afterAll(scoreCounter.export);
})