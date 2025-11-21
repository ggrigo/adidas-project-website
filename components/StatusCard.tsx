interface StatusCardProps {
  title: string;
  value: string;
  subtitle?: string;
  variant?: 'primary' | 'success' | 'warning' | 'default';
}

export default function StatusCard({ title, value, subtitle, variant = 'default' }: StatusCardProps) {
  const variantStyles = {
    primary: 'bg-primary-50 border-primary-200',
    success: 'bg-green-50 border-green-200',
    warning: 'bg-yellow-50 border-yellow-200',
    default: 'bg-gray-50 border-gray-200'
  };

  return (
    <div className={`rounded-lg border p-6 ${variantStyles[variant]}`}>
      <h3 className="text-sm font-medium text-gray-600">{title}</h3>
      <p className="mt-2 text-3xl font-bold text-gray-900">{value}</p>
      {subtitle && (
        <p className="mt-1 text-sm text-gray-500">{subtitle}</p>
      )}
    </div>
  );
}
