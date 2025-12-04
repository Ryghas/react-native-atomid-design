import {
  BottomSheetBackdrop as Backdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';

export const BottomSheetBackdrop = (props: BottomSheetBackdropProps) => {
  return (
    <Backdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.6}
    />
  );
};

export const UndismissableBottomSheetBackdrop = (
  props: BottomSheetBackdropProps,
) => {
  return (
    <Backdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      opacity={0.6}
      pressBehavior={'none'}
    />
  );
};
