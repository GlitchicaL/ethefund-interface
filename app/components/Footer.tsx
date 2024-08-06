import Image from "next/image";

// Assets
import twitter from "../assets/twitter.svg";
import discord from "../assets/discord.svg";
import youtube from "../assets/youtube.svg";

export default function Header() {
  return (
    <footer className='col-span-full min-h-[8dvh] pt-6'>
      <div className='flex justify-between mb-12'>
        <div className='min-w-32'>
          <p className='text-xl font-bold'>Governance</p>
          <ul>
            <li className='my-4'><a href="#">Proposals</a></li>
            <li className='my-4'><a href="#">Partcipate</a></li>
            <li className='my-4'><a href="#">Analytics</a></li>
          </ul>
        </div>

        <div className='min-w-32'>
          <p className='text-xl font-bold'>Developers</p>
          <ul>
            <li className='my-4'><a href="#">Documentation</a></li>
            <li className='my-4'><a href="#">GitHub</a></li>
            <li className='my-4'><a href="#">Security</a></li>
          </ul>
        </div>

        <div className='min-w-32'>
          <p className='text-xl font-bold'>Team</p>
          <ul>
            <li className='my-4'><a href="#">About</a></li>
            <li className='my-4'><a href="#">Blog</a></li>
            <li className='my-4'><a href="#">Careers</a></li>
          </ul>
        </div>
      </div>

      <div className='flex justify-between items-center mb-6'>
        <p>
          <small>Ethefund &copy; 2024</small>
        </p>

        <ul className='flex items-center'>
          <li className='ml-3'><a href="#"><Image src={twitter} alt="Twitter" /></a></li>
          <li className='ml-3'><a href="#"><Image src={discord} alt="Discord" /></a></li>
          <li className='ml-3'><a href="#"><Image src={youtube} alt="YouTube" /></a></li>
        </ul>
      </div>
    </footer>
  );
}
