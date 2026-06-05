type CodeBlockProps = Readonly<{
  code: string;
}>;

export function CodeBlock({ code }: CodeBlockProps) {
  return (
    <pre className="mt-5 overflow-x-auto rounded-md bg-slate-900 p-4 text-sm leading-6 text-slate-100 ring-1 ring-slate-700">
      <code>{code}</code>
    </pre>
  );
}
