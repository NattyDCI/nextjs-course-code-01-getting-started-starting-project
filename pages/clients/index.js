import Link from "next/link";

function ClientsPage() {

    const clients = [
        { id: "max", name: "maximilian" },
        { id: "nat", name: "nathalia" },
    ];

  return (
    <>
      <div>ClientsPage</div>
      <ul>
        {clients.map((client) => (
            <li key={client.id}>
                <Link href={`clients/${client.name}`}>{client.name}</Link>
            </li>
        ))}
      </ul>
    </>
  );
}

export default ClientsPage;
