# Indexing

Indexing on the NDArray can be treated exactly like a standard array, with a few extras that we'll see next. The simplest way to set 
and return a value from an NDArray is through the standard PHP indexer:

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
