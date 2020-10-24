---
slug: "/gatsby_devlog"
date: "2020-10-01"
title: "Gatsby로 Markdown Github blog 구축하기"
tags : ["React","Gatsby","JS"]
thumbs : "https://media.giphy.com/media/u4CY9BW4umAfu/giphy.gif"
---
# What is Gatsby.js?
Gatsby.js는 React + GraphQl에 기반한 정적사이트 생성기로서 손쉽게 페이지를 구축할 수 있는 기능이 있다.
SSR(Server Side Rendering) 프레임워크로 유명한 Next.JS와 함께 자주 언급된다.

### 장점
- WebPack 처럼 설정을 안해도 됨
- React Boilerplate를 안해도 됨
- Code Spliiting을 알아서 해줌
- 손쉬운 SEO

### 단점
- GraphQl을 공부해야한다.
- Webpack이 없는 대신에 무수한 Plugin들이 반기며 설정을 요구한다.

# Gatsby를 설치하고 실행해보기
<span>Gatsby에서는 Gatsby-cli를 통해 설치를 할 수 있다.</span>

1. Gatsby 설치하기
```
yarn add -g gatsby-cli
gatsby new {Your Project Name}
cd {Your Project Name}
gatsby develop
```

## Markdown 설정하기
2. gatsby-source-filesystem으로 Markdown 파일 위치 설정해주기.
```
// gatsby-config.js
module.exports = {
    plugins : [
        resolve : `gatsby-source-filesystem`,
        options : {
                name : `markdown-pages`,
                path : `{__dirname}/src/contents
            }
        ]
}
```