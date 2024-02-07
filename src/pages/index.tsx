/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

export interface StyledEngineProviderProps {
  children?: React.ReactNode;
}
function App() {
  let cache;
  if (typeof document === "object") {
    cache = createCache({ key: "css", prepend: true });
  }
  return (
    <div>
      <CacheProvider value={cache}></CacheProvider>
    </div>
  );
}

export default App;
