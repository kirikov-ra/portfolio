import { LiquidChrome } from "../shared/ui/LiquidChrome/LiquidChrome";
import TerminalWindow from "./widgets/terminal/ui/TerminalWindow"


function App() {

  return (
    <main className="w-full h-screen relative z-2">
      <div className="w-full h-full relative z-2 flex justify-center items-center">
        <TerminalWindow/>
      </div>
      <div className="fixed left-0 top-0 w-full h-full z-1">
        <LiquidChrome
          baseColor={[0, 0.1, 0]}
          speed={0.2}
          amplitude={0.3}
          interactive={false}
        />
      </div>
    </main>
  )
}

export default App;