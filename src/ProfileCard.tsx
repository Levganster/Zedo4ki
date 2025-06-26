import DiscordIcon from './assets/discord-svgrepo-com.svg'
import XIcon from './assets/x-social-media-black-icon.svg'

interface ProfileCardProps {
  avatar: string
  name: string
  position: string
  description: string
  socialLinks: {
    twitter?: string
    discord?: string
  }
}

export default function ProfileCard({ 
  avatar, 
  name, 
  position, 
  description, 
  socialLinks 
}: ProfileCardProps) {
  const socialData = {
    twitter: { icon: XIcon, link: "https://x.com/" },
    discord: { icon: DiscordIcon, link: "https://discord.gg/" }
  }

  return (
    <div className="relative p-6 rounded-2xl bg-black/40 border border-white/20 shadow-2xl max-w-xl w-full h-full mx-auto backdrop-blur-sm flex flex-col">
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
        {Object.entries(socialLinks).map(([platform, url]) => {
          if (!url) return null
          
          const social = socialData[platform as keyof typeof socialData]
          
          if (platform === 'discord') {
            return (
              <div
                key={platform}
                className="flex items-center gap-3 text-white/90 font-montserrat drop-shadow-sm"
                title={platform}
              >
                <img 
                  src={social.icon} 
                  alt={platform}
                  className="flex-shrink-0 opacity-70 w-5 h-5"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
                <span className="text-sm sm:text-base">
                  @{socialLinks[platform as keyof typeof socialLinks]}
                </span>
              </div>
            )
          }
          
          return (
            <a
              key={platform}
              href={`${social.link}${url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-white/90 hover:text-white transition-colors duration-200 font-montserrat drop-shadow-sm"
              title={platform}
            >
              <img 
                src={social.icon} 
                alt={social.link}
                className={`flex-shrink-0 opacity-70 hover:opacity-90 transition-opacity duration-200 ${
                  platform === 'twitter' ? 'w-5 h-4' : 'w-5 h-5'
                }`}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
                <span className="text-sm sm:text-base">
                  @<span className="underline">{socialLinks[platform as keyof typeof socialLinks]}</span>
               </span>
            </a>
          )
        })}
      </div>
    </div>
  )
} 