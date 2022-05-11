import styled from 'styled-components';

const ContainerStyles = styled.div`
  .tableContainer {
  justify-content: center;
  text-align: center;
  display: flex;
  }
  table {
    /* border:  1px solid yellow; */
    width: 997.99px;
    /* border-color: var(--gold-1);
    /* border-collapse: collapse; */
    /* border-radius: 5px 5px 0px 0px; */
  }
  tr {
    line-height: 50px;
    border:  1px solid;
    border-color: var(--gold-1);
  }
  th {
    font-size: 15px;
    display: table-cell;
    border:  3px solid;
    border-color: var(--gold-1);
    background-color: var(--gold-1);
    color: black;
  }
  .currancyHead {
    border-radius: 35px 0px 0px 0px;
  }
  .removeHead {
    border-radius: 0px 35px 0px 0px;
  }
  td {
    border-left: solid ;
    border-right: solid;
    border-color: var(--gold-1);
    border:  1px solid;
  }
  .addCoinButton {
    font-family: 'RobotoMono Regular';
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--gold-2);
    outline: none;
    background-color: black;
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: var(--gold-1);
      color: black;
    }
  }
`;

export { ContainerStyles }