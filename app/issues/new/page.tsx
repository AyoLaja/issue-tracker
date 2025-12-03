import { Box, Button, TextArea, TextField } from '@radix-ui/themes';

export default function NewIssue() {
  return (
    <div className='flex flex-col gap-4'>
      <Box maxWidth='400px'>
        <TextField.Root size='2' placeholder='Issue Title' />
      </Box>
      <Box maxWidth='400px'>
        <TextArea size='2' placeholder='Issue Description' />
      </Box>
      <Box>
        <Button variant='classic' radius='large' color='orange'>
          Create Issue
        </Button>
      </Box>
    </div>
  );
}
