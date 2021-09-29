//k6 use some strange structure - see why 
//dummy check implementation
let check = (value, checks) => {
  for (let c in checks) {
    console.log(`${c} => ${checks[c].call(this, value)}`);
  }
}
//response
let res = "res";
check(res, {
  'should be true': (res) => res === "res",
  'a a': () => true
});
