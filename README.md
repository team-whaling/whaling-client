![KakaoTalk_20220203_161800774](https://user-images.githubusercontent.com/55427367/152744001-27e3621f-ba6b-4ef8-b6a4-0911099e3fb4.png)

# Whaling Client 🐳

You can enjoy our service through [Whaling](https://whaling.co.kr)

## Getting Started

You can run the command below in project directory

### Yarn

```bash
git clone https://github.com/team-whaling/whaling-client.git
cd whaling-client
yarn install 
yarn start
```

### NPM

```bash
git clone https://github.com/team-whaling/whaling-client.git
cd whaling-client
npm i
npm run start
```

## Why Whaling ?

*누구나 투자 확신이 한 눈에 생기는 **투표형 투자 정보 플랫폼**, 투자 정보 공유를 위한 가장 **간편**하고 **믿을 수 있는** 서비스 ‘**웨일링**’*

- **개방성**: 간결화된 투표양식으로 누구나 쉽게
- **직관성**: 다양한 시각자료로 한 눈에
- **신용성**: 적중률 시스템으로 믿을 수 있게

## Browser Support

** 375x812 (5.4인치) 화면에 최적화되어 있습니다. 

|<img src="https://user-images.githubusercontent.com/55427367/152744505-81318110-0dc7-4d4d-97fa-87487db63f15.png" width=60px>|<img src="https://user-images.githubusercontent.com/55427367/152744563-2880b683-32f7-43ef-b2b8-5636c6311f37.jpg" width=70px>|<img src="https://user-images.githubusercontent.com/55427367/152744578-4af411ed-732a-49ce-9596-cebeacfe1e84.png" width=60px>|<img src="https://user-images.githubusercontent.com/55427367/152744588-3943da38-561f-47c1-a4ab-339e8ede1117.png" width=60px>|
|:---:|:---:|:---:|:---:|
|Chrome 97+|Safari 13+|Edge|Firefox 96+|

## Feature

### Auth
- 카카오 소셜 로그인

### Home
- 웨일링 전체 적중률
- 참여한 투표 중 진행중인 투표 보기

### Vote
- 투표 생성하기 (종목/기간/얼만큼/변동사항 선택)
- 투표 하기
- 적중률 70% 이상의 사용자들의 답변 보기
- 트래킹이 끝난 후 코인 가격 비교
- 코인명으로 검색하기

### MyPage
- 나의 적중률 확인
- 보유 고래밥 수 확인
- 내가 참여/생성한 투표 보기
- 튜토리얼

## 실행 화면
<details>
<summary>투표 만들기</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/55427367/152746771-779a5c6b-ee4d-4d3f-af90-53e48acc2cc0.gif" width=375px>
</div>
</details>

<details>
<summary>투표 하기</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/55427367/152746828-e0e2b24b-967f-4023-bbee-5426316d95ac.gif" width=375px>
</div>
</details>

<details>
<summary>투표 결과 확인</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/55427367/152746491-880f47f1-d036-408b-9913-c3444a3686c0.gif" width=375px>
</div>
</details>

## Tech Stack

- framework: React with Typescript
- state management: redux, redux-thunk with typesafe actions
- data fetching: axios
- style: styled-components
- react-router, @nivo/pie, swiper

### Communication Tool
- Jira
- Slack
- Notion

## Developer
|<img src="https://avatars.githubusercontent.com/u/55427367?v=4" width=150px> |<img src="https://avatars.githubusercontent.com/u/67326401?v=4" width=150px>|
|:---:|:---:|
|<b>김태은</b>|<b>양기욱</b>|
|home/vote|auth/mypage|
|[@xodms0309](http://github.com/xodms0309)|[@codeKiuk](http://github.com/codeKiuk)|

