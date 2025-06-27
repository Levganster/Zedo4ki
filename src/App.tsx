import bg from './assets/space-bg.jpg'
import AnimatedTitle from './AnimatedTitle'
import ProfileCard from './ProfileCard'
import RotatingMushroom from './RotatingMushroom'
import { Toaster } from 'sonner'
import { exampleProfiles } from './data/mainProfiles'

function App() {
  
  return (
    <div className='relative w-full h-full md:h-screen overflow-hidden'>
      <div 
        className='absolute inset-0 w-full h-full' 
        style={{ 
          backgroundImage: `url(${bg})`, 
          backgroundSize: 'cover', 
          backgroundPosition: 'center', 
          transform: 'rotate(180deg)',
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-black/40 pointer-events-none" />
      
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-black pointer-events-none" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/3 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/10 to-transparent" />
        <div className="absolute top-3/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
        
        <div className="absolute left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-400/10 to-transparent" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-purple-400/10 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-blue-400/10 to-transparent" />
        
        <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-cyan-400/20" />
        <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-cyan-400/20" />
        <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-cyan-400/20" />
        <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-cyan-400/20" />
        
        <div className="absolute top-2 left-1/2 w-1 h-1 bg-cyan-400/30 rounded-full transform -translate-x-1/2" />
        <div className="absolute bottom-2 left-1/2 w-1 h-1 bg-cyan-400/30 rounded-full transform -translate-x-1/2" />
        <div className="absolute left-2 top-1/2 w-1 h-1 bg-cyan-400/30 rounded-full transform -translate-y-1/2" />
        <div className="absolute right-2 top-1/2 w-1 h-1 bg-cyan-400/30 rounded-full transform -translate-y-1/2" />
      </div>
      
      <div className='relative z-10 flex flex-col items-center justify-center h-full gap-24 p-4'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-8 md:gap-8 mt-12 md:mt-0'>
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
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.25) 50%, rgba(0, 0, 0, 0.4) 100%)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(34, 211, 238, 0.15)',
            color: 'white',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4), 0 0 20px rgba(34, 211, 238, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
            borderRadius: '24px',
            position: 'relative',
            overflow: 'hidden',
            padding: '16px 20px',
            fontSize: '14px',
            fontFamily: 'Montserrat, sans-serif',
            fontWeight: '500',
            textShadow: '0 0 8px rgba(255, 255, 255, 0.2)',
          },
          className: 'toast-futuristic',
        }}
      />
    </div>
  )
}

export default App
