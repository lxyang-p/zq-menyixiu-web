# 枣强卷帘门维修服务网站 (za-menyixiu-web)

这是一个使用 React + Vite 构建的本地化服务展示网站。主要用于承载“枣强门壹修”相关的卷帘门维修服务信息，并针对百度、谷歌以及 AI 搜索引擎进行了 SEO 优化。

## 🛠️ 技术栈

- 框架：[React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- 样式：原生 CSS (移动端优先设计，全面响应式)
- 部署：已预配 `vercel.json`，可无缝部署至 Vercel

## 📂 项目结构

```text
├── index.html        # 入口文件（包含所有 SEO meta 标签和 JSON-LD 数据）
├── src/
│   ├── main.jsx      # React 初始化代码
│   ├── App.jsx       # 核心单页组件（包含 Header、Hero、Services、Knowledge、Trust、Footer）
│   └── index.css     # 全局样式控制与设计系统CSS变量
├── public/           # 静态资源存放目录 (图片、SEO图标等)
└── vercel.json       # Vercel 部署配置（SPA 路由重写）
```

## ⚠️ 本地运行须知（必看）

由于当前所在的特定 macOS 目录权限具有极其严格的 SIP (System Integrity Protection) 限制或沙盒挂载限制，这导致 **npm 直接在这里安装依赖（创建嵌套的 `node_modules` 文件夹）时会报 `EPERM` 或 `Operation not permitted` 错误**，所以您在项目根目录运行 `npm run dev` 会提示 `sh: vite: command not found`。

### 替代方案：在 `/tmp` 目录中运行 (仅针对本地测试)

为了绕过该系统权限问题进行本地预览，您可以将本项目代码拷贝到 `/tmp` 临时目录下运行：

```bash
# 1. 拷贝代码到不受限制的 /tmp 目录
cp -r /Users/zhihu/project/template/frp-go/dev/za-menyixiu-web /tmp/za-menyixiu-web-dev
cd /tmp/za-menyixiu-web-dev

# 2. 安装依赖并启动开发服务器
npm install
npm run dev
```

> **注意：部署到生产环境（如 Vercel, Netlify）由于它们提供干净的云端构建容器，不受此本地系统的限制影响，直接关联 GitHub 仓库即可自动构建部署。**

## 🚀 部署到 Vercel

1. 将此项目推送到你的 GitHub 仓库中。
2. 登录 [Vercel](https://vercel.com/) 并点击 **Add New... > Project**。
3. 导入您刚刚推送的 GitHub 仓库。
4. Vercel 会自动识别出 Vite 框架，无需修改配置，直接点击 **Deploy**。
5. 等待部署完成，即可获得在公网访问的链接，之后你可以绑定你的自定义域名。

## 📝 内容修改指南

如果你需要修改网站内的文字、价格或是文章，可以直接编辑 `src/App.jsx`。
所有内容（如手机号 `PHONE`，主营服务数组 `services` 和文章列表 `articles`）都定义在文件顶部的静态数据区域，非常易于修改。
