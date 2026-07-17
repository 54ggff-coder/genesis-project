type Props = {
  title: string;
  description?: string;
};

export default function PageHeader({
  title,
  description,
}: Props) {
  return (
    <div className="mb-10">

      <h1 className="text-5xl font-bold">
        {title}
      </h1>

      {description && (
        <p className="mt-4 text-gray-500">
          {description}
        </p>
      )}

    </div>
  );
}