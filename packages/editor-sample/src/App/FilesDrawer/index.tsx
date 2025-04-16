import * as React from 'react';
import { Box, Button, Divider, Drawer, Link, Stack, Typography } from '@mui/material';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import { useFilesDrawerOpen } from '../../documents/editor/EditorContext';

import SidebarButton from './SidebarButton';
import logo from './waypoint.svg';

export const FILES_DRAWER_WIDTH = 240;

function renderRow(props: ListChildComponentProps) {
  const { index, style } = props;

  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText primary={`Item ${index + 1}`} />
      </ListItemButton>
    </ListItem>
  );
}


export default function FilesDrawer() {
  const filesDrawerOpen = useFilesDrawerOpen();

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={filesDrawerOpen}
      sx={{ width: filesDrawerOpen ? FILES_DRAWER_WIDTH : 0 }}
    >
      <Stack spacing={3} py={1} px={2} width={FILES_DRAWER_WIDTH} justifyContent="space-between" height="100%">
        <Stack spacing={2} sx={{ '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } }}>
          <Typography variant="h6" component="h1" sx={{ p: 0.75 }}>
            E-Mail Template Builder
          </Typography>

          <Stack alignItems="flex-start">
            <SidebarButton href="#">Empty</SidebarButton>
            <SidebarButton href="#sample/welcome">Welcome email</SidebarButton>
            <SidebarButton href="#sample/one-time-password">One-time passcode (OTP)</SidebarButton>
            <SidebarButton href="#sample/reset-password">Reset password</SidebarButton>
            <SidebarButton href="#sample/order-ecomerce">E-commerce receipt</SidebarButton>
            <SidebarButton href="#sample/subscription-receipt">Subscription receipt</SidebarButton>
            <SidebarButton href="#sample/reservation-reminder">Reservation reminder</SidebarButton>
            <SidebarButton href="#sample/post-metrics-report">Post metrics</SidebarButton>
            <SidebarButton href="#sample/respond-to-message">Respond to inquiry</SidebarButton>
          </Stack>

          <Divider />
          <Stack  spacing={1}>
            <Box sx={{ width: '100%', height: 200, maxWidth: 240, bgcolor: 'background.paper' }}>
              <FixedSizeList
                height={200}
                width={220}
                itemSize={46}
                itemCount={200}
                overscanCount={5}
              >
                {renderRow}
              </FixedSizeList>
            </Box>
            <Button
              variant="contained"
              color="primary"
              sx={{ justifyContent: 'center', textAlign: 'center' }}
              href="https://usewaypoint.com?utm_source=emailbuilderjs"
              target="_blank">
              Load Template
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ justifyContent: 'center' }}
              href="https://usewaypoint.com?utm_source=emailbuilderjs"
              target="_blank">
              Save Template
            </Button>
          </Stack>
          <Divider />
          
        </Stack>
        <Stack spacing={2} px={0.75} py={3}>
          <Box>
            <Typography variant="overline" gutterBottom>
              Instructions
            </Typography>
            <Typography variant="body2" color="text.secondary" paragraph>
              <b>1.</b> Load a template into the editor<br />
              <b>2.</b> Make any updates to the content<br />
              <b>3.</b> Save template<br />
              <b>4.</b> View the template HTML Output and copy HTML into app<br />
            </Typography>
          </Box>
         
        </Stack>
      </Stack>
    </Drawer>
  );
}
