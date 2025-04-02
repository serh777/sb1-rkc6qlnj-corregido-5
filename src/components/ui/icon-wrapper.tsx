'use client';

import * as React from 'react';
import { Icons, IconKey } from './icons';

interface IconWrapperProps {
  icon: IconKey;
  className?: string;
}

export function IconWrapper({ icon, className }: IconWrapperProps) {
  const Icon = Icons[icon];
  if (!Icon) return null;
  return <Icon className={className} />;
}