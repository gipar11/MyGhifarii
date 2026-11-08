import { dictionary } from "@/app/data/dictionary";

export default function Footer({ lang }: { lang: "ID" | "EN" }) {
  const t = dictionary[lang].footer;
  return (
    <footer className="border-t border-surface py-8 text-center text-textMuted text-sm">
      <p>© 2026 GHIFARI {t}</p>
    </footer>
  );
}