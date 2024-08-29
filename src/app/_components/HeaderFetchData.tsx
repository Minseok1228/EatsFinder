import { Header } from '@/components/organisms';
import { getServerUserInfo } from '@/utils/getServerUserInfo';

export const HeaderFetchData = async () => {
  const userInfo = await getServerUserInfo();
  return <Header userInfo={userInfo} />;
};
