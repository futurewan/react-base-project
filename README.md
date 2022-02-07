# react 项目 基础模版代码

## 技术栈

React17、React-Router6、Webpack5

## 项目规范和代码风格工具

eslint、stylelint、airbnb、prettier、husky
注意代码提交前用 pre-commit 钩子进行风格校验，不符合规范不可提交代码。

## 不同环境的全局变量
env目录配置开发、测试和生产的全局变量
变量以`REACT_APP_`开头
.env.local会在开发环境生效，用于区分不同开发人员本地所需的调试变量，该文件不会上传至git

## 项目运行

```
git clone https://github.com/futurewan/react-base-project.git
cd react-base-project
npm i
npm run dev
npm run build:test 测试环境
npm run build:prod 生产环境

```
