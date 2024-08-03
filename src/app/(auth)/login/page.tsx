import { searchParams } from '@/types/authType';
import { LoginPage } from './_components/LoginPage';

export default function page({ searchParams }: searchParams) {
  return (
    <>
      <LoginPage searchParams={searchParams} />
    </>
  );
}
