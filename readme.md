# 使い方

1. settings.jsonにtwilioのSIDとトークンを記載する
2. npm iでモジュールのインストール
3. routes/index.jsのfromにtwilioの電話番号を記載
4. routes/index.jsのtoに宛先の電話番号を記載
5. npm startで起動する
6. http://localhost:3000/call にGETリクエストを投げるとtoへ電話がかかる
