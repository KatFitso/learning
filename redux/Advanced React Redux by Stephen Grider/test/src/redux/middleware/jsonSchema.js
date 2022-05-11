export default {
  $schema: "http://json-schema.org/draft/2019-09/schema",
  $id: "http://example.com/example.json",
  type: "object",
  default: {},
  title: "Root Schema",
  required: ["Comments", "auth"],
  properties: {
    Comments: {
      type: "array",
      default: [],
      title: "The Comments Schema",
      items: {
        type: "string",
        title: "A Schema",
        examples: ["Test 1", "Test 2"],
      },
      examples: [["Test 1", "Test 2"]],
    },
    auth: {
      type: "boolean",
      default: false,
      title: "The auth Schema",
      examples: [true],
    },
  },
  examples: [
    {
      Comments: ["Test 1", "Test 2"],
      auth: true,
    },
  ],
};
