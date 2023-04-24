import Image from "next/image";
import Link from "next/link"

export default function Home() {
  return (
    <div className="bg-black w-screen h-screen flex flex-col justify-center items-center">
      <p className="text-white text-2xl"> {"Who's"} watching? </p>
      <div className="flex flex-row gap-3 mt-6">
        {
          USERS.map((user, index) => (
            <div key={user.name} className="flex flex-col items-center justify-center">
              <Link href={user.link} className="w-12 h-12 rounded bg-white">
                <Image className="rounded" src={user.avatar} width={128} height={128} alt="" />
              </Link>
              <p className="text-gray-400  text-xs"> {user.name} </p>
            </div>
          ))}
      </div>
    </div>
  )
}


const USERS = [
  {
    name: 'Ella',
    link: '/browse',
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=John&hair=short01,short02,short03,short04,short05'
  },
  {
    name: 'Kids',
    link: '/',
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=Jane&hair=long01,long02,long03,long04,long05'
  },
  {
    name: 'Add Profile',
    link: '/',
    avatar: 'https://api.dicebear.com/6.x/pixel-art/jpg?seed=Jane&hair=long01,long02,long03,long04,long05'
  }
];
