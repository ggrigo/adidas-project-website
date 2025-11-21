interface StatusCardProps {
  title: string;
  value: string;
  subtitle?: string;
  variant?: 'primary' | 'success' | 'warning' | 'default';
}

export default function StatusCard({ title, value, subtitle, variant = 'default' }: StatusCardProps) {
  const variantStyles = {
    primary: 'bg-gradient-to-br from-info-light via-white to-info-light/50 border-info/20 hover:shadow-glow-ai',
    success: 'bg-gradient-to-br from-success-light via-white to-success-light/50 border-success/20 hover:shadow-glow-success',
    warning: 'bg-gradient-to-br from-warning-light via-white to-warning-light/50 border-warning/20 hover:shadow-glow-warning',
    default: 'bg-gradient-to-br from-neutral-100 via-white to-neutral-50 border-neutral-200 hover:shadow-medium'
  };

  const valueStyles = {
    primary: 'text-info-dark',
    success: 'text-success-dark',
    warning: 'text-warning-dark',
    default: 'text-neutral-950'
  };

  const iconMap = {
    primary: (
      <svg className="w-5 h-5 text-info" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    success: (
      <svg className="w-5 h-5 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    warning: (
      <svg className="w-5 h-5 text-warning" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
      </svg>
    ),
    default: (
      <svg className="w-5 h-5 text-neutral-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className={`group relative overflow-hidden rounded-2xl border-2 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${variantStyles[variant]}`}>
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="relative">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-600">{title}</h3>
          {iconMap[variant]}
        </div>

        <p className={`text-5xl font-black tracking-tighter mb-2 ${valueStyles[variant]}`} style={{ fontVariantNumeric: 'tabular-nums' }}>
          {value}
        </p>

        {subtitle && (
          <p className="text-sm font-semibold text-neutral-600 leading-snug">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
