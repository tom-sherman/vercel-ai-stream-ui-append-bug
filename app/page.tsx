import { createStreamableUI } from "ai/rsc";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const streamable = createStreamableUI();

  setTimeout(() => {
    streamable.append(<p>Foo</p>);
    setTimeout(() => {
      streamable.append(<p>Bar</p>);
    }, 1000);
  }, 1000);

  return streamable.value;
}
