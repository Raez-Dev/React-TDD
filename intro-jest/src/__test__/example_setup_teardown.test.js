describe('Setup an Teardown examples', () => {
    beforeAll(() => {
        console.log('Before All');
    })

    afterAll(() => {
        console.log('After All');
    })

    afterEach(() => {
        console.log('After Each');
    })

    beforeEach(() => {
        console.log('Before Each');
    })

    test('Example 1', () => {
        expect(true).toBe(true);
    })

    test('Example 2', () => {
        expect(true).toBe(true);
    })



})