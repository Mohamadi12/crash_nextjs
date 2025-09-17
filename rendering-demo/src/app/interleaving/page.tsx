import ClientComponentOne from "@/components/client-component-one"
import ServerComponentOne from "@/components/server-component-one"

const InterLeavingPage = () => {
  return (
    <>
        <h1>Interleaving page</h1>
        <ServerComponentOne />
        {/* <ClientComponentOne /> */}
    </>
  )
}

export default InterLeavingPage