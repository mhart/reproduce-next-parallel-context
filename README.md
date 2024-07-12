To reproduce this error:

1. Run `npm preview` in one tab.
2. In the next tab `npm run break` (may need to run a couple of times if you observe no errors)
3. Observe `TypeError: Cannot read properties of null (reading 'useContext')` in the logs + 500 internal server error

To show the error is fixed (requires Node.js v22+):

1. Run `npm preview:fixed` in one tab.
2. In the next tab `npm run break`
3. Observe both requests succeed
