# The NDArray Object

Our library implements the `NDArray` object, this object works like an Array and is the object used by default
in the arguments of NumPower operations.

```php 
<?php

$a = new NDArray([[1, 2], [3, 4]]);
print_r($a);
```
```php @title="Output"
[[1, 2],
 [3, 4]]
```

