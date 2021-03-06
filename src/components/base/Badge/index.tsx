import { ReactElement } from 'react';
import * as S from './Style';

interface BadgeProps {
  discountRate: number;
}

const Badge = ({ discountRate }: BadgeProps): ReactElement => (
  <S.BadgeWrapper>
    {discountRate > 0 && (
      <S.BadgeInner>
        {discountRate}
        <S.Percentage>%</S.Percentage>
      </S.BadgeInner>
    )}
  </S.BadgeWrapper>
);

export default Badge;
