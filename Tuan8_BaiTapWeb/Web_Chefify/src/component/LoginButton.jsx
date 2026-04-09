const VARIANT_CLASS = {
  outline: 'border border-pink-200 bg-white text-pink-600 hover:bg-pink-50',
  solid: 'bg-pink-500 text-white hover:bg-pink-600 shadow-sm',
};

const SIZE_CLASS = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-2.5 text-sm',
  lg: 'px-8 py-3 text-base',
};

const LoginButton = ({
  label,
  children = 'Login',
  icon,
  iconPosition = 'left',
  variant = 'outline',
  size = 'md',
  bgColor,
  textColor,
  borderColor,
  className = '',
  onClick,
  type = 'button',
}) => {
  const content = label ?? children;

  const customStyle = {
    ...(bgColor ? { backgroundColor: bgColor } : {}),
    ...(textColor ? { color: textColor } : {}),
    ...(borderColor ? { borderColor } : {}),
  };

  return (
    <button
      type={type}
      onClick={onClick}
      style={customStyle}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition focus:outline-none focus:ring-2 focus:ring-pink-300 ${VARIANT_CLASS[variant] ?? VARIANT_CLASS.outline} ${SIZE_CLASS[size] ?? SIZE_CLASS.md} ${className}`}
    >
      {icon && iconPosition === 'left' ? icon : null}
      <span>{content}</span>
      {icon && iconPosition === 'right' ? icon : null}
    </button>
  );
};

export default LoginButton;