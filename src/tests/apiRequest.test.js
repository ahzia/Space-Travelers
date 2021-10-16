import getData from '../api/spacexData';

describe('Get Data from API', () => {
  it('gets the missions data', async () => {
    const data = await getData('Missions');
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data).toHaveLength(10);
    expect(typeof data[1].mission_id).toBe('string');
  });

  it('gets the rockets data', async () => {
    const data = await getData('Rockets');
    expect(data).toBeInstanceOf(Array);
    expect(data[0]).toBeInstanceOf(Object);
    expect(data).toHaveLength(4);
    expect(typeof data[1].id).toBe('number');
  });
});
