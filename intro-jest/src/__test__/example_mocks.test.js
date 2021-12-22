describe('Mock', () => {
    test('First example', () => {

        const myMock = jest.fn().mockReturnValueOnce(true);
        const result = myMock();

        expect(myMock).toHaveBeenCalledTimes(1);

        expect(result).toBe(true);

    })
})