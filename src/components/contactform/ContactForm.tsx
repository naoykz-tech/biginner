"use client";

import { useState } from 'react';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(''); 

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

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        送信
      </button>
    </form>
  );
}