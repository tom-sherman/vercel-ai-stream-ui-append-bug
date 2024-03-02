import { createStreamableUI } from "ai/rsc";

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  const streamable = createStreamableUI();

  setTimeout(() => {
    streamable.append(<p>Foo</p>);
    setTimeout(() => {
      streamable.append(<p>Bar</p>);
      // Uncommenting the line below will fix the issue
      // streamable.done();
    }, 1000);
  }, 1000);

  return streamable.value;
}
