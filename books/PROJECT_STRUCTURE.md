# 📚 Books Project - 项目结构说明

## 📁 项目目录结构

```
react/books/
├── src/                          # 源代码目录
│   ├── index.js                  # 应用入口文件
│   ├── index.css                 # 全局样式
│   ├── App.js                    # 主应用组件（状态管理中心）
│   └── components/               # 组件目录
│       ├── BookList.js           # 书籍列表组件
│       ├── BookShow.js           # 单个书籍展示组件
│       ├── BookEdit.js           # 书籍编辑组件
│       └── BookCreate.js         # 书籍创建组件
├── db.json                       # JSON Server 数据库文件
├── api.http                      # API 测试文件
├── package.json                  # 项目配置和依赖
└── vite.config.js                # Vite 构建配置
```

---

## 🎯 各模块职责详解

### 1. **index.js** - 应用入口
**职责：**
- 渲染 React 应用的根组件
- 将 `<App />` 挂载到 DOM 的 `#root` 元素上
- 导入全局样式

**关键代码：**
```javascript
const root = ReactDOM.createRoot(el);
root.render(<App />);
```

---

### 2. **App.js** - 主应用组件（状态管理中心）
**职责：**
- ✅ **管理全局状态**：使用 `useState` 管理 `books` 数组
- ✅ **数据获取**：组件加载时从 API 获取所有书籍（`fetchBooks`）
- ✅ **CRUD 操作**：
  - `handleCreateBook` - 创建新书籍（POST）
  - `editBookById` - 编辑书籍（PUT）
  - `deleteBookById` - 删除书籍（DELETE）
- ✅ **传递 props**：将数据和回调函数传递给子组件

**数据流：**
```
App (状态中心)
  ├─ books state: [{id: 1, title: "..."}, ...]
  ├─ handleCreateBook → BookCreate
  ├─ deleteBookById → BookList → BookShow
  └─ editBookById → BookList → BookShow → BookEdit
```

**API 调用：**
- `GET http://localhost:3001/books` - 获取所有书籍
- `POST http://localhost:3001/books` - 创建书籍
- `PUT http://localhost:3001/books/:id` - 更新书籍
- `DELETE http://localhost:3001/books/:id` - 删除书籍

---

### 3. **BookList.js** - 书籍列表组件
**职责：**
- ✅ **渲染列表**：接收 `books` 数组，遍历渲染多个 `BookShow` 组件
- ✅ **传递 props**：将 `onDelete` 和 `onEdit` 回调传递给每个 `BookShow`

**Props：**
- `books` - 书籍数组（来自 App）
- `onDelete` - 删除回调函数（来自 App）
- `onEdit` - 编辑回调函数（来自 App）

**关键代码：**
```javascript
const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} onDelete={onDelete} onEdit={onEdit} />
});
```

---

### 4. **BookShow.js** - 单个书籍展示组件
**职责：**
- ✅ **显示书籍信息**：显示书籍标题和随机图片
- ✅ **管理编辑状态**：使用 `showEdit` state 控制是否显示编辑表单
- ✅ **处理用户交互**：
  - 点击 "Edit" 按钮 → 切换编辑模式
  - 点击 "Delete" 按钮 → 调用 `onDelete` 删除书籍
- ✅ **条件渲染**：根据 `showEdit` 显示标题或编辑表单

**Props：**
- `book` - 单个书籍对象 `{id, title}`
- `onDelete` - 删除回调函数
- `onEdit` - 编辑回调函数

**状态管理：**
- `showEdit` - 控制是否显示编辑表单

**子组件：**
- `BookEdit` - 编辑表单组件（条件渲染）

---

### 5. **BookEdit.js** - 书籍编辑组件
**职责：**
- ✅ **编辑表单**：提供输入框让用户修改书籍标题
- ✅ **本地状态管理**：使用 `useState` 管理输入框的值
- ✅ **提交编辑**：表单提交时调用 `clickSubmit` 回调

**Props：**
- `book` - 要编辑的书籍对象
- `clickSubmit(id, newTitle)` - 提交编辑的回调函数

**数据流：**
```
用户输入 → setTitle → handleSubmit → clickSubmit(id, title) → BookShow → App.editBookById
```

---

### 6. **BookCreate.js** - 书籍创建组件
**职责：**
- ✅ **创建表单**：提供输入框让用户输入新书籍标题
- ✅ **本地状态管理**：使用 `useState` 管理输入框的值
- ✅ **提交创建**：表单提交时调用 `onCreate` 回调，然后清空输入框

**Props：**
- `onCreate(title)` - 创建书籍的回调函数

**数据流：**
```
用户输入 → setTitle → handleSubmit → onCreate(title) → App.handleCreateBook → API POST
```

---

## 🔄 组件层级关系

```
index.js
  └─ App (状态管理中心)
      ├─ BookList (列表容器)
      │   └─ BookShow (单个书籍)
      │       └─ BookEdit (编辑表单 - 条件渲染)
      └─ BookCreate (创建表单)
```

---

## 📊 数据流向图

### 创建书籍流程：
```
用户输入 → BookCreate → onCreate(title) → App.handleCreateBook → 
API POST → 更新 books state → BookList 重新渲染
```

### 编辑书籍流程：
```
用户点击 Edit → BookShow 切换 showEdit → 显示 BookEdit → 
用户输入 → BookEdit.clickSubmit → BookShow.clickSubmit → 
App.editBookById → API PUT → 更新 books state → BookList 重新渲染
```

### 删除书籍流程：
```
用户点击 Delete → BookShow.handleDeleteClick → App.deleteBookById → 
API DELETE → 更新 books state → BookList 重新渲染
```

---

## 🗄️ 其他文件

### **db.json**
- JSON Server 的数据库文件
- 存储所有书籍数据
- 格式：`{ "books": [{id, title}, ...] }`

### **api.http**
- API 测试文件（用于 VS Code REST Client 扩展）
- 包含 GET、POST、PUT、DELETE 请求示例

### **package.json**
- 项目依赖和脚本配置
- `npm run dev` - 同时启动 json-server 和 Vite
- `npm run server` - 只启动 json-server
- `npm run start` - 只启动 Vite

---

## 🎨 关键概念

### 1. **Props 向下传递，事件向上传递**
- 数据（props）从父组件流向子组件
- 事件（回调函数）从子组件流向父组件

### 2. **状态提升（Lifting State Up）**
- `books` 状态在 `App` 组件中管理
- 所有子组件通过 props 访问和修改数据

### 3. **条件渲染**
- `BookShow` 根据 `showEdit` 状态决定显示标题还是编辑表单

### 4. **受控组件（Controlled Components）**
- `BookCreate` 和 `BookEdit` 的输入框都是受控组件
- 值由 React state 控制，通过 `onChange` 更新

---

## 🚀 快速参考

| 组件 | 主要职责 | 关键 Props | 关键 State |
|------|---------|-----------|-----------|
| **App** | 状态管理、API 调用 | - | `books` |
| **BookList** | 渲染列表 | `books`, `onDelete`, `onEdit` | - |
| **BookShow** | 显示单个书籍 | `book`, `onDelete`, `onEdit` | `showEdit` |
| **BookEdit** | 编辑表单 | `book`, `clickSubmit` | `title` |
| **BookCreate** | 创建表单 | `onCreate` | `title` |

---

## 💡 提示

- **修改数据时**：总是通过 App 组件的方法，不要直接修改 state
- **添加新功能**：考虑数据应该在哪里管理（通常是在 App）
- **调试时**：使用 React DevTools 查看组件树和 props
- **API 调用**：都在 App.js 中，保持数据流清晰

