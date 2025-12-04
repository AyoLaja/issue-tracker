'use client';
import { Box, Button, TextArea, TextField } from '@radix-ui/themes';
import SimpleMDE from 'react-simplemde-editor';
import 'easymde/dist/easymde.min.css';

export default function NewIssue() {
  return (
    <div className='flex flex-col gap-4'>
      <Box maxWidth='500px'>
        <TextField.Root size='2' placeholder='Issue Title' />
      </Box>
      <Box maxWidth='500px'>
        {/* <TextArea size='2' placeholder='Issue Description' /> */}
        <SimpleMDE />
      </Box>
      <Box>
        <Button variant='classic' radius='large' color='orange'>
          Create Issue
        </Button>
      </Box>
    </div>
  );
}
