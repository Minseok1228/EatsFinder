import { UserData } from '@/types/authType';
import { ProfilePage } from './_components/ProfilePage';
import { getUserInfo } from '@/utils/getUserInfo';
import { Loading } from '../../_components/Loading';
export default async function page() {
  const userData = await getUserInfo();
  if (!userData) return <Loading />;
  return (
    <>
      <ProfilePage userData={userData} />
    </>
  );
}
