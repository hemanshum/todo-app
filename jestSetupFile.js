import { server } from "./mocks/server.js";
import mockAsyncStorage from "@react-native-async-storage/async-storage/jest/async-storage-mock";

// eslint-disable-next-line no-undef
jest.mock("@react-native-async-storage/async-storage", () => mockAsyncStorage);

//Mock Service Worker Setup
// src/setupTests.js
// Establish API mocking before all tests.
beforeAll(() => server.listen());

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());

// Clean up after the tests are finished.
afterAll(() => server.close());
