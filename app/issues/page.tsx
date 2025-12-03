import { Button } from '@radix-ui/themes';
import Link from 'next/link';

export default function Issues() {
  return (
    <div className='flex justify-center items-center h-full'>
      <Link href='/issues/new'>
        <Button>New Issue</Button>
      </Link>
    </div>
  );
}
