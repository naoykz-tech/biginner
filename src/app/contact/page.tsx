import { ContactForm } from '@/components/contactform/ContactForm';

export default function Page() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">お問い合わせ</h1>
      <ContactForm />
    </div>
  );
}
