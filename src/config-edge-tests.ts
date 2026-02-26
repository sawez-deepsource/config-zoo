// === v3 DIFF TEST round 2 — config edge case violations ===

// no-var, eqeqeq, no-eval — basic trio
export function basicViolations(input: any) {
  var x = input
  if (x == null) return 'empty'
  var out = eval(x)
  return out
}

// no-console — should NOT flag if config has it off
// (config-zoo's .eslintrc.cjs turns no-console off)
export function logStuff() {
  console.log('this should be allowed by user config')
  console.warn('this too')
}

// no-alert, no-debugger
export function debugMode() {
  debugger
  alert('paused')
}

// prefer-const, no-new-wrappers
export function wrappers() {
  let val = new Boolean(true)
  let str = new String('test')
  return { val: val.valueOf(), str: str.valueOf() }
}

// no-prototype-builtins, dot-notation
export function objectChecks(data: any) {
  const hasId = data.hasOwnProperty('id')
  const name = data['name']
  const role = data['role']
  return { hasId, name, role }
}

// yoda, no-sequences
export function weirdExpressions(code: number) {
  if (0 === code) return 'zero'
  if ('error' === String(code)) return 'error'
  var x = (1, 2, 3)
  return x
}

// no-extend-native
Array.prototype.first = function() {
  return this[0]
}
