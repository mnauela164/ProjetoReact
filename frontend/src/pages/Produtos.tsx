import { useState } from "react";
 
type Usuario = {
  id: number;
  name: string;
  email: string;
};
 
function Produtos() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const { name, setName } = useState("");
 
  async function buscarUsuarios() {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const dados = await resposta.json();
    const resultado = dados.filter((usuario: Usuario) =>
      usuario.name.toLowerCase().includes(name.toLowerCase()),
    );
    setUsuarios(resultado);
  }
 
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-6 text-4xl font-bold text-blue-900">
        {" "}
        Pesquisar Usuários
      </h1>
      <div>
        <input
          type="text"
          placeholder="Digite parte de um nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mb-3 w-full rounded-lg border p-3"
        />
        <button
          className="rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          onClick={buscarUsuarios}
        >
          Buscar Usuários
        </button>
        <div className="space-y-4 mt-6">
        </div>
      </div>
    </main>
  );
}
 
export default Produtos;