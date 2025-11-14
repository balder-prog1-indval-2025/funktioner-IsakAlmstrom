function sum3(tal1: number, tal2: number, tal3: number) {
  return tal1 + tal2 + tal3;
}
let x = +(await read("Tal 1: "));
let y = +(await read("Tal 2: "));
let z = +(await read("Tal 3: "));

write(sum3(x, y, z));

/* function dist(tal1: number, tal2: number) {
  if (tal1 - tal2 < 0) {
    return -1 * (tal1 - tal2);
  }
  return tal1 - tal2;
}
let x = +(await read("Tal 1: "));
let y = +(await read("Tal 2: "));

write(dist(x, y)) */

/* function dist2d(tal1: number, tal2: number, tal3: number, tal4: number) {
  return Math.sqrt((tal1 - tal2) ** 2 + (tal3 - tal4) ** 2);
}
let x1 = +(await read("x1: "));
let x2 = +(await read("x2: "));
let y1 = +(await read("y1: "));
let y2 = +(await read("y2: "));

write(dist2d(x1, x2, y1, y2));
 */

/* function ascending(tal1: number, tal2: number, tal3: number, tal4: number) {
  if (tal1 <= tal2 && tal2 <= tal3 && tal3 <= tal4) {
    return true;
  } else {
    return false;
  }
}

let a = +(await read("Tal 1: "));
let b = +(await read("Tal 2: "));
let c = +(await read("Tal 3: "));
let d = +(await read("Tal 4: "));
write(ascending(a, b, c, d)); */

/* function min(...numbers: Array<number>) {
  let n = Math.max(...numbers);
  for (let v of numbers) {
    if (v < n) {
      n = v;
    }
  }
  return n;
} */

/* function produkt(list: Array<number>) {
  let n = 1;
  for (let v of list) {
    n *= v;
  }
  return n;
}

write(produkt([1, 2, 3, 4, 5, 6, 7])); */
/* 
function includes(tal: number, list: number[]) {
  for (let v of list) {
    if (tal == v) {
      return true;
    }
  }
  return false;
}

write(includes(3, [5, 7, 2]));
write(includes(3, [5, 7, 3]));
 */

/* function visaRepeterat(ord: string, antal: number) {
  for (let i = 0; i < antal; i++) {
    write(ord);
  }
}
visaRepeterat("Hej", 3);
visaRepeterat("Balder", 2);

function visaUppdelat(ord: string, skiljetecken: string) {
  for (let v of ord) {
    if (v == skiljetecken) {
      write("\n", "");
    } else {
      write(v, "");
    }
  }
  write();
}

visaUppdelat("Apple/Microsoft/Google", "/");
visaUppdelat("a-b-c-d", "-");

function antalMellanslag(mening: string) {
  let ms = 0;
  for (let v of mening) {
    if (v == " ") {
      ms++;
    }
  }
  return ms;
}

let antal1 = antalMellanslag("Hej på dig!");
write(antal1);

let antal2 = antalMellanslag("Balder");
write(antal2); */

/* function sameChar(input: string) {
  let f = input[0];
  let samma = true;
  for (let v of input) {
    if (v != f) {
      samma = false;
    }
  }
  return samma;
}
write(sameChar("aaaaaaaaaa")); 
write(sameChar("bbbbcc"));  */

/* function isPrime(tal: number) {
  for (let i = 2; i < tal; i++) {
    if (tal % i == 0) {
      return false;
    }
  }
  if (tal == 1) {
    return false;
  }
  return true;
}

write(isPrime(1)); // false
write(isPrime(17)); // true
 */

/* let grad = +(await read("Grad: "));
const alfabet = "abcdefghijklmnopqrstuvwxyzåäö";
let koefficienter = [];

for (let i = 0; i <= grad; i++) {
  let k = +(await read(alfabet[i] + "="));
  koefficienter.push(k);
}

function f(x: number) {
  let n = 0;
  for (let i = grad; i >= 0; i--) {
    //console.log(i);
    n += koefficienter[grad - i] * x ** i;
  }
  return n;
}

write("f(x)=", "");

for (let i = 0; i <= grad; i++) {
  const koeff = koefficienter[i];
  const g = grad - i;
  if (g == 0) {
    write(koeff);
  } else if (g == 1) {
    write(koeff + "x+", "");
  } else {
    write(koeff + "x^" + g + "+", "");
  }
}

await sleep(1000);

_io.hidden = true;
_canvas.hidden = false;

const x_max = 5;
const y_max = 5;

line(0, H / 2, W, H / 2, "black", 2);
line(W / 2, 0, W / 2, H, "black", 2);

ctx.translate(W / 2, H / 2);

let punkter = [];

for (let x = -W / 2; x < W / 2; x++) {
  let x_värde = x_max * (x / (W / 2));
  let y_värde = -f(x_värde);
  let y_koordinat = y_värde * (H / (2 * y_max));

  punkter.push([x, y_koordinat]);
}

for (let i = 1; i < punkter.length; i++) {
  let x1 = punkter[i - 1][0];
  let y1 = punkter[i - 1][1];
  let x2 = punkter[i][0];
  let y2 = punkter[i][1];
  await sleep(5);
  line(x1, y1, x2, y2, "red", 2);
} */

/* function bounce(n: number) {
  write(n, " ");
  if (n > 0) {
    bounce(n - 1);
    write(n, " ");
  }
}

bounce(3); */
