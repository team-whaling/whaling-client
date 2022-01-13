import styled, { CSSProperties } from 'styled-components';

export const Column = styled.div`
  all: unset;

  display: flex;
  flex-direction: column;
  justify-content: center;
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

export const RowAround = styled.div`
  all: unset;

  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: space-around;
`;

export const itemMargin: CSSProperties = {
  marginBottom: '1rem',
};

export const TextAlignCenter = styled.div`
  text-align: center;
`;
