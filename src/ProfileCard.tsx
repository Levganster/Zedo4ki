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
    <div className="relative p-6 rounded-2xl bg-black/40 border border-white/20 shadow-2xl max-w-xl w-full h-full mx-auto backdrop-blur-md flex flex-col">
      {/* Градиентная подсветка по краям - уменьшена интенсивность */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/3 via-transparent to-white/3 pointer-events-none" />
      
      {/* Верхняя строка: аватарка + имя + должность */}
      <div className="flex items-center gap-4 mb-4">
        <div className="relative flex-shrink-0">
          <img
            src={avatar}
            alt={name}
            className="w-14 h-14 rounded-full object-cover border-1 border-white/30 shadow-lg"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-white/10" />
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-sm sm:text-lg font-bold text-white font-unbounded truncate drop-shadow-sm">
            {name}
          </h3>
          <p className="text-white/80 text-xs sm:text-sm truncate font-montserrat drop-shadow-sm">
            {position}
          </p>
        </div>
      </div>

      {/* Описание */}
      <p className="text-white/90 text-sm sm:text-base mb-4 leading-relaxed font-montserrat drop-shadow-sm flex-grow">
        {description}
      </p>

      {/* Социальные сети */}
      <div className="space-y-2">
        {socialItems.map((item, index) => (
          <div key={index} className={`flex items-center gap-3 text-white/90 font-montserrat drop-shadow-sm ${item.className || ''}`}>
            <img 
              src={item.icon} 
              alt=""
              className={`flex-shrink-0 opacity-70 ${item.size || 'size-5'}`}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
            {item.isLink ? (
              <a
                href={item.link || item.value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base hover:text-white transition-colors duration-200 underline"
              >
                {item.value}
              </a>
            ) : item.isCopyable ? (
              <button
                onClick={(e) => copyToClipboard(e, item.value)}
                className="text-sm sm:text-base hover:text-white transition-colors duration-200 cursor-pointer bg-transparent border-none p-0 font-mono"
              >
                {item.truncate ? truncateAddress(item.value) : item.value}
              </button>
            ) : (
              <span className="text-sm sm:text-base">
                {item.value}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
} 