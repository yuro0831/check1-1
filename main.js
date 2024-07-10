// 要件：ユーザーを登録できる機能を作成します。

class User {
  // 名前とメールアドレスのプロパティを持ったコンストラクタを作成してください。
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

// ユーザー情報を保存する配列を作成してください。
let userList = [];

// ユーザー情報を登録する関数を作成してください。
function registerUser() {
  // nameフィールドの値を取得してください
  const name = document.getElementById("name").value;
  // emailフィールドの値を取得してください。
  const email = document.getElementById("mail").value;

  // メールアドレスの重複を確認してください。
  for (let user of userList) {
    if (user.email === email) {
      // 既に登録済みの場合、登録しようとしたメールアドレスをを含む重複している旨のメッセージを出力してください。
      console.log(`メールアドレス ${email} は既に登録されています。`);
      return;
    }
  }

  // 未登録の場合はユーザー情報を配列に追加してください。
  let newUser = new User(name, email);
  userList.push(newUser);

  // 登録後にnameフィールドの値を削除してください
  document.getElementById("name").value = "";
  // 登録後にemailフィールドの値を削除してください
  document.getElementById("mail").value = "";

  console.log("ユーザー登録が完了しました:", newUser);
}

// 登録されたユーザー情報を1件ずつコンソール出力する関数を作成してください。
function findUser() {
  for (let user of userList) {
    console.log(`名前: ${user.name}, メールアドレス: ${user.email}`);
  }
}
