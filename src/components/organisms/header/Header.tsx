import { NavLink, ProfileImage } from '@/components/atoms';
import { LogoImgSVG } from '@/components/svg/LogoSVG';

export const Header = () => {
  return (
    <header className='flex h-20 items-center justify-around px-9'>
      <div>
        <LogoImgSVG />
      </div>
      <div>
        <ul className='flex gap-[60px]'>
          <li>
            <NavLink className='w-[90px]' href='/' active={true}>
              홈
            </NavLink>
          </li>
          <li>
            <NavLink className='w-[90px]' href='/'>
              탐색피드
            </NavLink>
          </li>
          <li>
            <NavLink className='w-[90px]' href='/'>
              MyEats
            </NavLink>
          </li>
          <li>
            <NavLink className='w-[90px]' href='/'>
              맛집정보
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <ProfileImage size={50} />
      </div>
    </header>
  );
};
