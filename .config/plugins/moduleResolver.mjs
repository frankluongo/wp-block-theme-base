export const moduleResolver = [
  "module-resolver",
  {
    root: ["./"],
    alias: {
      "#blocks": "./src/scripts/blocks",
      "#parts": "./src/scripts/parts",
      "#templates": "./src/scripts/templates",
    },
  },
];
