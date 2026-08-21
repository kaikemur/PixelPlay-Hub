const Button = ({ 
  children, 
  onClick, 
  type = "button", 
  variant = "primary", 
  className = "", 
  disabled = false,
  icon: Icon 
}) => {
  
  // Definição das cores baseadas na variante
  const baseStyles = "font-bold py-2 px-4 rounded flex items-center justify-center gap-2 transition-all duration-300 transform active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-red-600 hover:bg-red-700 text-white focus:ring-red-500",
    secondary: "bg-gray-700 hover:bg-gray-600 text-white focus:ring-gray-500",
    outline: "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800"
  };

  const disabledStyles = "opacity-50 cursor-not-allowed pointer-events-none";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${disabled ? disabledStyles : ''} ${className}`}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </button>
  );
};

export default Button;