export default function Button({
  text,
  href,
  onClick,
  variant = "black",
  size = "md",
  icon,
  newTab = false,
  className = "",
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium rounded-md transition-all duration-300 focus:outline-none shadow-sm hover:shadow-md";

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg",
  };

  const variantStyles = {
    black: "bg-black text-white border border-transparent hover:bg-amber-400 hover:text-black",
    gold: "bg-amber-400 text-black border border-transparent hover:bg-black hover:text-white",
    white: "bg-transparent text-black border border-black hover:bg-black hover:text-amber-400",
  };

  const combined = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const ButtonContent = (
    <div className={`${combined} transform transition-transform duration-200 hover:scale-105 active:scale-95`}>
      {icon && <span className="mr-2">{icon}</span>}
      {text}
    </div>
  );

  if (href) {
    if (href.startsWith("http") || newTab) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {ButtonContent}
        </a>
      );
    } else {
      return <a href={href}>{ButtonContent}</a>;
    }
  }

  return <button onClick={onClick} type="button">{ButtonContent}</button>;
}
