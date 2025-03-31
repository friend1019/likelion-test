# 💻 Visual Studio Code 깃허브 제출 방법

Visual Studio Code로 작성한 파일을 GitHub에 업로드하는 방법입니다.  
한서대학교 멋쟁이사자처럼에서 과제 제출을 위한 Git, GitHub 사용법을 익히기 위한 테스트 레포지토리입니다.

---

## 🛠️ Visual Studio Code(VSC) 준비하기

1. Visual Studio Code 설치  
   👉 [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. Git 설치 확인  
   터미널(Ctrl + \`)에서 아래 명령어 입력:
   ```bash
   git --version
   ```
   출력이 없으면 👉 [https://git-scm.com/](https://git-scm.com/) 에서 설치

3. 사용자 정보 설정
   ```bash
   git config --global user.name "깃허브 이름"
   git config --global user.email "깃허브 이메일"
   ```

---

## 📦 GitHub 저장소 복제하기 (Clone)

1. GitHub 저장소 주소 확인 (초록색 Code 버튼 > HTTPS 주소 복사)

2. 터미널 열기 (Ctrl + \`)

3. 저장소 클론
   ```bash
   git clone [저장소 주소]
   ```

4. 복제된 폴더로 이동
   ```bash
   cd [폴더명]
   ```

> ⚠️ 한글로 된 폴더 이름은 터미널에서 `---`로 보일 수 있으니 주의하세요.

---

## 🌿 본인 브랜치로 이동

```bash
git checkout 본인이름
git branch
```

> 브랜치 목록에서 본인이름이 선택되어 있으면 성공!

---

## ✍️ 코드 작성 및 업로드

- 과제 파일은 **복제한 폴더 하위**에 생성
- 파일 이름은 정규세션 날짜를 포함  
  예시: `최지인_0325.py`

업로드 명령어:
```bash
git add .
git commit -m "03_25 과제 제출"
git push origin 본인이름
```

GitHub 브랜치에서 업로드 확인!

---

## 🔁 추가 작업 시 (수정 후 다시 업로드)

```bash
git pull origin 본인이름
# 수정 후
git add .
git commit -m "과제 수정"
git push origin 본인이름
```

---

## ✅ 마무리

이 과정을 완료하면 과제 제출 끝!  
궁금한 점은 언제든지 문의해주세요. 🙌

---

## 🦁 멋쟁이사자처럼 한서대

> 함께 성장하며 개발자가 되어가는 여정에 오신 걸 환영합니다! 🚀
