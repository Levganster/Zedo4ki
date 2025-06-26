import bg from './assets/background.jpg'
import AnimatedTitle from './AnimatedTitle'
import ProfileCard from './ProfileCard'
import photo1 from './assets/photo1.jpg'
import photo2 from './assets/photo2.jpg'
import photo3 from './assets/photo3.jpg'
import RotatingMushroom from './RotatingMushroom'

function App() {
  const exampleProfiles = [{
    avatar: photo1,
    name: "zfrmpro",
    position: "gribo4ki CEO",
    description: "Founded a worst sub-community in the world.",
    socialLinks: {
      twitter: "zfrmpro",
      discord: "unluckiestly"
    }
  },
  {
    avatar: photo2,
    name: "exxclave",
    position: "gribo4ki hater",
    description: "Hates gribo4ki more than anyone else.",
    socialLinks: {
      twitter: "хз не спросил ещё",
      discord: "codeineware"
    }
  },
  {
    avatar: photo3,
    name: "aivazovski",
    position: "the best frontend developer in the world",
    description: "made this shit.",
    socialLinks: {
      twitter: "не",
      discord: "aivazovski"
    }
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
    </div>
  )
}

export default App
