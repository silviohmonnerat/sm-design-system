// src/index.ts
function isDefined(value) {
  return value !== null && value !== void 0;
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export {
  isDefined,
  sleep
};
