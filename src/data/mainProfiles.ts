import DiscordIcon from '../assets/discord-svgrepo-com.svg'
import XIcon from '../assets/x-social-media-black-icon.svg'
import SolanaIcon from '../assets/solana-svgrepo-com.svg'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
import photo3 from '../assets/photo3.jpg'

export const exampleProfiles = [{
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
      { icon: XIcon, value: "@33elveri", size: "size-5", link: "https://x.com/33elveri", isLink: true },
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