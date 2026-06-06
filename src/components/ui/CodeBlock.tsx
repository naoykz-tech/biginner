type CodeBlockProps = Readonly<{
  code: string;
}>;

/**
 * 教材内のサンプルコードを表示するコードブロックです。
 *
 * @remarks
 * 長いコードでもレイアウトを崩さないよう横スクロールを許可します。
 * シンタックスハイライトは持たず、教材本文から渡された文字列をそのまま表示します。
 */
export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="mt-5 overflow-x-auto rounded-md bg-slate-900 p-4 text-sm leading-6 text-slate-100 ring-1 ring-slate-700">
      <code>{code}</code>
    </pre>
  );
}
