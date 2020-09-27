describe('Should return a profile', () => {
  it('Should return a profile', async () => {
    const { body, status } = await global.testRequest.get('/p/abc123');
    expect(status).toBe(200);
    expect(body).toBe({});
  });
});
