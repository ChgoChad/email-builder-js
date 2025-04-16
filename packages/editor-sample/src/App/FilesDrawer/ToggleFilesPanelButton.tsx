import React from 'react';

import { FirstPageOutlined, MenuOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';

import { toggleFilesDrawerOpen as toggleFilesDrawerOpen, useFilesDrawerOpen } from '../../documents/editor/EditorContext';

function useIcon() {
  const filesDrawerOpen = useFilesDrawerOpen();
  if (filesDrawerOpen) {
    return <FirstPageOutlined fontSize="small" />;
  }
  return <MenuOutlined fontSize="small" />;
}

export default function ToggleFilesPanelButton() {
  const icon = useIcon();
  return <IconButton onClick={toggleFilesDrawerOpen}>{icon}</IconButton>;
}
