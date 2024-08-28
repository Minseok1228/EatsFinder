import { Header } from '@/components/organisms';
import { getUserInfo } from '@/utils/getUserInfo';

export const HeaderFetchData = async () => {
  const userInfo = await getUserInfo();
  return <Header userInfo={userInfo} />;
};
