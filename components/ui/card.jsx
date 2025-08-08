export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white rounded-2xl p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '', ...props }) {
  return <div className={`px-4 py-2 ${className}`} {...props}>{children}</div>;
}