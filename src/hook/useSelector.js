import useStore from "./useStore";

const useSelector = (state) => {
  const store = useStore();
  return state(store.getState());
};

export default useSelector;
