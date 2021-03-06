import React, { ReactElement } from 'react';
import { IProductListProps, IProductItem } from '@types';
import { useSwipe } from '@hooks';
import { Box } from '@components/base';
import * as S from './Style';

const ImageViewSwiper = ({ storedValue }: IProductListProps): ReactElement => {
  const { swipeRef, isTransition, mouseStart, dragMove, dragEnd } = useSwipe(
    storedValue?.productList?.length,
    storedValue?.clickedSwipeIndex
  );

  return (
    <S.SwiperListWrapper>
      <S.SwiperList
        ref={swipeRef}
        isTransition={isTransition}
        onMouseDown={mouseStart}
        onTouchStart={mouseStart}
        onMouseMove={dragMove}
        onTouchMove={dragMove}
        onTouchEnd={dragEnd}
        onMouseUp={dragEnd}
        onMouseLeave={dragEnd}>
        {React.Children.toArray(
          storedValue?.productList?.map((item: IProductItem, index) => (
            <Box
              productItem={item}
              activedId={storedValue?.activedId}
              index={index}
            />
          ))
        )}
      </S.SwiperList>
    </S.SwiperListWrapper>
  );
};

export default ImageViewSwiper;
