# Broadcast


We are working to support broadcast, which means that arithmetic operations between NDArrays of different dimensions 
can be used.

There are some rules for this to be valid, below we will only deal with the cases currently implemented, but remember 
that this is a preview and will be updated to support several different shapes.

## Scalar Broadcast 

Arithmetic operations involving an NDArray and a scalar value are always valid. In this case, the scalar 
will be "expanded" to the same dimensions as the NDArray.

```php 
use \NDArray as nd;

// Create a matrix
$array = nd::array([[1, 2], [3, 4]]);

$result = $array * 2; // same as nd::multiply($array, 2);

// Element-wise multiplication of $array * 2
// Same as nd:multiply($array, [[2, 2], [2, 2]]);
print_r($result);
```
```php @title="Output"
[[2, 4],
 [6, 8]]
```


## General Broadcast

In some cases, when the format of matrices is aligned, it is also possible to perform 
arithmetic operations with matrices of different formats and dimensionality.


#### Example 1
```php 
use \NDArray as nd;

$a = nd::array(
    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
);

$result = $a * [1, 2, 3];

echo $result;
```
```php @title="Output"
[[1, 4, 9]
 [4, 10, 18]
 [7, 16, 27]]
```

#### Example 2
```php 
use \NDArray as nd;

$a = nd::array(
    [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
);

$result = $a * [[1], [2], [3]];

echo $result;
```
```php @title="Output"
[[1, 2, 3]
 [8, 10, 12]
 [21, 24, 27]]
```