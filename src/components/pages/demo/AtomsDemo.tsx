import { useState } from "react";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  Paragraph,
  Button,
  Input,
} from "../../atoms";

export default function AtomsDemo() {
  const [input, setInput] = useState("");
  return (
    <div className="container h-screen flex flex-row mx-auto justify-around">
      <div className="flex flex-col p-5 justify-around text-center ">
        <Heading1>Heading 1</Heading1>
        <Heading2>Heading 2</Heading2>
        <Heading3>Heading 3</Heading3>
        <Heading4>Heading 4</Heading4>
        <Heading5>Heading 5</Heading5>
        <Heading6>Heading 6</Heading6>
        <Paragraph>Paragraph</Paragraph>
      </div>
      <div className="flex flex-col p-5 justify-around text-center ">
        <Button>Primary Btn</Button>
        <Button secondary>Secondary Btn</Button>
        <Input
          type="text"
          value={input}
          placeholder="Normal Input"
          onChange={(event) => setInput(event.target.value)}
        />
        <Input
          type="text"
          value={input}
          placeholder="Floating Input"
          onChange={(event) => setInput(event.target.value)}
          floatingLabel
        />
      </div>
    </div>
  );
}
