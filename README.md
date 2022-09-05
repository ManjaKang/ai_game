# **🌷 이미지 캡셔닝 게임**

------

## **💜 프로젝트 - 개요**

점차 발전하고 있는 인공지능(AI)을 이용한 이미지 캡셔닝 기능을 게임에 접목하여 유저들에게 좀 더 혁신적이고 새로운 패러다임을 제공하고자 함

------

## **💜 주요 기능**

------

### 첫 번째 안 (스토리) ✔

- 배교수 살인사건 (추리, 방탈출 같은 테마를 가지고 스토리가 진행됨)
- 진행방식 : 하나의 스토리를 진행하면서 중간중간 나오는 미션을 해결
- 미션 : 이미지 캡셔닝을 활용하여 미션에서 요구하는 사진을 찍어야함
- 예시) 사과를 찍어야 하는 미션 → 사과를 찍으면 100점, 비슷한 과일을 찍으면 50점, 그림을 그리면? 30점??
- 장점 : 게임에 깊은 몰입 가능
- 단점 : 스토리가 매우 중요함
- 스토리 : 셜록 홈즈 시리즈

### 두 번째 안 (생존)

- 배교수의 생존일기
- 진행방식 : 적정인원이 세부 미션을 통과하며 이를 토대로 최종 미션을 클리어 하여 생존
- 미션 : 이하 동문
- 일정 시간 마다 랜덤 이벤트를 발생시켜 다양한 사진을 찍어야 하는 미션 발생 예시) 비가 많이 와서 우산,비닐 등 비를 막을 방법 필요
- 장점 : 오래 버티기등 경쟁 요소 추가 가능 / 매일 5분씩 가볍게 즐길 게임으로 만들 수 있음
- 단점 : 스토리 요소가 부족하여 몰입도가 낮음 , 상대적으로 재미를 덜 느낄수 있다.

## **💜 유사 서비스**

------

1. 첫 번째 안
   1. 레이튼 교수와 이상한 마을

![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/959ded5b-7fe0-4f14-a32d-b4f31bb8367c/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T082255Z&X-Amz-Expires=86400&X-Amz-Signature=963e2865366b07e6d11c4413256494b25c102d0f498b11b1d5ff99f51ef1b8c8&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## **💜 서비스 작동**

------

- 리액트 네이티브 앱

- 흐름도

  ![img](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/86e97f7a-2850-4c33-b014-739f8eb8ee83/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20220901%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20220901T082241Z&X-Amz-Expires=86400&X-Amz-Signature=40a5e91f0f61ddce67cd5c083ffa9415df0c2a16b6ae1ad2eb7ea5016951245e&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

## **✔ 주요 기술**

------

**Backend**

- Spring Framework 4.0.5

**Frontend**

- React Native
- MUI

AI

- PyTorch
- GPT-2 ko