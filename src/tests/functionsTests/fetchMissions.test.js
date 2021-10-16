import fetchMissions from '../../helpers/fetchMissions';

describe('FetchMissions', () => {
  test('gets the correct data', async () => {
    const data = await fetchMissions();
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data[0].id).not.toBeNull();
  });
});
