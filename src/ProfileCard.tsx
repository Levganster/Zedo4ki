import { useCallback } from 'react'
import { toast } from 'sonner'

interface SocialItem {
  icon: string
  value: string
  isLink?: boolean
  link?: string
  isCopyable?: boolean
  truncate?: boolean
  size?: string
  className?: string
}

interface ProfileCardProps {
  avatar: string
  name: string
  position: string
  description: string
  socialItems?: SocialItem[]
}

export default function ProfileCard({ 
  avatar, 
  name, 
  position, 
  description, 
  socialItems = []
}: ProfileCardProps) {
  const truncateAddress = useCallback((address: string, startChars = 4, endChars = 4) => {
    if (address.length <= startChars + endChars) return address
    return `${address.slice(0, startChars)}...${address.slice(-endChars)}`
  }, [])

  const copyToClipboard = useCallback(async (e: React.MouseEvent, text: string) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(text)
      toast.success('Скопировано!', {
        description: `${text.slice(0, 8)}...${text.slice(-8)}`
      })
    } catch {
      const textArea = document.createElement('textarea')
      textArea.value = text
      textArea.style.position = 'fixed'
      textArea.style.opacity = '0'
      document.body.appendChild(textArea)
      textArea.select()
      document.body.removeChild(textArea)
      toast.success('Скопировано!')
    }
  }, [])

  return (
    <div className="relative p-8 rounded-3xl bg-gradient-to-br from-black/40 via-black/25 to-black/40 border border-cyan-400/15 shadow-2xl max-w-xl w-full h-full mx-auto backdrop-blur-xl flex flex-col overflow-hidden transition-all duration-500 hover:border-cyan-400/25 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] group">
      {/* Основной глоу эффект */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-cyan-400/5 via-purple-500/3 to-blue-500/5 pointer-events-none group-hover:from-cyan-400/8 group-hover:via-purple-500/5 group-hover:to-blue-500/8 transition-all duration-500" />
      
      {/* Внешний глоу */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-blue-500/10 blur-xl opacity-50 pointer-events-none group-hover:opacity-70 group-hover:from-cyan-400/15 group-hover:via-purple-500/15 group-hover:to-blue-500/15 transition-all duration-500" />
      
      {/* Анимированные световые линии */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/25 to-transparent group-hover:via-purple-500/40 transition-all duration-500" />
      <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-blue-500/25 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />
      <div className="absolute right-0 top-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/25 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />
      
      {/* Голографический эффект */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-45 from-transparent via-white/2 to-transparent pointer-events-none" 
           style={{
             background: 'linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.02) 50%, transparent 70%)'
           }} />
      
      {/* Верхняя строка: аватарка + имя + должность */}
      <div className="flex items-center gap-5 mb-6 relative z-10">
        {/* Разметка секции заголовка */}
        <div className="absolute -left-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-400/20" />
        <div className="absolute -right-2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-400/20 via-cyan-400/40 to-cyan-400/20" />
        <div className="relative flex-shrink-0">
          {/* Глоу для аватара */}
          <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-cyan-400/15 via-purple-500/15 to-blue-500/15 blur-lg group-hover:from-cyan-400/25 group-hover:via-purple-500/25 group-hover:to-blue-500/25 transition-all duration-500" />
          
          <img
            src={avatar}
            alt={name}
            className="relative w-16 h-16 rounded-full object-cover border-2 border-cyan-400/20 shadow-2xl"
          />
          
          {/* Голографический оверлей для аватара */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/5 via-transparent to-purple-500/5" />
          
          {/* Неоновое кольцо */}
          <div className="absolute inset-0 rounded-full border border-cyan-400/10 animate-pulse group-hover:border-cyan-400/20 transition-all duration-500" />
          
          {/* Чертежные элементы для аватара */}
          <div className="absolute top-2 left-2 w-0.5 h-0.5 bg-cyan-400/50 rounded-full" />
          <div className="absolute top-2 right-2 w-0.5 h-0.5 bg-cyan-400/50 rounded-full" />
          <div className="absolute bottom-2 left-2 w-0.5 h-0.5 bg-cyan-400/50 rounded-full" />
          <div className="absolute bottom-2 right-2 w-0.5 h-0.5 bg-cyan-400/50 rounded-full" />
          
          {/* Крестообразные направляющие */}
          <div className="absolute top-0 left-1/2 w-px h-1 bg-cyan-400/25 transform -translate-x-1/2" />
          <div className="absolute bottom-0 left-1/2 w-px h-1 bg-cyan-400/25 transform -translate-x-1/2" />
          <div className="absolute left-0 top-1/2 h-px w-1 bg-cyan-400/25 transform -translate-y-1/2" />
          <div className="absolute right-0 top-1/2 h-px w-1 bg-cyan-400/25 transform -translate-y-1/2" />
        </div>
        
        <div className="flex-1 min-w-0 relative">
          {/* Разметка текстовой области */}
          <div className="absolute left-0 top-1 bottom-1 w-px bg-purple-400/15" />
          <div className="absolute left-2 top-0 w-1 h-px bg-purple-400/20" />
          <div className="absolute left-2 bottom-0 w-1 h-px bg-purple-400/20" />
          
          <h3 className="text-lg sm:text-xl font-bold text-white font-unbounded truncate drop-shadow-lg relative">
            {name}
            <div className="absolute inset-0 text-cyan-400/10 blur-sm">{name}</div>
          </h3>
          <p className="text-cyan-300/70 text-sm sm:text-base truncate font-montserrat drop-shadow-md font-medium">
            {position}
          </p>
        </div>
      </div>

      {/* Разделительная линия */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/15 to-transparent mb-6" />

      {/* Описание */}
      <div className="relative mb-6 flex-grow">
        {/* Разметка секции описания */}
        <div className="absolute -left-2 top-0 w-1 h-1 border-l border-t border-blue-400/25" />
        <div className="absolute -left-2 bottom-0 w-1 h-1 border-l border-b border-blue-400/25" />
        <div className="absolute -right-2 top-2 w-0.5 h-0.5 bg-blue-400/30 rounded-full" />
        <div className="absolute -right-2 bottom-2 w-0.5 h-0.5 bg-blue-400/30 rounded-full" />
        
        <p className="text-white/95 text-sm sm:text-base leading-relaxed font-montserrat drop-shadow-md relative z-10">
          {description}
        </p>
        {/* Тонкий глоу для текста */}
        <div className="absolute inset-0 text-white/5 blur-sm font-montserrat text-sm sm:text-base leading-relaxed">
          {description}
        </div>
      </div>

      {/* Социальные сети */}
      <div className="space-y-3 relative z-10">
        {/* Разметка секции социальных сетей */}
        
        {socialItems.map((item, index) => (
          <div key={index} className={`flex items-center gap-4 text-white/95 font-montserrat drop-shadow-md relative group ${item.className || ''}`}>
            {/* Индикатор элемента */}
            <div className="absolute -left-4 top-1/2 w-1 h-px bg-purple-400/25 transform -translate-y-1/2" />
            <div className="absolute -left-4 top-1/2 w-0.5 h-0.5 bg-purple-400/40 rounded-full transform -translate-y-1/2 -translate-x-1" />
            {/* Глоу для иконки */}
            <div className="relative flex-shrink-0 hover-icon">
              {/* Чертежная рамка для иконки */}
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-cyan-400/20 hover-icon:border-cyan-400/40 transition-all duration-300" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-cyan-400/20 hover-icon:border-cyan-400/40 transition-all duration-300" />
              
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/10 to-purple-500/10 rounded-lg blur-sm group-hover:from-cyan-400/15 group-hover:to-purple-500/15 hover-icon:from-cyan-400/20 hover-icon:to-purple-500/20 hover-icon:blur-md transition-all duration-300" />
              <div className="relative p-2 rounded-lg bg-white/3 border border-white/5 hover-icon:bg-white/8 hover-icon:border-white/15 hover-icon:scale-110 transition-all duration-300 cursor-pointer">
                <img 
                  src={item.icon} 
                  alt=""
                  className={`opacity-70 hover-icon:opacity-100 transition-all duration-300 ${item.size || 'size-5'}`}
                  style={{ 
                    filter: 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(34, 211, 238, 0.2))',
                    transition: 'filter 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)) drop-shadow(0 0 16px rgba(168, 85, 247, 0.4))'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(34, 211, 238, 0.2))'
                  }}
                />
              </div>
              
              {/* Дополнительный глоу при hover */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400/0 to-purple-500/0 rounded-xl blur-lg opacity-0 hover-icon:from-cyan-400/15 hover-icon:to-purple-500/15 hover-icon:opacity-100 transition-all duration-300 pointer-events-none" />
            </div>
            
            <div className="flex-1 min-w-0">
              {item.isLink ? (
                <a
                  href={item.link || item.value}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm sm:text-base text-cyan-300 hover:text-cyan-100 hover:scale-105 transition-all duration-500 ease-out underline decoration-cyan-400/50 hover:decoration-cyan-400/80 underline-offset-2 font-medium inline-block"
                  style={{ 
                    textShadow: '0 0 8px rgba(34, 211, 238, 0.3)',
                    transition: 'text-shadow 0.5s ease-out, transform 0.5s ease-out, color 0.5s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 16px rgba(34, 211, 238, 0.6), 0 0 32px rgba(34, 211, 238, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(34, 211, 238, 0.3)'
                  }}
                >
                  {item.value}
                </a>
              ) : item.isCopyable ? (
                <button
                  onClick={(e) => copyToClipboard(e, item.value)}
                  className="text-sm sm:text-base text-purple-300 hover:text-purple-100 hover:scale-105 transition-all duration-500 ease-out cursor-pointer bg-transparent border-none p-0 font-mono font-medium"
                  style={{ 
                    textShadow: '0 0 8px rgba(168, 85, 247, 0.3)',
                    transition: 'text-shadow 0.5s ease-out, transform 0.5s ease-out, color 0.5s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 16px rgba(168, 85, 247, 0.6), 0 0 32px rgba(168, 85, 247, 0.3)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 8px rgba(168, 85, 247, 0.3)'
                  }}
                >
                  {item.truncate ? truncateAddress(item.value) : item.value}
                </button>
              ) : (
                <span 
                  className="text-sm sm:text-base font-medium hover:text-white hover:scale-105 transition-all duration-500 ease-out inline-block cursor-default" 
                  style={{ 
                    textShadow: '0 0 6px rgba(255, 255, 255, 0.2)',
                    transition: 'text-shadow 0.5s ease-out, transform 0.5s ease-out, color 0.5s ease-out'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = '0 0 12px rgba(255, 255, 255, 0.4), 0 0 24px rgba(255, 255, 255, 0.2)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = '0 0 6px rgba(255, 255, 255, 0.2)'
                  }}
                >
                  {item.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {/* Чертежная разметка */}
      {/* Угловые маркеры */}
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400/25 group-hover:border-cyan-400/40 transition-all duration-500" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-400/25 group-hover:border-cyan-400/40 transition-all duration-500" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-400/25 group-hover:border-cyan-400/40 transition-all duration-500" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/25 group-hover:border-cyan-400/40 transition-all duration-500" />
      
      {/* Размерные линии по периметру */}
      <div className="absolute top-0 left-6 w-px h-1.5 bg-cyan-400/30" />
      <div className="absolute top-0 right-6 w-px h-1.5 bg-cyan-400/30" />
      <div className="absolute top-0 left-1/3 w-px h-1 bg-cyan-400/20" />
      <div className="absolute top-0 right-1/3 w-px h-1 bg-cyan-400/20" />
      
      <div className="absolute bottom-0 left-6 w-px h-1.5 bg-cyan-400/30" />
      <div className="absolute bottom-0 right-6 w-px h-1.5 bg-cyan-400/30" />
      <div className="absolute bottom-0 left-1/3 w-px h-1 bg-cyan-400/20" />
      <div className="absolute bottom-0 right-1/3 w-px h-1 bg-cyan-400/20" />
      
      <div className="absolute left-0 top-6 h-px w-1.5 bg-cyan-400/30" />
      <div className="absolute left-0 bottom-6 h-px w-1.5 bg-cyan-400/30" />
      <div className="absolute left-0 top-1/3 h-px w-1 bg-cyan-400/20" />
      <div className="absolute left-0 bottom-1/3 h-px w-1 bg-cyan-400/20" />
      
      <div className="absolute right-0 top-6 h-px w-1.5 bg-cyan-400/30" />
      <div className="absolute right-0 bottom-6 h-px w-1.5 bg-cyan-400/30" />
      <div className="absolute right-0 top-1/3 h-px w-1 bg-cyan-400/20" />
      <div className="absolute right-0 bottom-1/3 h-px w-1 bg-cyan-400/20" />
      
      {/* Центральные точки */}
      <div className="absolute top-1 left-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-x-1/2 group-hover:bg-cyan-400/60 group-hover:w-1 group-hover:h-1 transition-all duration-300" />
      <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-x-1/2 group-hover:bg-cyan-400/60 group-hover:w-1 group-hover:h-1 transition-all duration-300" />
      <div className="absolute left-1 top-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-y-1/2 group-hover:bg-cyan-400/60 group-hover:w-1 group-hover:h-1 transition-all duration-300" />
      <div className="absolute right-1 top-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-y-1/2 group-hover:bg-cyan-400/60 group-hover:w-1 group-hover:h-1 transition-all duration-300" />
    </div>
  )
} 