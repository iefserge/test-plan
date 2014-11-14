## SYNOPSIS
Count assertions and call function at the end

## USAGE

```js
var Plan = require('test-plan');

it('should be able to wait for two events', function(done) {
  var plan = new Plan(2, done);

  setTimeout(function() {
    plan.ok(true);
  }, 20);

  setTimeout(function() {
    plan.ok(true);
  }, 10);
});
```

## LICENSE

MIT
