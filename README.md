# CoderHub

基于 Koa 框架开发的后端服务项目，提供了一系列 API 接口。

## 项目简介

CoderHub 是一个使用 Koa 框架构建的后端服务项目，旨在提供高效、简洁的 API 接口服务。项目采用了 MVC 架构，使用 mysql2进行数据库操作，支持用户的增删改查等功能。

## 功能特性

- 用户注册、登录、信息管理
- 动态的发布、编辑、删除
- 评论的添加、删除
- 支持文件上传
- 基于 JWT 的用户认证

## 技术栈

- Node.js
- Koa
- MySQL
- JWT（JSON Web Token）

## 目录结构
- `src/app/`：应用初始化相关代码
- `src/config/`：配置文件
- `src/controller/`：控制器层，处理具体的业务逻辑
- `src/middleware/`：自定义中间件
- `src/router/`：路由定义
- `src/service/`：服务层，处理数据操作
- `src/main.js`：项目入口文件
- `.env`：环境变量配置文件
- `coderhub.sql`：数据库初始化脚本

## 环境要求

- Node.js >= 16.x
- MySQL >= 8.0

1. 克隆项目到本地：
   ```bash
   git clone https://github.com/cheeseburgertony/coderhub.git
   cd coderhub

2. 安装依赖：
   ```bash
   复制代码
   npm install

3. 配置环境变量：
   在项目根目录下的 .env 文件中，配置主机端口信息
    ```env
    SERVER_HOST=http://localhost
    SERVER_PORT=8000

4. 初始化数据库：
   使用 coderhub.sql 脚本在 MySQL 中创建数据库和相关表：
    ```bash
    mysql -u root -p < coderhub.sql

5. 启动项目：
   ```bash
   npm run start
   ```
   服务器将运行在 http://localhost:8000。
