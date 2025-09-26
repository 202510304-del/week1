// HTML 코드 가이드 데이터
const htmlGuides = {
    basic: {
        title: "기본 HTML 구조",
        code: `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>문서 제목</title>
</head>
<body>
    <h1>안녕하세요!</h1>
    <p>이것은 나의 첫 웹페이지입니다.</p>
</body>
</html>`
    },
    heading: {
        title: "제목 태그",
        code: `<h1>가장 중요한 제목 (h1)</h1>
<h2>두 번째 수준 제목 (h2)</h2>
<h3>세 번째 수준 제목 (h3)</h3>
<h4>네 번째 수준 제목 (h4)</h4>
<h5>다섯 번째 수준 제목 (h5)</h5>
<h6>여섯 번째 수준 제목 (h6)</h6>`
    },
    list: {
        title: "목록 태그",
        code: `<!-- 순서 없는 목록 -->
<ul>
    <li>항목 1</li>
    <li>항목 2</li>
    <li>항목 3</li>
</ul>

<!-- 순서 있는 목록 -->
<ol>
    <li>첫 번째 항목</li>
    <li>두 번째 항목</li>
    <li>세 번째 항목</li>
</ol>`
    },
    link: {
        title: "링크 태그",
        code: `<!-- 기본 링크 -->
<a href="https://example.com">예제 웹사이트</a>

<!-- 새 탭에서 열기 -->
<a href="https://example.com" target="_blank">새 탭에서 열기</a>

<!-- 이메일 링크 -->
<a href="mailto:someone@example.com">이메일 보내기</a>`
    },
    image: {
        title: "이미지 태그",
        code: `<!-- 기본 이미지 -->
<img src="이미지주소.jpg" alt="이미지 설명">

<!-- 크기 지정 -->
<img src="이미지주소.jpg" alt="이미지 설명" width="300" height="200">

<!-- 반응형 이미지 -->
<img src="이미지주소.jpg" alt="이미지 설명" style="max-width: 100%; height: auto;">`
    },
    form: {
        title: "폼 요소",
        code: `<form action="/submit" method="post">
    <label for="name">이름:</label>
    <input type="text" id="name" name="name" required>
    
    <label for="email">이메일:</label>
    <input type="email" id="email" name="email" required>
    
    <label for="message">메시지:</label>
    <textarea id="message" name="message" rows="4" required></textarea>
    
    <button type="submit">제출하기</button>
</form>`
    }
};

// HTML 가이드 기능
function showHTMLGuide(type) {
    const guide = htmlGuides[type];
    if (!guide) {
        alert("해당 가이드를 찾을 수 없습니다.");
        return;
    }
    
    // 결과 표시
    const resultElement = document.getElementById('codeResult');
    resultElement.innerHTML = `
        <h3>${guide.title}</h3>
        <pre><code>${guide.code}</code></pre>
        <button onclick="copyCode()">코드 복사하기</button>
    `;
}

// 코드 복사 기능
function copyCode() {
    const codeElement = document.querySelector('#codeResult code');
    const textArea = document.createElement('textarea');
    textArea.value = codeElement.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    alert('코드가 복사되었습니다!');
}

// 페이지 로드 시 기본 가이드 표시
document.addEventListener('DOMContentLoaded', function() {
    showHTMLGuide('basic');
});