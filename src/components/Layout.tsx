import { Link } from 'react-router-dom';
import styled, { CSSProperties } from 'styled-components';

export const Column = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  all: unset;

  display: flex;
  flex-direction: row;
`;

export const ColumnCenter = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;
export const RowCenter = styled.div`
  all: unset;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ColumnAround = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;
`;

export const ColumnBetween = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;

  justify-content: space-between;
  align-items: center;
`;

export const RowBetween = styled.div`
  all: unset;

  display: flex;
  flex-direction: row;

  justify-content: space-between;
  align-items: center;
`;

export const RowAround = styled.div`
  all: unset;

  display: flex;
  flex-direction: row;

  justify-content: space-around;
  align-items: center;
`;

export const itemMargin: CSSProperties = {
  marginBottom: '1rem',
};

export const TextAlignCenter = styled.div`
  text-align: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
