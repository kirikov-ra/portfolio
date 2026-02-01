import { LiquidChrome } from "../shared/ui/LiquidChrome/LiquidChrome";
import TerminalWindow from "./widgets/terminal/ui/TerminalWindow"

const UI = {
    mainContent: "w-full h-screen relative z-2 p-10 flex justify-center items-center",
    backgound: "fixed left-0 top-0 w-full h-full z-1"
} as const;

function App() {

  return (
    <>
      <main className={UI.mainContent}>
        <TerminalWindow/>
      </main>
      <div className={UI.backgound}>
        <LiquidChrome
          baseColor={[0, 0.1, 0]}
          speed={0.2}
          amplitude={0.3}
          interactive={false}
        />
      </div>
    </>
  )
}

export default App;