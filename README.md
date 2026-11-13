# 欧氏波方程的局部光滑 · 可视化伴读

**[在线打开可视化伴读](https://zanewang66.github.io/local-smoothing-visual/)**

这是 OpenAI 预印本 *Local smoothing for the Euclidean wave equation*（2026 年 10 月 25 日）的中文交互式伴读。页面围绕定理 1.2 的临界环带估计，展示论文如何把半波的守恒流、四元数 Monge–Ampère 方程和两次圆环比较连起来，再推出定理 1.1 的局部光滑估计。

## 怎么读

- **看证明主线**。从定理 1.2 开始，沿依赖图回溯。箭头 `A → B` 表示证明 B 时用到了 A。
- **查某个结果**。按定理编号或关键词搜索。点击节点可查看陈述、证明思路和对应的原文页码。
- **看关键机制**。「机制图」收录了原文的两张图，分别解释纤维壁与内部恢复，以及两次圆环比较。

也可以直接查看[静态证明依赖图](./proof-map.png)或[原文 PDF](./paper.pdf)。

## 本地打开与部署

下载或克隆仓库后，用浏览器打开 `index.html`。脚本、公式字体和图片都在 `assets/` 中，网页无需安装依赖或运行构建。

如需部署到 GitHub Pages，在仓库的 **Settings → Pages** 选择 **Deploy from a branch**，发布源设为 `main` 分支的 `/ (root)`。

## 来源与致谢

数学陈述和证明解读依据原文，页码沿用论文的印刷页码。正式引用数学结果时，请引用[原始预印本](https://github.com/openai/math/blob/7ef5c0cc5ca4b0e072b7a050fca09ab24bc6fa3a/preprints/Local-smoothing-for-the-Euclidean-wave-equation-October-25-2026/paper.pdf)。

交互布局参考 [*Homogenization at a polynomial scale in high contrast* 的可视化伴读](https://scottnarmstrong.github.io/hcp-visual-paper/)。第三方组件的许可见 [THIRD_PARTY_LICENSES.txt](./THIRD_PARTY_LICENSES.txt)。