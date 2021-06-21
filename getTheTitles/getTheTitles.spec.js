const getTheTitles = require('./getTheTitles')

describe('getTheTitles', () => {
    const books = [
      {
        title: 'Book',
        author: 'Name'
      },
      {
        title: 'Book2',
        author: 'Name2'
      }
    ]

    const games = [
      {
        title: 'Game',
        genre: 'Genre'
      },
      {
        title: 'Game2',
        genre: 'Genre2'
      }
    ]

  test('gets titles', () => {
    expect(getTheTitles(books)).toEqual(['Book','Book2']);
  });
  test('gets game titles', () => {
    expect(getTheTitles(games)).toEqual(['Game', 'Game2']);
  })
});
