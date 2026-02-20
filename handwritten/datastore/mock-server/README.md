The mock server code in this folder is used for observing requests that will
be sent to the server. When the server sends back a vague error it is often
because the request it receives is incorrect so it is crucial to have a tool to
view the request in order to know what client library code needs to change.

The steps to follow for using the mock server is:
1. Take a look at `test/try-server.ts` to see how the mock server is used.
2. In the system test you want to debug, change `it` to `it.only` to isolate that test.
3. In this test, surround the code with `startServer(async () => {`
4. Ensure `apiEndpoint: 'localhost:50051'` is passed into the datastore client that is used for this test.
5. If the system test hits an endpoint other than `runQuery` then in `datastore-server.ts`, change `.addService(service, {runQuery: grpcEndpoint})` to `.addService(service, {<<OtherGrpcEndpoint>>: grpcEndpoint})`
6. Set a breakpoint on the line that says `SET A BREAKPOINT HERE` in `datastore-server.ts`
7. Debug with system tests (Enter `npm run system-test -- --inspect` in terminal)


