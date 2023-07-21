# Iterating
NDArray does implement the `Traversable` interface. You can iterate over an NDArray as you would a PHP array.

```php
<?php
$a = new NDArray([[1, 2], [3, 4]]);

foreach($a as $row) {
    echo("\nRow\n");
    print_r($row);
}
```
```php @title="Output"
Row
[1, 2]

Row
[3, 4]

```
When you iterate, slice or reshape an NDArray, NumPower will share the same data buffer as the original array, avoiding copies and memory I/O, reducing RAM consumption. In some cases a copy may be made automatically.


:::note

Iterating over NDArray is not faster than iterating over a PHP array. Mathematical operations with
NDArrays are faster when using one of the methods available in NumPower.

:::