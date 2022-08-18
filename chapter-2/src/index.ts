// Implicit Typing
const a = 1 + 2;
const b = a + 3;
const c = {
  apple: a,
  banana: b,
};
const d = c.apple * 4;
console.log(a, b, c, d);

// Explicit Typing
const e: number = 1;
const f: number = e + 2;
const g: { apple: number; banana: number } = {
  apple: e,
  banana: f,
};
const h: number = g.banana * 8;
console.log(e, f, g, h);
