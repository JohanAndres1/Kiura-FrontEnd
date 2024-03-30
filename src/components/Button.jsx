export default function Button({ href, text, className }) {
  return (
    <a
      href={href}
      className={`transition-all h-11 font-bold px-5 rounded-lg active:scale-95 hover:bg-button text-black/70 hover:text-textButton content-center ${className}`}
    >
      {text}
    </a>
  );
}
