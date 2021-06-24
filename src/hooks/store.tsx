import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useState,
} from "react";

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
    <storeContext.Provider value={useState(initialStoreState)}>
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
