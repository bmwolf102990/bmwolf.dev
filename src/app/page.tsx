import { Heading } from "@/components/Heading/Heading";

export default function Home() {
  return (
    <>
      <Heading
        level={6}
        content='Hi, my name is'
        sx={{fontWeight: 'lighter'}}
      />
      <Heading
        level={1}
        content='Bryan Wolf'
        sx={{fontWeight: 'bold'}}
      />
      <Heading
        level={6}
        content='I love all things tech'
        sx={{fontWeight: 'lighter'}}
      />
    </>
  )
}
