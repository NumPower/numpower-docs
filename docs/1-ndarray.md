# The NDArray Object

Our library implements the `NDArray` object, this object works like an Array and is the object used by default
in the arguments of NumPower operations.

```php 
<?php
use \NDArray as nd;

$a = nd::array([[1, 2], [3, 4]]);
print_r($a); // or echo $a;
```
```php @title="Output"
[[1, 2],
 [3, 4]]
```

## Converting back to a PHP array

To use your NDArray in other PHP libraries, you can convert your NDArrays to PHP arrays by calling the `toArray` method:

```php 
<?php

$a = new NDArray([[1, 2], [3, 4]]);
print_r($a->toArray());
```
```php @title="Output"
Array
(
    [0] => Array
        (
            [0] => 1
            [1] => 2
        )

    [1] => Array
        (
            [0] => 3
            [1] => 4
        )

)
```

## Single Precision Float

Unlike the PHP runtime, which uses double precision, NDArrays use single precision floats by default. 
This significantly increases the speed of some operations and reduces RAM consumption by up to 2 times compared to 
an array using PHP arrays.

On the other hand, remember that you will lose precision when converting a PHP array to an NDArray. 
This is generally not an issue for most use cases.

## Multi-Type Support

Currently the only supported type is the `float32` type, however, NDArray has been developed internally to support multi-types
in the future. We will work to implement support for other types.

:::note

We'll work on implementing smaller types like half precision floats first.

:::