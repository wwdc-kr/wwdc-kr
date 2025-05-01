# 🇰🇷 대한민국 WWDC 위너 모임

## 프로젝트 설정

1. **Bun 설치**  
   아래 명령어를 입력하여 Bun을 설치합니다. 자세한 내용은 [공식 설치 가이드](https://bun.sh/docs/installation)를 참고해 주세요.
   ```bash
   # 설치
   brew install oven-sh/bun/bun # 또는 $ curl -fsSL https://bun.sh/install | bash

   # 설치 확인
   bun --version

   # 업그레이드 (선택사항)
   bun upgrade
   ```
2. **프로젝트 초기화**  
   저장소를 **fork**한 뒤 `git clone`으로 내려받고, 의존성은 `bun i`로 설치하세요.
   ```bash
   git clone https://github.com/wwdc-kr/wwdc-kr.git # fork 한 repo에 맞는 url 로 변경할 것
   cd wwdc-kr
   bun i
   ```
3. **문서 작성**  
   모든 자료는 `content` 디렉터리에 있습니다.  
   예를 들어 개인 소개 페이지를 작성하려면  
   `content/docs/winners/sunghyun-cho.mdx`를 복사해 이름과 내용을 수정하세요.
4. **웹페이지 보기**  
   터미널에서 `bun run dev` 를 실행해 localhost에서 수정된 웹페이지를 확인할 수 있습니다. (기본적으로 http://localhost:3000)
5. **코드 스타일 자동 수정**  
   터미널에서 `bun check`를 실행해 코드 스타일을 자동으로 정리합니다.
6. **커밋 및 PR**  
   변경 사항을 커밋한 뒤 Pull Request를 생성해 주세요.

도움이 필요하면 제 [LinkedIn 프로필](https://www.linkedin.com/in/anaclumos)로 문의하거나 ChatGPT 등 AI 도구를 활용해주세요.
