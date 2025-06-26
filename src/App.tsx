import bg from './assets/space-bg.jpg'
import AnimatedTitle from './AnimatedTitle'
import ProfileCard from './ProfileCard'
import RotatingMushroom from './RotatingMushroom'
import { Toaster } from 'sonner'
import { exampleProfiles } from './data/mainProfiles'

function App() {
  
  return (
    <div className='relative w-full h-full md:h-screen'>
      <div 
        className='absolute inset-0 w-full h-full' 
        style={{ 
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          transform: 'rotate(180deg)',
        }}
      />
      <div className='relative z-10 flex flex-col items-center justify-center h-full gap-24 p-4'>
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
