// custom.d.ts

declare module '*.css' {
  // Use 'any' if you don't need to assert a specific type for the import
  // (which is common for side-effect imports).
  const content: any;
  export default content;
}

// Or, for a simpler side-effect-only import (like in Next.js):
// declare module '*.css';