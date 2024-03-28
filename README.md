
# E-commerce Backend







## API Reference

## Base URL
`https://e-commerce-backend-dx55.onrender.com`

#### Create Account

```http
  POST /api/user/registation
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**.|
| `lastname` | `string` | **Required**.|
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|
| `mobile` | `string` | **Required**.|
| `role` | `string` | **Required**.|

#### Login Account

```http
  GET /api/user/login
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|

#### Wishlist

```http
  POST /api/user/wishlist?product_Id=&add=
```

| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `product_Id` | `string` | **Required**.|
| `add` | `Boolean` | **Required**.|



#### Create Product

```http
  POST /api/product/post_Product
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `title` | `string` | **Required**.|
| `description` | `string` | **Required**.|
| `price` | `string` | **Required**.|
| `brand` | `string` | **Required**.|
| `stock` | `string` | **Required**.|
| `category` | `string` | **Required**.|

```http
POST /api/product/edit_Product?id=660513bc73d2b929330542f6
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**.|

| headers | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `Authorization` | `jwt token` | **Required**.|

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `update Object` | `object` | **Required**.|

```http
    POST /api/product/:actions
```
| parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `actions` | `string` | **Required**.`likes/dislikes`|

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `productId` | `string` | **Required**.|
| `userId`  | `String`  | **Required**|

