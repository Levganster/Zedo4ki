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
    <div className="relative p-6 rounded-2xl bg-black/20 border border-cyan-400/20 backdrop-blur-xl max-w-sm w-full mx-auto transition-all duration-300 hover:border-cyan-400/40 hover:bg-black/30 group">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/5 via-purple-500/3 to-blue-500/5 pointer-events-none group-hover:from-cyan-400/8 group-hover:via-purple-500/5 group-hover:to-blue-500/8 transition-all duration-300" />
      
      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300" />
      <div className="absolute top-3 right-3 w-3 h-3 border-t border-r border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300" />
      <div className="absolute bottom-3 left-3 w-3 h-3 border-b border-l border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-cyan-400/30 group-hover:border-cyan-400/50 transition-all duration-300" />
      
      <div className="absolute top-1 left-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-x-1/2 group-hover:bg-cyan-400/60 transition-all duration-300" />
      <div className="absolute bottom-1 left-1/2 w-0.5 h-0.5 bg-cyan-400/40 rounded-full transform -translate-x-1/2 group-hover:bg-cyan-400/60 transition-all duration-300" />
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          <div className="relative">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border border-cyan-400/20"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/10 to-purple-500/10 pointer-events-none" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-white font-unbounded truncate" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.3)' }}>
              {name}
            </h3>
            <p className="text-cyan-300/80 text-sm truncate font-montserrat">
              {position}
            </p>
          </div>
        </div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent mb-4" />

        <p className="text-white/90 text-sm leading-relaxed font-montserrat flex-grow mb-4">
          {description}
        </p>

        {socialItems.length > 0 && (
          <div className="space-y-2 mt-auto">
            {socialItems.map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-white/90 font-montserrat text-sm">
                <div className="relative flex-shrink-0">
                  <div className="p-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <img 
                      src={item.icon} 
                      alt=""
                      className={`opacity-70 hover:opacity-100 transition-opacity duration-300 ${item.size || 'size-4'}`}
                      style={{ 
                        filter: 'brightness(0) invert(1) drop-shadow(0 0 2px rgba(34, 211, 238, 0.2))'
                      }}
                    />
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  {item.isLink ? (
                    <a
                      href={item.link || item.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-300 hover:text-cyan-100 transition-colors duration-300 underline decoration-cyan-400/50 hover:decoration-cyan-400/80 underline-offset-2"
                    >
                      {item.value}
                    </a>
                  ) : item.isCopyable ? (
                    <button
                      onClick={(e) => copyToClipboard(e, item.value)}
                      className="text-purple-300 hover:text-purple-100 transition-colors duration-300 cursor-pointer bg-transparent border-none p-0 font-mono text-left"
                    >
                      {item.truncate ? truncateAddress(item.value) : item.value}
                    </button>
                  ) : (
                    <span className="hover:text-white transition-colors duration-300">
                      {item.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
} 