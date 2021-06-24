import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
} from "react";
import createPersistedState from "use-persisted-state";

const usePersistedState = createPersistedState("store");

export type StoreProviderProps = {
  children: ReactElement | ReactElement[];
};

export type StoreState = {
  birthday?: string;
};

export const initialStoreState: StoreState = {};

export const storeContext =
  // @ts-ignore
  createContext<[StoreState, Dispatch<SetStateAction<StoreState>>]>(undefined);

export function StoreProvider({ children }: StoreProviderProps) {
  return (
    <storeContext.Provider value={usePersistedState(initialStoreState)}>
      {children}
    </storeContext.Provider>
  );
}

export function useStore() {
  const [state, setState] = useContext(storeContext);
  return {
    setBirthday: (birthday?: string) => setState({ birthday }),
    state,
  };
}
