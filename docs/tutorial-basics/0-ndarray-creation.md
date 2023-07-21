# NDArray Creation

You can create an NDArray using one of the following ways:

- From a PHP array
- Using one of the initialization methods like `NDArray::ones`
- From a GD image

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


## Creating NDArray with an image

If you want to work with images, NumPower offers a quick way to perform image processing. 
You can initialize an NDArray from a GD image:

```php 
<?php
use \NDArray as nd;

// Use GD to load the image
$originalImage = imagecreatefromjpeg('test_img.jpg');

// Initialize our GD image (1200x1920) NDArray
$image_array = nd::array($originalImage);
print_r($image_array->shape());
```
```php @title="Output"
Array
(
    [0] => 3
    [1] => 1200
    [2] => 1920
)
```
:::note

For now, all images are processed in RGB format, 
we will work to implement other formats like CMYK and ARGB.

:::