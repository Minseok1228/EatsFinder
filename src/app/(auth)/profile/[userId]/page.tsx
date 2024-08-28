import { UserData } from '@/types/authType';
import { ProfilePage } from './_components/ProfilePage';
import { getServerUserInfo } from '@/utils/getServerUserInfo';
import { Loading } from '../../_components/Loading';
export default async function page() {
  const userData = await getServerUserInfo();
  if (!userData) return <Loading />;
  return (
    <>
      <ProfilePage userData={userData} />
    </>
  );
}
