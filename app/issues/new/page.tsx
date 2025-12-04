'use client';
import { Box, Button, Callout, TextArea, TextField } from '@radix-ui/themes';
import { useForm, Controller } from 'react-hook-form';
import { FiInfo } from 'react-icons/fi';
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
    setError,
    formState: { errors },
  } = useForm<NewIssueForm>({
    mode: 'onChange',
  });

  const onSubmit = async (data: NewIssueForm) => {
    try {
      await axios.post('/api/issues', data);
      router.push('/issues');
    } catch (error: any) {
      if (error.response.status === 400) {
        setError('title', { message: 'Title is required' });
        setError('description', { message: 'Description is required' });
      }
      console.error(error);
    }
  };

  return (
    <div className='flex flex-col gap-4'>
      {errors.title && (
        <Callout.Root color='red'>
          <Callout.Icon>
            <FiInfo />
          </Callout.Icon>
          <Callout.Text>{errors.title?.message}</Callout.Text>
        </Callout.Root>
      )}
      {errors.description && (
        <Callout.Root color='red'>
          <Callout.Icon>
            <FiInfo />
          </Callout.Icon>
          <Callout.Text>{errors.description?.message}</Callout.Text>
        </Callout.Root>
      )}
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
                style={{ fontSize: '12px' }}
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
    </div>
  );
}
