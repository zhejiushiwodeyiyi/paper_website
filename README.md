# 论文展示网站使用教程

这是一个基于 [Astro](https://astro.build/) 搭建的单页论文展示网站仓库，适合把论文摘要、核心图表、方法、结果和资源整理成一个可在线访问的 GitHub Pages 页面。

仓库当前已经包含：

- 单页学术展示网站结构
- 论文 PDF、图像、模块数据等静态资源目录
- GitHub Actions 自动构建与 GitHub Pages 自动部署流程

## 1. 项目结构

主要目录和文件如下：

```text
.
├─ src/
│  ├─ components/        # 页面各个模块组件
│  ├─ data/site.ts       # 站点文案与内容主配置
│  ├─ layouts/           # 页面布局
│  ├─ pages/index.astro  # 首页入口
│  └─ styles/            # 全局样式
├─ public/
│  ├─ figs/              # 图片、论文图表
│  ├─ pdfs/              # 论文 PDF
│  ├─ modules/           # 模块分析结果文件
│  └─ acf-cv/            # 其他数据文件
├─ .github/workflows/
│  └─ deploy.yml         # GitHub Pages 自动部署工作流
├─ astro.config.mjs      # Astro 配置
├─ package.json          # 项目依赖与脚本
└─ README.md             # 当前说明文档
```

## 2. 环境要求

建议环境：

- Node.js 20 或 22
- npm 10+

先确认本机版本：

```bash
node -v
npm -v
```

## 3. 本地运行

### 安装依赖

```bash
npm install
```

### 启动开发环境

```bash
npm run dev
```

启动后通常可在本地浏览器打开：

```text
http://localhost:4321
```

## 4. 如何修改网站内容

### 4.1 修改文字内容

主要编辑文件：

- `src/data/site.ts`

这个文件集中管理了页面中的主要文本内容，包括：

- 网站标题和描述
- 顶部导航文本
- 首页主标题与摘要
- Summary / Findings / Methods / Results / Implications 等模块内容
- 术语表和资源区文字

如果你要替换成自己的论文内容，优先修改这个文件。

### 4.2 修改页面结构

如果要改页面模块顺序或新增区块，主要编辑：

- `src/pages/index.astro`
- `src/components/*.astro`

常见情况：

- 想调整页面区块顺序：修改 `src/pages/index.astro`
- 想修改某个模块的 HTML 结构：修改对应组件
- 想改整体样式：修改 `src/styles/global.css`

## 5. 如何替换论文资源文件

### 5.1 替换论文 PDF

默认主论文 PDF 路径：

- `public/pdfs/main.pdf`

如果网站里需要展示补充材料，也可以自行补充：

- `public/pdfs/`

### 5.2 替换图片和图表

把你的论文图片放到：

- `public/figs/`

然后在对应组件或 `src/data/site.ts` 中修改引用路径。

### 5.3 替换分析数据文件

如果页面中需要引用分析结果表格或数据文件，可放到：

- `public/modules/`
- `public/acf-cv/`

## 6. 本地构建

执行：

```bash
npm run build
```

构建完成后，生成的静态文件会输出到：

- `dist/`

其中首页 HTML 为：

- `dist/index.html`

如果要本地预览构建结果，可以执行：

```bash
npm run preview
```

## 7. 发布到 GitHub Pages

仓库已经包含自动部署工作流：

- `.github/workflows/deploy.yml`

默认逻辑是：

1. 向 `main` 分支推送代码
2. GitHub Actions 自动执行 `npm ci`
3. 自动执行 `npm run build`
4. 将 `dist/` 部署到 GitHub Pages

### 首次部署前需要做的事

在 GitHub 仓库页面中：

1. 打开 `Settings`
2. 进入 `Pages`
3. 在 `Build and deployment` 中选择 `GitHub Actions`

如果部署时报错提示环境限制，还需要检查：

1. `Settings`
2. `Environments`
3. 打开 `github-pages`
4. 确认 `main` 分支被允许部署，或取消不必要的保护规则

### 推送代码

```bash
git add .
git commit -m "docs: 更新 README"
git push origin main
```

部署成功后，GitHub Actions 会生成 GitHub Pages 网站地址。

## 8. GitHub Pages 部署前的配置提醒

发布到 GitHub Pages 前，建议检查：

- `astro.config.mjs`

如果仓库不是部署在根域名，而是部署在类似：

```text
https://用户名.github.io/仓库名/
```

通常需要正确设置：

- `site`
- `base`

例如仓库名是 `paper_website` 时，常见配置形态如下：

```js
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://用户名.github.io',
  base: '/paper_website/',
});
```

如果这两个值不正确，部署成功后页面的图片、样式或脚本路径可能会出错。

## 9. 常用命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 生产构建
npm run build

# 预览构建结果
npm run preview
```

## 10. 推荐修改顺序

如果你是第一次基于这个仓库做自己的论文网站，建议按下面顺序操作：

1. 先修改 `src/data/site.ts` 中的论文标题、摘要和各模块说明
2. 再替换 `public/pdfs/main.pdf`
3. 再替换 `public/figs/` 中的图像资源
4. 本地执行 `npm run dev` 检查显示效果
5. 执行 `npm run build` 检查能否成功构建
6. 推送到 `main`，交给 GitHub Actions 自动部署

## 11. 适合继续扩展的方向

这个模板还可以继续扩展，例如：

- 增加作者信息与单位信息
- 增加论文引用格式
- 增加补充材料下载入口
- 增加交互式图表
- 增加中英文双语版本

---

如果你只是想快速替换成自己的论文内容，最重要的入口只有两个：

- `src/data/site.ts`
- `public/`

前者改文字，后者换资源。
