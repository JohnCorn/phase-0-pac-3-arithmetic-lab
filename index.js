function add(a, b) {
    return a + b;
  }

  function subtract(a, b) {
    return a - b;
  }

  function multiply(a, b) {
    return a * b;
  }

  function divide(a, b) {
    return a / b;
  }

  function increment(a) {
    a++;
    return (a);
  }

  function decrement(a) {
    a--
    return a;
  }

  function makeInt(n) {
    let m = `${n}`;
    m = parseInt(m, 10);

    return (m)
  }

  function preserveDecimal(n){
    let m = `${n}`;
    m = parseFloat(`${n}`);

    return (m);
  }