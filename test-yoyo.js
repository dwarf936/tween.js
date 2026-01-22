import TWEEN from './dist/tween.esm.js'

// Test case: Tween relative positive value, with yoyo
const obj = {x: 0}
const t = new TWEEN.Tween(obj)

t.to({x: '+100'}, 1000)
t.repeat(1)
t.yoyo(true)
t.start(0)

console.log('Testing Tween relative positive value, with yoyo:')
t.update(500)
console.log('At 500ms:', obj.x)
t.update(1000)
console.log('At 1000ms:', obj.x)
t.update(1500)
console.log('At 1500ms:', obj.x)
t.update(2000)
console.log('At 2000ms:', obj.x)

// Expected: 50, 100, 50, 0
console.log('Expected: 50, 100, 50, 0')
