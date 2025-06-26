import bg from './assets/background.jpg'
import AnimatedTitle from './AnimatedTitle'
import ProfileCard from './ProfileCard'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import RotatingMushroom from './RotatingMushroom'
import { Toaster } from 'sonner'
import DiscordIcon from './assets/discord-svgrepo-com.svg'
import XIcon from './assets/x-social-media-black-icon.svg'
import SolanaIcon from './assets/solana-svgrepo-com.svg'

function App() {
  const exampleProfiles = [{
    avatar: photo1,
    name: "zfrmpro",
    position: "gribo4ki CEO",
    description: "Founded a worst sub-community in the world.",
    socialItems: [
      { icon: XIcon, value: "@zfrmpro", isLink: true, size: "size-5", link: "https://x.com/zfrmpro" },
      { icon: DiscordIcon, value: "@unluckiestly", size: "size-5" },
      { icon: SolanaIcon, value: "H54G7u3cRZVzhkCgxbkYqpmWAQgiBVMWiAmXYQt23gjb", isCopyable: true, truncate: true, size: "size-5" }
    ]
  },
  {
    avatar: photo2,
    name: "exxclave",
    position: "gribo4ki hater",
    description: "Hates gribo4ki more than anyone else.",
    socialItems: [
      { icon: XIcon, value: "хз не спросил ещё", size: "size-5" },
      { icon: DiscordIcon, value: "@codeineware", size: "size-5" }
    ]
  },
  {
    avatar: photo3,
    name: "aivazovski",
    position: "the best frontend developer in the world",
    description: "made this shit.",
    socialItems: [
      { icon: DiscordIcon, value: "@aivazovski", size: "size-5" },
      
    ]
  }
]

  return (
    <div className='w-full h-full md:h-screen' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className='flex flex-col items-center justify-center h-full gap-24 p-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-2 mt-12 md:mt-0'>
          <AnimatedTitle />
          <RotatingMushroom />
        </div>
        <div className='flex flex-col md:flex-row items-stretch justify-center gap-8 md:gap-8'>
          {exampleProfiles.map((profile, index) => (
            <ProfileCard key={index} {...profile} />
          ))}
        </div>
      </div>
      <Toaster 
        theme="dark" 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
          },
        }}
      />
    </div>
  )
}

export default App
