interface Params {
  id: string;
}

interface ViewProductProps {
  params: Params;
}

export default function ViewProduct({ params }: ViewProductProps) {
  const { id } = params;

  return (
    <div>
      <h1>Produto ID: {id}</h1>
    </div>
  );
}
