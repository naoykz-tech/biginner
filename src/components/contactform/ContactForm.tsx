"use client";

import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>(''); 
  const [error, setError] = useState<string>(''); // エラーメッセージの状態を追加
  function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!name || !email || !message) {
      setError('全ての項目を入力してください。');
      return;
    }
          
    if(!email.includes('@')) {
      setError('有効なメールアドレスを入力してください。');
      return;
    }

    setError(''); // エラーがない場合はエラーメッセージをクリア
    // ここでフォームの送信処理を行う
    console.log('送信:', { name, email, message });
  }

    return (
    <form className="space-y-4">
      <input
        placeholder="名前"
        className="border p-2 w-full"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="メールアドレス"
        className="border p-2 w-full"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <textarea
        placeholder="メッセージ"
        className="border p-2 w-full h-32"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      {error && <p className="text-rose-700">{error}</p>}
      <button className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        送信
      </button>
    </form>
  );
}