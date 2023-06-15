# NDArray Creation

You can create an NDArray using one of the following ways:

- From a PHP array
- Using one of the initialization methods like `NDArray::ones`

## Convert PHP Array to NDArray
In the example below we will create a matrix of size `2 x 2` from an array in PHP
```php 
use \NDArray as nd;

$ndarray = new nd([[1, 2], [3, 4]]);
```

## Creating NDArray with initializers

You can also use one of several available initialization methods, below we will initialize a `2 x 4 x 4` `NDArray` 
full of ones.

```php 
<?php
use \NDArray as nd;

$ndarray = nd::ones([2, 4, 4]);
print_r($ndarray);
```
```php @title="Output"
[[[1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]],
 [[1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1],
  [1, 1, 1, 1]]]
```
