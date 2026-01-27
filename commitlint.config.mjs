const config = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Allow empty scope (scope is optional)
    "scope-empty": [0, "never"],
    // Allow any scope (no restrictions)
    // Users can use any scope they want: feat(blog), feat(shop), etc.
  },
};

export default config;
