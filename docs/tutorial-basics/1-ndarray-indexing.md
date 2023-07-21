# Indexing & Slicing

## Indexing

Indexing on the NDArray can be treated exactly like a standard array, with a few extras that we'll see next. The simplest way to set 
and return a value from an NDArray is through the standard PHP indexer.

NDArray implements the `ArrayAcess` PHP interface.

```php 
<?php
use \NDArray as nd;

$a = nd::zeros([10, 10]);   // Initialize NDArray of shape (10, 10) full of zeros


echo $a[0][0];      // Get
echo "\n";

$a[0][0] = 1;       // Set
echo $a[0][0];      // Get

```
```php @title="Output" 
0
1
```

:::note

The `__offsetGet()` method will return a slice of the root `NDArray`, 
a memory copy will only be made if the slice in question is changed.
:::

## Slicing 


Python-inspired slicing can be used with NDArrays by calling the slice() method of any NDArray object.

The slice is applied per dimension, and each tuple used as an argument represents the slice of a dimension.

```php 
<?php
use \NDArray as nd;

// Create a matrix
$array = nd::array([[1, 2], [3, 4]]);

// Slice the second column of $array
//
// The first tuple [] represents ALL rows
// The second tuple [1, 2] represents start: 1, stop: 2 and step: 1 (default)
$second_column = $array->slice([], [1, 2]);

print_r($second_column);
```
```php @title="Output" 
[[2],
 [4]]
```

:::note

Negative values ​​for start, stop and step are 
not supported yet, but are in the roadmap.

:::

:::danger

Although `print_r` works with the NDArray object, other PHP standard library array 
methods like `array_column` are not compatible with NDArrays.

:::