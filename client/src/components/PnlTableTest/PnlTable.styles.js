import styled from 'styled-components';

const ContainerStyles = styled.div`
  .tableContainer {
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 100px;
  }
  table {
    width: 1200px;
  }
  tr {
    border:  1px solid;
    border-color: var(--gold-1);
  }
  th {
    font-size: 2rem;
    display: table-cell;
    border:  3px solid;
    border-color: var(--gold-1);
    background-color: var(--gold-1);
    color: black;
  }
  .currancyHead {
    border-radius: 10px 0px 0px 0px;
  }
  .removeHead {
    border-radius: 0px 10px 0px 0px;
  }
  td {
    border-left: solid ;
    border-right: solid;
    border-color: var(--gold-1);
    border:  1px solid;
    font-size: 2rem;
    border-radius: 5px;
  }
  .addCoinButton {
    font-family: 'RobotoMono Regular';
    font-weight: bolder;
    padding: 1rem 2rem;
    font-size: 2rem;
    color: var(--gold-2);
    outline: none;
    background-color: var(--deep-dark);
    border-radius: 10px;
    &:hover {
      cursor: pointer;
      background-color: var(--gold-1);
      color: black;
    }
  }

`;

export { ContainerStyles }