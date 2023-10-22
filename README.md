# sg-art-interview

## Online Demo

> 預計 2023/10/23 上午完成

## 專案需求

- Node.js v18
- MongoDB

## 如何啟動後端

參考 `server/.env.example` 設定 MONGO_URI 以及 JWT_SECRET

```bash
yarn install;
cd server;
yarn dev;
```

伺服器會在 http://localhost:3001/api

## 如何啟動前端

```bash
yarn install
cd client
yarn dev
```

Dev Server 會在 http://localhost:3000

- 待辦事項頁面
  http://localhost:3000/
- 登入頁面
  http://localhost:3000/login
- 註冊頁面
  http://localhost:3000/register
