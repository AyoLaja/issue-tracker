'use client';
import { Box, Button, TextArea, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';
import axios from 'axios';
import { useRouter } from 'next/navigation';

interface NewIssueForm {
  title: string;
  description: string;
}

export default function NewIssue() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    control,
    formState: { errors },
  } = useForm<NewIssueForm>({
    mode: 'onChange',
  });

  const onSubmit = async (data: NewIssueForm) => {
    console.log(data);
    await axios.post('/api/issues', data);
    router.push('/issues');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-4'>
      <Box maxWidth='500px'>
        <TextField.Root
          {...register('title')}
          size='2'
          placeholder='Issue Title'
        />
      </Box>
      <Box maxWidth='500px'>
        {/* <TextArea size='2' placeholder='Issue Description' /> */}
        <Controller
          control={control}
          name='description'
          render={({ field }) => (
            <SimpleMDE
              onChange={field.onChange}
              placeholder='Issue Description'
            />
          )}
        />
        {/* <SimpleMDE onChange={(value) => setValue('description', value)} /> */}
      </Box>
      <Box>
        <Button variant='classic' radius='large' color='orange'>
          Create Issue
        </Button>
      </Box>
    </form>
  );
}
