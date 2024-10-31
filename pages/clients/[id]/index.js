import { useRouter } from "next/router"

function ClientProjectsPage() {

  const router = useRouter();

  function loadProjectHandler() {
    //load data...
    // we can write it like this.. 
    // router.push("/clients/max/projecta")
    // ...or
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { 
        id: "max",
        clientprojectid: "projecta"}
    })

  }
  return (
    <div>
      <h1>the Projects of a given client</h1>
      <button onClick={loadProjectHandler}>Load Project A:</button>
    </div>
  )
}

export default ClientProjectsPage