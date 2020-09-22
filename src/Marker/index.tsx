import React, { useImperativeHandle } from 'react';
import { OverlayProps } from '../common/map';
import useMarker from './useMarker';

export interface MarkerProps extends OverlayProps, AMap.MarkerEvents, AMap.MarkerOptions {
}

export default React.forwardRef<MarkerProps & { marker?: AMap.Marker}, MarkerProps>((props, ref) => {
  const { marker } = useMarker(props);
  useImperativeHandle(ref, () => ({ ...props, marker }));
  return null;
});