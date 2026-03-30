# 使用 Node 20
FROM node:20

# 工作目录
WORKDIR /app

# 拷贝代码
COPY . .

# 安装依赖
RUN npm install

# 构建
RUN npm run build

# 安装一个静态服务器
RUN npm install -g serve

# 启动
CMD ["serve", "-s", "dist", "-l", "3000"]