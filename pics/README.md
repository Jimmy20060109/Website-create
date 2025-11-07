# 📸 Pics — 基于 Unsplash 的图片搜索网站

用 React + Vite 构建的轻量图片搜索站点，接入 Unsplash API，支持按关键字搜索网络高清图片。输入想看的主题，一键发现灵感！🌅🔍

> 当前版本已完成 API 接入与搜索流程，图片卡片渲染处于进行中（暂显示结果数量）。欢迎继续迭代～

---

## ✨ 功能特性
- 🔍 关键词搜索 Unsplash 图片
- ⚡️ Vite + React 19 + Axios，开发体验流畅
- 🧩 组件化结构：`SearchBar`、`ImageList`、`ImageShow`
- 📱 计划支持响应式瀑布流布局与懒加载（进行中）

## 🚀 快速开始

前置要求：Node.js ≥ 18

```bash
npm install
npm start
```

默认使用 Vite 本地开发服务器，启动后在浏览器打开：http://localhost:5173

构建与预览：

```bash
npm run build
npm run preview
```

## 🔑 配置 Unsplash API

本项目通过 Unsplash 的 Search Photos 接口获取图片。

1) 获取 Access Key（推荐）：
- 注册/登录 Unsplash Developers：https://unsplash.com/developers
- 创建应用并获取 `Access Key`

2) 快速运行（已有示例 Key）：
- 代码中 `src/api.js` 已写入示例用的 `Client-ID`，便于快速启动与学习；实际项目请替换为你自己的 Key，避免配额与权限问题。

3) 使用环境变量（更安全的做法）：
- 在项目根目录新建 `.env`：

```env
VITE_UNSPLASH_ACCESS_KEY=你的_access_key
```

- 修改 `src/api.js`：

```js
import axios from 'axios';

const accessKey = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const searchImages = async (term) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    headers: {
      Authorization: `Client-ID ${accessKey}`,
    },
    params: { query: term },
  });
  return response.data.results;
};

export default searchImages;
```

提示：Unsplash 的 Access Key 属于「公开可用」的前端 Key，但仍建议通过环境变量管理，便于在不同环境替换并减少误用。

## 🧭 工作原理

- `src/components/SearhBar.js`（拼写：SearhBar）负责输入与提交，触发 `onSubmit(term)`。
- `src/App.js` 中：
  - 使用 `useState` 管理 `images`（确保写法为 `const [images, setImages] = useState([])`）。
  - 在 `handleSubmit` 调用 `searchImages(term)`（见 `src/api.js`），拿到结果后 `setImages(result)`。
  - 将 `images` 传给 `ImageList` 进行展示。
- `src/components/ImageList.js`：当前展示结果数量，计划渲染网格卡片。
- `src/components/ImageShow.js`：用于渲染单张图片（占位中，将在后续迭代）。

## 🗂️ 目录结构

```
src/
  App.js              # 页面与数据流入口
  api.js              # Unsplash API 封装（Axios）
  components/
    SearhBar.js       # 搜索输入与提交（注意拼写）
    ImageList.js      # 图片列表（当前显示数量）
    ImageShow.js      # 单图组件（待完善）
```

## 🛠️ 常见问题

- images 为 undefined 报错？
  - 确认使用数组解构：`const [images, setImages] = useState([])`；
  - 传参时为 `images={images}`，并在组件端做默认值兜底 `function ImageList({ images = [] }) { ... }`。
- 429 / 配额限制：
  - 更换为你自己的 Unsplash Access Key；
  - 避免高频请求，可在搜索时加防抖。
- 网络/CORS 问题：
  - 确保本地网络可访问 Unsplash；检查控制台与 Network 面板日志。

## 🧭 Roadmap（计划）

- ✅ 接入 Unsplash 搜索接口
- 🔄 图片卡片与网格布局（`ImageShow`/`ImageList`）
- ⏳ 懒加载与无限滚动
- 🧽 加载中/错误状态与占位骨架
- 🧭 搜索防抖与历史记录
- 🌗 主题切换与无障碍优化

## 🙏 致谢

- 图片数据由 Unsplash 提供：https://unsplash.com
- 构建工具与库：Vite、React、Axios

—— 祝你浏览愉快，创作顺利！🎉
