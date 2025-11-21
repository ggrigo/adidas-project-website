interface ProgressBarProps {
  label: string;
  percentage: number;
  status: string;
  variant?: 'green' | 'blue' | 'yellow';
}

export default function ProgressBar({ label, percentage, status, variant = 'blue' }: ProgressBarProps) {
  const variantStyles = {
    green: 'bg-green-500',
    blue: 'bg-primary-500',
    yellow: 'bg-yellow-500'
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div
          className={`h-2.5 rounded-full ${variantStyles[variant]}`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="mt-1 text-xs text-gray-600">{status}</p>
    </div>
  );
}
