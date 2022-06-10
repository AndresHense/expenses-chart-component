import {
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Tooltip,
  Typography,
} from '@mui/material';
import { useState } from 'react';

function App() {
  return (
    <Box
      sx={{
        backgroundColor: '#f7e9dc',
        width: '100vw',
        height: '100vh',
        fontFamily: 'Roboto, sans-serif',
      }}
    >
      <Container
        sx={{
          display: 'flex',
          height: '100vh',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Stack spacing={3}>
          <Stack
            direction='row'
            justifyContent='space-between'
            borderRadius={3}
            sx={{
              background: '#ec755d',
              paddingY: '0.75rem',
              paddingX: '1.25rem',
              color: 'white',
            }}
          >
            <Box>
              <Typography variant='caption'>My balance</Typography>
              <Typography variant='h6' fontWeight='medium'>
                $921.48
              </Typography>
            </Box>
            <img src='images/logo.svg' style={{ width: '50px' }} />
          </Stack>

          <Stack
            spacing={3}
            sx={{
              background: '#fffcf7',
              paddingY: '1.25rem',
              paddingX: '1.75rem',
            }}
            borderRadius={3}
          >
            <Typography variant='h6'>Spending - Last 7 days</Typography>
            <Stack
              direction='row'
              sx={{ color: 'gray' }}
              spacing={2}
              alignItems='flex-end'
            >
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '35px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>mon</Typography>
              </Stack>
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '55px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>tue</Typography>
              </Stack>
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#76b5bc',
                      borderRadius: 1,
                      height: '85px',
                      width: '35px',
                      ':hover': { background: '#87c6cd' },
                    }}
                  />
                </Tooltip>
                <Typography>wed</Typography>
              </Stack>
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '65px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>thu</Typography>
              </Stack>
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '40px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>fri</Typography>
              </Stack>
              <Stack alignItems='center'>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '70px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>sat</Typography>
              </Stack>
              <Stack>
                <Tooltip title='$32.34' placement='top'>
                  <Box
                    sx={{
                      background: '#ec755d',
                      borderRadius: 1,
                      height: '55px',
                      width: '35px',
                      ':hover': { background: '#fd866f' },
                    }}
                  />
                </Tooltip>
                <Typography>sun</Typography>
              </Stack>
            </Stack>
            <Divider sx={{ borderColor: '#f7e9dc' }} />
            <Stack
              direction='row'
              justifyContent='space-between'
              alignItems='flex-end'
              sx={{ paddingBottom: '1.25rem' }}
            >
              <Box>
                <Typography variant='caption' color='gray'>
                  Total this month
                </Typography>
                <Typography variant='h4' fontWeight='medium'>
                  $478.33
                </Typography>
              </Box>
              <Box>
                <Typography fontWeight='medium' textAlign='end' width='100%'>
                  +2.4%
                </Typography>
                <Typography variant='caption' color='gray'>
                  from last month
                </Typography>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

export default App;
