
# E-commerce Backend







## API Reference

## Base URL
`https://e-commerce-backend-dx55.onrender.com`

#### Create Account

```http
  POST user/registation
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
  get /user/login
```

| body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `email` | `string` | **Required**.|
| `password` | `string` | **Required**.|
