import FontRoot from "@/FontRoot";
import ReactLenis from "lenis/react";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

type AppRootProps = {
  children: ReactNode | ReactNode[];
};

type IContextProps = {
  mounted: boolean;
};

const AppContext = createContext<IContextProps | undefined>(undefined);

const AppRoot: React.FC<AppRootProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <ReactLenis root>
      <AppContext.Provider value={{ mounted }}>
        <FontRoot>{children}</FontRoot>
      </AppContext.Provider>
    </ReactLenis>
  );
};

export const useAppContext = () => {
  const props = useContext(AppContext);
  if (!props)
    throw new Error("useAppContext must be used within an AppProvider");
  return props;
};

export default AppRoot;
