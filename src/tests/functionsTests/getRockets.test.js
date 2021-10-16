import getRockets from '../../helpers/getRockets';

describe('Test if getRockets', () => {
  test('fetch the data', async () => {
    const data = await getRockets();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
