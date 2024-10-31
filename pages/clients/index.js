import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "maximilian" },
    { id: "nat", name: "nathalia" },
  ];
  // you can write it like this... or you can write it like the code bellow in the return statement.
  // <Link href={`clients/${client.name}`}>{client.name}</Link>

  return (
    <>
      <div>ClientsPage</div>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: {
                  // id, because thats our dinamic segment identifier
                  id: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ClientsPage;
