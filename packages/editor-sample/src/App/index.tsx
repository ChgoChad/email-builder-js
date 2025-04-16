import React from 'react';

import { Stack, useTheme } from '@mui/material';

import { useInspectorDrawerOpen, useFilesDrawerOpen } from '../documents/editor/EditorContext';

import InspectorDrawer, { INSPECTOR_DRAWER_WIDTH } from './InspectorDrawer';
import FilesDrawer, { FILES_DRAWER_WIDTH } from './FilesDrawer';
import TemplatePanel from './TemplatePanel';

function useDrawerTransition(cssProperty: 'margin-left' | 'margin-right', open: boolean) {
  const { transitions } = useTheme();
  return transitions.create(cssProperty, {
    easing: !open ? transitions.easing.sharp : transitions.easing.easeOut,
    duration: !open ? transitions.duration.leavingScreen : transitions.duration.enteringScreen,
  });
}

export default function App() {
  const inspectorDrawerOpen = useInspectorDrawerOpen();
  const filesDrawerOpen = useFilesDrawerOpen();

  const marginLeftTransition = useDrawerTransition('margin-left', filesDrawerOpen);
  const marginRightTransition = useDrawerTransition('margin-right', inspectorDrawerOpen);

  return (
    <>
      <InspectorDrawer />
      <FilesDrawer />

      <Stack
        sx={{
          marginRight: inspectorDrawerOpen ? `${INSPECTOR_DRAWER_WIDTH}px` : 0,
          marginLeft: filesDrawerOpen ? `${FILES_DRAWER_WIDTH}px` : 0,
          transition: [marginLeftTransition, marginRightTransition].join(', '),
        }}
      >
        <TemplatePanel />
      </Stack>
    </>
  );
}
