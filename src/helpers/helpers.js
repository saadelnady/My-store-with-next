import { END } from "redux-saga";

export const endSaga = async (store) => {
  store.dispatch(END);
  await store.sagaTask.toPromise();
  return;
};

export const generateSquares = () => {
  const sizes = ["size-small", "size-medium", "size-large"];
  const squares = [];
  for (let i = 0; i < 6; i++) {
    const sizeClass = sizes[Math.floor(Math.random() * sizes.length)];
    squares.push(<div key={i} className={`square ${sizeClass}`}></div>);
  }
  return squares;
};
