# [Assignment 8] 모두 컴퍼니 TODO LIST

## 🔗 배포 주소

- 아래 URL을 클릭하면 배포된 페이지로 이동합니다.

  https://6trillion-todolist.netlify.app/

<br>

## 💻 Built With

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)

![Visual Studio Code](https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=slack&logoColor=white)

<br>

## 🧑 참여 멤버

|  이름  | 역할 |
| :----: | :--: |
| 조성원 | 생성일 기준 필터링 기능 구현 <br> drag and drop 기능 구현 |
| 최혜린 | Todo목록 수정 구현 <br> Todo목록 UI구현 |
| 강동휘 | 로컬스토리지 구현 <br> 중요도 기준 필터링 기능 구현 |
| 김종원 | Todo목록 추가 삭제 구현 <br> Header UI 구현 |

<br>

## ✨ 설치 및 시작방법

```bash
# install dependencies
 $ yarn install

# serve with hot reload at localhost:3000
 $ yarn start
```

<br>

## 📝 구현 목록

- 과제 A: To-Do List App 만들기 (UI)

        ✅ 적절한 Header 생성
            ✔ 스크롤 시 Header가 사라지지 않고 화면 상단에 고정
        ✅ 투두리스트에 적합한 기능을 구현하기 위해 데이터 조작 가능
            ✔ Task 목록 조회기능 구현
            ✔ Task 추가기능 구현
            ✔ Task 삭제기능 구현
        ✅ 투두리스트에 적절한 애니메이션 추가
        ✅ Drag and Drop으로 Task의 순서 변경 가능 (화면 내에서 Task순서만 변경)

- 과제 B: To-Do List App만들기 (Data)

        ✅ 투두리스트에 적합한 기능을 구현하기 위해 데이터 조작 가능
            ✔ Task 목록 조회기능 구현
            ✔ Task 추가기능 구현
            ✔ Task 삭제기능 구현
        ✅ 최소 2가지 이상의 조건으로 Task를 필터링
            ✔ 생성일로 필터링 기능 구현
            ✔ 중요도로 필터링 기능 구현
        ✅ Task의 상태 변경 기능 구현

<br>


## 🗂 프로젝트 구조

```bash
📁src
│  App.tsx
│  index.tsx
│  react-app-env.d.ts
│
├─📁assets
│  └─📁icon
│          close.svg
│          filter.svg
│
├─📁components
│  ├─📁body
│  │  │  index.ts
│  │  │  TodoBody.tsx
│  │  │
│  │  ├─📁TodoBoard
│  │  │      PlusButton.tsx
│  │  │      TodoBoard.tsx
│  │  │      TodoInput.tsx
│  │  │      TodoItem.tsx
│  │  │
│  │  └─📁TodoSideTab
│  │          TodoItemDetail.tsx
│  │          TodoSideTab.tsx
│  │
│  │
│  ├─📁Form
│  │      CustomCheckBox.tsx
│  │
│  └─📁header
│      │  Header.tsx
│      │  index.ts
│      │
│      └─📁Filter
│              Filter.tsx
│
├─📁constants
│      index.tsx
│
├─📁styles
│      GlobalStyle.ts
│
├─📁types
│      index.ts
│
└─📁utils
    │  getDateOfLastUpdate.ts
    │  index.ts
    │  localStorage.ts
    │  TodosContext.tsx
    │  Tokens.ts
    │
    └─📁hooks
            useSideTab.ts
```

<br>

## 🖥 작동 화면

<div style={display: flex;}>
<img src="https://user-images.githubusercontent.com/60386993/131148435-514ff294-fc3d-4ea9-822f-7c1d0627d580.gif" alt="drawing" width="600" height="400" />
<img src="https://user-images.githubusercontent.com/60386993/131148437-e4264a54-4ba9-46a7-a602-c32b32766682.gif" alt="drawing" width="600" height="400"/>
<img src="https://user-images.githubusercontent.com/60386993/131148438-db2112f3-1589-4bf0-8d88-32cc28acbf08.gif" alt="drawing" width="600" height="400"/>
<img src="https://user-images.githubusercontent.com/9590693/131157546-3ed17a63-35df-4a49-955a-5ddebb568b4c.gif" alt="drawing" width="600" height="400"/>
</div>

<br>

## 참고한 레퍼런스

- Drag and Drop
  - https://www.youtube.com/watch?v=jfYWwQrtzzY&t=617s
  - https://medium.com/@eklavya_/implementing-react-drag-and-drop-without-any-external-library-d7ec00437afb
- Context API: https://react.vlpt.us/basic/22-context-dispatch.html
