import { PropsWithChildren } from 'react';
import { Text } from '@radix-ui/themes';

export default function Error({ children }: PropsWithChildren) {
  return (
    <Text color='red' className='pt-4 text-xs' as='p'>
      {children}
    </Text>
  );
}
