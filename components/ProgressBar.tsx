interface ProgressBarProps {
  label: string;
  percentage: number;
  status: string;
  variant?: 'green' | 'blue' | 'yellow';
}

export default function ProgressBar({ label, percentage, status, variant = 'blue' }: ProgressBarProps) {
  const variantStyles = {
    green: 'from-success via-success to-success-dark',
    blue: 'from-info via-info to-info-dark',
    yellow: 'from-warning via-warning to-warning-dark'
  };

  const glowStyles = {
    green: 'shadow-glow-success',
    blue: '',
    yellow: 'shadow-glow-warning'
  };

  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-3">
        <span className="text-sm font-bold text-neutral-900">{label}</span>
        <span className="text-sm font-black text-neutral-600 tabular-nums">{percentage}%</span>
      </div>
      <div className="relative w-full bg-neutral-200 rounded-full h-3 overflow-hidden shadow-inner">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${variantStyles[variant]} ${glowStyles[variant]} transition-all duration-1000 ease-out relative overflow-hidden`}
          style={{ width: `${percentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" style={{
            backgroundSize: '200% 100%',
            animation: 'shimmer 2s infinite'
          }} />
        </div>
      </div>
      <p className="mt-2 text-xs font-semibold text-neutral-600">{status}</p>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
    </div>
  );
}
