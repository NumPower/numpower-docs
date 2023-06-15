# GPU Support

When available through an NVIDIA card with CUDA support, NumPower can store and perform operations on the graphics 
card, this is especially interesting for linear algebra operations on large tensors.

:::info

GPU operations on many occasions can be considerably slower than CPU operations, especially in simple 
operations. There is a cost to using VRAM.

:::

## Copy NDArray to GPU

To copy an `NDArray` to your video card, just use the `gpu()` method. This method will return a new NDArray with 
the data copied to your VRAM.

```php 
<?php
use \NDArray as nd;

$a = nd::ones([10, 10]);

$a_gpu = $a->gpu();
```

In this example we create an NDArray with format (10, 10) full of one. Then we use the `gpu()` method to create 
a **copy** of this NDArray on the GPU.


## Copy NDArray to CPU

In most cases, you will want your NDArray stored in your RAM. To copy an NDArray that is stored in your VRAM (GPU) 
to your RAM (CPU), just use the `cpu()` method.

```php 
<?php
use \NDArray as nd;

$a = nd::ones([10, 10]);

$a_gpu = $a->gpu();

// OPERATIONS

$result = $a_gpu->cpu();

```

## GPU and CPU operations

In operations involving more than one tensor, like `NDArray::add`, both tensors involved must be on the same device. 
Operations between arrays on different devices will raise an exception.

In this first version of NumPower, we want the user to explicitly say where they want to store their data, so 
automatic copies between GPU and CPU are not available.

:::danger

Some GPU-incompatible operations may raise an exception. In these cases the user must copy the tensor to 
the CPU manually using the appropriate method.

:::