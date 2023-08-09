import * as handler from "../handler";
import fs from "fs";

// Mock the fs.readFileSync function to provide sample wordlist content
jest.mock("fs", () => ({
  readFileSync: jest.fn(() => "apple\nbanana\ncherry\n"),
}));

test("hello", async () => {
  const event = "event";
  const context = "context";
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    const responseBody = JSON.parse(response.body);
    expect(typeof responseBody.message).toBe("string");
    expect(Array.isArray(responseBody.validWords)).toBe(true);
    expect(responseBody.validWords).toContain("apple");
    expect(responseBody.validWords).toContain("banana");
    expect(responseBody.validWords).toContain("cherry");
  };

  await handler.hello(event, context, callback);
});

test('validWords should not contain duplicates', async () => {
  const event = 'event';
  const context = 'context';
  const callback = (error, response) => {
    expect(response.statusCode).toEqual(200);
    const responseBody = JSON.parse(response.body);
    expect(responseBody.validWords).toEqual(
      [...new Set(responseBody.validWords)] // No duplicates in validWords
    );
  };

  await handler.hello(event, context, callback);
});