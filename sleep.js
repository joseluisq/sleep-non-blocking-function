const time = () => (new Date().getTime())

/** non-blocking sleep function in milliseconds */
async function sleep (delay) {
    const start = time()
    while (time() < start + delay);
}

/** measure execution of one function in milliseconds */
async function measure (fn) {
    const start = time()

    await fn()

    const end = time() - start

    console.log('Execution time: %dms', end)
}

measure(() => sleep(2 * 1e3))

console.log('Execution line no-blocked')
