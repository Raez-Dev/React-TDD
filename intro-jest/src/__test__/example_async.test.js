//Callbacks
const asyncCallback = (cb) => {
    setTimeout(() => {
        cb(true);
    }, 1000);
}

describe('Callbacks', () => {
    test('Example of async with callbacks', (done) => {
        asyncCallback((result) => {
            expect(result).toBe(true);
            done();
        })

    })

})

//Promises
const asyncPromises = () => new Promise((resolve) => resolve(true));

describe('Promises', () => {
    test('Example of async with promises', () => {
        return asyncPromises().then((result) => {
            expect(result).toBe(true);
        })

    })

    test('Example of async - await', async() => {
        const result = await asyncPromises();
        expect(result).toBe(true);

    })

})