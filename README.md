# Miny Widget Collection

바닐라 JavaScript로 제작된 미니 위젯 모음입니다.  
React, Vue 등 프레임워크 없이 HTML/CSS/JS만으로 구현했으며,  
Notion을 비롯한 다양한 플랫폼에 임베드하여 사용할 수 있습니다.

---

## 📦 프로젝트 구조
<pre><code>
miny-widget/
├── dday/             # D-Day 계산 위젯
│   ├── index.html
│   ├── index.js
│   └── index.css
├── color-picker/     # 색상 선택기 위젯
│   ├── index.html
│   ├── index.js
│   └── index.css
├── index.html        # 루트 라우팅용
└── README.md         # ← (현재 파일)
</code></pre>

---

## 🎯 D-Day 위젯

> 특정 날짜까지 남은 일수 또는 지난 일수를 계산하여 보여주는 경량 위젯입니다.  
> 날짜와 메시지를 URL 파라미터로 설정하고, 원하는 색상으로 꾸며서 노션 등에 임베드할 수 있습니다.

### 사용 예시 및 배포 링크

- [🎁 연말 디데이](https://youngdev57.github.io/miny-widget/dday?content=GOODBYE%202025&date=20251231)
- [🎉 기념일 디데이](https://youngdev57.github.io/miny-widget/dday/?content=%EA%B8%B0%EB%85%90%EC%9D%BC%F0%9F%8E%82&date=20251202&background=FEC3FF&text=000000)

### 사용 가이드
- [Notion 가이드 보기](https://youngdev57.notion.site/Miny-D-day-Widget-125d65b31f86800297c6c93ceec6d5e1)

### 주요 파라미터

| 키 | 설명 | 필수 | 예시 |
|----|------|------|------|
| `date` | 기준 날짜 (YYYYMMDD) | ✅ | `20251231` |
| `content` | 표시할 문구 | ❌ | `마무리 잘하기` |
| `background` | 배경색 (HEX, # 제외) | ❌ | `FEC3FF` |
| `text` | 글자색 (HEX, # 제외) | ❌ | `000000` |
| `inclusive` | 시작일을 1일로 포함 여부 (`true`/`false`) | ❌ | `true` |

전체 주소 예시:  
`https://youngdev57.github.io/miny-widget/dday?content=시험끝🎓&date=20241128&background=FFD1D1&text=333`

### 🛠️ 기술 요약
- 순수 JS 기반 날짜 계산 및 URL 파싱
- 반응형 레이아웃 + embed 친화 구조
- GitHub Pages를 통한 배포

---

## 🎨 Color Picker 위젯

> HEX 컬러 코드를 선택하고 복사할 수 있는 위젯입니다.  
> 직접 색상을 입력하거나 임베드한 곳에서 마우스로 선택해 다양한 색을 추출할 수 있습니다.

### 🔗 배포 링크
- [🖌️ Color Picker 위젯](https://youngdev57.github.io/miny-widget/color-picker/)

### 사용 가이드
- [Notion 가이드 보기](https://youngdev57.notion.site/Miny-Color-Picker-Widget-126d65b31f8680239e2ac252fe2ff607?pvs=4)

### 주요 기능

- 마우스로 색상 선택 후 HEX 코드 자동 복사
- HEX 입력 시 실시간 미리보기
- 심플한 디자인과 넓은 컬러 범위 대응
- Notion 등 외부 플랫폼에서 안정적인 embed 동작

### 기술 요약
- `<input type="color">` 및 커스텀 색상 표시 구현
- 선택값 복사 기능 (`navigator.clipboard`)
- CSS 중심 디자인 커스터마이징

---

## 프로젝트 의도 및 방향

- 각 위젯은 Notion 등에서 실사용 가능하며, 최소한의 코드로 구조화된 기능을 목표로 설계되었습니다.
- 추후 다른 위젯들을 계속해서 추가할 예정이며, 범용적인 컴포넌트 개발을 위한 기반 실험 프로젝트이기도 합니다.

---

## 📮 연락

궁금한 점이나 제안은 [Issues](https://github.com/youngdev57/miny-widget/issues)나 PR로 남겨주세요!  
Notion 가이드 페이지 또는 [티스토리 블로그](https://youngdev57.tistory.com/category/Notion/widget)에 댓글로 남겨주셔도 확인가능합니다.
